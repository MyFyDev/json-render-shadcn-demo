"use client";

import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ShadcnUiProvidersProps {
  children: ReactNode;
}

/** Providers required by shadcn/ui primitive stories. */
export function ShadcnUiProviders({ children }: ShadcnUiProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
