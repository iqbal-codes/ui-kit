"use client";

import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardDueDateProps } from "../types";

/**
 * Format date to relative time (e.g., "in 2 days", "yesterday")
 */
function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "tomorrow";
  if (diffDays === -1) return "yesterday";
  if (diffDays > 1) return `in ${diffDays} days`;
  if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;
  return date.toLocaleDateString();
}

/**
 * Check if date is overdue
 */
function isOverdue(date: string): boolean {
  const dueDate = new Date(date);
  const now = new Date();
  // Reset time to compare dates only
  dueDate.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return dueDate < now;
}

/**
 * KanbanCardDueDate - Due date display for kanban cards
 *
 * Shows formatted date with calendar icon
 * Highlights overdue dates in red
 *
 * @example
 * <KanbanCard.DueDate date="2024-03-15" />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.DueDate date="2024-03-15" showTime />
 * </KanbanCard.Footer>
 */
export const KanbanCardDueDate = React.forwardRef<HTMLDivElement, KanbanCardDueDateProps>(
  ({ date, showTime, isOverdue: overdueProp, className, ...props }, ref) => {
    const dueDate = new Date(date);
    const isOver = overdueProp ?? isOverdue(date);

    const formattedDate = showTime ? dueDate.toLocaleString() : dueDate.toLocaleDateString();

    const relativeDate = formatRelativeDate(dueDate);

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-1.5 text-xs",
          isOver ? "text-red-600 dark:text-red-400 font-medium" : "text-muted-foreground",
          className
        )}
        {...props}
        title={formattedDate}
      >
        <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
        <span>{relativeDate}</span>
      </div>
    );
  }
);

KanbanCardDueDate.displayName = "KanbanCardDueDate";

export { KanbanCardDueDate as DueDate };
