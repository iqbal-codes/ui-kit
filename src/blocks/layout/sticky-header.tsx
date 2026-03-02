import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Offset from top in pixels */
  offset?: number;
  /** Show border/shadow on scroll */
  showBorder?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function StickyHeader({
  children,
  offset = 0,
  showBorder = true,
  className,
}: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 w-full bg-background transition-all duration-200",
        isScrolled && showBorder && "border-b shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export default StickyHeader;
