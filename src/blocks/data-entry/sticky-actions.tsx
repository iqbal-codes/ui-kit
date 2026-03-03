import type * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyActionsProps {
  /** Action buttons */
  children: React.ReactNode;
  /** Show unsaved changes warning */
  showDirtyWarning?: boolean;
  /** Is the form dirty (has unsaved changes) */
  isDirty?: boolean;
  /** Position */
  position?: "bottom" | "top";
  className?: string;
}

export function StickyActions({
  children,
  showDirtyWarning = false,
  isDirty = false,
  position = "bottom",
  className,
}: StickyActionsProps) {
  return (
    <div
      className={cn(
        "sticky z-30 flex items-center justify-between gap-4 border-t bg-background px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]",
        position === "bottom" && "bottom-0",
        position === "top" && "top-0",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {showDirtyWarning && isDirty && (
          <span className="text-sm text-amber-600 dark:text-amber-400">
            You have unsaved changes
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}

export default StickyActions;
