import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/primitives/card";

export type TrendDirection = "up" | "down" | "neutral";

export interface MetricCardProps {
  /** Metric label */
  label: string;
  /** Current value */
  value: string | number;
  /** Previous value for comparison */
  previousValue?: string | number;
  /** Trend direction */
  trend?: TrendDirection;
  /** Trend percentage */
  trendValue?: string;
  /** Optional description */
  description?: string;
  /** Compact variant */
  compact?: boolean;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

const trendConfig = {
  up: {
    icon: ArrowUpIcon,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  down: {
    icon: ArrowDownIcon,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
  neutral: {
    icon: MinusIcon,
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
};

export function MetricCard({
  label,
  value,
  previousValue,
  trend,
  trendValue,
  description,
  compact = false,
  onClick,
  className,
}: MetricCardProps) {
  const trendData = trend ? trendConfig[trend] : null;

  const changePercent = React.useMemo(() => {
    if (!previousValue || !trend) return null;
    const current = typeof value === "number" ? value : parseFloat(String(value));
    const prev =
      typeof previousValue === "number" ? previousValue : parseFloat(String(previousValue));
    if (Number.isNaN(current) || Number.isNaN(prev) || prev === 0) return null;
    return (((current - prev) / prev) * 100).toFixed(1);
  }, [value, previousValue, trend]);

  return (
    <Card
      className={cn("transition-colors", onClick && "cursor-pointer hover:bg-muted/50", className)}
      onClick={onClick}
    >
      <CardHeader className={cn("pb-2", compact && "pb-1")}>
        <div className="flex items-center justify-between">
          <CardDescription className={cn("font-medium text-foreground", compact && "text-sm")}>
            {label}
          </CardDescription>
          {trendData && (
            <Badge variant="outline" className={cn("gap-1 text-xs", trendData.bg, trendData.color)}>
              {trend === "up" && <ArrowUpIcon className="h-3 w-3" />}
              {trend === "down" && <ArrowDownIcon className="h-3 w-3" />}
              {trend === "neutral" && <MinusIcon className="h-3 w-3" />}
              {trendValue || changePercent || "—"}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className={cn("font-bold", compact ? "text-xl" : "text-3xl")}>{value}</div>
        {description && !compact && (
          <CardDescription className="mt-1 text-xs">{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );
}

export default MetricCard;
