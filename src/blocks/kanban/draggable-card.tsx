"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCard } from "./card/kanban-card";
import type { BaseCardMetadata } from "./types";

/**
 * Draggable card props
 */
export interface DraggableCardProps<T extends BaseCardMetadata = BaseCardMetadata> {
  /** Card data */
  card: T;
  /** Unique card identifier for dnd-kit */
  id: string;
  /** Whether card is currently being dragged */
  isDragging?: boolean;
  /** Called when card is clicked */
  onClick?: () => void;
  /** Custom card renderer */
  renderCard?: (card: T) => React.ReactNode;
}

/**
 * DraggableCard - Wrapper for kanban cards with drag-and-drop support
 */
export function DraggableCard<T extends BaseCardMetadata>({
  card,
  id,
  isDragging,
  onClick,
  renderCard,
}: DraggableCardProps<T>) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id,
  });

  const isDraggingState = isDragging || isSortableDragging;

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDraggingState ? 0 : 1, // Hide original when dragging
    touchAction: "none",
    cursor: isDraggingState ? "grabbing" : "grab",
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group"
      {...attributes}
      {...listeners}
    >
      {renderCard ? (
        renderCard(card)
      ) : (
        <KanbanCard
          card={card}
          onClick={onClick}
          isDragging={isDraggingState}
        />
      )}
    </div>
  );
}
