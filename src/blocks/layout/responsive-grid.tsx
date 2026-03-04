"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveGridProps {
  /** Grid items */
  children: React.ReactNode;
  /** Number of columns at each breakpoint */
  columns?: {
    /** Columns on mobile (default: 1) */
    mobile?: number;
    /** Columns on tablet (default: 2) */
    tablet?: number;
    /** Columns on desktop (default: 3) */
    desktop?: number;
    /** Columns on large screens (default: 4) */
    wide?: number;
  };
  /** Gap between grid items (default: 4 = 1rem) */
  gap?: number;
  /** Additional CSS classes */
  className?: string;
}

const defaultColumns = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  wide: 4,
};

/**
 * ResponsiveGrid - A grid that automatically adjusts columns based on viewport
 *
 * @example
 * <ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 3, wide: 4 }} gap={4}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </ResponsiveGrid>
 */
export function ResponsiveGrid({
  children,
  columns = defaultColumns,
  gap = 4,
  className,
}: ResponsiveGridProps) {
  const mobile = columns.mobile ?? 1;
  const tablet = columns.tablet ?? 2;
  const desktop = columns.desktop ?? 3;
  const wide = columns.wide ?? 4;

  return (
    <div
      className={cn(
        "grid",
        `grid-cols-${mobile}`,
        tablet !== mobile && `sm:grid-cols-${tablet}`,
        desktop !== tablet && `lg:grid-cols-${desktop}`,
        wide !== desktop && `xl:grid-cols-${wide}`,
        className
      )}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {children}
    </div>
  );
}

/**
 * @deprecated Use ResponsiveGrid instead
 */
export function AutoGrid(props: ResponsiveGridProps) {
  return <ResponsiveGrid {...props} />;
}

export default ResponsiveGrid;
