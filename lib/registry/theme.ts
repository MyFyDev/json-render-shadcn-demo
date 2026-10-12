import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";

import type { buttonVariants } from "@/components/ui/button";

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

/** Catalog `Button.variant` values (legacy + shadcn-aligned). */
export type CatalogButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "default"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

/** Catalog `Button.size` values. */
export type CatalogButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

/** Catalog `Card.maxWidth` values. */
export type CatalogCardMaxWidth = "sm" | "md" | "lg" | "full";

/**
 * Map catalog button variant to local `Button` CVA variant.
 *
 * @param variant - Value from catalog props (nullable)
 */
export function mapButtonVariant(
  variant: CatalogButtonVariant | null | undefined,
): ButtonVariant {
  switch (variant) {
    case "secondary":
      return "secondary";
    case "danger":
    case "destructive":
      return "destructive";
    case "outline":
      return "outline";
    case "ghost":
      return "ghost";
    case "link":
      return "link";
    case "primary":
    case "default":
    case null:
    case undefined:
      return "default";
    default:
      return "default";
  }
}

/**
 * Map catalog button size to local `Button` CVA size.
 *
 * @param size - Value from catalog props (nullable)
 */
export function mapButtonSize(
  size: CatalogButtonSize | null | undefined,
): ButtonSize {
  if (!size) {
    return "default";
  }
  return size;
}

/**
 * Layout classes for catalog `Card` (width / centering).
 *
 * @param options - Card layout props from the catalog
 */
export function cardLayoutClasses(options: {
  maxWidth?: CatalogCardMaxWidth | null;
  centered?: boolean | null;
  className?: string | null;
}): string {
  const maxWidthClass =
    options.maxWidth === "sm"
      ? "max-w-xs sm:min-w-[280px]"
      : options.maxWidth === "md"
        ? "max-w-sm sm:min-w-[320px]"
        : options.maxWidth === "lg"
          ? "max-w-md sm:min-w-[360px]"
          : options.maxWidth === "full"
            ? "w-full"
            : "w-full";

  return cn(maxWidthClass, options.centered ? "mx-auto" : undefined, options.className);
}
