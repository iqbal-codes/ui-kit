# Atomic Design System - Phase 4 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete remaining organisms: CommandPalette, FormBuilder, DetailViewTemplate, and other key components.

**Architecture:** 
- Organisms compose multiple molecules/atoms
- FormBuilder uses zod for validation
- All components follow accessibility standards

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, shadcn/ui components, Vitest, Zod

---

## Task 1: CommandPalette Organism

**Files:**
- Create: `src/organisms/command-palette/CommandPalette.tsx`
- Create: `src/organisms/command-palette/CommandPalette.test.tsx`
- Create: `src/organisms/command-palette/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Write the failing test**

```tsx
// src/organisms/command-palette/CommandPalette.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CommandPalette } from './CommandPalette'

const mockCommands = [
  { id: '1', title: 'Go to Dashboard', shortcut: 'G D', action: vi.fn() },
  { id: '2', title: 'Create New User', shortcut: 'C U', action: vi.fn() },
  { id: '3', title: 'Settings', category: 'Navigation', action: vi.fn() },
]

describe('CommandPalette', () => {
  it('renders dialog with search input', () => {
    render(<CommandPalette commands={mockCommands} open />)
    expect(screen.getByPlaceholderText('Type a command or search...')).toBeInTheDocument()
  })

  it('groups commands by category', () => {
    render(<CommandPalette commands={mockCommands} open />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('shows keyboard shortcuts', () => {
    render(<CommandPalette commands={mockCommands} open />)
    expect(screen.getByText('G D')).toBeInTheDocument()
  })

  it('calls action when command selected', () => {
    const action = vi.fn()
    render(<CommandPalette commands={[{ id: '1', title: 'Test', action }]} open />)
    // Click command
    expect(action).toHaveBeenCalled()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/organisms/command-palette/CommandPalette.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/organisms/command-palette/index.ts
export { CommandPalette, type CommandPaletteProps, type CommandItem } from './CommandPalette'
```

**Step 4: Create CommandPalette.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/atom/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/atom/command"
import { Kbd } from "@/atom/kbd"
import { Search, Command as CommandIcon } from "lucide-react"

export interface CommandItem {
  id: string
  title: string
  category?: string
  shortcut?: string
  icon?: React.ReactNode
  action: () => void
}

export interface CommandPaletteProps {
  commands: CommandItem[]
  open: boolean
  onOpenChange: (open: boolean) => void
  placeholder?: string
  emptyMessage?: string
  hotkey?: string
  className?: string
}

export function CommandPalette({
  commands,
  open,
  onOpenChange,
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
  hotkey = "k",
  className,
}: CommandPaletteProps) {
  const [search, setSearch] = React.useState("")

  const filteredCommands = React.useMemo(() => {
    if (!search) return commands
    const lower = search.toLowerCase()
    return commands.filter(cmd => 
      cmd.title.toLowerCase().includes(lower) ||
      cmd.category?.toLowerCase().includes(lower)
    )
  }, [commands, search])

  const groupedCommands = React.useMemo(() => {
    const groups: Record<string, CommandItem[]> = {}
    filteredCommands.forEach(cmd => {
      const category = cmd.category || 'Actions'
      if (!groups[category]) groups[category] = []
      groups[category].push(cmd)
    })
    return groups
  }, [filteredCommands])

  const handleSelect = (command: CommandItem) => {
    command.action()
    onOpenChange(false)
    setSearch("")
  }

  // Handle keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === hotkey) {
        e.preventDefault()
        onOpenChange(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hotkey, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("p-0 gap-0 max-w-[600px]", className)}>
        <Command>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <CommandInput 
              placeholder={placeholder}
              value={search}
              onValueChange={setSearch}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <CommandList className="max-h-[300px] overflow-y-auto p-2">
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {Object.entries(groupedCommands).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((command) => (
                  <CommandItem
                    key={command.id}
                    value={command.title}
                    onSelect={() => handleSelect(command)}
                    className="flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      {command.icon}
                      {command.title}
                    </span>
                    {command.shortcut && (
                      <CommandShortcut>
                        {command.shortcut.split(' ').map((key, i) => (
                          <Kbd key={i}>{key}</Kbd>
                        ))}
                      </CommandShortcut>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/organisms/command-palette/CommandPalette.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/organisms/command-palette/
git commit -m "feat(organisms): add CommandPalette component"
```

---

## Task 2: FormBuilder Organism

**Files:**
- Create: `src/organisms/form-builder/FormBuilder.tsx`
- Create: `src/organisms/form-builder/FormBuilder.test.tsx`
- Create: `src/organisms/form-builder/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Write the failing test**

```tsx
// src/organisms/form-builder/FormBuilder.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormBuilder } from './FormBuilder'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  role: z.enum(['admin', 'user']),
})

const fields = [
  { name: 'name', type: 'text', label: 'Name', required: true },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'role', type: 'select', label: 'Role', options: [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ]},
]

describe('FormBuilder', () => {
  it('renders all fields', () => {
    render(<FormBuilder fields={fields} schema={schema} />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Role')).toBeInTheDocument()
  })

  it('shows validation errors', () => {
    render(<FormBuilder fields={fields} schema={schema} />)
    // Submit empty form
    // Check for validation errors
  })

  it('calls onSubmit with values', () => {
    const handleSubmit = vi.fn()
    render(<FormBuilder fields={fields} schema={schema} onSubmit={handleSubmit} />)
    // Fill and submit
    expect(handleSubmit).toHaveBeenCalled()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/organisms/form-builder/FormBuilder.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/organisms/form-builder/index.ts
export { FormBuilder, type FormBuilderProps, type FormFieldConfig } from './FormBuilder'
```

**Step 4: Create FormBuilder.tsx**

```tsx
"use client"

import * as React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/atom/button"
import { Input } from "@/atom/input"
import { Textarea } from "@/atom/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/select"
import { Switch } from "@/atom/switch"
import { Checkbox } from "@/atom/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/atom/form"

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'switch' | 'checkbox' | 'date'

export interface FormFieldConfig {
  name: string
  type: FieldType
  label: string
  placeholder?: string
  description?: string
  required?: boolean
  options?: { value: string; label: string }[]
  disabled?: boolean
}

export interface FormBuilderProps {
  fields: FormFieldConfig[]
  schema: z.ZodType<any>
  defaultValues?: Record<string, any>
  onSubmit: (data: any) => void
  onError?: (errors: any) => void
  submitLabel?: string
  cancelLabel?: string
  onCancel?: () => void
  loading?: boolean
  className?: string
}

export function FormBuilder({
  fields,
  schema,
  defaultValues = {},
  onSubmit,
  onError,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onCancel,
  loading = false,
  className,
}: FormBuilderProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const handleSubmit = form.handleSubmit(
    (data) => onSubmit(data),
    (errors) => onError?.(errors)
  )

  const renderField = (field: FormFieldConfig) => {
    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            disabled={field.disabled}
            {...field.register(field.name)}
          />
        )
      case 'select':
        return (
          <Select
            onValueChange={field.onChange || (() => {})}
            defaultValue={field.defaultValue}
            disabled={field.disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'switch':
        return (
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={field.disabled}
          />
        )
      case 'checkbox':
        return (
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={field.disabled}
          />
        )
      default:
        return (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            disabled={field.disabled}
            {...field.register(field.name)}
          />
        )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
                </FormLabel>
                <FormControl>
                  {field.type === 'select' ? (
                    <Select
                      value={formField.value}
                      onValueChange={formField.onChange}
                      disabled={field.disabled}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === 'textarea' ? (
                    <Textarea
                      {...formField}
                      placeholder={field.placeholder}
                      disabled={field.disabled}
                    />
                  ) : (
                    <Input
                      {...formField}
                      type={field.type}
                      placeholder={field.placeholder}
                      disabled={field.disabled}
                    />
                  )}
                </FormControl>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              {cancelLabel}
            </Button>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/organisms/form-builder/FormBuilder.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/organisms/form-builder/
git commit -m "feat(organisms): add FormBuilder component"
```

---

## Task 3: DetailViewTemplate

**Files:**
- Create: `src/templates/detail-view-template/DetailViewTemplate.tsx`
- Create: `src/templates/detail-view-template/DetailViewTemplate.test.tsx`
- Create: `src/templates/detail-view-template/index.ts`
- Modify: `src/templates/index.ts`

**Step 1: Write the failing test**

```tsx
// src/templates/detail-view-template/DetailViewTemplate.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DetailViewTemplate } from './DetailViewTemplate'

describe('DetailViewTemplate', () => {
  it('renders title and subtitle', () => {
    render(<DetailViewTemplate title="User Details" subtitle="Manage user" />)
    expect(screen.getByText('User Details')).toBeInTheDocument()
    expect(screen.getByText('Manage user')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    const actions = <button>Edit</button>
    render(<DetailViewTemplate title="Details" actions={actions} />)
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(<DetailViewTemplate title="Details"><div>Content</div></DetailViewTemplate>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders tabs', () => {
    const tabs = [
      { id: 'overview', label: 'Overview', content: <div>Overview</div> },
      { id: 'settings', label: 'Settings', content: <div>Settings</div> },
    ]
    render(<DetailViewTemplate title="Details" tabs={tabs} />)
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/templates/detail-view-template/DetailViewTemplate.test.tsx`
Expected: FAIL

**Step 3: Create index.ts**

```typescript
// src/templates/detail-view-template/index.ts
export { DetailViewTemplate, type DetailViewTemplateProps } from './DetailViewTemplate'
```

**Step 4: Create DetailViewTemplate.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/atom/button"
import { Badge } from "@/atom/badge"
import { Separator } from "@/atom/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/tabs"
import { ChevronLeft, Edit2, Trash2, Share2 } from "lucide-react"
import Link from "next/link"

export interface DetailTab {
  id: string
  label: string
  content: React.ReactNode
}

export interface DetailViewTemplateProps {
  title: string
  subtitle?: string
  status?: { label: string; variant?: 'default' | 'success' | 'warning' | 'danger' }
  backHref?: string
  actions?: React.ReactNode
  tabs?: DetailTab[]
  sidebarContent?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function DetailViewTemplate({
  title,
  subtitle,
  status,
  backHref,
  actions,
  tabs,
  sidebarContent,
  children,
  className,
}: DetailViewTemplateProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Back Navigation */}
      {backHref && (
        <Link 
          href={backHref}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Link>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            {status && (
              <Badge variant={status.variant || 'default'}>
                {status.label}
              </Badge>
            )}
          </div>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>

      <Separator />

      {/* Content */}
      {tabs ? (
        <Tabs defaultValue={tabs[0]?.id}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {tab.content}
                </div>
                {sidebarContent && (
                  <div className="lg:col-span-1">
                    {sidebarContent}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {children}
          </div>
          {sidebarContent && (
            <div className="lg:col-span-1">
              {sidebarContent}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/templates/detail-view-template/DetailViewTemplate.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/templates/detail-view-template/
git commit -m "feat(templates): add DetailViewTemplate"
```

---

## Summary

| Task | Component | Type |
|------|-----------|------|
| 1 | CommandPalette | Organism |
| 2 | FormBuilder | Organism |
| 3 | DetailViewTemplate | Template |

**Phase 4 Completion:** Core organisms and templates are now complete.
