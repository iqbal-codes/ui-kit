"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/atom/label"
import { Input } from "@/atom/input"

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  error?: string
  required?: boolean
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, helperText, error, required, id, ...props }, ref) => {
    const inputId = id || props.name
    const errorId = error ? `${inputId}-error` : undefined
    const helperId = helperText ? `${inputId}-helper` : undefined
    const describedBy = errorId || helperId

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={inputId} className="flex items-center gap-1">
          {label}
          {required && <span className="text-destructive" aria-hidden="true">*</span>}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          aria-required={required}
          {...props}
        />
        {error ? (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)
InputField.displayName = "InputField"

export { InputField }
