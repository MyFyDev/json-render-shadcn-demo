"use client";

import { FormEvent, useState } from "react";
import {
  ActionProvider,
  Renderer,
  StateProvider,
  useUIStream,
  ValidationProvider,
  VisibilityProvider,
} from "@json-render/react";
import { registry } from "@/lib/registry";

interface PromptStudioProps {
  /** Remounts this studio so an in-flight generation is aborted. */
  onReset: () => void;
}

/**
 * Prompt form and the generated UI beneath it.
 *
 * @param props.onReset - Called after the local prompt and spec are cleared
 */
function PromptStudio({ onReset }: PromptStudioProps) {
  const [prompt, setPrompt] = useState("");
  const { spec, isStreaming, error, send, clear } = useUIStream({
    api: "/api/generate",
  });
  const trimmedPrompt = prompt.trim();
  const canSubmit = trimmedPrompt.length > 0 && !isStreaming;
  const hasGeneratedUi = Boolean(spec?.root);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    try {
      await send(trimmedPrompt);
    } catch (submitError) {
      console.error("Failed to send prompt", submitError);
    }
  }

  function handleReset() {
    clear();
    setPrompt("");
    onReset();
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">json-render</h1>
        <p className="text-sm text-muted-foreground">
          Describe a UI. The model builds it from the shadcn catalog.
        </p>
      </header>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="prompt">
          Prompt
          <textarea
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Describe the UI you want…"
            rows={5}
            className="w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm font-normal shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
          >
            {isStreaming ? "Generating…" : "Submit"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Reset
          </button>
        </div>
      </form>

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error.message}
        </p>
      ) : null}

      <section
        aria-live="polite"
        className="flex min-h-48 flex-1 flex-col gap-4 rounded-xl border border-border bg-card p-4 text-card-foreground"
      >
        {isStreaming ? (
          <p className="text-sm text-muted-foreground">Generating UI…</p>
        ) : null}
        {hasGeneratedUi && spec ? (
          <StateProvider initialState={{}}>
            <VisibilityProvider>
              <ActionProvider handlers={{}}>
                <ValidationProvider>
                  <Renderer
                    spec={spec}
                    registry={registry}
                    loading={isStreaming}
                  />
                </ValidationProvider>
              </ActionProvider>
            </VisibilityProvider>
          </StateProvider>
        ) : !isStreaming ? (
          <p className="text-sm text-muted-foreground">
            Generated UI will appear here.
          </p>
        ) : null}
      </section>
    </div>
  );
}

/**
 * Demo page. Reset remounts the studio so `useUIStream` aborts the request.
 */
export default function Home() {
  const [sessionId, setSessionId] = useState(0);

  return (
    <main className="flex flex-1 flex-col">
      <PromptStudio
        key={sessionId}
        onReset={() => setSessionId((current) => current + 1)}
      />
    </main>
  );
}
