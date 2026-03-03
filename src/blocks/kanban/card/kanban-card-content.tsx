"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardContentProps } from "../types";

/**
 * KanbanCardContent - Content area for kanban cards
 *
 * Contains description, tags, and other card details
 *
 * @example
 * <KanbanCard.Content>
 *   <KanbanCard.Description>Description text</KanbanCard.Description>
 *   <KanbanCard.Labels>
 *     <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *   </KanbanCard.Labels>
 * </KanbanCard.Content>
 */
export const KanbanCardContent = React.forwardRef<HTMLDivElement, KanbanCardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
  )
);

KanbanCardContent.displayName = "KanbanCardContent";

export { KanbanCardContent as Content };
