"use client"

import * as React from "react"
import { TrendingDown, TrendingUp, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/atom/card"

export interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    label?: string
    positive?: boolean
  }
  icon?: LucideIcon
  className?: string
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ title, value, description, trend, icon: Icon, className }, ref) => {
    const TrendIcon = trend?.positive ? TrendingUp : TrendingDown
    const trendColor = trend?.positive ? "text-green-600" : "text-red-600"

    return (
      <Card ref={ref} className={cn("", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          {(description || trend) && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {trend && (
                <span className={cn("flex items-center gap-1", trendColor)}>
                  <TrendIcon className="h-3 w-3" />
                  {trend.value}%
                  {trend.label && (
                    <span className="text-muted-foreground">{trend.label}</span>
                  )}
                </span>
              )}
              {description && <span>{description}</span>}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)
StatsCard.displayName = "StatsCard"

export { StatsCard }
