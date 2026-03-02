# UI Kit Blocks Phase 2 Implementation Plan

> **For Claude:** REQUIRED SUB-SILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Create 6 more UI blocks (SearchBar, CardGrid, StickyHeader, FilterChip, SkeletonGenerator, ConnectionStatus) with registry integration following ui-kit-component-builder skill.

**Architecture:** Build blocks from existing primitives with no external dependencies. Each block follows the pattern: component file + storybook story + registry entry + index export.

**Tech Stack:** React, TypeScript, TailwindCSS, shadcn/ui primitives, Storybook

---

## Prerequisites

**Skill Required:** @ui-kit-component-builder - Use this skill for all block creation tasks.

**Reference Files:**
- `src/blocks/data-display/stat-card.tsx` - Example block structure
- `src/blocks/feedback/loading-overlay.tsx` - Example with primitives
- `registry/registry.json` - Registry structure

---

### Task 1: SearchBar Block (data-entry)

**Files:**
- Create: `src/blocks/data-entry/search-bar.tsx`
- Create: `src/blocks/data-entry/search-bar.stories.tsx`
- Modify: `src/blocks/data-entry/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create search-bar.tsx**

```tsx
import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/primitives/input";
import { Button } from "@/primitives/button";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  /** Current search value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
  /** Loading state */
  isLoading?: boolean;
  /** Debounce delay in ms */
  debounce?: number;
  className?: string;
}

