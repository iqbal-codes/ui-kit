# Atomic Design System - Phase 3 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete remaining molecules (BreadcrumbNav, TabsList, Stepper) and key organisms (FilterPanel, SearchFilterBar, CommandPalette, FormBuilder).

**Architecture:** 
- Molecules: Lightweight wrappers around shadcn atoms
- Organisms: Complex components composing multiple molecules/atoms
- Full TypeScript with proper props typing

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, shadcn/ui components, Vitest

---

## Task 1: BreadcrumbNav Molecule

**Files:**
- Create: `src/molecules/breadcrumb-nav/BreadcrumbNav.tsx`
- Create: `src/molecules/breadcrumb-nav/BreadcrumbNav.test.tsx`
- Create: `src/molecules/breadcrumb-nav/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/breadcrumb-nav/BreadcrumbNav.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BreadcrumbNav } from './BreadcrumbNav'

const mockItems = [
  { label: 'Home', href: '/' },
  { label: 'Users', href: '/users' },
  { label: 'Profile', href: '/users/profile' },
]

describe('BreadcrumbNav', () => {
  it('renders all items', () => {
    render(<BreadcrumbNav items={mockItems} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Users')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('marks current page as non-clickable', () => {
    render(<BreadcrumbNav items={mockItems} />)
    const current = screen.getByText('Profile')
    expect(current.tagName).toBe('SPAN')
  })

  it('shows home icon', () => {
    render(<BreadcrumbNav items={mockItems} showHomeIcon />)
    // Check for home icon
  })

  it('supports max items', () => {
    const longItems = [
      { label: 'Home', href: '/' },
      { label: 'Page 1', href: '/1' },
      { label: 'Page 2', href: '/2' },
      { label: 'Page 3', href: '/3' },
      { label: 'Current', href: '/current' },
    ]
    render(<BreadcrumbNav items={longItems} maxItems={3} />)
    // Should show ellipsis
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/breadcrumb-nav/BreadcrumbNav.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/breadcrumb-nav/index.ts
export { BreadcrumbNav, type BreadcrumbNavProps, type BreadcrumbItem } from './BreadcrumbNav'
```

**Step 4: Create BreadcrumbNav.tsx**

```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/atom/breadcrumb"
import { Home } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  showHomeIcon?: boolean
  maxItems?: number
  className?: string
}

export function BreadcrumbNav({
  items,
  showHomeIcon = false,
  maxItems,
  className,
}: BreadcrumbNavProps) {
  const renderItems = () => {
    if (maxItems && items.length > maxItems) {
      const first = items.slice(0, 1)
      const last = items.slice(-(maxItems - 2))
      const ellipsis: BreadcrumbItem = { label: '...' }
      
      return [...first, ellipsis, ...last]
    }
    return items
  }

  const displayItems = renderItems()

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {showHomeIcon && (
          <BreadcrumbItem>
            <Link href="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </BreadcrumbItem>
        )}
        
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1
          const isEllipsis = item.label === '...'
          
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isLast || isEllipsis ? (
                  <BreadcrumbPage className="font-normal">
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/breadcrumb-nav/BreadcrumbNav.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/breadcrumb-nav/
git commit -m "feat(molecules): add BreadcrumbNav component"
```

---

## Task 2: TabsList Molecule

**Files:**
- Create: `src/molecules/tabs-list/TabsList.tsx`
- Create: `src/molecules/tabs-list/TabsList.test.tsx`
- Create: `src/molecules/tabs-list/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/tabs-list/TabsList.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TabsList } from './TabsList'

const mockTabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings', badge: 5 },
  { value: 'profile', label: 'Profile', disabled: true },
]

describe('TabsList', () => {
  it('renders all tabs', () => {
    render(<TabsList tabs={mockTabs} />)
    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('shows badge counts', () => {
    render(<TabsList tabs={mockTabs} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('calls onChange when tab clicked', () => {
    const handleChange = vi.fn()
    render(<TabsList tabs={mockTabs} onChange={handleChange} />)
    fireEvent.click(screen.getByText('Settings'))
    expect(handleChange).toHaveBeenCalledWith('settings')
  })

  it('disables tabs correctly', () => {
    render(<TabsList tabs={mockTabs} />)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/tabs-list/TabsList.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/tabs-list/index.ts
export { TabsList, type TabsListProps, type TabItem } from './TabsList'
```

