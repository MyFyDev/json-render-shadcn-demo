import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";
import { z } from "zod";

/**
 * Extended Card catalog definition (stock layout props + local Card size/footer).
 */
export const cardDefinition = {
  ...shadcnComponentDefinitions.Card,
  props: shadcnComponentDefinitions.Card.props.extend({
    size: z
      .enum(["default", "sm"])
      .nullable()
      .describe("Card density; sm reduces padding and title size."),
    footer: z
      .string()
      .max(500)
      .nullable()
      .describe("Optional footer text below the main content."),
    className: z
      .string()
      .max(240)
      .nullable()
      .describe("Optional Tailwind classes; prefer maxWidth/centered/size when possible."),
  }),
  description:
    "Container card for content sections. Use for forms/content boxes, NOT for page headers.",
  example: {
    title: "Overview",
    description: "Your account summary",
    size: "default",
  },
} as const;
