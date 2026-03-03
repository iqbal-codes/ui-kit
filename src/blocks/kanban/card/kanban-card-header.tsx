"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardHeaderProps } from "../types";

/**
 * KanbanCardHeader - Header container for kanban cards
 *
 * Contains title and badge/actions area
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Task Title</KanbanCard.Title>
 *   <KanbanCard.Badge priority="high">High</KanbanCard.Badge>
 * </KanbanCard.Header>
 */
export const KanbanCardHeader = React.forwardRef<HTMLDivElement, KanbanCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-start justify-between gap-2", className)} {...props} />
  )
);

KanbanCardHeader.displayName = "KanbanCardHeader";

export { KanbanCardHeader as Header };
