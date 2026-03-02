# UI Kit MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up the UI Kit MVP architecture with registry system, Fumadocs documentation, and 3 example blocks (PageHeader, StatCard, EmptyState).

**Architecture:** Two-layer component system (Primitives + Blocks) with objective-based categorization (layout, data-display, feedback, etc.). Blocks are composite patterns built from shadcn primitives. Registry uses JSON manifests with metadata for each component.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Fumadocs, Next.js 15, tsup (build)

---

## Prerequisites

- Node.js 18+
- npm installed
- Project already has shadcn/ui primitives in `src/primitives/`

---

## Phase 1: Registry System

### Task 1: Create Registry Directory Structure

**Files:**
- Create: `registry/schemas/block.json`
- Create: `registry/types/index.ts`
- Create: `registry/registry.json`

**Step 1: Create directory structure**

Run:
```bash
mkdir -p registry/schemas registry/types
```

**Step 2: Write JSON schema for block validation**

Create `registry/schemas/block.json`:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://ui-kit/registry/block",
  "title": "Block Manifest",
  "description": "Schema for UI Kit block component manifests",
  "type": "object",
  "required": ["name", "type", "files"],
  "properties": {
    "name": {
      "type": "string",
      "description": "PascalCase component name"
    },
    "description": {
      "type": "string",
      "description": "Human-readable description"
    },
    "type": {
      "type": "string",
      "enum": ["block", "smart"],
      "description": "Block type - block (simple) or smart (with external deps)"
    },
    "category": {
      "type": "string",
      "enum": ["layout", "data-display", "data-entry", "feedback", "navigation"],
      "description": "Functional category"
    },
    "files": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Files that make up this block"
    },
    "primitives": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Primitive dependencies"
    },
    "dependencies": {
      "type": "array",
      "items": { "type": "string" },
      "description": "External NPM dependencies (for smart blocks)"
    }
  }
}
```

**Step 3: Write TypeScript types for registry**

Create `registry/types/index.ts`:
```typescript
export type BlockType = 'block' | 'smart';

export type BlockCategory =
  | 'layout'
  | 'data-display'
  | 'data-entry'
  | 'feedback'
  | 'navigation';

export interface BlockManifest {
  name: string;
  description: string;
  type: BlockType;
  category: BlockCategory;
  files: string[];
  primitives: string[];
  dependencies: string[];
}

export interface CategoryManifest {
  path: string;
  components: BlockManifest[];
}

