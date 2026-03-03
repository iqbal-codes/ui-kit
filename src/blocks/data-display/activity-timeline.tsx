import { CircleIcon, ClockIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  /** Unique identifier */
  id: string;
  /** Title of the activity */
  title: string;
  /** Optional description */
  description?: string;
  /** Timestamp */
  timestamp?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Status variant */
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export interface ActivityTimelineProps {
  /** Timeline items */
  items: TimelineItem[];
  /** Show timestamps */
  showTimestamp?: boolean;
  /** Compact variant */
  compact?: boolean;
  className?: string;
}

const variantStyles = {
  default: "bg-muted",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

export function ActivityTimeline({
  items,
  showTimestamp = true,
  compact = false,
  className,
}: ActivityTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn("relative flex gap-4", !compact && "pb-8", compact && "pb-4 last:pb-0")}
        >
          {/* Line connector */}
          {index !== items.length - 1 && (
            <div
              className={cn("absolute left-[11px] top-6 h-full w-0.5 bg-muted", compact && "top-4")}
            />
          )}

          {/* Icon dot */}
          <div
            className={cn(
              "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
              variantStyles[item.variant || "default"]
            )}
          >
            {item.icon ? (
              <span className="h-3 w-3 text-white">{item.icon}</span>
            ) : (
              <CircleIcon className="h-2 w-2 text-white" />
            )}
          </div>

          {/* Content */}
          <div className={cn("flex-1 space-y-1", compact && "space-y-0.5")}>
            <p className={cn("text-sm font-medium", compact && "text-xs")}>{item.title}</p>
            {item.description && (
              <p className={cn("text-sm text-muted-foreground", compact && "text-xs")}>
                {item.description}
              </p>
            )}
            {showTimestamp && item.timestamp && (
              <p
                className={cn(
                  "flex items-center gap-1 text-xs text-muted-foreground",
                  compact && "text-[10px]"
                )}
              >
                <ClockIcon className="h-3 w-3" />
                {item.timestamp}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;
