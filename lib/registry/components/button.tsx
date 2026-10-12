"use client";

import type { ComponentFn } from "@json-render/react";

import { Button } from "@/components/ui/button";
import type { catalog } from "@/lib/catalog";
import { mapButtonSize, mapButtonVariant } from "@/lib/registry/theme";

export const ButtonComponent: ComponentFn<typeof catalog, "Button"> = ({
  props,
  emit,
}) => {
  return (
    <Button
      variant={mapButtonVariant(props.variant)}
      size={mapButtonSize(props.size)}
      disabled={props.disabled ?? false}
      className={props.className ?? undefined}
      onClick={() => emit("press")}
    >
      {props.label}
    </Button>
  );
};
