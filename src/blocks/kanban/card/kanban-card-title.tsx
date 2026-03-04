"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardTitleProps } from "../types";

/**
 * KanbanCardTitle - Title text for kanban cards
 *
 * Displays the card title prominently
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Fix login bug</KanbanCard.Title>
 * </KanbanCard.Header>
 */
export const KanbanCardTitle = React.forwardRef<HTMLHeadingElement, KanbanCardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold text-foreground text-ellipsis", "line-clamp-2", className)}
      {...props}
    />
  )
);

KanbanCardTitle.displayName = "KanbanCardTitle";

export { KanbanCardTitle as Title };
