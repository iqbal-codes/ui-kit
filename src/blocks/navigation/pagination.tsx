"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import {
  Pagination as PaginationPrimitive,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/primitives/pagination";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

/**
 * Pagination component with smart page calculation
 * 
 * A comprehensive pagination component that handles:
 * - Page number calculation with ellipsis
 * - First/Last page navigation (optional)
 * - Previous/Next navigation
 * - Disabled states for boundaries
 * - Accessibility (ARIA labels)
 * 
 * @example
 * ```tsx
 * <Pagination
 *   page={currentPage}
 *   totalPages={100}
 *   onPageChange={(page) => setPage(page)}
 *   siblingCount={1}
 *   showFirstLast
 * />
 * ```
 */
export interface PaginationProps {
  /** Current page number (1-based) */
  page: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of visible page buttons on each side of current page */
  siblingCount?: number;
  /** Show first/last page buttons with chevrons */
  showFirstLast?: boolean;
  /** Compact mode - hides page numbers, shows only prev/next */
  compact?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Calculate visible page numbers with ellipsis
 * 
 * Algorithm:
 * - Shows first page, last page, current page
 * - Shows siblingCount pages on each side of current
 * - Uses ellipsis (...) when pages are skipped
 * 
 * @example
 * ```
 * Page 50 of 100, siblingCount=1: [1, "...", 49, 50, 51, "...", 100]
 * Page 3 of 10, siblingCount=1: [1, 2, 3, 4, 5, "...", 10]
 * Page 8 of 10, siblingCount=1: [1, "...", 6, 7, 8, 9, 10]
 * ```
 */
function getPageNumbers(
  current: number,
  total: number,
  siblingCount: number
): (number | "...")[] {
  const totalItems = siblingCount * 2 + 3; // siblings + first + last + current
  const dots: "..." = "...";

  // If total pages fit within visible range, show all
  if (total <= totalItems) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 2);
  const rightSiblingIndex = Math.min(current + siblingCount, total - 1);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < total - 1;

  // Near start: [1, 2, 3, 4, 5, "...", 100]
  if (!showLeftDots && showRightDots) {
    const leftItemCount = siblingCount * 2 + 3;
    return [
      ...Array.from({ length: leftItemCount }, (_, i) => i + 1),
      dots,
      total,
    ];
  }

  // Near end: [1, "...", 96, 97, 98, 99, 100]
  if (showLeftDots && !showRightDots) {
    const rightItemCount = siblingCount * 2 + 3;
    return [
      1,
      dots,
      ...Array.from(
        { length: rightItemCount },
        (_, i) => total - rightItemCount + i + 1
      ),
    ];
  }

  // Middle: [1, "...", 49, 50, 51, "...", 100]
  return [
    1,
    dots,
    ...Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    ),
    dots,
    total,
  ];
}

/**
 * Smart Pagination Component
 * 
 * Uses primitive pagination components with added logic for:
 * - Page number calculation
 * - Boundary handling
 * - First/Last page buttons
 * - Compact mode
 */
export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  compact = false,
  className,
}: PaginationProps) {
  const pageNumbers = getPageNumbers(page, totalPages, siblingCount);

  // Don't render if only one page
  if (totalPages <= 1) return null;

  // Compact mode: only prev/next buttons
  if (compact) {
    return (
      <PaginationPrimitive className={cn("gap-1", className)}>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <span className="text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </PaginationPrimitive>
    );
  }

  // Full mode: with page numbers and optional first/last
  return (
    <PaginationPrimitive className={cn("gap-1", className)}>
      <PaginationContent>
        {/* First Page Button */}
        {showFirstLast && (
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(1)}
              disabled={page === 1}
              aria-label="First page"
            >
              <ChevronsLeftIcon className="h-4 w-4" />
            </Button>
          </PaginationItem>
        )}

        {/* Previous Page Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) onPageChange(page - 1);
            }}
            className={cn(page === 1 && "pointer-events-none opacity-50")}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pageNumbers.map((item) =>
          item === "..." ? (
            <PaginationItem key="ellipsis">
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item);
                }}
                isActive={page === item}
                aria-label={`Go to page ${item}`}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next Page Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) onPageChange(page + 1);
            }}
            className={cn(page === totalPages && "pointer-events-none opacity-50")}
          />
        </PaginationItem>

        {/* Last Page Button */}
        {showFirstLast && (
          <PaginationItem>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(totalPages)}
              disabled={page === totalPages}
              aria-label="Last page"
            >
              <ChevronsRightIcon className="h-4 w-4" />
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationPrimitive>
  );
}

export default Pagination;
