import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';

import { Badge } from '@/primitives/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/primitives/card'
import { cn } from '@/lib/utils'

export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatCardProps {
  /** Card title (metric name) */
  title: string;
  /** Current value to display */
  value: string | number;
  /** Optional description below title */
  description?: string;
  /** Trend direction for indicator */
  trend?: {
    direction: TrendDirection;
    value: string;
    label?: string;
  };
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

function TrendBadge({
  direction,
  value,
  label,
}: {
  direction: TrendDirection;
  value: string;
  label?: string;
}) {
  const icons = {
    up: ArrowUpIcon,
    down: ArrowDownIcon,
    neutral: MinusIcon,
  };

  const variants = {
    up: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    down: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };

  const Icon = icons[direction];

  return (
    <Badge variant="outline" className={cn('gap-1 font-normal', variants[direction])}>
      <Icon className="h-3 w-3" />
      <span>{value}</span>
      {label && <span className="text-muted-foreground">{label}</span>}
    </Badge>
  );
}

export function StatCard({
  title,
  value,
  description,
  trend,
  className,
  onClick,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        'transition-colors',
        onClick && 'cursor-pointer hover:bg-muted/50',
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
        </div>
        {trend && (
          <TrendBadge
            direction={trend.direction}
            value={trend.value}
            label={trend.label}
          />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
}

export default StatCard;
