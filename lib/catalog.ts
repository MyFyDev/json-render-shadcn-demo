import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { catalogComponentDefinitions } from "@/lib/catalog/component-definitions";

/**
 * Catalog of shadcn components the model is allowed to generate.
 *
 * {@link catalogComponentDefinitions} extends stock `@json-render/shadcn` schemas
 * where this app needs richer, still-validated props (e.g. Button, Card).
 *
 * @example
 * const systemPrompt = catalog.prompt();
 */
export const catalog = defineCatalog(schema, {
  components: catalogComponentDefinitions,
  actions: {},
});
