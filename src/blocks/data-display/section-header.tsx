import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/primitives/card";

export interface SectionHeaderProps {
  /** The section title - required */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional action button configuration */
  action?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    icon?: React.ReactNode;
  };
  /** Optional icon or badge before title */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function SectionHeader({ title, description, action, icon, className }: SectionHeaderProps) {
  return (
    <Card className={cn("border-0 shadow-none bg-transparent", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-0 pb-4">
        <div className="flex items-center gap-3">
          {icon && <div className="flex items-center">{icon}</div>}
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
            {description && <CardDescription className="text-sm">{description}</CardDescription>}
          </div>
        </div>
        {action && (
          <Button
            variant={action.variant || "default"}
            size="sm"
            onClick={action.onClick}
            className="shrink-0"
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        )}
      </CardHeader>
      <CardContent className="px-0" />
    </Card>
  );
}

export default SectionHeader;