export interface Registry {
  version: string;
  primitives: {
    path: string;
    components: string[];
  };
  blocks: Record<BlockCategory, CategoryManifest>;
}
```

**Step 4: Create initial registry.json**

Create `registry/registry.json`:
```json
{
  "version": "0.1.0",
  "primitives": {
    "path": "src/primitives",
    "components": []
  },
  "blocks": {
    "layout": {
      "path": "src/blocks/layout",
      "components": []
    },
    "data-display": {
      "path": "src/blocks/data-display",
      "components": []
    },
    "data-entry": {
      "path": "src/blocks/data-entry",
      "components": []
    },
    "feedback": {
      "path": "src/blocks/feedback",
      "components": []
    },
    "navigation": {
      "path": "src/blocks/navigation",
      "components": []
    }
  }
}
```

**Step 5: Commit**

Run:
```bash
git add registry/
git commit -m "feat: add registry system with schemas and types"
```

---

### Task 2: Populate Primitives List in Registry

**Files:**
- Modify: `registry/registry.json`

**Step 1: List all primitives**

Run:
```bash
ls src/primitives/*.tsx | xargs -n1 basename | sed 's/.tsx//' | sort
```

**Step 2: Update registry.json primitives list**

Modify `registry/registry.json`:
```json
{
  "version": "0.1.0",
  "primitives": {
    "path": "src/primitives",
    "components": [
      "accordion",
      "alert",
      "alert-dialog",
      "aspect-ratio",
      "avatar",
      "badge",
      "breadcrumb",
      "button",
      "calendar",
      "card",
      "carousel",
      "chart",
      "checkbox",
      "collapsible",
      "combobox",
      "command",
      "context-menu",
      "dialog",
      "direction",
      "drawer",
      "dropdown-menu",
      "empty",
      "field",
      "form",
      "hover-card",
      "input",
      "input-group",
      "input-otp",
      "item",
      "kbd",
      "label",
      "menubar",
      "native-select",
      "navigation-menu",
      "pagination",
      "popover",
      "progress",
      "radio-group",
      "resizable",
      "scroll-area",
      "select",
      "separator",
      "sheet",
      "sidebar",
      "skeleton",
      "slider",
      "sonner",
      "spinner",
      "switch",
      "table",
      "tabs",
      "textarea",
      "toggle",
      "toggle-group",
      "tooltip"
    ]
  },
  "blocks": { ... }
}
```

**Step 3: Commit**

Run:
```bash
git add registry/registry.json
git commit -m "chore: populate primitives list in registry"
```

---

## Phase 2: Blocks Directory Structure

### Task 3: Create Blocks Directory Structure

**Files:**
- Create: `src/blocks/layout/index.ts`
- Create: `src/blocks/data-display/index.ts`
- Create: `src/blocks/data-entry/index.ts`
- Create: `src/blocks/feedback/index.ts`
- Create: `src/blocks/navigation/index.ts`
- Create: `src/blocks/index.ts`

**Step 1: Create directories**

Run:
```bash
mkdir -p src/blocks/layout src/blocks/data-display src/blocks/data-entry src/blocks/feedback src/blocks/navigation
```

**Step 2: Create category index files**

Create `src/blocks/layout/index.ts`:
```typescript
// Layout blocks - page structure and shells
export {};
```

Create `src/blocks/data-display/index.ts`:
```typescript
// Data display blocks - cards, stats, tables
export {};
```

Create `src/blocks/data-entry/index.ts`:
```typescript
// Data entry blocks - form patterns, search
export {};
```

Create `src/blocks/feedback/index.ts`:
```typescript
// Feedback blocks - empty states, loading
export {};
```

Create `src/blocks/navigation/index.ts`:
```typescript
// Navigation blocks - breadcrumbs, pagination
export {};
```

**Step 3: Create root blocks index**

Create `src/blocks/index.ts`:
```typescript
// Blocks - Composite UI patterns built from primitives
// Organized by functional objective

export * from './layout';
export * from './data-display';
export * from './data-entry';
export * from './feedback';
export * from './navigation';
```

**Step 4: Commit**

Run:
```bash
git add src/blocks/
git commit -m "feat: create blocks directory structure with categories"
```

---

## Phase 3: Build MVP Blocks

### Task 4: Create PageHeader Block

**Files:**
- Create: `src/blocks/layout/page-header.tsx`
- Modify: `src/blocks/layout/index.ts`
- Modify: `registry/registry.json`

**Step 1: Read primitives that PageHeader depends on**

Read:
- `src/primitives/breadcrumb.tsx`
- `src/primitives/separator.tsx`
- `src/primitives/button.tsx`

**Step 2: Write PageHeader component**

Create `src/blocks/layout/page-header.tsx`:
```typescript
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/primitives/breadcrumb';
import { Separator } from '@/primitives/separator';

export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Breadcrumb items (last item is current page) */
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  /** Actions to display in the header (buttons, etc.) */
  actions?: React.ReactNode;
  /** Custom content to render below the title */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : crumb.href ? (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </BreadcrumbLink>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {children && <div className="pt-2">{children}</div>}

      <Separator />
    </div>
  );
}

export default PageHeader;
```

**Step 3: Export from layout index**

Modify `src/blocks/layout/index.ts`:
```typescript
// Layout blocks - page structure and shells
export { PageHeader, type PageHeaderProps } from './page-header';
```

**Step 4: Update registry**

Modify `registry/registry.json` blocks.layout:
```json
"layout": {
  "path": "src/blocks/layout",
  "components": [
    {
      "name": "PageHeader",
      "description": "Page title with breadcrumbs and actions",
      "type": "block",
      "category": "layout",
      "files": ["page-header.tsx", "index.ts"],
      "primitives": ["breadcrumb", "separator"],
      "dependencies": []
    }
  ]
}
```

**Step 5: Verify build**

Run:
```bash
npm run typecheck
```

Expected: No errors

**Step 6: Commit**

Run:
```bash
git add src/blocks/layout/ registry/registry.json
git commit -m "feat: add PageHeader block"
```

---

### Task 5: Create StatCard Block

**Files:**
- Create: `src/blocks/data-display/stat-card.tsx`
- Modify: `src/blocks/data-display/index.ts`
- Modify: `registry/registry.json`

**Step 1: Read primitives**

Read:
- `src/primitives/card.tsx`
- `src/primitives/badge.tsx`

**Step 2: Write StatCard component**

Create `src/blocks/data-display/stat-card.tsx`:
```typescript
import * as React from 'react';
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/primitives/card';
import { Badge } from '@/primitives/badge';

