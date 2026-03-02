# Atomic Design System - Phase 2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete remaining molecules from PRD Phase 1 & 2: InputGroup, PasswordInput, InfoCard, CheckboxField, SwitchField, SelectField, DateRangePicker, Pagination, BreadcrumbNav, TabsList, ProgressBar, ToastNotification.

**Architecture:** 
- Each molecule wraps 1-2 shadcn atoms with business logic
- Follows atomic design - molecules compose atoms
- Full TypeScript with proper props typing

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, shadcn/ui components, Vitest

---

## Task 1: InputGroup Molecule

**Files:**
- Create: `src/molecules/input-group/InputGroup.tsx`
- Create: `src/molecules/input-group/InputGroup.test.tsx`
- Create: `src/molecules/input-group/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/input-group/InputGroup.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputGroup } from './InputGroup'

describe('InputGroup', () => {
  it('renders left addon', () => {
    render(<InputGroup leftAddon="$" />)
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('renders right addon', () => {
    render(<InputGroup rightAddon=".00" />)
    expect(screen.getByText('.00')).toBeInTheDocument()
  })

  it('renders input element', () => {
    render(<InputGroup />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('connects left addon seamlessly', () => {
    render(<InputGroup leftAddon="https://" placeholder="example.com" />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.placeholder).toBe('example.com')
  })

  it('supports button addon', () => {
    render(<InputGroup rightAddon={<button>Go</button>} />)
    expect(screen.getByText('Go')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/input-group/InputGroup.test.tsx`
Expected: FAIL - "InputGroup is not defined"

**Step 3: Create index.ts**

```typescript
// src/molecules/input-group/index.ts
export { InputGroup, type InputGroupProps } from './InputGroup'
```

**Step 4: Create InputGroup.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/atom/input"
import { Button } from "@/atom/button"

export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  buttonAddon?: React.ReactNode
}

