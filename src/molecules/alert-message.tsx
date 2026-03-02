"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, XCircle, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/atom/alert"

const alertVariants = cva("", {
  variants: {
    variant: {
      default: "bg-muted text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      success: "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600",
      warning: "border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600",
      info: "border-blue-500/50 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const iconMap: Record<string, LucideIcon> = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertCircle,
  info: Info,
}

export interface AlertMessageProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof alertVariants> {
  title?: string
  description?: string
  icon?: LucideIcon
}

const AlertMessage = React.forwardRef<HTMLDivElement, AlertMessageProps>(
  ({ className, variant = "default", title, description, icon: CustomIcon, children, ...props }, ref) => {
    const Icon = CustomIcon || iconMap[variant || "default"] || Info

    return (
      <Alert ref={ref} variant={variant === "destructive" ? "destructive" : "default"} className={cn(alertVariants({ variant }), className)} {...props}>
        <Icon className="h-4 w-4" />
        {title && <AlertTitle>{title}</AlertTitle>}
        {(description || children) && (
          <AlertDescription>
            {description || children}
          </AlertDescription>
        )}
      </Alert>
    )
  }
)
AlertMessage.displayName = "AlertMessage"

export { AlertMessage }
