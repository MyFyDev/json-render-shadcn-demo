import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";
import { z } from "zod";

const catalogButtonVariant = z
  .enum([
    "primary",
    "secondary",
    "danger",
    "default",
    "outline",
    "ghost",
    "destructive",
    "link",
  ])
  .nullable()
  .describe(
    "Visual style. Legacy: primary (filled), secondary, danger. Prefer outline or ghost for low emphasis; link for inline actions.",
  );

const catalogButtonSize = z
  .enum(["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"])
  .nullable()
  .describe("Button size; icon-* for icon-only buttons.");

/**
 * Extended Button catalog definition (stock @json-render/shadcn + shadcn/ui variants).
 */
export const buttonDefinition = {
  ...shadcnComponentDefinitions.Button,
  props: shadcnComponentDefinitions.Button.props.extend({
    variant: catalogButtonVariant,
    size: catalogButtonSize,
    className: z
      .string()
      .max(240)
      .nullable()
      .describe("Optional Tailwind classes; prefer variant/size when possible."),
  }),
  description:
    "Clickable button. Use variant/size for styling; bind on.press for handlers.",
  example: {
    label: "Submit",
    variant: "primary",
    size: "default",
  },
} as const;
