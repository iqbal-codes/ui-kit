import * as React from "react";

import { Spinner } from "@/primitives/spinner";
import { cn } from "@/lib/utils";

export interface LoadingOverlayProps {
  /** Show/hide the overlay */
  isLoading: boolean;
  /** Optional message to display */
  message?: string;
  /** Optional description text */
  description?: string;
  /** Full screen or inline mode */
  fullScreen?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Children content (hidden when loading) */
  children?: React.ReactNode;
}

export function LoadingOverlay({
  isLoading,
  message,
  description,
  fullScreen = false,
  className,
  children,
}: LoadingOverlayProps) {
  return (
    <div className={cn("relative", className)}>
      {children && (
        <div
          className={cn(
            "transition-opacity duration-200",
            isLoading && "opacity-50 pointer-events-none"
          )}
        >
          {children}
        </div>
      )}
      {isLoading && (
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-3",
            fullScreen
              ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              : "absolute inset-0 bg-background/60 backdrop-blur-sm"
          )}
        >
          <Spinner className="size-8" />
          {message && (
            <p className="text-sm font-medium text-foreground">{message}</p>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default LoadingOverlay;
