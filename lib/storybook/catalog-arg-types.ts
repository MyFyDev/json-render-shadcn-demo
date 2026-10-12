import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";
import type { z } from "zod";

type JsonRenderCatalogName = keyof typeof shadcnComponentDefinitions;

type ZodDef = { type?: string; innerType?: z.ZodType; entries?: Record<string, string> };

function zodDef(schema: z.ZodType): ZodDef | undefined {
  return (schema as z.ZodType & { _zod?: { def?: ZodDef } })._zod?.def;
}

function unwrap(schema: z.ZodType): z.ZodType {
  const def = zodDef(schema);
  if (def?.type === "nullable" && def.innerType) {
    return unwrap(def.innerType);
  }
  if (def?.type === "optional" && def.innerType) {
    return unwrap(def.innerType);
  }
  return schema;
}

function isNullable(schema: z.ZodType): boolean {
  return zodDef(schema)?.type === "nullable";
}

function enumOptions(schema: z.ZodType): string[] | undefined {
  const def = zodDef(unwrap(schema));
  if (def?.type === "enum" && def.entries) {
    return [...Object.keys(def.entries), "null"];
  }
  return undefined;
}

function zodKind(schema: z.ZodType): string | undefined {
  return zodDef(unwrap(schema))?.type;
}

/**
 * Build Storybook controls from a json-render catalog Zod props schema.
 *
 * @param name - Catalog component name
 * @returns Arg types and default args for Storybook
 */
export function catalogStoryControls(name: JsonRenderCatalogName): {
  argTypes: Record<string, unknown>;
  defaultArgs: Record<string, unknown>;
  description: string;
} {
  const definition = shadcnComponentDefinitions[name];
  const shape = definition.props.shape;
  const argTypes: Record<string, unknown> = {};
  const defaultArgs: Record<string, unknown> = {};

  for (const [key, fieldSchema] of Object.entries(shape)) {
    const schema = fieldSchema as z.ZodType;
    const nullable = isNullable(schema);
    const enumOpts = enumOptions(schema);

    if (enumOpts) {
      argTypes[key] = { control: "select", options: enumOpts };
      defaultArgs[key] = nullable ? null : enumOpts[0];
      continue;
    }

    const kind = zodKind(schema);
    if (kind === "boolean") {
      argTypes[key] = { control: "boolean" };
      defaultArgs[key] = nullable ? null : false;
      continue;
    }

    if (kind === "number") {
      argTypes[key] = { control: "number" };
      defaultArgs[key] = nullable ? null : 0;
      continue;
    }

    if (kind === "array") {
      argTypes[key] = { control: "object" };
      defaultArgs[key] = [];
      continue;
    }

    argTypes[key] = { control: "text" };
    defaultArgs[key] = nullable ? null : "";
  }

  if ("example" in definition && definition.example) {
    Object.assign(defaultArgs, definition.example);
  }

  return {
    argTypes,
    defaultArgs,
    description: definition.description,
  };
}

export type { JsonRenderCatalogName };
