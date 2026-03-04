"use client";

import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/primitives/scroll-area";
import { KanbanCard } from "./card";
import { DraggableColumn } from "./draggable-column";
import type { BaseCardMetadata, KanbanBoardProps, KanbanColumn as KanbanColumnType } from "./types";

/**
 * Draggable kanban board props
 */
export interface DraggableKanbanBoardProps<T extends BaseCardMetadata = BaseCardMetadata>
  extends Omit<KanbanBoardProps<T>, "features"> {
  /** Called when card is moved between columns */
  onCardMove: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => void | Promise<void>;
  /** Called when card is reordered within same column */
  onCardReorder?: (
    cardId: string,
    fromIndex: number,
    toIndex: number,
    columnId: string
  ) => void | Promise<void>;
  /** Custom card renderer */
  renderCard?: (card: T, column: KanbanColumnType<T>) => React.ReactNode;
}

/**
 * DraggableKanbanBoard - Kanban board with full drag-and-drop support
 */
export function DraggableKanbanBoard<T extends BaseCardMetadata>({
  columns: initialColumns,
  onCardMove,
  onCardReorder,
  renderCard,
  onCardClick,
  isLoading,
  emptyStateMessage = "No cards yet",
  className,
}: DraggableKanbanBoardProps<T>) {
  const [columns, setColumns] = React.useState<KanbanColumnType<T>[]>(initialColumns);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [activeCard, setActiveCard] = React.useState<T | null>(null);

  // Update columns when prop changes
  React.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // Find card by ID
  const findCard = React.useCallback(
    (cardId: string) => {
      for (const column of columns) {
        const card = column.cards.find((c) => c.id === cardId);
        if (card) return { card, column };
      }
      return null;
    },
    [columns]
  );

  // Get all card IDs as flat array for collision detection
  const allCardIds = React.useMemo(() => {
    return columns.flatMap((col) => col.cards.map((c) => `${col.id}-card-${c.id}`));
  }, [columns]);

  const handleDragStart = React.useCallback(
    (event: any) => {
      const { active } = event;
      setActiveId(active.id);

      // Check if it's a card
      if (active.id.includes("-card-")) {
        const cardId = active.id.replace(/.*-card-/, "");
        const result = findCard(cardId);
        if (result) {
          setActiveCard(result.card as T);
        }
      }
    },
    [findCard]
  );

  const handleDragEnd = React.useCallback(
    (event: any) => {
      const { active, over } = event;
      setActiveId(null);
      setActiveCard(null);

      if (!over || active.id === over.id) return;

      // Card dragged over another card
      if (active.id.includes("-card-") && over.id.includes("-card-")) {
        const activeCardId = active.id.replace(/.*-card-/, "");
        const overCardId = over.id.replace(/.*-card-/, "");

        const activeResult = findCard(activeCardId);
        const overResult = findCard(overCardId);

        if (!activeResult || !overResult) return;

        const { card: activeCard, column: activeColumn } = activeResult;
        const { card: overCard, column: overColumn } = overResult;

        if (activeColumn.id === overColumn.id) {
          // Same column - reorder
          const oldIndex = activeColumn.cards.findIndex((c) => c.id === activeCard.id);
          const newIndex = overColumn.cards.findIndex((c) => c.id === overCard.id);

          if (oldIndex !== newIndex) {
            setColumns((prev) => {
              return prev.map((col) => {
                if (col.id === activeColumn.id) {
                  const newCards = [...col.cards];
                  newCards.splice(oldIndex, 1);
                  newCards.splice(newIndex, 0, activeCard);
                  return { ...col, cards: newCards };
                }
                return col;
              });
            });

            onCardReorder?.(activeCard.id, oldIndex, newIndex, activeColumn.id);
          }
        } else {
          // Different column - move
          setColumns((prev) => {
            return prev.map((col) => {
              if (col.id === activeColumn.id) {
                return { ...col, cards: col.cards.filter((c) => c.id !== activeCard.id) };
              }
              if (col.id === overColumn.id) {
                const newIndex = col.cards.findIndex((c) => c.id === overCard.id);
                const newCards = [...col.cards];
                newCards.splice(newIndex, 0, activeCard);
                return { ...col, cards: newCards };
              }
              return col;
            });
          });

          onCardMove?.(activeCard.id, activeColumn.id, overColumn.id, 0);
        }
      }
      // Card dragged over column (empty space)
      else if (active.id.includes("-card-") && !over.id.includes("-card-")) {
        const activeCardId = active.id.replace(/.*-card-/, "");
        const result = findCard(activeCardId);

        if (!result) return;

        const { card, column: fromColumn } = result;
        const toColumn = columns.find((c) => c.id === over.id);

        if (toColumn && fromColumn.id !== toColumn.id) {
          setColumns((prev) => {
            return prev.map((col) => {
              if (col.id === fromColumn.id) {
                return { ...col, cards: col.cards.filter((c) => c.id !== card.id) };
              }
              if (col.id === toColumn.id) {
                return { ...col, cards: [...col.cards, card] };
              }
              return col;
            });
          });

          onCardMove?.(card.id, fromColumn.id, toColumn.id, toColumn.cards.length);
        }
      }
    },
    [columns, findCard, onCardMove, onCardReorder]
  );

  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center h-64", className)}>
        <div className="text-center text-muted-foreground">
          <div className="animate-pulse text-2xl">Loading board...</div>
        </div>
      </div>
    );
  }

  const hasNoCards = columns.every((col) => col.cards.length === 0);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={cn("flex h-full w-full", className)}>
        <ScrollArea className="flex-1" orientation="horizontal">
          <div className="flex h-full gap-4 p-4 min-w-max">
            <SortableContext
              items={columns.map((c) => c.id)}
              strategy={horizontalListSortingStrategy}
            >
              {columns.map((column) => (
                <SortableContext
                  key={column.id}
                  items={column.cards.map((c) => `${column.id}-card-${c.id}`)}
                  strategy={verticalListSortingStrategy}
                >
                  <DraggableColumn<T>
                    id={column.id}
                    column={column}
                    renderCard={renderCard}
                    onCardClick={onCardClick}
                    showAdd
                  />
                </SortableContext>
              ))}
            </SortableContext>

            {hasNoCards && (
              <div className="flex items-center justify-center min-h-[200px] px-8 py-12 border-2 border-dashed rounded-lg bg-muted/50">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-medium">{emptyStateMessage}</p>
                  <p className="text-sm mt-1">Click "Add card" to create your first card</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <DragOverlay>
        {activeCard && (
          <div className="rotate-2 shadow-2xl">
            {renderCard ? (
              renderCard(activeCard, {} as any)
            ) : (
              <KanbanCard card={activeCard} isDragging />
            )}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}
