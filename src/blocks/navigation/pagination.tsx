import * as React from "react";

import { Button } from "@/primitives/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

export interface PaginationProps {
  /** Current page number (1-based) */
  page: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of visible page buttons (odd number recommended) */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Additional CSS classes */
  className?: string;
}

function getPageNumbers(
  current: number,
  total: number,
  siblingCount: number
): (number | "...")[] {
  const totalItems = siblingCount * 2 + 3; // siblings + first + last + current
  const dots: "..." = "...";

  if (total <= totalItems) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 2);
  const rightSiblingIndex = Math.min(current + siblingCount, total - 1);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftItemCount = siblingCount * 2 + 3;
    return [...Array.from({ length: leftItemCount }, (_, i) => i + 1), dots, total];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = siblingCount * 2 + 3;
    return [1, dots, ...Array.from({ length: rightItemCount }, (_, i) => total - rightItemCount + i + 1)];
  }

  return [1, dots, ...Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i), dots, total];
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  className,
}: PaginationProps) {
  const pageNumbers = getPageNumbers(page, totalPages, siblingCount);

  if (totalPages <= 1) return null;

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="Pagination"
    >
      {showFirstLast && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          aria-label="First page"
        >
          <ChevronsLeftIcon className="h-4 w-4" />
        </Button>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>

      {pageNumbers.map((item) =>
        item === "..." ? (
          <span
            key="ellipsis"
            className="px-2 text-muted-foreground"
            aria-hidden="true"
          >
            ...
          </span>
        ) : (
          <Button
            key={item}
            variant={page === item ? "default" : "ghost"}
            size="icon"
            onClick={() => onPageChange(item)}
            aria-label={`Page ${item}`}
            aria-current={page === item ? "page" : undefined}
          >
            {item}
          </Button>
        )
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      {showFirstLast && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          aria-label="Last page"
        >
          <ChevronsRightIcon className="h-4 w-4" />
        </Button>
      )}
    </nav>
  );
}

export default Pagination;
