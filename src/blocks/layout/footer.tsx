import type * as React from "react";
import { cn } from "@/lib/utils";

export interface FooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Footer variant */
  variant?: "default" | "sticky" | "fixed";
  /** Center content */
  center?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const variantClasses = {
  default: "",
  sticky: "sticky bottom-0",
  fixed: "fixed bottom-0 left-0 right-0",
};

export function Footer({ children, variant = "default", center = false, className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t bg-background py-4 px-6",
        variantClasses[variant],
        center && "text-center",
        className
      )}
    >
      {children}
    </footer>
  );
}

export default Footer;
