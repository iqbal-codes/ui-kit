"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/primitives/scroll-area";
import type { KanbanBoardProps } from "../types";
import { KanbanColumn } from "./kanban-column";

/**
 * KanbanBoard - Main board container for kanban
 *
 * Displays columns horizontally with scrollable overflow
 *
 * @example
 * <KanbanBoard
 *   columns={columns}
 *   renderCard={(card) => <KanbanCard card={card} />}
 *   onCardMove={handleCardMove}
 * />
 */
export const KanbanBoard = React.forwardRef<HTMLDivElement, KanbanBoardProps<any>>(
  function KanbanBoardBase(
    {
      columns,
      cards,
      features,
      onCardMove,
      onCardReorder,
      onCardClick,
      isLoading,
      emptyStateMessage = "No cards yet",
      className,
      ...props
    },
    ref
  ) {
    const _enableDragDrop = features?.dragDrop ?? true;
    const enableCardCreation = features?.cardCreation ?? true;
    const enableColumnCollapse = features?.columnCollapse ?? false;

    // Check if all columns are empty
    const hasNoCards = columns.every((col) => col.cards.length === 0);

    if (isLoading) {
      return (
        <div className={cn("flex items-center justify-center h-64", className)}>
          <div className="text-center text-muted-foreground">
            <div className="animate-pulse text-2xl">Loading board...</div>
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("flex h-full w-full", className)} {...props}>
        <ScrollArea className="flex-1" orientation="horizontal">
          <div className="flex h-full gap-4 p-4 min-w-max">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                onAddCard={
                  enableCardCreation && !column.isDisabled
                    ? () => console.log("Add card to", column.id)
                    : undefined
                }
                onCardClick={onCardClick}
                onOptionsClick={() => console.log("Column options", column.id)}
                onCollapseToggle={
                  enableColumnCollapse ? () => console.log("Toggle collapse", column.id) : undefined
                }
                showCollapse={enableColumnCollapse}
                showAdd={enableCardCreation && !column.isDisabled}
                showOptions={!column.isDisabled}
              />
            ))}

            {/* Empty state */}
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
    );
  }
);
