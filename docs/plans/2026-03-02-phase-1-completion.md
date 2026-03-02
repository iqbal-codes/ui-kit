# Atomic Design System - Phase 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete Phase 1 of the PRD: NavigationShell organism and DashboardTemplate & ListViewTemplate templates.

**Architecture:** 
- NavigationShell uses shadcn components (Collapsible, Tooltip, DropdownMenu, ScrollArea)
- Templates are layout wrappers with named slots for content
- All components follow atomic design methodology

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, shadcn/ui components, Vitest

---

## Task 1: NavigationShell Organism

**Files:**
- Create: `src/organisms/navigation-shell/NavigationShell.tsx`
- Create: `src/organisms/navigation-shell/NavigationShell.test.tsx`
- Create: `src/organisms/navigation-shell/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Write the failing test**

```tsx
// src/organisms/navigation-shell/NavigationShell.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavigationShell } from './NavigationShell'

const mockNavigation = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Users',
    href: '/users',
    icon: 'Users',
    badge: 5,
  },
]

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg',
}

describe('NavigationShell', () => {
  it('renders navigation items', () => {
    render(
      <NavigationShell 
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </NavigationShell>
    )
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  it('renders user section', () => {
    render(
      <NavigationShell 
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </NavigationShell>
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <NavigationShell 
        navigation={mockNavigation}
        user={mockUser}
      >
        <div data-testid="children">Child Content</div>
      </NavigationShell>
    )
    expect(screen.getByTestId('children')).toBeInTheDocument()
  })

  it('shows badge on navigation items', () => {
    render(
      <NavigationShell 
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </NavigationShell>
    )
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('supports collapsed state', () => {
    render(
      <NavigationShell 
        navigation={mockNavigation}
        user={mockUser}
        defaultCollapsed
      >
        <div>Content</div>
      </NavigationShell>
    )
    // Should render in collapsed mode (icons only)
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/organisms/navigation-shell/NavigationShell.test.tsx`
Expected: FAIL - "NavigationShell is not defined"

**Step 3: Create index.ts first**

```typescript
// src/organisms/navigation-shell/index.ts
export { NavigationShell, type NavigationShellProps } from './NavigationShell'
```

**Step 4: Create NavigationShell.tsx**

```tsx
"use client"

import * as React from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/atom/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/atom/avatar"
import { Button } from "@/atom/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atom/dropdown-menu"
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/atom/collapsible"

export interface NavigationItem {
  title: string
  href: string
  icon?: string
  badge?: number
  children?: NavigationItem[]
}

export interface NavigationShellProps {
  navigation: NavigationItem[]
  user: {
    name: string
    email: string
    avatar?: string
    actions?: { label: string; onClick: () => void }[]
  }
  logo?: React.ReactNode
  headerActions?: React.ReactNode
  defaultCollapsed?: boolean
  collapsible?: boolean
  children: React.ReactNode
  className?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Users,
  Settings,
}

function NavItem({ item, collapsed }: { item: NavigationItem; collapsed?: boolean }) {
  const Icon = item.icon ? iconMap[item.icon] : null
  
  return (
    <a
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground",
        collapsed && "justify-center px-2"
      )}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {!collapsed && (
        <>
          <span className="flex-1">{item.title}</span>
          {item.badge && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {item.badge}
            </span>
          )}
        </>
      )}
    </a>
  )
}

export function NavigationShell({
  navigation,
  user,
  logo,
  headerActions,
  defaultCollapsed = false,
  collapsible = true,
  children,
  className,
}: NavigationShellProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className={cn("flex h-screen w-full", className)}>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden border-r bg-card lg:flex lg:flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b px-4">
          {logo || <span className="font-semibold">{collapsed ? 'A' : 'Atomic'}</span>}
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <NavItem key={item.href} item={item} collapsed={collapsed} />
            ))}
          </nav>
        </ScrollArea>

        {/* User Section */}
        <div className="border-t p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  collapsed && "justify-center px-2"
                )}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {!collapsed && (
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {user.actions?.map((action, i) => (
                <DropdownMenuItem key={i} onClick={action.onClick}>
                  {action.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Collapse Toggle */}
        {collapsible && (
          <Collapsible open={!collapsed} onOpenChange={(open) => setCollapsed(!open)}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center border-t"
              >
                {collapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    <span>Collapse</span>
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="flex-1 lg:hidden" />

          {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-background p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/organisms/navigation-shell/NavigationShell.test.tsx`
Expected: PASS

**Step 6: Update organisms index**

```typescript
// src/organisms/index.ts
export { DataTable } from './data-table/DataTable'
export { NavigationShell, type NavigationShellProps, type NavigationItem } from './navigation-shell/NavigationShell'
```

**Step 7: Commit**

```bash
git add src/organisms/navigation-shell/
git commit -m "feat(organisms): add NavigationShell component"
```

---

## Task 2: DashboardTemplate

**Files:**
- Create: `src/templates/dashboard-template/DashboardTemplate.tsx`
- Create: `src/templates/dashboard-template/DashboardTemplate.test.tsx`
- Create: `src/templates/dashboard-template/index.ts`
- Modify: `src/templates/index.ts`

**Step 1: Write the failing test**

```tsx
// src/templates/dashboard-template/DashboardTemplate.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DashboardTemplate } from './DashboardTemplate'

const mockStats = [
  { title: 'Total Users', value: '1,234', trend: { value: 12, direction: 'up' } },
  { title: 'Revenue', value: '$45,678', trend: { value: 8, direction: 'up' } },
]

const mockNavigation = [
  { title: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
  { title: 'Users', href: '/users', icon: 'Users' },
]

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
}

describe('DashboardTemplate', () => {
  it('renders page title', () => {
    render(
      <DashboardTemplate
        title="Dashboard"
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </DashboardTemplate>
    )
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('renders stats cards', () => {
    render(
      <DashboardTemplate
        title="Dashboard"
        stats={mockStats}
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </DashboardTemplate>
    )
    expect(screen.getByText('Total Users')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('Revenue')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <DashboardTemplate
        title="Dashboard"
        navigation={mockNavigation}
        user={mockUser}
      >
        <div data-testid="content">Main Content</div>
      </DashboardTemplate>
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(
      <DashboardTemplate
        title="Dashboard"
        description="Welcome back"
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </DashboardTemplate>
    )
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
  })

  it('renders header actions', () => {
    const action = <button>Add New</button>
    render(
      <DashboardTemplate
        title="Dashboard"
        headerActions={action}
        navigation={mockNavigation}
        user={mockUser}
      >
        <div>Content</div>
      </DashboardTemplate>
    )
    expect(screen.getByText('Add New')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/templates/dashboard-template/DashboardTemplate.test.tsx`
Expected: FAIL - "DashboardTemplate is not defined"

**Step 3: Create index.ts**

```typescript
// src/templates/dashboard-template/index.ts
export { DashboardTemplate, type DashboardTemplateProps } from './DashboardTemplate'
```

**Step 4: Create DashboardTemplate.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationShell, type NavigationShellProps } from "@/organisms/navigation-shell/NavigationShell"
import { Card, CardContent } from "@/atom/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export interface Stat {
  title: string
  value: string
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
    label?: string
  }
  icon?: React.ReactNode
  description?: string
}

export interface DashboardTemplateProps {
  title: string
  description?: string
  stats?: Stat[]
  navigation: NavigationShellProps['navigation']
  user: NavigationShellProps['user']
  headerActions?: React.ReactNode
  children: React.ReactNode
  className?: string
}

function TrendIndicator({ trend }: { trend: Stat['trend'] }) {
  if (!trend) return null

  const Icon = trend.direction === 'up' ? TrendingUp : trend.direction === 'down' ? TrendingDown : Minus
  const colorClass = trend.direction === 'up' ? 'text-green-500' : trend.direction === 'down' ? 'text-red-500' : 'text-muted-foreground'

  return (
    <div className={cn("flex items-center gap-1 text-sm", colorClass)}>
      <Icon className="h-4 w-4" />
      <span>{trend.value}%</span>
      {trend.label && <span className="text-muted-foreground">{trend.label}</span>}
    </div>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            {stat.trend && <TrendIndicator trend={stat.trend} />}
            {stat.description && (
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            )}
          </div>
          {stat.icon && <div className="text-muted-foreground">{stat.icon}</div>}
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardTemplate({
  title,
  description,
  stats,
  navigation,
  user,
  headerActions,
  children,
  className,
}: DashboardTemplateProps) {
  return (
    <NavigationShell navigation={navigation} user={user} headerActions={headerActions}>
      <div className={cn("space-y-6", className)}>
        {/* Page Header */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Stats Row */}
        {stats && stats.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        )}

        {/* Main Content */}
        {children}
      </div>
    </NavigationShell>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/templates/dashboard-template/DashboardTemplate.test.tsx`
Expected: PASS

**Step 6: Update templates index**

```typescript
// src/templates/index.ts
export { DashboardTemplate, type DashboardTemplateProps, type Stat } from './dashboard-template/DashboardTemplate'
export { ListViewTemplate } from './list-view-template/ListViewTemplate'
export { DetailViewTemplate } from './detail-view-template/DetailViewTemplate'
export { FormTemplate } from './form-template/FormTemplate'
export { SplitViewTemplate } from './split-view-template/SplitViewTemplate'
export { AuthTemplate } from './auth-template/AuthTemplate'
export { SettingsTemplate } from './settings-template/SettingsTemplate'
export { EmptyStateTemplate } from './empty-state-template/EmptyStateTemplate'
export { OnboardingTemplate } from './onboarding-template/OnboardingTemplate'
```

**Step 7: Commit**

```bash
git add src/templates/dashboard-template/
git commit -m "feat(templates): add DashboardTemplate"
```

---

## Task 3: ListViewTemplate

**Files:**
- Create: `src/templates/list-view-template/ListViewTemplate.tsx`
- Create: `src/templates/list-view-template/ListViewTemplate.test.tsx`
- Create: `src/templates/list-view-template/index.ts`
- Modify: `src/templates/index.ts`

**Step 1: Write the failing test**

```tsx
// src/templates/list-view-template/ListViewTemplate.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ListViewTemplate } from './ListViewTemplate'

const mockColumns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'status', header: 'Status' },
]

const mockData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
]

describe('ListViewTemplate', () => {
  it('renders page title', () => {
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={mockData}
      />
    )
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  it('renders data table with columns', () => {
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={mockData}
      />
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeIntainedTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('renders data rows', () => {
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={mockData}
      />
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(
      <ListViewTemplate
        title="Users"
        description="Manage your users"
        columns={mockColumns}
        data={mockData}
      />
    )
    expect(screen.getByText('Manage your users')).toBeInTheDocument()
  })

  it('renders primary action button', () => {
    const action = <button>Add User</button>
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={mockData}
        primaryAction={action}
      />
    )
    expect(screen.getByText('Add User')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={[]}
        loading
      />
    )
    // Should show skeleton or loading indicator
  })

  it('shows empty state when no data', () => {
    render(
      <ListViewTemplate
        title="Users"
        columns={mockColumns}
        data={[]}
      />
    )
    expect(screen.getByText('No users found')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/templates/list-view-template/ListViewTemplate.test.tsx`
Expected: FAIL - "ListViewTemplate is not defined"

**Step 3: Create index.ts**

```typescript
// src/templates/list-view-template/index.ts
export { ListViewTemplate, type ListViewTemplateProps, type ListViewColumn } from './ListViewTemplate'
```

**Step 4: Create ListViewTemplate.tsx**

```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/atom/button"
import { Input } from "@/atom/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/select"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/atom/table"
import { Skeleton } from "@/atom/skeleton"
import { 
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  LayoutGrid,
  List,
  Plus,
} from "lucide-react"

export interface ListViewColumn<T = unknown> {
  accessorKey: keyof T | string
  header: string
  cell?: (row: T) => React.ReactNode
  width?: string
}

export interface ListViewTemplateProps<T = unknown> {
  title: string
  description?: string
  columns: ListViewColumn<T>[]
  data: T[]
  loading?: boolean
  primaryAction?: React.ReactNode
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  searchValue?: string
  pagination?: {
    currentPage: number
    totalPages: number
    pageSize: number
    totalItems: number
    onPageChange: (page: number) => void
    onPageSizeChange?: (size: number) => void
  }
  viewMode?: 'table' | 'grid'
  onViewModeChange?: (mode: 'table' | 'grid') => void
  onRowClick?: (row: T) => void
  emptyMessage?: string
  className?: string
}

function LoadingSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
          <TableCell><Skeleton className="h-4 w-full" /></TableCell>
          <TableCell><Skeleton className="h-4 w-full" /></TableCell>
          <TableCell><Skeleton className="h-4 w-full" /></TableCell>
        </TableRow>
      ))}
    </>
  )
}

export function ListViewTemplate<T extends { id?: string | number } = unknown>({
  title,
  description,
  columns,
  data,
  loading = false,
  primaryAction,
  searchPlaceholder = "Search...",
  onSearch,
  searchValue,
  pagination,
  viewMode = 'table',
  onViewModeChange,
  onRowClick,
  emptyMessage = `No ${title.toLowerCase()} found`,
  className,
}: ListViewTemplateProps<T>) {
  const [localSearch, setLocalSearch] = React.useState(searchValue || '')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value)
    onSearch?.(e.target.value)
  }

  const renderCell = (row: T, column: ListViewColumn<T>) => {
    if (column.cell) {
      return column.cell(row)
    }
    const value = row[column.accessorKey as keyof T]
    return String(value ?? '')
  }

  const startIndex = pagination ? (pagination.currentPage - 1) * pagination.pageSize + 1 : 1
  const endIndex = pagination 
    ? Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems) 
    : data.length

  return (
    <div className={cn("space-y-4", className)}>
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {primaryAction && <div>{primaryAction}</div>}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={localSearch}
            onChange={handleSearchChange}
            className="pl-9"
          />
        </div>
        
        <div className="flex items-center gap-2">
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

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.accessorKey)} style={{ width: column.width }}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <LoadingSkeleton />
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow 
                  key={row.id ?? index}
                  onClick={() => onRowClick?.(row)}
                  className={cn(onRowClick && "cursor-pointer")}
                >
                  {columns.map((column) => (
                    <TableCell key={String(column.accessorKey)}>
                      {renderCell(row, column)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex} to {endIndex} of {pagination.totalItems} results
          </div>
          
          <div className="flex items-center gap-2">
            {pagination.onPageSizeChange && (
              <Select
                value={String(pagination.pageSize)}
                onValueChange={(value) => pagination.onPageSizeChange?.(Number(value))}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            )}
            
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(1)}
                disabled={pagination.currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="px-3 text-sm">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(pagination.totalPages)}
                disabled={pagination.currentPage === pagination.totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```

**Step 5: Run test to verify it passes**

Run: `npm test -- src/templates/list-view-template/ListViewTemplate.test.tsx`
Expected: PASS

**Step 6: Commit**

```bash
git add src/templates/list-view-template/
git commit -m "feat(templates): add ListViewTemplate"
```

---

## Summary

| Task | Status |
|------|--------|
| NavigationShell Organism | Pending |
| DashboardTemplate | Pending |
| ListViewTemplate | Pending |

**Phase 1 Completion:** After these 3 tasks, all Phase 1 items from PRD will be complete.
