"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardFooterProps } from "../types";

/**
 * KanbanCardFooter - Footer container for kanban cards
 *
 * Contains metadata like assignee, due date, subtasks, attachments
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Avatar name="John Doe" />
 *   <KanbanCard.DueDate date="2024-03-15" />
 *   <KanbanCard.Subtasks completed={3} total={5} />
 * </KanbanCard.Footer>
 */
export const KanbanCardFooter = React.forwardRef<HTMLDivElement, KanbanCardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2 flex-wrap", className)} {...props} />
  )
);

KanbanCardFooter.displayName = "KanbanCardFooter";

export { KanbanCardFooter as Footer };
