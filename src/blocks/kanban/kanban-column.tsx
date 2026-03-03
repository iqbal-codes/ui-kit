"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/primitives/scroll-area";
import { ColumnHeader } from "./column-header";
import type { KanbanColumn as KanbanColumnType, BaseCardMetadata } from "../types";

/**
 * KanbanColumn props
 */
export interface KanbanColumnProps<T extends BaseCardMetadata = BaseCardMetadata>
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Column configuration data */
  column: KanbanColumnType<T>;
  /** Custom card renderer */
  renderCard?: (card: T, column: KanbanColumnType<T>) => React.ReactNode;
  /** Called when add card button is clicked */
  onAddCard?: () => void;
  /** Called when card is clicked */
  onCardClick?: (card: T) => void;
  /** Called when column options menu is opened */
  onOptionsClick?: () => void;
  /** Called when collapse toggle is clicked */
  onCollapseToggle?: () => void;
  /** Whether column is being dragged */
  isDragging?: boolean;
  /** Show collapse toggle */
  showCollapse?: boolean;
  /** Show add card button */
  showAdd?: boolean;
  /** Show options menu */
  showOptions?: boolean;
  /** Maximum height of column content (default: "calc(100vh - 200px)") */
  maxHeight?: string;
}

/**
 * KanbanColumn - Individual column in a kanban board
 *
 * Contains header and scrollable list of cards
 *
 * @example
 * <KanbanColumn
 *   column={columnData}
 *   renderCard={(card) => <KanbanCard card={card} />}
 *   onAddCard={() => handleAddCard()}
 * />
 */
export const KanbanColumn = React.forwardRef<HTMLDivElement, KanbanColumnProps<any>>(
  function KanbanColumnBase(
    {
      column,
      renderCard,
      onAddCard,
      onCardClick,
      onOptionsClick,
      onCollapseToggle,
      isDragging,
      showCollapse = false,
      showAdd = true,
      showOptions = true,
      maxHeight = "calc(100vh - 200px)",
      className,
      ...props
    },
    ref
  ) {
    const isCollapsed = column.isCollapsed ?? false;
    const isOverLimit = column.cardLimit && column.cards.length > column.cardLimit;

    return (
      <div
        ref={ref}
        data-dragging={isDragging ? "true" : undefined}
        data-collapsed={isCollapsed ? "true" : undefined}
        className={cn(
          "flex flex-col w-80 shrink-0 rounded-lg border bg-card/50",
          "transition-all duration-200",
          "data-[dragging=true]:opacity-50",
          "data-[collapsed=true]:w-12",
          isOverLimit && "border-red-500 border-2",
          className
        )}
        {...props}
      >
        {/* Header */}
        <ColumnHeader
          title={column.title}
          cardCount={column.cards.length}
          cardLimit={column.cardLimit}
          color={column.color}
          isCollapsed={isCollapsed}
          isDisabled={column.isDisabled}
          onAddCard={onAddCard}
          onOptionsClick={onOptionsClick}
          onCollapseToggle={onCollapseToggle}
          showCollapse={showCollapse}
          showAdd={showAdd && !isCollapsed}
          showOptions={showOptions && !isCollapsed}
        />

        {/* Cards */}
        {!isCollapsed && (
          <ScrollArea className="flex-1" style={{ maxHeight }}>
            <div className="p-2 space-y-2">
              {column.cards.map((card, index) => (
                <div key={card.id || index}>
                  {renderCard ? (
                    renderCard(card, column)
                  ) : (
                    <div className="p-4 text-center text-sm text-muted-foreground border border-dashed rounded">
                      Provide renderCard prop
                    </div>
                  )}
                </div>
              ))}

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
);