export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatCardProps {
  /** Card title (metric name) */
  title: string;
  /** Current value to display */
  value: string | number;
  /** Optional description below title */
  description?: string;
  /** Trend direction for indicator */
  trend?: {
    direction: TrendDirection;
    value: string;
    label?: string;
  };
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

function TrendBadge({
  direction,
  value,
  label,
}: {
  direction: TrendDirection;
  value: string;
  label?: string;
}) {
  const icons = {
    up: ArrowUpIcon,
    down: ArrowDownIcon,
    neutral: MinusIcon,
  };

  const variants = {
    up: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    down: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };

  const Icon = icons[direction];

  return (
    <Badge variant="outline" className={cn('gap-1 font-normal', variants[direction])}>
      <Icon className="h-3 w-3" />
      <span>{value}</span>
      {label && <span className="text-muted-foreground">{label}</span>}
    </Badge>
  );
}

export function StatCard({
  title,
  value,
  description,
  trend,
  className,
  onClick,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        'transition-colors',
        onClick && 'cursor-pointer hover:bg-muted/50',
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
        </div>
        {trend && (
          <TrendBadge
            direction={trend.direction}
            value={trend.value}
            label={trend.label}
          />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
}

export default StatCard;
```

**Step 3: Export from data-display index**

Modify `src/blocks/data-display/index.ts`:
```typescript
// Data display blocks - cards, stats, tables
export { StatCard, type StatCardProps, type TrendDirection } from './stat-card';
```

**Step 4: Update registry**

Modify `registry/registry.json` blocks.data-display:
```json
"data-display": {
  "path": "src/blocks/data-display",
  "components": [
    {
      "name": "StatCard",
      "description": "Metric card with value and trend indicator",
      "type": "block",
      "category": "data-display",
      "files": ["stat-card.tsx", "index.ts"],
      "primitives": ["card", "badge"],
      "dependencies": []
    }
  ]
}
```

**Step 5: Verify build**

Run:
```bash
npm run typecheck
```

Expected: No errors

**Step 6: Commit**

Run:
```bash
git add src/blocks/data-display/ registry/registry.json
git commit -m "feat: add StatCard block"
```

---

### Task 6: Create EmptyState Block

**Files:**
- Create: `src/blocks/feedback/empty-state.tsx`
- Modify: `src/blocks/feedback/index.ts`
- Modify: `registry/registry.json`

**Step 1: Read primitives**

Read:
- `src/primitives/button.tsx`
- `src/primitives/card.tsx` (check structure)

**Step 2: Write EmptyState component**

Create `src/blocks/feedback/empty-state.tsx`:
```typescript
import * as React from 'react';
import { LucideIcon, PackageOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/primitives/button';

export interface EmptyStateAction {
  /** Button label */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Button variant */
  variant?: ButtonProps['variant'];
  /** Icon to show alongside label */
  icon?: React.ReactNode;
}

export interface EmptyStateProps {
  /** Title text */
  title: string;
  /** Descriptive message */
  description?: string;
  /** Icon to display (defaults to PackageOpen) */
  icon?: LucideIcon;
  /** Primary action button */
  action?: EmptyStateAction;
  /** Secondary action button */
  secondaryAction?: EmptyStateAction;
  /** Compact mode for inline empty states */
  compact?: boolean;
  /** Additional CSS classes */
  className?: string;
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
    );
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
  );
}

export default EmptyState;
```

**Step 3: Export from feedback index**

Modify `src/blocks/feedback/index.ts`:
```typescript
// Feedback blocks - empty states, loading
export {
  EmptyState,
  type EmptyStateProps,
  type EmptyStateAction,
} from './empty-state';
```

**Step 4: Update registry**

Modify `registry/registry.json` blocks.feedback:
```json
"feedback": {
  "path": "src/blocks/feedback",
  "components": [
    {
      "name": "EmptyState",
      "description": "Zero-state illustration with message and CTA",
      "type": "block",
      "category": "feedback",
      "files": ["empty-state.tsx", "index.ts"],
      "primitives": ["button"],
      "dependencies": []
    }
  ]
}
```

**Step 5: Verify build**

Run:
```bash
npm run typecheck
```

Expected: No errors

**Step 6: Commit**

Run:
```bash
git add src/blocks/feedback/ registry/registry.json
git commit -m "feat: add EmptyState block"
```

---

## Phase 4: Package Exports

### Task 7: Update Package Exports for Blocks

**Files:**
- Modify: `package.json`
- Modify: `tsup.config.ts` (if needed)

**Step 1: Update package.json exports**

Modify `package.json` exports section:
```json
"exports": {
  ".": {
    "import": "./dist/index.mjs",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  },
  "./primitives": {
    "import": "./dist/primitives/index.mjs",
    "require": "./dist/primitives/index.js",
    "types": "./dist/primitives/index.d.ts"
  },
  "./blocks": {
    "import": "./dist/blocks/index.mjs",
    "require": "./dist/blocks/index.js",
    "types": "./dist/blocks/index.d.ts"
  },
  "./tokens": {
    "import": "./dist/tokens/index.mjs",
    "require": "./dist/tokens/index.js",
    "types": "./dist/tokens/index.d.ts"
  }
}
```

**Step 2: Check tsup config**

Read `tsup.config.ts` to verify entry points cover blocks.

**Step 3: Update if needed**

If tsup.config.ts uses `entry` array, ensure it includes blocks:
```typescript
entry: [
  'src/index.ts',
  'src/primitives/index.ts',
  'src/blocks/index.ts',
  'src/tokens/index.ts',
],
```

**Step 4: Test build**

Run:
```bash
npm run build
```

Expected: Build succeeds with blocks output

**Step 5: Commit**

Run:
```bash
git add package.json tsup.config.ts
git commit -m "feat: add blocks to package exports"
```

---

## Phase 5: Fumadocs Setup

### Task 8: Install and Configure Fumadocs

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/(docs)/layout.tsx`
- Create: `app/(docs)/page.tsx`
- Create: `app/(docs)/docs/[[...slug]]/page.tsx`
- Create: `app/source.ts`
- Create: `content/docs/index.mdx`

**Step 1: Install Fumadocs**

Run:
```bash
npm install fumadocs-ui fumadocs-core fumadocs-mdx
```

**Step 2: Create content directories**

Run:
```bash
mkdir -p content/docs/blocks/layout content/docs/blocks/data-display content/docs/blocks/feedback content/docs/primitives
```

**Step 3: Create root layout**

Create `app/layout.tsx`:
```typescript
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/src/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
```

**Step 4: Create landing page**

Create `app/page.tsx`:
```typescript
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">UI Kit</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A comprehensive design system with blocks and primitives
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
      >
        View Documentation
      </Link>
    </main>
  );
}
```

**Step 5: Create source configuration**

Create `app/source.ts`:
```typescript
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  docs,
});
```

**Step 6: Create docs layout**

Create `app/(docs)/layout.tsx`:
```typescript
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { source } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'UI Kit',
      }}
    >
      {children}
    </DocsLayout>
  );
}
```

**Step 7: Create docs page**

Create `app/(docs)/page.tsx`:
```typescript
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { source } from '@/app/source';

export default function Page() {
  const page = source.getPage([]);
  if (!page) return null;

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc}>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export const metadata: Metadata = {
  title: 'UI Kit Documentation',
};
```

**Step 8: Create dynamic docs page**

Create `app/(docs)/docs/[[...slug]]/page.tsx`:
```typescript
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { source } from '@/app/source';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  } as Metadata;
}
```

**Step 9: Create root content**

Create `content/docs/index.mdx`:
```mdx
---
title: Getting Started
description: Welcome to the UI Kit documentation
---

# UI Kit

A comprehensive design system for React applications, featuring a two-layer architecture of Primitives and Blocks.

## Architecture

### Primitives
Low-level building blocks from shadcn/ui. These are the atomic elements like Button, Card, Input, etc.

### Blocks
Composite UI patterns built from primitives, organized by functional objective:

- **Layout**: Page structure components (PageHeader, PageShell)
- **Data Display**: Presenting data (StatCard, DataList)
- **Data Entry**: Input patterns (SearchBar, FormSection)
- **Feedback**: System feedback (EmptyState, LoadingState)
- **Navigation**: Wayfinding components (BreadcrumbNav, Pagination)

## Installation

```bash
npm install @iqbal-codes/ui-kit
```

## Usage

### Import Blocks (Recommended)

```tsx
import { PageHeader, StatCard, EmptyState } from '@iqbal-codes/ui-kit/blocks';
```

### Import Primitives (When Needed)

```tsx
import { Button, Card, Input } from '@iqbal-codes/ui-kit';
```
```

**Step 10: Configure next.config**

Read `next.config.ts` (or `.js`) and add static export config if needed for build.

**Step 11: Test dev server**

Run:
```bash
npm run dev
```

Expected: Server starts on port 3000, homepage loads

**Step 12: Commit**

Run:
```bash
git add app/ content/ package.json package-lock.json next.config.*
git commit -m "feat: setup Fumadocs documentation site"
```

---

### Task 9: Create Component Documentation Pages

**Files:**
- Create: `content/docs/primitives/index.mdx`
- Create: `content/docs/blocks/layout/page-header.mdx`
- Create: `content/docs/blocks/data-display/stat-card.mdx`
- Create: `content/docs/blocks/feedback/empty-state.mdx`

**Step 1: Create primitives index**

Create `content/docs/primitives/index.mdx`:
```mdx
---
title: Primitives
description: Low-level UI building blocks from shadcn/ui
---

# Primitives

Primitives are the foundational UI components from shadcn/ui. They are atomic elements that serve as building blocks for higher-level Blocks.

## Available Primitives

The following primitives are available:

- **Layout**: Card, Dialog, Sheet, Alert
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch
- **Navigation**: Breadcrumb, Tabs, Pagination, Menubar
- **Feedback**: Alert, Progress, Skeleton, Sonner
- **Data Display**: Avatar, Badge, Table, Calendar, Chart
- **Overlay**: Dialog, Drawer, Popover, Tooltip, HoverCard

## Usage

While you can import primitives directly, the recommended approach is to use Blocks which compose these primitives into common patterns.

```tsx
// Direct primitive import (discouraged for apps)
import { Button, Card } from '@iqbal-codes/ui-kit';

// Block import (recommended)
import { StatCard } from '@iqbal-codes/ui-kit/blocks';
```
```

**Step 2: Create PageHeader docs**

Create `content/docs/blocks/layout/page-header.mdx`:
```mdx
---
title: PageHeader
description: Page title with breadcrumbs and actions
---

# PageHeader

A consistent page header pattern that combines title, breadcrumbs, actions, and optional content.

## Usage

```tsx
import { PageHeader } from '@iqbal-codes/ui-kit/blocks';

export default function Page() {
  return (
    <PageHeader
      title="Dashboard"
      subtitle="Overview of your system"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard' },
      ]}
      actions={
        <Button>Create New</Button>
      }
    />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title |
| `subtitle` | `string` | Optional subtitle below title |
| `breadcrumbs` | `Array<{label: string, href?: string}>` | Breadcrumb navigation items |
| `actions` | `ReactNode` | Action buttons or controls |
| `children` | `ReactNode` | Custom content below title |
| `className` | `string` | Additional CSS classes |

## Examples

### Basic Usage

```tsx
<PageHeader title="Settings" />
```

### With Breadcrumbs

```tsx
<PageHeader
  title="User Profile"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Profile' },
  ]}
/>
```

### With Actions

```tsx
<PageHeader
  title="Products"
  actions={
    <>
      <Button variant="outline">Export</Button>
      <Button>Add Product</Button>
    </>
  }
/>
```
```

**Step 3: Create StatCard docs**

Create `content/docs/blocks/data-display/stat-card.mdx`:
```mdx
---
title: StatCard
description: Metric card with value and trend indicator
---

# StatCard

A card component for displaying metrics with optional trend indicators.

## Usage

```tsx
import { StatCard } from '@iqbal-codes/ui-kit/blocks';

export default function Stats() {
  return (
    <StatCard
      title="Total Revenue"
      value="$45,231"
      description="Revenue for this month"
      trend={{
        direction: 'up',
        value: '+12%',
        label: 'vs last month',
      }}
    />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Metric name |
| `value` | `string \| number` | Current value |
| `description` | `string` | Optional description |
| `trend` | `{direction: 'up' \| 'down' \| 'neutral', value: string, label?: string}` | Trend indicator |
| `className` | `string` | Additional CSS classes |
| `onClick` | `() => void` | Click handler (makes card clickable) |

## Trend Directions

- `up`: Green indicator, shows increase
- `down`: Red indicator, shows decrease
- `neutral`: Gray indicator, no change

## Examples

### Basic Stat

```tsx
<StatCard title="Users" value="2,420" />
```

### With Trend

```tsx
<StatCard
  title="Conversion Rate"
  value="3.2%"
  trend={{
    direction: 'up',
    value: '+0.4%',
    label: 'vs last week',
  }}
/>
```

### Clickable

```tsx
<StatCard
  title="Orders"
  value="124"
  onClick={() => router.push('/orders')}
/>
```
```

**Step 4: Create EmptyState docs**

Create `content/docs/blocks/feedback/empty-state.mdx`:
```mdx
---
title: EmptyState
description: Zero-state illustration with message and CTA
---

# EmptyState

A component for empty states, providing context and a clear call-to-action.

## Usage

```tsx
import { EmptyState } from '@iqbal-codes/ui-kit/blocks';
import { FilePlus } from 'lucide-react';

export default function EmptyProjects() {
  return (
    <EmptyState
      title="No projects yet"
      description="Get started by creating your first project."
      icon={FilePlus}
      action={{
        label: 'Create Project',
        onClick: () => createProject(),
      }}
    />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Title text |
| `description` | `string` | Descriptive message |
| `icon` | `LucideIcon` | Icon component (defaults to PackageOpen) |
| `action` | `{label: string, onClick: () => void, variant?: ButtonVariant, icon?: ReactNode}` | Primary action |
| `secondaryAction` | `{label: string, onClick: () => void, variant?: ButtonVariant, icon?: ReactNode}` | Secondary action |
| `compact` | `boolean` | Compact mode for inline empty states |
| `className` | `string` | Additional CSS classes |

## Examples

### Full Size (Default)

```tsx
<EmptyState
  title="No results found"
  description="Try adjusting your search or filters."
/>
```

### With Actions

```tsx
<EmptyState
  title="No notifications"
  description="You're all caught up!"
  action={{
    label: 'View Archive',
    onClick: () => {},
  }}
  secondaryAction={{
    label: 'Settings',
    variant: 'outline',
    onClick: () => {},
  }}
/>
```

### Compact (Inline)

```tsx
<EmptyState
  title="No items"
  description="Add an item to get started."
  compact
  action={{
    label: 'Add Item',
    onClick: () => {},
  }}
/>
```

### Custom Icon

```tsx
import { Inbox } from 'lucide-react';

<EmptyState
  title="Inbox empty"
  icon={Inbox}
  description="No new messages."
/>
```
```

**Step 5: Verify docs build**

Run:
```bash
npm run build
```

Expected: Build succeeds

**Step 6: Commit**

Run:
```bash
git add content/
git commit -m "docs: add component documentation pages"
```

---

## Phase 6: Final Validation

### Task 10: Final Build and Test

**Step 1: Run type check**

```bash
npm run typecheck
```

Expected: No errors

**Step 2: Run tests**

```bash
npm test
```

Expected: All tests pass (or no tests fail)

**Step 3: Build package**

```bash
npm run build
```

Expected: Build succeeds, output in `dist/` includes blocks

**Step 4: Verify build output**

Run:
```bash
ls -la dist/blocks/
```

Expected: blocks/index.js, blocks/index.mjs, blocks/index.d.ts exist

**Step 5: Commit any final changes**

Run:
```bash
git add -A
git commit -m "chore: final validation and build"
```

---

## Summary

This implementation plan delivers:

1. **Registry System**: JSON schemas, TypeScript types, and populated registry
2. **Blocks Architecture**: 3 MVP blocks (PageHeader, StatCard, EmptyState) in categorized directories
3. **Package Exports**: Blocks exposed via `@iqbal-codes/ui-kit/blocks`
4. **Documentation**: Fumadocs site with component documentation

**Success Criteria:**
- [ ] Registry validates against schema
- [ ] All 3 blocks type-check and build
- [ ] Package exports work for blocks
- [ ] Fumadocs site runs and shows documentation
- [ ] Final build succeeds

---

**Ready to implement?** Use `superpowers:executing-plans` skill to execute this plan task-by-task.
