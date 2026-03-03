import React from "react";
import { cn } from "@/lib/utils";

export interface DataGridColumn {
  /** Unique identifier */
  id: string;
  /** Column header label */
  label: string;
  /** Width hint (e.g., '100px', '20%', 'auto') */
  width?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
}

export interface DataGridRow {
  /** Unique identifier */
  id: string;
  /** Cell values keyed by column id */
  cells: Record<string, React.ReactNode>;
}

export interface DataGridProps {
  /** Column definitions */
  columns: DataGridColumn[];
  /** Row data */
  rows: DataGridRow[];
  /** Show header row */
  showHeader?: boolean;
  /** Striped rows */
  striped?: boolean;
  /** Hover effect */
  hoverable?: boolean;
  /** Click handler for rows */
  onRowClick?: (row: DataGridRow) => void;
  className?: string;
}

export function DataGrid({
  columns,
  rows,
  showHeader = true,
  striped = false,
  hoverable = true,
  onRowClick,
  className,
}: DataGridProps) {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        {showHeader && (
          <thead className="border-b bg-muted/50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "h-10 px-2 text-left font-medium text-muted-foreground",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right"
                  )}
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row)}
              className={cn(
                "border-b transition-colors",
                striped && rowIndex % 2 === 1 && "bg-muted/30",
                hoverable && "hover:bg-muted/50",
                onRowClick && "cursor-pointer"
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.id}
                  className={cn(
                    "p-2",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right"
                  )}
                >
                  {row.cells[column.id]}
                </td>
              ))}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center text-muted-foreground">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