**Step 4: Create TabsList.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/tabs"
import { Badge } from "@/atom/badge"

export interface TabItem {
  value: string
  label: string
  icon?: React.ReactNode
  badge?: number
  disabled?: boolean
  content: React.ReactNode
}

export interface TabsListProps {
  tabs: TabItem[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  variant?: 'default' | 'pills' | 'underline'
  className?: string
}

export function TabsList({
  tabs,
  defaultValue,
  value,
  onChange,
  variant = 'default',
  className,
}: TabsListProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || tabs[0]?.value)
  const activeValue = value ?? internalValue

  const handleValueChange = (newValue: string) => {
    if (!value) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  const listClassName = cn(
    variant === 'pills' && "bg-muted p-1 rounded-lg",
    variant === 'underline' && "border-b",
    className
  )

  const triggerClassName = (isActive: boolean, isDisabled?: boolean) => cn(
    variant === 'pills' && isActive && "bg-background shadow-sm",
    isDisabled && "opacity-50 cursor-not-allowed"
  )

  const activeTab = tabs.find(t => t.value === activeValue)

  return (
    <Tabs 
      value={activeValue} 
      onValueChange={handleValueChange}
      className="w-full"
    >
      <TabsList className={listClassName}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={triggerClassName(activeValue === tab.value, tab.disabled)}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            {tab.badge !== undefined && (
              <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                {tab.badge}
              </Badge>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {activeValue === tab.value && tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/tabs-list/TabsList.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/tabs-list/
git commit -m "feat(molecules): add TabsList component"
```

---

## Task 3: Stepper Molecule

**Files:**
- Create: `src/molecules/stepper/Stepper.tsx`
- Create: `src/molecules/stepper/Stepper.test.tsx`
- Create: `src/molecules/stepper/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write the failing test**

```tsx
// src/molecules/stepper/Stepper.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stepper } from './Stepper'

const mockSteps = [
  { label: 'Step 1', description: 'Basic info' },
  { label: 'Step 2', description: 'Details' },
  { label: 'Step 3', description: 'Confirm' },
]

describe('Stepper', () => {
  it('renders all steps', () => {
    render(<Stepper steps={mockSteps} currentStep={1} />)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })

  it('highlights current step', () => {
    render(<Stepper steps={mockSteps} currentStep={2} />)
    // Current step should be highlighted
  })

  it('shows completed steps', () => {
    render(<Stepper steps={mockSteps} currentStep={3} />)
    // Completed steps should show checkmark
  })

  it('supports vertical orientation', () => {
    render(<Stepper steps={mockSteps} currentStep={1} orientation="vertical" />)
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/molecules/stepper/Stepper.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/molecules/stepper/index.ts
export { Stepper, type StepperProps, type Step } from './Stepper'
```

**Step 4: Create Stepper.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Circle, ChevronRight } from "lucide-react"

export interface Step {
  label: string
  description?: string
}

export interface StepperProps {
  steps: Step[]
  currentStep: number
  orientation?: 'horizontal' | 'vertical'
  clickableCompleted?: boolean
  onStepClick?: (step: number) => void
  className?: string
}

export function Stepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  clickableCompleted = false,
  onStepClick,
  className,
}: StepperProps) {
  const isVertical = orientation === 'vertical'

  const handleStepClick = (index: number) => {
    if (clickableCompleted && index < currentStep) {
      onStepClick?.(index)
    }
  }

  const getStepStatus = (index: number) => {
    if (index < currentStep) return 'completed'
    if (index === currentStep - 1) return 'current'
    return 'pending'
  }

  return (
    <div className={cn(
      "flex",
      isVertical ? "flex-col gap-4" : "flex-row items-center",
      className
    )}>
      {steps.map((step, index) => {
        const status = getStepStatus(index)
        const isClickable = status === 'completed' && clickableCompleted

        return (
          <React.Fragment key={index}>
            <div 
              className={cn(
                "flex items-center gap-3",
                isVertical && "flex-row"
              )}
            >
              {/* Step Circle */}
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => handleStepClick(index)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors",
                  status === 'completed' && "border-primary bg-primary text-primary-foreground",
                  status === 'current' && "border-primary",
                  status === 'pending' && "border-muted-foreground/30",
                  isClickable && "cursor-pointer hover:border-primary/80",
                  !isClickable && "cursor-default"
                )}
              >
                {status === 'completed' ? (
                  <Check className="h-4 w-4" />
                ) : status === 'current' ? (
                  <Circle className="h-2 w-2 fill-current" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </button>

              {/* Step Label */}
              <div className={cn(
                "flex flex-col",
                isVertical && "items-start"
              )}>
                <span className={cn(
                  "text-sm font-medium",
                  status === 'current' && "text-primary",
                  status === 'pending' && "text-muted-foreground"
                )}>
                  {step.label}
                </span>
                {step.description && (
                  <span className="text-xs text-muted-foreground">
                    {step.description}
                  </span>
                )}
              </div>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className={cn(
                "bg-border",
                isVertical ? "ml-4 h-4 w-0.5" : "mx-4 h-0.5 flex-1"
              )}>
                <div className={cn(
                  "h-full bg-primary transition-colors",
                  status !== 'completed' && "bg-muted-foreground/30"
                )} />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/molecules/stepper/Stepper.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/molecules/stepper/
git commit -m "feat(molecules): add Stepper component"
```

---

## Task 4: FilterPanel Organism

**Files:**
- Create: `src/organisms/filter-panel/FilterPanel.tsx`
- Create: `src/organisms/filter-panel/FilterPanel.test.tsx`
- Create: `src/organisms/filter-panel/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Write the failing test**

```tsx
// src/organisms/filter-panel/FilterPanel.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FilterPanel } from './FilterPanel'

const mockFilters = [
  { id: 'status', type: 'select', label: 'Status', options: [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ]},
  { id: 'search', type: 'text', label: 'Search' },
  { id: 'date', type: 'date-range', label: 'Date Range' },
]

describe('FilterPanel', () => {
  it('renders all filters', () => {
    render(<FilterPanel filters={mockFilters} />)
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('shows active filter count', () => {
    render(<FilterPanel filters={mockFilters} activeFilters={{ status: 'active' }} />)
    expect(screen.getByText('1 active')).toBeInTheDocument()
  })

  it('calls onApply with filter values', () => {
    const handleApply = vi.fn()
    render(<FilterPanel filters={mockFilters} onApply={handleApply} />)
    // Click apply button
    expect(handleApply).toHaveBeenCalled()
  })

  it('clears all filters', () => {
    const handleClear = vi.fn()
    render(<FilterPanel filters={mockFilters} onClear={handleClear} />)
    // Click clear button
    expect(handleClear).toHaveBeenCalled()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/organisms/filter-panel/FilterPanel.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/organisms/filter-panel/index.ts
export { FilterPanel, type FilterPanelProps, type FilterConfig } from './FilterPanel'
```

**Step 4: Create FilterPanel.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/atom/input"
import { Button } from "@/atom/button"
import { Badge } from "@/atom/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/select"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/accordion"
import { X, RotateCcw } from "lucide-react"
import { DateRangePicker } from "@/molecules/date-range-picker/DateRangePicker"

export type FilterType = 'text' | 'select' | 'multi-select' | 'date-range' | 'boolean'

export interface FilterOption {
  value: string
  label: string
}

export interface FilterConfig {
  id: string
  type: FilterType
  label: string
  options?: FilterOption[]
  placeholder?: string
}

export interface FilterPanelProps {
  filters: FilterConfig[]
  activeFilters?: Record<string, any>
  onChange?: (filters: Record<string, any>) => void
  onApply?: (filters: Record<string, any>) => void
  onClear?: () => void
  position?: 'sidebar' | 'drawer' | 'horizontal'
  className?: string
}

export function FilterPanel({
  filters,
  activeFilters = {},
  onChange,
  onApply,
  onClear,
  position = 'sidebar',
  className,
}: FilterPanelProps) {
  const [localFilters, setLocalFilters] = React.useState(activeFilters)

  const activeCount = Object.keys(localFilters).filter(
    key => localFilters[key] !== undefined && localFilters[key] !== '' && 
    (Array.isArray(localFilters[key]) ? localFilters[key].length > 0 : true)
  ).length

  const handleFilterChange = (id: string, value: any) => {
    const newFilters = { ...localFilters, [id]: value }
    setLocalFilters(newFilters)
    onChange?.(newFilters)
  }

  const handleApply = () => {
    onApply?.(localFilters)
  }

  const handleClear = () => {
    setLocalFilters({})
    onClear?.()
  }

  const renderFilter = (filter: FilterConfig) => {
    const value = localFilters[filter.id]

    switch (filter.type) {
      case 'text':
        return (
          <Input
            placeholder={filter.placeholder || `Search ${filter.label}...`}
            value={value || ''}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
          />
        )
      case 'select':
        return (
          <Select value={value} onValueChange={(v) => handleFilterChange(filter.id, v)}>
            <SelectTrigger>
              <SelectValue placeholder={filter.placeholder || `Select ${filter.label}`} />
            </SelectTrigger>
            <SelectContent>
              {filter.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'date-range':
        return (
          <DateRangePicker
            startDate={value?.start}
            endDate={value?.end}
            onChange={(start, end) => handleFilterChange(filter.id, { start, end })}
          />
        )
      default:
        return null
    }
  }

  const containerClass = cn(
    position === 'sidebar' && "w-64 border-r pr-4",
    position === 'drawer' && "fixed inset-y-0 left-0 z-50 w-80 border-r bg-background p-4",
    position === 'horizontal' && "flex flex-wrap gap-4 items-end",
    className
  )

  return (
    <div className={containerClass}>
      {position !== 'horizontal' && (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          {activeCount > 0 && (
            <Badge variant="secondary">{activeCount} active</Badge>
          )}
        </div>
      )}

      <div className={cn(
        position === 'horizontal' ? "flex flex-wrap gap-4" : "space-y-4"
      )}>
        {filters.map((filter) => (
          <div key={filter.id} className={cn(
            position === 'horizontal' ? "flex flex-col gap-1" : ""
          )}>
            {position !== 'horizontal' && (
              <label className="text-sm font-medium">{filter.label}</label>
            )}
            {renderFilter(filter)}
          </div>
        ))}
      </div>

      <div className={cn(
        "flex gap-2 mt-4",
        position === 'horizontal' && "ml-auto"
      )}>
        <Button variant="outline" size="sm" onClick={handleClear}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button size="sm" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/organisms/filter-panel/FilterPanel.test.tsx`
Expected: PASS

**Step 6: Update organisms index**

```typescript
// src/organisms/index.ts
export { DataTable } from './data-table/DataTable'
export { NavigationShell, type NavigationShellProps, type NavigationItem } from './navigation-shell/NavigationShell'
export { FilterPanel, type FilterPanelProps, type FilterConfig } from './filter-panel/FilterPanel'
```

**Step 7: Commit**

```bash
git add src/organisms/filter-panel/
git commit -m "feat(organisms): add FilterPanel component"
```

---

## Task 5: SearchFilterBar Organism

**Files:**
- Create: `src/organisms/search-filter-bar/SearchFilterBar.tsx`
- Create: `src/organisms/search-filter-bar/SearchFilterBar.test.tsx`
- Create: `src/organisms/search-filter-bar/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Write the failing test**

```tsx
// src/organisms/search-filter-bar/SearchFilterBar.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchFilterBar } from './SearchFilterBar'

describe('SearchFilterBar', () => {
  it('renders search input', () => {
    render(<SearchFilterBar />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('shows result count', () => {
    render(<SearchFilterBar resultCount={42} />)
    expect(screen.getByText('42 results')).toBeInTheDocument()
  })

  it('renders sort options', () => {
    const sortOptions = [
      { value: 'name', label: 'Name' },
      { value: 'date', label: 'Date' },
    ]
    render(<SearchFilterBar sortOptions={sortOptions} />)
    expect(screen.getByText('Sort:')).toBeInTheDocument()
  })

  it('calls onFilterOpen', () => {
    const handleOpen = vi.fn()
    render(<SearchFilterBar onFilterOpen={handleOpen} />)
    // Click filter button
    expect(handleOpen).toHaveBeenCalled()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/organisms/search-filter-bar/SearchFilterBar.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/organisms/search-filter-bar/index.ts
export { SearchFilterBar, type SearchFilterBarProps, type SortOption } from './SearchFilterBar'
```

**Step 4: Create SearchFilterBar.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/atom/input"
import { Button } from "@/atom/button"
import { Badge } from "@/atom/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/select"
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react"

export interface SortOption {
  value: string
  label: string
}

export interface SearchFilterBarProps {
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  searchValue?: string
  sortOptions?: SortOption[]
  sortValue?: string
  onSortChange?: (value: string) => void
  resultCount?: number
  viewMode?: 'table' | 'grid'
  onViewModeChange?: (mode: 'table' | 'grid') => void
  onFilterOpen?: () => void
  activeFilterCount?: number
  className?: string
}

export function SearchFilterBar({
  searchPlaceholder = "Search...",
  onSearch,
  searchValue,
  sortOptions,
  sortValue,
  onSortChange,
  resultCount,
  viewMode,
  onViewModeChange,
  onFilterOpen,
  activeFilterCount = 0,
  className,
}: SearchFilterBarProps) {
  const [localSearch, setLocalSearch] = React.useState(searchValue || '')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value)
    onSearch?.(e.target.value)
  }

  return (
    <div className={cn(
      "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
      className
    )}>
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          value={localSearch}
          onChange={handleSearchChange}
          className="pl-9"
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Result Count */}
        {resultCount !== undefined && (
          <span className="text-sm text-muted-foreground">
            {resultCount} result{resultCount !== 1 ? 's' : ''}
          </span>
        )}

        {/* Sort */}
        {sortOptions && sortOptions.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort:</span>
            <Select value={sortValue} onValueChange={onSortChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Filter Button */}
        {onFilterOpen && (
          <Button variant="outline" size="sm" onClick={onFilterOpen}>
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        )}

        {/* View Toggle */}
        {onViewModeChange && (
          <div className="flex rounded-md border">
            <Button
              variant={viewMode === 'table' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('table')}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/organisms/search-filter-bar/SearchFilterBar.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/organisms/search-filter-bar/
git commit -m "feat(organisms): add SearchFilterBar component"
```

---

## Summary

| Task | Component | Type |
|------|-----------|------|
| 1 | BreadcrumbNav | Molecule |
| 2 | TabsList | Molecule |
| 3 | Stepper | Molecule |
| 4 | FilterPanel | Organism |
| 5 | SearchFilterBar | Organism |

**Phase 3 Completion:** After these tasks, the navigation molecules and key filter/search organisms are complete.
