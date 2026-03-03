"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/primitives/progress";
import type { KanbanCardSubtasksProps } from "../types";

/**
 * KanbanCardSubtasks - Subtask progress indicator for kanban cards
 *
 * Shows progress bar and completed/total count
 *
 * @example
 * <KanbanCard.Subtasks completed={3} total={5} />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Subtasks completed={8} total={10} />
 * </KanbanCard.Footer>
 */
export const KanbanCardSubtasks = React.forwardRef<HTMLDivElement, KanbanCardSubtasksProps>(
  ({ completed, total, className, ...props }, ref) => {
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    const isComplete = completed === total && total > 0;

    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
        <div className="flex-1 min-w-[80px]">
          <Progress
            value={percentage}
            className={cn("h-1.5", isComplete && "bg-green-100 dark:bg-green-900/30")}
          />
        </div>
        <span
          className={cn(
            "text-xs font-medium shrink-0",
            isComplete ? "text-green-600 dark:text-green-400" : "text-muted-foreground"
          )}
        >
          {completed}/{total}
        </span>
      </div>
    );
  }
);

KanbanCardSubtasks.displayName = "KanbanCardSubtasks";

export { KanbanCardSubtasks as Subtasks };
