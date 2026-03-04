/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { BaseCardMetadata, KanbanCardProps } from "../types";
import { KanbanCardAttachments } from "./kanban-card-attachments";
import { KanbanCardAvatar } from "./kanban-card-avatar";
import { KanbanCardBadge } from "./kanban-card-badge";
import { KanbanCardContent } from "./kanban-card-content";
import { KanbanCardDescription } from "./kanban-card-description";
import { KanbanCardDueDate } from "./kanban-card-due-date";
import { KanbanCardFooter } from "./kanban-card-footer";
import { KanbanCardHeader } from "./kanban-card-header";
import { KanbanCardLabel } from "./kanban-card-label";
import { KanbanCardLabels } from "./kanban-card-labels";
import { KanbanCardSubtasks } from "./kanban-card-subtasks";
import { KanbanCardTitle } from "./kanban-card-title";

/**
 * DefaultCard - Predefined card layout using compound components
 * Used when card prop is provided without children
 */
function DefaultCard<T extends BaseCardMetadata>({
  card,
  onClick,
  isDragging,
  isSelected,
}: KanbanCardProps<T>) {
  if (!card) return null;

  const hasSubtasks = card.subtasks && card.subtasks.length > 0;
  const hasAttachments = card.attachments && card.attachments.length > 0;
  const hasDueDate = !!card.dueDate;
  const hasAssignee = !!card.assignee;
  const hasTags = card.tags && card.tags.length > 0;

  const completedSubtasks = card.subtasks?.filter((s) => s.completed).length || 0;
  const totalSubtasks = card.subtasks?.length || 0;

  return (
    <div
      data-dragging={isDragging ? "true" : undefined}
      data-selected={isSelected ? "true" : undefined}
      data-priority={card.priority}
      className={cn(
        "group relative flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm",
        "transition-all duration-200",
        "hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[dragging=true]:opacity-50 data-[dragging=true]:shadow-lg",
        "data-[selected=true]:ring-2 data-[selected=true]:ring-ring data-[selected=true]:ring-offset-2",
        "data-[priority=urgent]:border-l-4 data-[priority=urgent]:border-l-red-500",
        "data-[priority=high]:border-l-4 data-[priority=high]:border-l-orange-500",
        "data-[priority=medium]:border-l-4 data-[priority=medium]:border-l-yellow-500",
        "data-[priority=low]:border-l-4 data-[priority=low]:border-l-blue-500",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Header */}
      <KanbanCardHeader>
        <KanbanCardTitle>
          {card.title}askdlf lqkwr jelkqjwre oqiwjfoqw jwa askdfj qwoirejqi
        </KanbanCardTitle>
        {card.priority && (
          <KanbanCardBadge priority={card.priority}>
            {card.priority.charAt(0).toUpperCase() + card.priority.slice(1)}
          </KanbanCardBadge>
        )}
      </KanbanCardHeader>

      {/* Content */}
      <KanbanCardContent>
        {card.description && <KanbanCardDescription>{card.description}</KanbanCardDescription>}
        {hasTags && card.tags && (
          <KanbanCardLabels>
            {card.tags.map((tag) => (
              <KanbanCardLabel key={tag.id} color={tag.color}>
                {tag.label}
              </KanbanCardLabel>
            ))}
          </KanbanCardLabels>
        )}
      </KanbanCardContent>

      {/* Footer */}
      {(hasAssignee || hasDueDate || hasSubtasks || hasAttachments) && (
        <KanbanCardFooter>
          {hasAssignee && card.assignee && (
            <KanbanCardAvatar name={card.assignee.name} avatarUrl={card.assignee.avatarUrl} />
          )}
          {hasDueDate && card.dueDate && <KanbanCardDueDate date={card.dueDate} />}
          {hasSubtasks && (
            <KanbanCardSubtasks completed={completedSubtasks} total={totalSubtasks} />
          )}
          {hasAttachments && card.attachments && (
            <KanbanCardAttachments count={card.attachments.length} />
          )}
        </KanbanCardFooter>
      )}
    </div>
  );
}

/**
 * KanbanCard - Main container component for kanban cards
 *
 * Supports two usage patterns:
 * 1. Default rendering: Pass `card` prop with data
 * 2. Compound components: Use sub-components for custom layout
 *
 * @example
 * // Pattern 1: Default rendering
 * <KanbanCard card={cardData} />
 *
 * @example
 * // Pattern 2: Compound components
 * <KanbanCard>
 *   <KanbanCard.Header>
 *     <KanbanCard.Title>Title</KanbanCard.Title>
 *   </KanbanCard.Header>
 *   <KanbanCard.Content>Content</KanbanCard.Content>
 * </KanbanCard>
 */
export const KanbanCard = React.forwardRef<
  HTMLDivElement,
  KanbanCardProps<any> & {
    children?: React.ReactNode;
  }
>(function KanbanCardBase(
  {
    card,
    children,
    isDragging,
    isSelected,
    onClick,
    priority,
    className,
    ...props
  }: KanbanCardProps<any> & {
    children?: React.ReactNode;
  },
  ref
) {
  // Compound component mode (children provided)
  if (children) {
    return (
      <div
        ref={ref}
        data-dragging={isDragging ? "true" : undefined}
        data-selected={isSelected ? "true" : undefined}
        data-priority={priority}
        className={cn(
          "group relative flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm",
          "transition-all duration-200",
          "hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "data-[dragging=true]:opacity-50 data-[dragging=true]:shadow-lg",
          "data-[selected=true]:ring-2 data-[selected=true]:ring-ring data-[selected=true]:ring-offset-2",
          "data-[priority=urgent]:border-l-4 data-[priority=urgent]:border-l-red-500",
          "data-[priority=high]:border-l-4 data-[priority=high]:border-l-orange-500",
          "data-[priority=medium]:border-l-4 data-[priority=medium]:border-l-yellow-500",
          "data-[priority=low]:border-l-4 data-[priority=low]:border-l-blue-500",
          className
        )}
        onClick={onClick}
        role={onClick ? "button" : "article"}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Default rendering mode (card data provided)
  if (card) {
    return (
      <DefaultCard card={card} isDragging={isDragging} isSelected={isSelected} onClick={onClick} />
    );
  }

  // Empty state
  return null;
}) as <T extends BaseCardMetadata>(
  props: KanbanCardProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

// Attach sub-components for compound pattern
(KanbanCard as any).Header = KanbanCardHeader;
(KanbanCard as any).Content = KanbanCardContent;
(KanbanCard as any).Footer = KanbanCardFooter;
(KanbanCard as any).Title = KanbanCardTitle;
(KanbanCard as any).Description = KanbanCardDescription;
(KanbanCard as any).Badge = KanbanCardBadge;
(KanbanCard as any).Label = KanbanCardLabel;
(KanbanCard as any).Labels = KanbanCardLabels;
(KanbanCard as any).Avatar = KanbanCardAvatar;
(KanbanCard as any).DueDate = KanbanCardDueDate;
(KanbanCard as any).Subtasks = KanbanCardSubtasks;
(KanbanCard as any).Attachments = KanbanCardAttachments;

export { KanbanCard as Card };
