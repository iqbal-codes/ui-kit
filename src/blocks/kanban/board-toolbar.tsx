"use client";

import { FilterIcon, SearchIcon, SortAscIcon, SortDescIcon, XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";
import { Button } from "@/primitives/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/primitives/dropdown-menu";
import { Input } from "@/primitives/input";

/**
 * Board toolbar props
 */
export interface BoardToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current search query */
  searchQuery?: string;
  /** Called when search query changes */
  onSearchChange?: (query: string) => void;
  /** Active filters count */
  filtersCount?: number;
  /** Called when filters button is clicked */
  onFiltersClick?: () => void;
  /** Current sort direction */
  sortDirection?: "asc" | "desc";
  /** Called when sort is toggled */
  onSortToggle?: () => void;
  /** Show search input */
  showSearch?: boolean;
  /** Show filters button */
  showFilters?: boolean;
  /** Show sort button */
  showSort?: boolean;
  /** Placeholder text for search */
  searchPlaceholder?: string;
}

/**
 * BoardToolbar - Toolbar for kanban board with search and filters
 *
 * @example
 * <BoardToolbar
 *   searchQuery={search}
 *   onSearchChange={setSearch}
 *   filtersCount={2}
 *   onFiltersClick={handleFilters}
 * />
 */
export const BoardToolbar = React.forwardRef<HTMLDivElement, BoardToolbarProps>(
  function BoardToolbarBase(
    {
      searchQuery,
      onSearchChange,
      filtersCount,
      onFiltersClick,
      sortDirection,
      onSortToggle,
      showSearch = true,
      showFilters = true,
      showSort = true,
      searchPlaceholder = "Search cards...",
      className,
      ...props
    },
    ref
  ) {
    const hasActiveFilters = filtersCount && filtersCount > 0;
    const hasActiveSearch = searchQuery && searchQuery.length > 0;

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 p-3 border-b bg-card", className)}
        {...props}
      >
        {/* Search */}
        {showSearch && (
          <div className="relative flex-1 max-w-sm">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-9 pr-8"
            />
            {hasActiveSearch && (
              <button
                onClick={() => onSearchChange?.("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                type="button"
              >
                <XIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        {/* Filters */}
        {showFilters && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <FilterIcon className="h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="h-5 px-1">
                    {filtersCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Assignee</DropdownMenuItem>
                <DropdownMenuItem>Priority</DropdownMenuItem>
                <DropdownMenuItem>Due date</DropdownMenuItem>
                <DropdownMenuItem>Labels</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Sort */}
        {showSort && (
          <Button variant="outline" size="sm" className="gap-2" onClick={onSortToggle}>
            {sortDirection === "desc" ? (
              <SortDescIcon className="h-4 w-4" />
            ) : (
              <SortAscIcon className="h-4 w-4" />
            )}
            Sort
          </Button>
        )}
      </div>
    );
  }
);
