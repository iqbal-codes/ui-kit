import type * as React from "react";
import { cn } from "@/lib/utils";

export interface CenterProps {
  /** Content to center */
  children: React.ReactNode;
  /** Center horizontally only */
  horizontal?: boolean;
  /** Center vertically only */
  vertical?: boolean;
  /** Full height container */
  fullHeight?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function Center({
  children,
  horizontal = true,
  vertical = true,
  fullHeight = false,
  className,
}: CenterProps) {
  return (
    <div
      className={cn(
        "flex",
        horizontal && "justify-center",
        vertical && "items-center",
        fullHeight && "min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Center;
