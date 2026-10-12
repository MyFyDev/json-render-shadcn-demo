import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { buttonDefinition } from "@/lib/catalog/definitions/button";
import { cardDefinition } from "@/lib/catalog/definitions/card";

/**
 * Full component catalog: stock @json-render/shadcn definitions with local overrides.
 */
export const catalogComponentDefinitions = {
  ...shadcnComponentDefinitions,
  Button: buttonDefinition,
  Card: cardDefinition,
};

export type CatalogComponentName = keyof typeof catalogComponentDefinitions;
