"use client";

import { ChevronDownIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/primitives/dropdown-menu";

/**
 * Column header props
 */
export interface ColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column title */
  title: string;
  /** Number of cards in column (optional) */
  cardCount?: number;
  /** Work-in-progress limit (optional) */
  cardLimit?: number;
  /** Whether column is collapsed */
  isCollapsed?: boolean;
  /** Accent color for visual organization */
  color?: string;
  /** Whether column is disabled */
  isDisabled?: boolean;
  /** Called when add card button is clicked */
  onAddCard?: () => void;
  /** Called when column options menu is opened */
  onOptionsClick?: () => void;
  /** Called when collapse toggle is clicked */
  onCollapseToggle?: () => void;
  /** Show collapse toggle button */
  showCollapse?: boolean;
  /** Show add card button */
  showAdd?: boolean;
  /** Show options menu */
  showOptions?: boolean;
}

/**
 * ColumnHeader - Header for kanban columns
 *
 * Displays column title, card count, and action buttons
 *
 * @example
 * <ColumnHeader
 *   title="In Progress"
 *   cardCount={5}
 *   cardLimit={10}
 *   onAddCard={() => handleAdd()}
 * />
 */
export const ColumnHeader = React.forwardRef<HTMLDivElement, ColumnHeaderProps>(
  (
    {
      title,
      cardCount,
      cardLimit,
      isCollapsed,
      color,
      isDisabled,
      onAddCard,
      onOptionsClick,
      onCollapseToggle,
      showCollapse = false,
      showAdd = true,
      showOptions = true,
      className,
      ...props
    },
    ref
  ) => {
    const isOverLimit = cardLimit && cardCount && cardCount > cardLimit;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between gap-2 p-3 border-b",
          "bg-card sticky top-0 z-10",
          color && `border-l-4 border-l-${color}-500`,
          isDisabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {showCollapse && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 shrink-0"
              onClick={onCollapseToggle}
              title={isCollapsed ? "Expand column" : "Collapse column"}
            >
              <ChevronDownIcon
                className={cn("h-4 w-4 transition-transform", isCollapsed && "-rotate-90")}
              />
            </Button>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">{title}</h3>
            {cardCount !== undefined && (
              <p
                className={cn(
                  "text-xs",
                  isOverLimit
                    ? "text-red-600 dark:text-red-400 font-medium"
                    : "text-muted-foreground"
                )}
              >
                {cardCount} {cardCount === 1 ? "card" : "cards"}
                {cardLimit && ` / ${cardLimit}`}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {showAdd && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onAddCard}
              title="Add card"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          )}

          {showOptions && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={onOptionsClick}
                  title="Column options"
                >
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {showCollapse && (
                  <DropdownMenuItem onClick={onCollapseToggle}>
                    {isCollapsed ? "Expand column" : "Collapse column"}
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Rename column</DropdownMenuItem>
                <DropdownMenuItem>Sort cards</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Delete column</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    );
  }
);

ColumnHeader.displayName = "ColumnHeader";
