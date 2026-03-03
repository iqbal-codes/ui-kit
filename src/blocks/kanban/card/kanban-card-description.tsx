"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardDescriptionProps } from "../types";

/**
 * KanbanCardDescription - Description text for kanban cards
 *
 * Displays longer card description in muted text
 *
 * @example
 * <KanbanCard.Content>
 *   <KanbanCard.Description>
 *     Users can't login with special characters in password
 *   </KanbanCard.Description>
 * </KanbanCard.Content>
 */
export const KanbanCardDescription = React.forwardRef<
  HTMLParagraphElement,
  KanbanCardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", "line-clamp-3", className)}
    {...props}
  />
));

KanbanCardDescription.displayName = "KanbanCardDescription";

export { KanbanCardDescription as Description };
