"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/primitives/avatar";
import type { KanbanCardAvatarProps } from "../types";

/**
 * Get initials from name
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * KanbanCardAvatar - Assignee avatar for kanban cards
 *
 * Displays user avatar with fallback to initials
 *
 * @example
 * <KanbanCard.Avatar name="John Doe" avatarUrl="/avatars/john.jpg" />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Avatar name="Jane Smith" />
 * </KanbanCard.Footer>
 */
export const KanbanCardAvatar = React.forwardRef<HTMLDivElement, KanbanCardAvatarProps>(
  ({ name, avatarUrl, className, ...props }, ref) => (
    <Avatar ref={ref} className={cn("h-6 w-6 ring-2 ring-card", className)} {...props}>
      {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
      <AvatarFallback className="text-[10px] font-medium bg-muted">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  )
);

KanbanCardAvatar.displayName = "KanbanCardAvatar";

export { KanbanCardAvatar as Avatar };
