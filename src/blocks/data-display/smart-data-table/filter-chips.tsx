"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";
import { Button } from "@/primitives/button";
import type { FilterChipsProps } from "./types";

/**
 * FilterChips - Bottom row displaying active filter chips
 *
 * Layout:
 * - Chips wrap horizontally
 * - Each chip has label = value format with remove button
 * - Clear All button at the end (optional)
 */
export function FilterChips({ filters, onRemoveFilter, onClearAll, className }: FilterChipsProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2 py-2", className)}>
      {/* Filter Chips */}
      {filters.map((filter) => (
        <Badge
          key={filter.field}
          variant="secondary"
          className="flex items-center gap-1.5 px-2.5 py-1.5 h-auto font-normal"
        >
          <span className="text-muted-foreground">{filter.label}:</span>
          <span className="font-medium">{filter.displayValue}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-4 w-4 hover:bg-transparent"
            onClick={() => onRemoveFilter(filter.field)}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </Badge>
      ))}

      {/* Clear All Button */}
      {onClearAll && filters.length > 1 && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="h-auto text-muted-foreground hover:text-destructive"
        >
          Clear All
        </Button>
      )}
    </div>
  );
}

export default FilterChips;
