import * as React from "react";

import { Badge } from "@/primitives/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/primitives/card";
import { Progress } from "@/primitives/progress";
import { cn } from "@/lib/utils";

export interface EntityCardProps {
  /** The entity name/title - required */
  title: string;
  /** Optional subtitle or secondary text */
  subtitle?: string;
  /** Optional description text */
  description?: string;
  /** Status badge configuration */
  status?: {
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
    className?: string;
  };
  /** Progress value (0-100) */
  progress?: number;
  /** Optional avatar or image */
  avatar?: React.ReactNode;
  /** Metadata key-value pairs */
  metadata?: Array<{ label: string; value: string }>;
  /** Action buttons or content */
  actions?: React.ReactNode;
  /** Click handler for the whole card */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const statusVariants = {
  default: "bg-primary/10 text-primary",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive/10 text-destructive",
  outline: "border",
  success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
} as const;

export function EntityCard({
  title,
  subtitle,
  description,
  status,
  progress,
  avatar,
  metadata,
  actions,
  onClick,
  className,
}: EntityCardProps) {
  return (
    <Card
      className={cn(
        "transition-colors",
        onClick && "cursor-pointer hover:bg-muted/50",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 min-w-0">
            {avatar && <div className="shrink-0">{avatar}</div>}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base truncate">{title}</CardTitle>
                {status && (
                  <Badge
                    variant={status.variant || "secondary"}
                    className="shrink-0 text-xs"
                  >
                    {status.label}
                  </Badge>
                )}
              </div>
              {subtitle && (
                <CardDescription className="text-sm">{subtitle}</CardDescription>
              )}
            </div>
          </div>
        </div>
        {description && (
          <CardDescription className="text-sm line-clamp-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {(progress !== undefined || metadata) && (
        <CardContent className="space-y-3">
          {progress !== undefined && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
          {metadata && metadata.length > 0 && (
            <div className="grid grid-cols-2 gap-2 text-sm">
              {metadata.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium truncate">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      )}
      {actions && (
        <CardContent className="pt-0">
          <div className="flex gap-2">{actions}</div>
        </CardContent>
      )}
    </Card>
  );
}

export default EntityCard;
