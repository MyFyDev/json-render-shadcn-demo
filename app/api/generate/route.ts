import { streamText, type GatewayModelId } from "ai";
import { catalog } from "@/lib/catalog";

export const maxDuration = 30;

/** Works on AI Gateway free tier; override with AI_GATEWAY_MODEL if needed. */
const DEFAULT_MODEL: GatewayModelId = "openai/gpt-4o-mini";

/**
 * Read a non-empty prompt from a generate request body.
 *
 * @param body - Parsed JSON body, expected to be `{ prompt: string }`
 * @returns The trimmed prompt, or an empty string when the body is invalid
 *
 * @example
 * readPrompt({ prompt: "  A settings form  " }); // "A settings form"
 */
function readPrompt(body: unknown): string {
  if (
    typeof body !== "object" ||
    body === null ||
    !("prompt" in body) ||
    typeof body.prompt !== "string"
  ) {
    return "";
  }

  return body.prompt.trim();
}

/**
 * Strip ANSI codes and map common gateway errors to actionable copy.
 *
 * @param error - Error from the AI SDK or gateway
 * @returns A short message safe to show in the demo UI
 */
function formatErrorMessage(error: unknown): string {
  const raw =
    error instanceof Error && error.message
      ? error.message
      : "Failed to generate UI";
  const message = raw.replace(/\u001b\[[0-9;]*m/g, "").trim();

  if (message.includes("Free tier users do not have access to this model")) {
    return (
      "This model is not available on the AI Gateway free tier. " +
      "Set AI_GATEWAY_MODEL=openai/gpt-4o-mini in .env.local (or add paid credits), " +
      "then restart the dev server."
    );
  }

  return message || "Failed to generate UI";
}

function toErrorResponse(error: unknown): Response {
  const message = formatErrorMessage(error);
  const statusCode =
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    typeof error.statusCode === "number" &&
    error.statusCode >= 400 &&
    error.statusCode < 600
      ? error.statusCode
      : 502;

  return Response.json({ error: message }, { status: statusCode });
}

/**
 * Stream a json-render spec for the submitted prompt.
 *
 * @param req - POST request whose JSON body is `{ prompt: string }`
 * @returns A text stream of SpecStream JSONL, or a JSON error response
 *
 * @example
 * await fetch("/api/generate", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify({ prompt: "A card with a heading and a button" }),
 * });
 */
export async function POST(req: Request): Promise<Response> {
  try {
    const body: unknown = await req.json();
    const prompt = readPrompt(body);

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Gateway auth fails after the stream starts, which the client treats as
    // an empty success. Reject first so the page can show the error.
    if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
      return Response.json(
        {
          error:
            "Set AI_GATEWAY_API_KEY in .env.local to generate UI. See .env.example.",
        },
        { status: 401 },
      );
    }

    const model = (process.env.AI_GATEWAY_MODEL ??
      DEFAULT_MODEL) as GatewayModelId;

    const result = streamText({
      model,
      system: catalog.prompt({
        customRules: [
          "Button: prefer variant primary, secondary, danger, outline, ghost, link, or destructive; set size when not default.",
          "Card: use size sm for compact layouts; optional footer for secondary actions or metadata.",
        ],
      }),
      prompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json(
        { error: "Request body must be JSON" },
        { status: 400 },
      );
    }

    console.error("Failed to generate UI", error);
    return toErrorResponse(error);
  }
}
