"use client";

import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/primitives/scroll-area";
import { ColumnHeader } from "./column-header";
import { DraggableCard } from "./draggable-card";
import type { BaseCardMetadata, KanbanColumn as KanbanColumnType } from "./types";

/**
 * Draggable column props
 */
export interface DraggableColumnProps<T extends BaseCardMetadata = BaseCardMetadata>
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Column configuration data */
  column: KanbanColumnType<T>;
  /** Unique column identifier for dnd-kit */
  id: string;
  /** Custom card renderer */
  renderCard?: (card: T, column: KanbanColumnType<T>) => React.ReactNode;
  /** Called when add card button is clicked */
  onAddCard?: () => void;
  /** Called when card is clicked */
  onCardClick?: (card: T) => void;
  /** Called when card is moved */
  onCardMove?: (cardId: string, toColumnId: string, newIndex: number) => void;
  /** Whether column is being dragged */
  isDragging?: boolean;
  /** Show add card button */
  showAdd?: boolean;
  /** Maximum height of column content */
  maxHeight?: string;
}

/**
 * DraggableColumn - Column with drag-and-drop support
 */
export function DraggableColumn<T extends BaseCardMetadata>({
  column,
  id,
  renderCard,
  onAddCard,
  onCardClick,
  onCardMove,
  isDragging,
  showAdd = true,
  maxHeight = "calc(100vh - 200px)",
  className,
}: DraggableColumnProps<T>) {
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

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging || isSortableDragging ? 0.5 : 1,
    touchAction: "none",
  };

  const isCollapsed = column.isCollapsed ?? false;
  const isOverLimit = column.cardLimit && column.cards.length > column.cardLimit;

  return (
    <div
      ref={setNodeRef}
      style={style}
      data-dragging={isDragging || isSortableDragging ? "true" : undefined}
      data-collapsed={isCollapsed ? "true" : undefined}
      className={cn(
        "flex flex-col w-80 shrink-0 rounded-lg border bg-card/50",
        "transition-all duration-200",
        "data-[dragging=true]:opacity-50",
        "data-[collapsed=true]:w-12",
        isOverLimit && "border-red-500 border-2",
        className
      )}
    >
      {/* Header - draggable area */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "none" }}
      >
        <ColumnHeader
          title={column.title}
          cardCount={column.cards.length}
          cardLimit={column.cardLimit}
          color={column.color}
          isCollapsed={isCollapsed}
          isDisabled={column.isDisabled}
          onAddCard={onAddCard}
          showAdd={showAdd && !isCollapsed}
          showOptions={false}
        />
      </div>

      {/* Cards */}
      {!isCollapsed && (
        <ScrollArea className="flex-1" style={{ maxHeight }}>
          <div className="p-2 space-y-2">
            <SortableContext
              items={column.cards.map((c) => c.id)}
              strategy={verticalListSortingStrategy}
            >
              {column.cards.map((card: T, index: number) => (
                <DraggableCard<T>
                  key={card.id || index}
                  id={`${id}-card-${card.id}`}
                  card={card}
                  isDragging={false}
                  onClick={() => onCardClick?.(card)}
                  renderCard={renderCard ? (c: T) => renderCard(c, column) : undefined}
                />
              ))}
            </SortableContext>

            {/* Quick add at bottom */}
            {showAdd && (
              <button
                type="button"
                onClick={onAddCard}
                className="w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2"
              >
                <span className="text-lg leading-none">+</span>
                Add card
              </button>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
