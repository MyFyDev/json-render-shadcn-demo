"use client";

import type { ComponentFn } from "@json-render/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { catalog } from "@/lib/catalog";
import { cardLayoutClasses } from "@/lib/registry/theme";

export const CardComponent: ComponentFn<typeof catalog, "Card"> = ({
  props,
  children,
}) => {
  const size = props.size === "sm" ? "sm" : "default";

  return (
    <Card className={cardLayoutClasses(props)} size={size}>
      {(props.title || props.description) && (
        <CardHeader>
          {props.title ? <CardTitle>{props.title}</CardTitle> : null}
          {props.description ? (
            <CardDescription>{props.description}</CardDescription>
          ) : null}
        </CardHeader>
      )}
      <CardContent className="flex flex-col gap-3">{children}</CardContent>
      {props.footer ? (
        <CardFooter>
          <span className="text-sm text-muted-foreground">{props.footer}</span>
        </CardFooter>
      ) : null}
    </Card>
  );
};
