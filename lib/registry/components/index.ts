import type { ComponentType, ReactNode } from "react";

import { ButtonComponent } from "@/lib/registry/components/button";
import { CardComponent } from "@/lib/registry/components/card";

type CatalogRenderProps = {
  props: Record<string, unknown>;
  emit: (event: string) => void;
  on: (event: string) => {
    emit: () => void;
    shouldPreventDefault: boolean;
    bound: boolean;
  };
  children?: ReactNode;
  slots?: Record<string, ReactNode>;
  bindings?: Record<string, string>;
};

/** Local registry implementations used by the app and Storybook catalog stories. */
export const localCatalogComponents: Partial<
  Record<string, ComponentType<CatalogRenderProps>>
> = {
  Button: ButtonComponent as ComponentType<CatalogRenderProps>,
  Card: CardComponent as ComponentType<CatalogRenderProps>,
};
