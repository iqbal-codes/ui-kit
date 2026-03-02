import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusItem {
  /** Unique identifier */
  id: string;
  /** Status label */
  label: string;
  /** Count value */
  count: number;
  /** Color variant */
  variant: "default" | "success" | "warning" | "error" | "info";
}

export interface StatusGridProps {
  /** Status items to display */
  items: StatusItem[];
  /** Total count for percentage calculation */
  total?: number;
  /** Show progress ring */
  showProgress?: boolean;
  /** Size of progress ring */
  ringSize?: "sm" | "md" | "lg";
  className?: string;
}

const variantColors = {
  default: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

const ringSizes = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20",
};

export function StatusGrid({
  items,
  total,
  showProgress = true,
  ringSize = "md",
  className,
}: StatusGridProps) {
  const totalCount = total ?? items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {items.map((item) => {
        const percentage = totalCount > 0 ? (item.count / totalCount) * 100 : 0;

        return (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 rounded-lg border bg-card"
          >
            {showProgress && (
              <div className={cn("relative shrink-0", ringSizes[ringSize])}>
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-muted"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className={cn("stroke-current", variantColors[item.variant])}
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={cn("font-bold", ringSize === "sm" && "text-xs", ringSize === "md" && "text-sm", ringSize === "lg" && "text-base")}>
                    {Math.round(percentage)}%
                  </span>
                </div>
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{item.label}</p>
              <p className={cn("text-2xl font-bold", `text-${item.variant}`)}>
                {item.count}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatusGrid;
