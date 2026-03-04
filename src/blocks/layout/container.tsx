import type * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  /** Content to wrap */
  children: React.ReactNode;
  /** Maximum width (default: 'xl' = 1280px) */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /** Padding size (default: 'md') */
  padding?: "none" | "sm" | "md" | "lg";
  /** Center content horizontally */
  center?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-8xl",
  "3xl": "max-w-9xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "",
  sm: "p-2",
  md: "p-4 md:p-6",
  lg: "p-4 md:p-8",
};

export function Container({
  children,
  size = "xl",
  padding = "md",
  center = false,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        center && "flex flex-col items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
