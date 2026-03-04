import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps {
  /** Stack content */
  children: React.ReactNode;
  /** Stack direction */
  direction?: "horizontal" | "vertical";
  /** Gap between items (default: 4 = 1rem) */
  gap?: number;
  /** Align items on cross axis */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Justify items on main axis */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Allow items to wrap */
  wrap?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function Stack({
  children,
  direction = "vertical",
  gap = 4,
  align,
  justify,
  wrap = false,
  fullWidth = false,
  className,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        align && alignClasses[align],
        justify && justifyClasses[justify],
        wrap && "flex-wrap",
        fullWidth && "w-full",
        className
      )}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {children}
    </div>
  );
}

/**
 * Horizontal Stack - items arranged in a row
 */
export function HStack(props: Omit<StackProps, "direction">) {
  return <Stack {...props} direction="horizontal" />;
}

/**
 * Vertical Stack - items arranged in a column
 */
export function VStack(props: Omit<StackProps, "direction">) {
  return <Stack {...props} direction="vertical" />;
}

export default Stack;
