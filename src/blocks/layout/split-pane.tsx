import { GripVerticalIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SplitPaneProps {
  /** Primary panel content */
  primary: React.ReactNode;
  /** Secondary panel content */
  secondary: React.ReactNode;
  /** Initial split ratio (0-100) */
  initialRatio?: number;
  /** Minimum primary panel width in pixels */
  minPrimaryWidth?: number;
  /** Minimum secondary panel width in pixels */
  minSecondaryWidth?: number;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function SplitPane({
  primary,
  secondary,
  initialRatio = 50,
  minPrimaryWidth = 200,
  minSecondaryWidth = 200,
  orientation = "horizontal",
  className,
}: SplitPaneProps) {
  const [ratio, setRatio] = React.useState(initialRatio);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = orientation === "horizontal" ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newRatio: number;

      if (orientation === "horizontal") {
        newRatio = ((e.clientX - rect.left) / rect.width) * 100;
      } else {
        newRatio = ((e.clientY - rect.top) / rect.height) * 100;
      }

      // Apply min width constraints
      const containerSize = orientation === "horizontal" ? rect.width : rect.height;
      const minPrimaryPercent = (minPrimaryWidth / containerSize) * 100;
      const minSecondaryPercent = (minSecondaryWidth / containerSize) * 100;

      newRatio = Math.max(minPrimaryPercent, Math.min(100 - minSecondaryPercent, newRatio));
      setRatio(newRatio);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [orientation, minPrimaryWidth, minSecondaryWidth]);

  const isHorizontal = orientation === "horizontal";

  return (
    <div
      ref={containerRef}
      className={cn("flex", isHorizontal ? "flex-row" : "flex-col", className)}
    >
      {/* Primary panel */}
      <div className="overflow-auto" style={{ [isHorizontal ? "width" : "height"]: `${ratio}%` }}>
        {primary}
      </div>

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className={cn(
          "flex shrink-0 items-center justify-center bg-muted hover:bg-primary/10 cursor-col-resize",
          isHorizontal ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize"
        )}
      >
        <GripVerticalIcon className={cn("text-muted-foreground", !isHorizontal && "rotate-90")} />
      </div>

      {/* Secondary panel */}
      <div
        className="overflow-auto"
        style={{ [isHorizontal ? "width" : "height"]: `${100 - ratio}%` }}
      >
        {secondary}
      </div>
    </div>
  );
}

export default SplitPane;
