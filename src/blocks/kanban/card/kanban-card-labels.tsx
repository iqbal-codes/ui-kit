"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardLabelsProps } from "../types";

/**
 * KanbanCardLabels - Container for multiple labels/tags
 *
 * Displays labels in a horizontal row with wrapping
 *
 * @example
 * <KanbanCard.Labels>
 *   <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *   <KanbanCard.Label color="green">Frontend</KanbanCard.Label>
 *   <KanbanCard.Label color="purple">v2.0</KanbanCard.Label>
 * </KanbanCard.Labels>
 */
export const KanbanCardLabels = React.forwardRef<HTMLDivElement, KanbanCardLabelsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-wrap gap-1.5", className)} {...props} />
  )
);

KanbanCardLabels.displayName = "KanbanCardLabels";

export { KanbanCardLabels as Labels };
