import type * as React from "react";
import { cn } from "@/lib/utils";

export interface CardGridProps {
  /** Grid columns (1-6) */
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Gap between cards */
  gap?: "sm" | "md" | "lg";
  /** Card content */
  children: React.ReactNode;
  className?: string;
}

const gapSizes = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const columnSizes = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export function CardGrid({ columns = 3, gap = "md", children, className }: CardGridProps) {
  return (
    <div className={cn("grid", columnSizes[columns], gapSizes[gap], className)}>{children}</div>
  );
}

export default CardGrid;
