import * as React from 'react';
import { PackageOpen, type LucideIcon } from 'lucide-react'

import { Button } from '@/primitives/button'
import { cn } from '@/lib/utils'

export interface EmptyStateAction {
  /** Button label */
  label: string
  /** Click handler */
  onClick: () => void
  /** Button variant */
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  /** Icon to show alongside label */
  icon?: React.ReactNode
}

export interface EmptyStateProps {
  /** Title text */
  title: string
  /** Descriptive message */
  description?: string
  /** Icon to display (defaults to PackageOpen) */
  icon?: LucideIcon
  /** Primary action button */
  action?: EmptyStateAction
  /** Secondary action button */
  secondaryAction?: EmptyStateAction
  /** Compact mode for inline empty states */
  compact?: boolean
  /** Additional CSS classes */
  className?: string
}

export function EmptyState({
  title,
  description,
  icon: Icon = PackageOpen,
  action,
  secondaryAction,
  compact = false,
  className,
}: EmptyStateProps) {
  if (compact) {
    return (
      <div className={cn('flex flex-col items-center justify-center p-6 text-center', className)}>
        <Icon className="h-8 w-8 text-muted-foreground/60" strokeWidth={1.5} />
        <h3 className="mt-3 text-sm font-medium">{title}</h3>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
        {action && (
          <Button
            size="sm"
            variant={action.variant || 'outline'}
            className="mt-3"
            onClick={action.onClick}
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center',
        className
      )}
    >
      <div className="rounded-full bg-muted p-3">
        <Icon className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {(action || secondaryAction) && (
        <div className="mt-6 flex items-center gap-3">
          {action && (
            <Button variant={action.variant || 'default'} onClick={action.onClick}>
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant={secondaryAction.variant || 'outline'}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.icon && <span className="mr-2">{secondaryAction.icon}</span>}
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default EmptyState
