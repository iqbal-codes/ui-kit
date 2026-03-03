"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardBadgeProps } from "../types";

/**
 * KanbanCardBadge - Priority badge for kanban cards
 *
 * Displays priority level with color-coded styling
 *
 * @example
 * <KanbanCard.Badge priority="high">High Priority</KanbanCard.Badge>
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Title</KanbanCard.Title>
 *   <KanbanCard.Badge priority="urgent">Urgent</KanbanCard.Badge>
 * </KanbanCard.Header>
 */
export const KanbanCardBadge = React.forwardRef<HTMLDivElement, KanbanCardBadgeProps>(
  ({ priority, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        "shrink-0",
        priority === "urgent" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        priority === "high" &&
          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        priority === "medium" &&
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        priority === "low" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

KanbanCardBadge.displayName = "KanbanCardBadge";

export { KanbanCardBadge as Badge };
