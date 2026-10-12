import type { ReactNode } from "react";
import type { JsonRenderCatalogName } from "@/lib/storybook/catalog-arg-types";
import type { ShadcnStoryExtras } from "@/lib/storybook/render-shadcn";

const sampleChild = "Sample content inside the container.";

const extrasByCatalog: Partial<Record<JsonRenderCatalogName, ShadcnStoryExtras>> = {
  Card: { children: <p className="text-sm">{sampleChild}</p> },
  Stack: {
    children: (
      <>
        <span className="rounded-md border px-3 py-2 text-sm">Item A</span>
        <span className="rounded-md border px-3 py-2 text-sm">Item B</span>
      </>
    ),
  },
  Grid: {
    children: (
      <>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="rounded-md border border-border p-4 text-sm">
            Cell {n}
          </div>
        ))}
      </>
    ),
  },
  Tabs: {
    children: (
      <p className="rounded-md border border-border p-4 text-sm text-muted-foreground">
        Tab panels are child elements in generated specs.
      </p>
    ),
  },
  Collapsible: {
    children: (
      <p className="text-sm text-muted-foreground">Collapsible body content.</p>
    ),
  },
  Dialog: {
    children: (
      <p className="text-sm text-muted-foreground">Dialog body from spec children.</p>
    ),
  },
};

/**
 * Optional children or slots for json-render catalog stories.
 *
 * @param name - Catalog component name
 */
export function catalogStoryExtras(name: JsonRenderCatalogName): ShadcnStoryExtras | undefined {
  return extrasByCatalog[name];
}

/**
 * Initial state for catalog components that bind `openPath`.
 *
 * @param args - Story args, may include `openPath`
 */
export function catalogInitialState(
  args: Record<string, unknown>,
): Record<string, unknown> {
  const openPath = args.openPath;
  if (typeof openPath === "string" && openPath.length > 0) {
    return { [openPath]: true };
  }
  return {};
}

export function catalogStoryChildren(name: JsonRenderCatalogName): ReactNode | undefined {
  return extrasByCatalog[name]?.children;
}
