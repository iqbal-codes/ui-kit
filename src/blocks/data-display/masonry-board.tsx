import * as React from "react";
import { cn } from "@/lib/utils";

export interface MasonryItem {
  /** Unique identifier */
  id: string;
  /** Item content */
  content: React.ReactNode;
  /** Optional height hint for better layout */
  heightHint?: number;
}

export interface MasonryBoardProps {
  /** Items to display */
  items: MasonryItem[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Gap between items */
  gap?: number;
  className?: string;
}

export function MasonryBoard({
  items,
  columns = 3,
  gap = 4,
  className,
}: MasonryBoardProps) {
  // Distribute items into columns
  const columnArrays = React.useMemo(() => {
    const cols: MasonryItem[][] = Array.from({ length: columns }, () => []);
    const heights: number[] = Array(columns).fill(0);

    items.forEach((item) => {
      // Find column with minimum height
      const minHeightIndex = heights.indexOf(Math.min(...heights));
      cols[minHeightIndex].push(item);
      heights[minHeightIndex] += item.heightHint || 200;
    });

    return cols;
  }, [items, columns]);

  return (
    <div
      className={cn("grid", `grid-cols-${columns}`, className)}
      style={{ gap: `${gap * 4}px` }}
    >
      {columnArrays.map((column, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col"
          style={{ gap: `${gap * 4}px` }}
        >
          {column.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MasonryBoard;
