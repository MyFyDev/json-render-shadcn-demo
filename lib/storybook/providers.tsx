"use client";

import type { ReactNode } from "react";
import {
  ActionProvider,
  StateProvider,
  ValidationProvider,
  VisibilityProvider,
  type StateModel,
} from "@json-render/react";

interface ShadcnStoryProvidersProps {
  children: ReactNode;
  initialState?: StateModel;
}

/**
 * Providers required by many @json-render/shadcn components (state paths,
 * validation, actions).
 */
export function ShadcnStoryProviders({
  children,
  initialState = {},
}: ShadcnStoryProvidersProps) {
  return (
    <StateProvider initialState={initialState}>
      <VisibilityProvider>
        <ActionProvider handlers={{}}>
          <ValidationProvider>{children}</ValidationProvider>
        </ActionProvider>
      </VisibilityProvider>
    </StateProvider>
  );
}
