import type * as React from "react";
import { cn } from "@/lib/utils";

export interface AspectRatioProps {
  /** Content to display */
  children?: React.ReactNode;
  /** Aspect ratio (default: 16/9) */
  ratio?: "square" | "video" | "photo" | "wide" | "golden" | number;
  /** Additional CSS classes */
  className?: string;
}

const ratioValues: Record<string, number> = {
  square: 1, // 1:1
  video: 16 / 9, // 16:9
  photo: 4 / 3, // 4:3
  wide: 21 / 9, // 21:9
  golden: 1.618, // golden ratio
};

export function AspectRatio({ children, ratio = "video", className }: AspectRatioProps) {
  const ratioValue = typeof ratio === "number" ? ratio : ratioValues[ratio] || 16 / 9;

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ paddingBottom: `${(1 / ratioValue) * 100}%` }}
    >
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
}

export default AspectRatio;
