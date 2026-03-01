"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/atom/input"
import { Button } from "@/atom/button"

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void
  onClear?: () => void
  debounceMs?: number
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onChange, onClear, debounceMs = 300, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || props.defaultValue || "")
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        onChange?.(newValue)
      }, debounceMs)
    }

    const handleClear = () => {
      setValue("")
      onChange?.("")
      onClear?.()
    }

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    return (
      <div className={cn("relative flex items-center", className)}>
        <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          ref={ref}
          type="text"
          className="pl-9 pr-8"
          value={value}
          onChange={handleChange}
          {...props}
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 h-6 w-6 px-0"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
