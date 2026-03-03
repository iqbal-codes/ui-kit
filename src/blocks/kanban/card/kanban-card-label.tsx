"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardLabelProps } from "../types";

/**
 * Get Tailwind color classes from color name
 * Supports common Tailwind colors
 */
function getColorClasses(color: string): string {
  const colorMap: Record<string, string> = {
    // Red
    red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    // Orange
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    // Yellow/Amber
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    // Green
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    // Blue
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    // Indigo
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
    // Purple
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    // Pink
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
    // Gray/Slate
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
    slate: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
    // Cyan
    cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
    // Teal
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
  };

  return colorMap[color] || colorMap.gray;
}

/**
 * KanbanCardLabel - Single tag/label for kanban cards
 *
 * Displays a colored label for categorization
 *
 * @example
 * <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *
 * @example
 * <KanbanCard.Labels>
 *   <KanbanCard.Label color="red">Urgent</KanbanCard.Label>
 *   <KanbanCard.Label color="blue">Frontend</KanbanCard.Label>
 * </KanbanCard.Labels>
 */
export const KanbanCardLabel = React.forwardRef<HTMLSpanElement, KanbanCardLabelProps>(
  ({ color, className, children, ...props }, ref) => {
    // Check if color is a hex code
    const isHexColor = /^#[0-9A-Fa-f]{6}$/.test(color);

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          "shrink-0",
          isHexColor
            ? className // Custom style will be applied via style prop
            : getColorClasses(color),
          className
        )}
        style={isHexColor ? { backgroundColor: color, color: "#fff" } : undefined}
        {...props}
      >
        {children}
      </span>
    );
  }
);

KanbanCardLabel.displayName = "KanbanCardLabel";

export { KanbanCardLabel as Label };
