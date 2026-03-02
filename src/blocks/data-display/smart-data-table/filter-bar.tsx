"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/blocks/data-entry/search-bar";
import { Button } from "@/primitives/button";
import type { FilterBarProps } from "./types";

/**
 * FilterBar - Top wrapper with search input and filter buttons
 * 
 * Layout:
 * - Left: Search input (flex-grow)
 * - Right: Add Filter button + Clear button
 */
export function FilterBar({
  searchValue,
  onSearchChange,
  onAddFilter,
  onClearAll,
  searchPlaceholder = "Search...",
  hasFilters = false,
  isLoading = false,
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3",
        className
      )}
    >
      {/* Search Input - Takes available space */}
      <div className="flex-1 min-w-0">
        <SearchBar
          value={searchValue}
          placeholder={searchPlaceholder}
          onSearch={onSearchChange}
          onClear={() => onSearchChange?.("")}
          isLoading={isLoading}
          debounce={300}
          className="w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <Button
          type="button"
          variant="outline"
          onClick={onAddFilter}
        >
          + Add Filter
        </Button>
        
        {hasFilters && (
          <Button
            type="button"
            variant="ghost"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-destructive"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