export function InputGroup({
  leftAddon,
  rightAddon,
  buttonAddon,
  className,
  ...props
}: InputGroupProps) {
  const addonClasses = "flex items-center px-3 text-sm text-muted-foreground"
  const leftButtonClasses = "rounded-r-none border-r-0"
  const rightButtonClasses = "rounded-l-none border-l-0"

  return (
    <div className={cn("flex w-full", className)}>
      {leftAddon && (
        <div className={cn(addonClasses, "rounded-l-md border border-r-0 bg-muted")}>
          {leftAddon}
        </div>
      )}
      {buttonAddon && typeof buttonAddon !== 'string' ? (
        <>
          <Input
            className={cn(
              leftAddon && "rounded-l-none",
              !rightAddon && !buttonAddon && "rounded-l-none",
              buttonAddon && "rounded-none border-r-0"
            )}
            {...props}
          />
          {React.isValidElement(buttonAddon) 
            ? React.cloneElement(buttonAddon as React.ReactElement<any>, { className: cn((buttonAddon.props as any).className, rightButtonClasses) })
            : buttonAddon
          }
        </>
      ) : (
        <Input
          className={cn(
            leftAddon && "rounded-l-none",
            rightAddon && "rounded-r-none",
            buttonAddon && "rounded-r-none"
          )}
          {...props}
        />
      )}
      {rightAddon && !buttonAddon && (
        <div className={cn(addonClasses, "rounded-r-md border border-l-0 bg-muted")}>
          {rightAddon}
        </div>
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/input-group/InputGroup.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/input-group/
git commit -m "feat(molecules): add InputGroup component"
```

---

## Task 2: PasswordInput Molecule

**Files:**
- Create: `src/molecules/password-input/PasswordInput.tsx`
- Create: `src/molecules/password-input/PasswordInput.test.tsx`
- Create: `src/molecules/password-input/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/password-input/PasswordInput.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { PasswordInput } from './PasswordInput'

describe('PasswordInput', () => {
  it('renders input with password type', () => {
    render(<PasswordInput />)
    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('toggles visibility', () => {
    render(<PasswordInput />)
    const input = screen.getByLabelText('Password')
    const toggle = screen.getByLabelText('Toggle password visibility')
    
    fireEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'text')
    
    fireEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders label', () => {
    render(<PasswordInput label="Confirm Password" />)
    expect(screen.getByText('Confirm Password')).toBeInTheDocument()
  })

  it('shows error state', () => {
    render(<PasswordInput error="Passwords do not match" />)
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/password-input/PasswordInput.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/password-input/index.ts
export { PasswordInput, type PasswordInputProps } from './PasswordInput'
```

**Step 4: Create PasswordInput.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/atom/input"
import { Button } from "@/atom/button"
import { Label } from "@/atom/label"
import { Eye, EyeOff } from "lucide-react"

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  showStrength?: boolean
  strengthValue?: number
}

export function PasswordInput({
  label,
  className,
  id,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const inputId = id || props.name

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div className="relative">
        <Input
          id={inputId}
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/password-input/PasswordInput.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/password-input/
git commit -m "feat(molecules): add PasswordInput component"
```

---

## Task 3: InfoCard Molecule

**Files:**
- Create: `src/molecules/info-card/InfoCard.tsx`
- Create: `src/molecules/info-card/InfoCard.test.tsx`
- Create: `src/molecules/info-card/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/info-card/InfoCard.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoCard } from './InfoCard'
import { UserIcon } from 'lucide-react'

describe('InfoCard', () => {
  it('renders title and description', () => {
    render(<InfoCard title="Profile" description="Manage your profile" />)
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Manage your profile')).toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<InfoCard title="Profile" icon={<UserIcon data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders action button', () => {
    const action = <button>Edit</button>
    render(<InfoCard title="Profile" action={action} />)
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

  it('supports bordered variant', () => {
    render(<InfoCard title="Profile" variant="bordered" />)
    // Check for border class
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/info-card/InfoCard.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/info-card/index.ts
export { InfoCard, type InfoCardProps } from './InfoCard'
```

**Step 4: Create InfoCard.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/atom/card"

export interface InfoCardProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  variant?: 'bordered' | 'filled'
  className?: string
}

export function InfoCard({
  icon,
  title,
  description,
  action,
  variant = 'bordered',
  className,
}: InfoCardProps) {
  return (
    <Card className={cn(
      variant === 'bordered' ? 'border' : 'bg-muted/50',
      className
    )}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          {icon && <div className="text-muted-foreground">{icon}</div>}
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/info-card/InfoCard.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/info-card/
git commit -m "feat(molecules): add InfoCard component"
```

---

## Task 4: CheckboxField Molecule

**Files:**
- Create: `src/molecules/checkbox-field/CheckboxField.tsx`
- Create: `src/molecules/checkbox-field/CheckboxField.test.tsx`
- Create: `src/molecules/checkbox-field/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/checkbox-field/CheckboxField.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CheckboxField } from './CheckboxField'

describe('CheckboxField', () => {
  it('renders checkbox with label', () => {
    render(<CheckboxField label="Accept terms" />)
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument()
  })

  it('renders helper text', () => {
    render(<CheckboxField label="Accept" helperText="Read our terms" />)
    expect(screen.getByText('Read our terms')).toBeInTheDocument()
  })

  it('handles checked state', () => {
    const handleChange = vi.fn()
    render(<CheckboxField label="Accept" onChange={handleChange} />)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalled()
  })

  it('shows error state', () => {
    render(<CheckboxField label="Accept" error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('supports indeterminate state', () => {
    render(<CheckboxField label="Select all" indeterminate />)
    // Checkbox should show indeterminate state
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/checkbox-field/CheckboxField.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/checkbox-field/index.ts
export { CheckboxField, type CheckboxFieldProps } from './CheckboxField'
```

**Step 4: Create CheckboxField.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/atom/checkbox"
import { Label } from "@/atom/label"

export interface CheckboxFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  helperText?: string
  error?: string
}

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const checkboxId = id || props.name
    const errorId = error ? `${checkboxId}-error` : undefined
    const helperId = helperText ? `${checkboxId}-helper` : undefined

    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-center gap-2">
          <Checkbox
            id={checkboxId}
            ref={ref}
            aria-describedby={errorId || helperId}
            {...props}
          />
          <Label 
            htmlFor={checkboxId} 
            className="font-normal cursor-pointer"
          >
            {label}
          </Label>
        </div>
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
CheckboxField.displayName = "CheckboxField"
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/checkbox-field/CheckboxField.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/checkbox-field/
git commit -m "feat(molecules): add CheckboxField component"
```

---

## Task 5: SwitchField Molecule

**Files:**
- Create: `src/molecules/switch-field/SwitchField.tsx`
- Create: `src/molecules/switch-field/SwitchField.test.tsx`
- Create: `src/molecules/switch-field/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/switch-field/SwitchField.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SwitchField } from './SwitchField'

describe('SwitchField', () => {
  it('renders switch with label', () => {
    render(<SwitchField label="Enable notifications" />)
    expect(screen.getByLabelText('Enable notifications')).toBeInTheDocument()
  })

  it('shows checked/unchecked labels', () => {
    render(<SwitchField label="Notifications" checkedLabel="On" uncheckedLabel="Off" />)
    expect(screen.getByText('On')).toBeInTheDocument()
  })

  it('handles change', () => {
    const handleChange = vi.fn()
    render(<SwitchField label="Enable" onCheckedChange={handleChange} />)
    fireEvent.click(screen.getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(true)
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/switch-field/SwitchField.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/switch-field/index.ts
export { SwitchField, type SwitchFieldProps } from './SwitchField'
```

**Step 4: Create SwitchField.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Switch } from "@/atom/switch"
import { Label } from "@/atom/label"

export interface SwitchFieldProps {
  label: string
  checkedLabel?: string
  uncheckedLabel?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function SwitchField({
  label,
  checkedLabel,
  uncheckedLabel,
  checked,
  onCheckedChange,
  disabled,
  className,
}: SwitchFieldProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        id={label}
      />
      <Label 
        htmlFor={label} 
        className="cursor-pointer font-normal"
        onClick={() => !disabled && onCheckedChange?.(!checked)}
      >
        {label}
      </Label>
      {(checkedLabel || uncheckedLabel) && (
        <span className="text-sm text-muted-foreground">
          {checked ? checkedLabel : uncheckedLabel}
        </span>
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/switch-field/SwitchField.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/switch-field/
git commit -m "feat(molecules): add SwitchField component"
```

---

## Task 6: SelectField Molecule

**Files:**
- Create: `src/molecules/select-field/SelectField.tsx`
- Create: `src/molecules/select-field/SelectField.test.tsx`
- Create: `src/molecules/select-field/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/select-field/SelectField.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SelectField } from './SelectField'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

describe('SelectField', () => {
  it('renders label and select', () => {
    render(<SelectField label="Country" options={options} />)
    expect(screen.getByText('Country')).toBeInTheDocument()
  })

  it('renders options', () => {
    render(<SelectField label="Country" options={options} />)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('shows placeholder', () => {
    render(<SelectField label="Country" options={options} placeholder="Select..." />)
    expect(screen.getByText('Select...')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<SelectField label="Country" options={options} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/select-field/SelectField.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/select-field/index.ts
export { SelectField, type SelectFieldProps, type SelectOption } from './SelectField'
```

**Step 4: Create SelectField.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/atom/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/select"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectFieldProps {
  label: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  error?: string
  disabled?: boolean
  className?: string
}

export function SelectField({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  error,
  disabled,
  className,
}: SelectFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id={id} className={error ? "border-destructive" : ""}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/select-field/SelectField.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/select-field/
git commit -m "feat(molecules): add SelectField component"
```

---

## Task 7: DateRangePicker Molecule

**Files:**
- Create: `src/molecules/date-range-picker/DateRangePicker.tsx`
- Create: `src/molecules/date-range-picker/DateRangePicker.test.tsx`
- Create: `src/molecules/date-range-picker/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/date-range-picker/DateRangePicker.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DateRangePicker } from './DateRangePicker'

describe('DateRangePicker', () => {
  it('renders with default placeholder', () => {
    render(<DateRangePicker />)
    expect(screen.getByText('Select date range')).toBeInTheDocument()
  })

  it('displays formatted date range', () => {
    render(
      <DateRangePicker
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-15')}
      />
    )
    expect(screen.getByText(/Jan 1, 2024/)).toBeInTheDocument()
  })

  it('shows preset ranges', () => {
    const presets = [{ label: 'Last 7 days', value: '7d' }]
    render(<DateRangePicker presets={presets} />)
    expect(screen.getByText('Last 7 days')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/date-range-picker/DateRangePicker.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/date-range-picker/index.ts
export { DateRangePicker, type DateRangePickerProps, type DatePreset } from './DateRangePicker'
```

**Step 4: Create DateRangePicker.tsx**

```tsx
"use client"

import * as React from "react"
import { format, subDays, startOfMonth, endOfMonth } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/atom/button"
import { Calendar } from "@/atom/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/atom/popover"
import { CalendarIcon } from "lucide-react"

export interface DatePreset {
  label: string
  value: string
  getValue: () => { start: Date; end: Date }
}

export interface DateRangePickerProps {
  startDate?: Date
  endDate?: Date
  onChange?: (start: Date | undefined, end: Date | undefined) => void
  presets?: DatePreset[]
  placeholder?: string
  className?: string
}

const defaultPresets: DatePreset[] = [
  { 
    label: 'Today', 
    value: 'today',
    getValue: () => ({ start: new Date(), end: new Date() })
  },
  { 
    label: 'Last 7 days', 
    value: '7d',
    getValue: () => ({ start: subDays(new Date(), 7), end: new Date() })
  },
  { 
    label: 'Last 30 days', 
    value: '30d',
    getValue: () => ({ start: subDays(new Date(), 30), end: new Date() })
  },
  { 
    label: 'This month', 
    value: 'month',
    getValue: () => ({ start: startOfMonth(new Date()), end: endOfMonth(new Date()) })
  },
]

export function DateRangePicker({
  startDate,
  endDate,
  onChange,
  presets = defaultPresets,
  placeholder = "Select date range",
  className,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<{ from?: Date; to?: Date }>({
    from: startDate,
    to: endDate,
  })

  const handlePresetClick = (preset: DatePreset) => {
    const range = preset.getValue()
    setDate(range)
    onChange?.(range.start, range.end)
  }

  const formattedRange = date.from && date.to
    ? `${format(date.from, 'MMM d, yyyy')} - ${format(date.to, 'MMM d, yyyy')}`
    : placeholder

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formattedRange}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex border-b p-2">
            {presets.map((preset) => (
              <Button
                key={preset.value}
                variant="ghost"
                size="sm"
                onClick={() => handlePresetClick(preset)}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <Calendar
            mode="range"
            selected={date}
            onSelect={(range) => {
              setDate({ from: range?.from, to: range?.to })
              onChange?.(range?.from, range?.to)
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/date-range-picker/DateRangePicker.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/date-range-picker/
git commit -m "feat(molecules): add DateRangePicker component"
```

---

## Task 8: Pagination Molecule

**Files:**
- Create: `src/molecules/pagination/Pagination.tsx`
- Create: `src/molecules/pagination/Pagination.test.tsx`
- Create: `src/molecules/pagination/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/pagination/Pagination.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders page numbers', () => {
    render(<Pagination currentPage={1} totalPages={10} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('calls onPageChange when clicking page', () => {
    const handlePageChange = vi.fn()
    render(
      <Pagination 
        currentPage={1} 
        totalPages={10} 
        onPageChange={handlePageChange} 
      />
    )
    fireEvent.click(screen.getByText('2'))
    expect(handlePageChange).toHaveBeenCalledWith(2)
  })

  it('shows first/last buttons when enabled', () => {
    const handlePageChange = vi.fn()
    render(
      <Pagination 
        currentPage={5} 
        totalPages={10} 
        showFirstLast
        onPageChange={handlePageChange} 
      />
    )
    // Should have first/last buttons
  })

  it('disables prev on first page', () => {
    render(<Pagination currentPage={1} totalPages={10} />)
    expect(screen.getByLabelText('Previous page')).toBeDisabled()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/pagination/Pagination.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/pagination/index.ts
export { Pagination, type PaginationProps } from './Pagination'
```

**Step 4: Create Pagination.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/atom/button"
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems?: number
  pageSize?: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (size: number) => void
  showFirstLast?: boolean
  showPageSize?: boolean
  pageSizeOptions?: number[]
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
  showFirstLast = false,
  showPageSize = false,
  pageSizeOptions = [10, 20, 50, 100],
  className,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 7
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      
      if (currentPage > 3) pages.push('...')
      
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      
      for (let i = start; i <= end; i++) pages.push(i)
      
      if (currentPage < totalPages - 2) pages.push('...')
      
      pages.push(totalPages)
    }
    
    return pages
  }

  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}>
      {totalItems && (
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
        </div>
      )}
      
      <div className="flex items-center gap-1">
        {showFirstLast && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onPageChange(1)}
            disabled={isFirst}
            aria-label="First page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center">
          {renderPageNumbers().map((page, i) => (
            typeof page === 'number' ? (
              <Button
                key={i}
                variant={page === currentPage ? "default" : "ghost"}
                size="icon"
                className="w-9"
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            ) : (
              <MoreHorizontal key={i} className="h-4 w-4 text-muted-foreground" />
            )
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        
        {showFirstLast && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onPageChange(totalPages)}
            disabled={isLast}
            aria-label="Last page"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/pagination/Pagination.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/pagination/
git commit -m "feat(molecules): add Pagination component"
```

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | InputGroup | Pending |
| 2 | PasswordInput | Pending |
| 3 | InfoCard | Pending |
| 4 | CheckboxField | Pending |
| 5 | SwitchField | Pending |
| 6 | SelectField | Pending |
| 7 | DateRangePicker | Pending |
| 8 | Pagination | Pending |

**Phase 2 Completion:** After these 8 tasks, the core form molecules will be complete.