export function SearchBar({
  value,
  placeholder = "Search...",
  onSearch,
  onClear,
  isLoading,
  debounce = 300,
  className,
}: SearchBarProps) {
  const [inputValue, setInputValue] = React.useState(value || "");
  const debounceRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (value !== undefined) setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch?.(newValue);
    }, debounce);
  };

  const handleClear = () => {
    setInputValue("");
    onClear?.();
  };

  return (
    <div className={cn("relative flex items-center w-full max-w-sm", className)}>
      <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="pr-8"
      />
      {inputValue && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 h-full px-2 hover:bg-transparent"
          onClick={handleClear}
        >
          <XIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export default SearchBar;
```

**Step 2: Create search-bar.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './search-bar'

const meta: Meta<typeof SearchBar> = {
  title: 'Blocks/Data Entry/SearchBar',
  component: SearchBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    placeholder: 'Search users...',
    onSearch: (value) => console.log('search:', value),
  },
}

export const WithValue: Story = {
  args: {
    value: 'existing search',
    placeholder: 'Search...',
  },
}

export const NoDebounce: Story = {
  args: {
    placeholder: 'Search...',
    debounce: 0,
    onSearch: (value) => console.log('search:', value),
  },
}
```

**Step 3: Update index.ts**

Add export to `src/blocks/data-entry/index.ts`:
```ts
export { SearchBar, type SearchBarProps } from './search-bar';
```

**Step 4: Update registry.json**

Add to data-entry.components array:
```json
{
  "name": "SearchBar",
  "description": "Search input with debounce and clear button",
  "type": "block",
  "category": "data-entry",
  "files": ["search-bar.tsx", "index.ts"],
  "primitives": ["input", "button"],
  "dependencies": [],
  "ai": {
    "usage": "When adding search functionality to lists or pages",
    "composition": "Use with DataTable, EntityCard list for filtering",
    "antiPatterns": "Don't use for simple onetime search without debounce needs"
  }
}
```

**Step 5: Commit**

```bash
git add src/blocks/data-entry/search-bar.tsx src/blocks/data-entry/search-bar.stories.tsx src/blocks/data-entry/index.ts registry/registry.json
git commit -m "feat: add SearchBar block"
```

---

### Task 2: CardGrid Block (data-display)

**Files:**
- Create: `src/blocks/data-display/card-grid.tsx`
- Create: `src/blocks/data-display/card-grid.stories.tsx`
- Modify: `src/blocks/data-display/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create card-grid.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardGridProps {
  /** Grid columns (1-6) */
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Gap between cards */
  gap?: "sm" | "md" | "lg";
  /** Card content */
  children: React.ReactNode;
  className?: string;
}

const gapSizes = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

export function CardGrid({
  columns = 3,
  gap = "md",
  children,
  className,
}: CardGridProps) {
  return (
    <div
      className={cn(
        "grid",
        `grid-cols-${columns}`,
        gapSizes[gap],
        className
      )}
    >
      {children}
    </div>
  );
}

export default CardGrid;
```

**Step 2: Create card-grid.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/primitives/card'
import { CardGrid } from './card-grid'

const meta: Meta<typeof CardGrid> = {
  title: 'Blocks/Data Display/CardGrid',
  component: CardGrid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardGrid>

const SampleCard = ({ index }: { index: number }) => (
  <Card>
    <CardContent className="pt-6">
      <p>Card {index}</p>
    </CardContent>
  </Card>
)

export const Default: Story = {
  render: () => (
    <CardGrid columns={3}>
      {[1, 2, 3, 4, 5, 6].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <CardGrid columns={2} gap="md">
      {[1, 2, 3, 4].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
}
```

**Step 3: Update index.ts**

Add export to `src/blocks/data-display/index.ts`

**Step 4: Update registry.json**

Add entry to data-display.components

**Step 5: Commit**

```bash
git add src/blocks/data-display/card-grid.tsx src/blocks/data-display/card-grid.stories.tsx src/blocks/data-display/index.ts registry/registry.json
git commit -m "feat: add CardGrid block"
```

---

### Task 3: StickyHeader Block (layout)

**Files:**
- Create: `src/blocks/layout/sticky-header.tsx`
- Create: `src/blocks/layout/sticky-header.stories.tsx`
- Modify: `src/blocks/layout/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create sticky-header.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Offset from top */
  offset?: number;
  /** Show border on scroll */
  showBorder?: boolean;
  className?: string;
}

export function StickyHeader({
  children,
  offset = 0,
  showBorder = true,
  className,
}: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 bg-background transition-all",
        isScrolled && showBorder && "border-b shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export default StickyHeader;
```

**Step 2: Create sticky-header.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StickyHeader } from './sticky-header'
import { BreadcrumbTrail } from '../navigation/breadcrumb-trail'

const meta: Meta<typeof StickyHeader> = {
  title: 'Blocks/Layout/StickyHeader',
  component: StickyHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StickyHeader>

export const Default: Story = {
  render: () => (
    <div>
      <StickyHeader>
        <div className="p-4">
          <BreadcrumbTrail
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', isActive: true },
            ]}
          />
        </div>
      </StickyHeader>
      <div className="p-4 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-48 bg-muted rounded-md" />
        ))}
      </div>
    </div>
  ),
}
```

**Step 3: Update index.ts**

Add export to `src/blocks/layout/index.ts`

**Step 4: Update registry.json**

Add entry to layout.components

**Step 5: Commit**

---

### Task 4: FilterChip Block (data-entry)

**Files:**
- Create: `src/blocks/data-entry/filter-chip.tsx`
- Create: `src/blocks/data-entry/filter-chip.stories.tsx`
- Modify: `src/blocks/data-entry/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create filter-chip.tsx**

```tsx
import * as React from "react";
import { Badge } from "@/primitives/badge";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterChipProps {
  /** Chip label */
  label: string;
  /** Whether chip is selected */
  selected?: boolean;
  /** Selection handler */
  onToggle?: () => void;
  /** Remove handler */
  onRemove?: () => void;
  /** Number indicator */
  count?: number;
  className?: string;
}

export function FilterChip({
  label,
  selected = false,
  onToggle,
  onRemove,
  count,
  className,
}: FilterChipProps) {
  return (
    <Badge
      variant={selected ? "default" : "outline"}
      className={cn(
        "cursor-pointer transition-all hover:opacity-80",
        onToggle && "pr-1",
        className
      )}
      onClick={onToggle}
    >
      {label}
      {count !== undefined && (
        <span className="ml-1 text-xs opacity-70">({count})</span>
      )}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:bg-background/20 rounded p-0.5"
        >
          <XIcon className="h-3 w-3" />
        </button>
      )}
    </Badge>
  );
}

export default FilterChip;
```

**Step 2: Create filter-chip.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from './filter-chip'

const meta: Meta<typeof FilterChip> = {
  title: 'Blocks/Data Entry/FilterChip',
  component: FilterChip,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterChip>

export const Default: Story = {
  args: {
    label: 'Status',
    selected: false,
  },
}

export const Selected: Story = {
  args: {
    label: 'Status',
    selected: true,
  },
}

export const WithCount: Story = {
  args: {
    label: 'Active',
    count: 12,
  },
}

export const Removable: Story = {
  args: {
    label: 'Filter',
    onRemove: () => console.log('removed'),
  },
}
```

**Step 3-5: Update index, registry, commit**

---

### Task 5: SkeletonGenerator Block (feedback)

**Files:**
- Create: `src/blocks/feedback/skeleton-generator.tsx`
- Create: `src/blocks/feedback/skeleton-generator.stories.tsx`
- Modify: `src/blocks/feedback/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create skeleton-generator.tsx**

```tsx
import * as React from "react";
import { Skeleton } from "@/primitives/skeleton";
import { cn } from "@/lib/utils";

export interface SkeletonGeneratorProps {
  /** Type of skeleton */
  variant?: "card" | "list" | "table" | "chart";
  /** Number of items */
  count?: number;
  className?: string;
}

export function SkeletonGenerator({
  variant = "card",
  count = 3,
  className,
}: SkeletonGeneratorProps) {
  if (variant === "card") {
    return (
      <div className={cn("space-y-3", className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "table") {
    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" />
          ))}
        </div>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex gap-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <Skeleton key={j} className="h-8 flex-1" />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <Skeleton className={cn("h-40 w-full", className)} />;
}

export default SkeletonGenerator;
```

**Step 2: Create skeleton-generator.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonGenerator } from './skeleton-generator'

const meta: Meta<typeof SkeletonGenerator> = {
  title: 'Blocks/Feedback/SkeletonGenerator',
  component: SkeletonGenerator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkeletonGenerator>

export const Card: Story = {
  args: {
    variant: 'card',
    count: 3,
  },
}

export const List: Story = {
  args: {
    variant: 'list',
    count: 5,
  },
}

export const Table: Story = {
  args: {
    variant: 'table',
    count: 5,
  },
}
```

**Step 3-5: Update index, registry, commit**

---

### Task 6: ConnectionStatus Block (feedback)

**Files:**
- Create: `src/blocks/feedback/connection-status.tsx`
- Create: `src/blocks/feedback/connection-status.stories.tsx`
- Modify: `src/blocks/feedback/index.ts`
- Modify: `registry/registry.json`

**Step 1: Create connection-status.tsx**

```tsx
import * as React from "react";
import { Badge } from "@/primitives/badge";
import { cn } from "@/lib/utils";
import { WifiIcon, WifiOffIcon, Loader2Icon } from "lucide-react";

export type ConnectionState = "connected" | "disconnected" | "connecting";

export interface ConnectionStatusProps {
  /** Current connection state */
  status: ConnectionState;
  /** Show icon */
  showIcon?: boolean;
  /** Custom labels */
  labels?: {
    connected?: string;
    disconnected?: string;
    connecting?: string;
  };
  className?: string;
}

const statusConfig = {
  connected: {
    variant: "default" as const,
    icon: WifiIcon,
  },
  disconnected: {
    variant: "destructive" as const,
    icon: WifiOffIcon,
  },
  connecting: {
    variant: "secondary" as const,
    icon: Loader2Icon,
  },
};

export function ConnectionStatus({
  status,
  showIcon = true,
  labels = {},
  className,
}: ConnectionStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;
  const label = labels[status] || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Badge variant={config.variant} className={cn("gap-1", className)}>
      {showIcon && <Icon className={cn("h-3 w-3", status === "connecting" && "animate-spin")} />}
      {label}
    </Badge>
  );
}

export default ConnectionStatus;
```

**Step 2: Create connection-status.stories.tsx**

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ConnectionStatus } from './connection-status'

const meta: Meta<typeof ConnectionStatus> = {
  title: 'Blocks/Feedback/ConnectionStatus',
  component: ConnectionStatus,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ConnectionStatus>

export const Connected: Story = {
  args: {
    status: 'connected',
  },
}

export const Disconnected: Story = {
  args: {
    status: 'disconnected',
  },
}

export const Connecting: Story = {
  args: {
    status: 'connecting',
  },
}
```

**Step 3-5: Update index, registry, commit**

---

## Execution

After completing all tasks, run build verification:

```bash
npm run build
```

**Plan complete and saved to `docs/plans/2026-03-02-ui-kit-blocks-phase2.md`. Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

Which approach?
