"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/atom/dropdown-menu"
import { Button } from "@/atom/button"

export interface ActionMenuItem {
  label: string
  onClick: () => void
  disabled?: boolean
  destructive?: boolean
}

export interface ActionMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  actions: ActionMenuItem[]
  align?: "start" | "center" | "end"
  label?: string
}

const ActionMenu = React.forwardRef<HTMLDivElement, ActionMenuProps>(
  ({ className, actions, align = "end", label = "Actions", ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">{label}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={align}>
            {actions.map((action, index) => (
              <DropdownMenuItem
                key={index}
                onClick={action.onClick}
                disabled={action.disabled}
                className={cn(
                  action.destructive && "text-destructive focus:text-destructive"
                )}
              >
                {action.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
)
ActionMenu.displayName = "ActionMenu"

export { ActionMenu }
