"use client";

import type { ComponentType, ReactNode } from "react";
import { shadcnComponents } from "@json-render/shadcn";
import { localCatalogComponents } from "@/lib/registry/components";
type ShadcnComponentName = keyof typeof shadcnComponents;

const noopEmit = () => {};

const noopOn = () => ({
  emit: noopEmit,
  shouldPreventDefault: false,
  bound: false,
});

export interface ShadcnStoryExtras {
  children?: ReactNode;
  slots?: Record<string, ReactNode>;
  bindings?: Record<string, string>;
}

/**
 * Render a json-render shadcn implementation outside of {@link Renderer}.
 *
 * @param name - Catalog component name
 * @param props - Component props from the shadcn catalog schema
 * @param extras - Optional children, slots, or state bindings
 */
type ShadcnRenderComponent = ComponentType<{
  props: Record<string, unknown>;
  emit: () => void;
  on: typeof noopOn;
  children?: ReactNode;
  slots?: Record<string, ReactNode>;
  bindings?: Record<string, string>;
}>;

export function renderShadcn(
  name: ShadcnComponentName,
  props: Record<string, unknown>,
  extras?: ShadcnStoryExtras,
): ReactNode {
  const Component = (localCatalogComponents[name] ??
    shadcnComponents[name]) as unknown as ShadcnRenderComponent;

  return (
    <Component
      props={props}
      emit={noopEmit}
      on={noopOn}
      children={extras?.children}
      slots={extras?.slots}
      bindings={extras?.bindings}
    />
  );
}
