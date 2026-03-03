import React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/primitives/sheet";

export interface RightDrawerProps {
  /** Whether drawer is open */
  open?: boolean;
  /** Callback when open changes */
  onOpenChange?: (open: boolean) => void;
  /** Drawer title */
  title?: string;
  /** Drawer description */
  description?: string;
  /** Drawer width */
  width?: "sm" | "md" | "lg" | "xl";
  /** Drawer content */
  children: React.ReactNode;
  /** Show close button */
  showClose?: boolean;
  className?: string;
}

const widthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export function RightDrawer({
  open,
  onOpenChange,
  title,
  description,
  width = "md",
  children,
  showClose = true,
  className,
}: RightDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={cn(widthClasses[width], "overflow-y-auto", className)}>
        {(title || showClose) && (
          <SheetHeader className="mb-4">
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
      </SheetContent>
    </Sheet>
  );
}

export default RightDrawer;
