"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface LoadingOverlayProps {
  loading: boolean
  children: React.ReactNode
  className?: string
  spinnerClassName?: string
  text?: string
}

const LoadingOverlay = ({
  loading,
  children,
  className,
  spinnerClassName,
  text,
}: LoadingOverlayProps) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-background/80 backdrop-blur-sm">
          <Loader2 className={cn("h-8 w-8 animate-spin text-primary", spinnerClassName)} />
          {text && <p className="text-sm text-muted-foreground">{text}</p>}
        </div>
      )}
    </div>
  )
}

export { LoadingOverlay }
