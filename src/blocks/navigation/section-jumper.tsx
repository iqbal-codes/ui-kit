import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";

export interface SectionJumperSection {
  /** Unique identifier */
  id: string;
  /** Section label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
}

export interface SectionJumperProps {
  /** Sections to jump to */
  sections: SectionJumperSection[];
  /** Currently active section */
  activeSection?: string;
  /** Section click handler */
  onSectionClick?: (id: string) => void;
  /** Show icons */
  showIcons?: boolean;
  className?: string;
}

export function SectionJumper({
  sections,
  activeSection,
  onSectionClick,
  showIcons = true,
  className,
}: SectionJumperProps) {
  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <Button
            key={section.id}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => onSectionClick?.(section.id)}
            className={cn("gap-1", !isActive && "text-muted-foreground")}
          >
            {showIcons && section.icon}
            {section.label}
            <ChevronRightIcon className="h-3 w-3" />
          </Button>
        );
      })}
    </div>
  );
}

export default SectionJumper;
