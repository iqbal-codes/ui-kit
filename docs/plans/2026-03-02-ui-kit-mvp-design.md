# UI Kit MVP Design Document

**Date:** 2026-03-02
**Topic:** UI Kit MVP Architecture - Phase 1
**Status:** Approved

---

## 1. Overview

This document defines the MVP architecture for the AI-Native UI Kit. The MVP establishes the foundation for a two-layer component system (Primitives + Blocks) with a registry-based documentation system powered by Fumadocs.

**Goals:**
- Establish architectural patterns and directory structure
- Create registry system for component metadata
- Set up Fumadocs documentation site
- Build 3 example blocks to validate patterns

**Non-Goals (Phase 2/3):**
- CLI installation tool
- Auto-generated documentation pages
- Smart blocks with external state libraries

---

## 2. Architecture

### 2.1 Two-Layer Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│  BLOCKS (src/blocks/) - Categorized by Objective            │
│  ├─ layout/         - Page structure, shells, sections      │
│  ├─ data-display/   - Cards, stats, tables, lists           │
│  ├─ data-entry/     - Form layouts, search, filters         │
│  ├─ feedback/       - Empty states, loading, alerts         │
│  └─ navigation/     - Breadcrumbs, pagination, steppers     │
├─────────────────────────────────────────────────────────────┤
│  PRIMITIVES (src/primitives/)                               │
│  ├─ 56 shadcn/ui components (existing)                      │
│  └─ Building blocks for Blocks only                         │
├─────────────────────────────────────────────────────────────┤
│  INFRASTRUCTURE                                             │
│  ├─ Registry (registry/): component manifests by category   │
│  ├─ Tokens (src/tokens/): design tokens                     │
│  └─ Fumadocs (app/): documentation site                     │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Block Categories (Objective-Based)

Blocks are organized by their functional purpose, not abstraction level:

| Category | Purpose | Examples |
|----------|---------|----------|
| `layout` | Page structure and shells | PageHeader, PageShell, ContentSection |
| `data-display` | Presenting data | StatCard, DataList, Timeline |
| `data-entry` | User input patterns | SearchBar, FormSection, FilterGroup |
| `feedback` | System feedback | EmptyState, LoadingState, ErrorBoundary |
| `navigation` | Wayfinding | BreadcrumbNav, Pagination, StepIndicator |

### 2.3 Smart vs Block Distinction

Smart blocks (with external dependencies like nuqs, tanstack-query) live in the same categories as regular blocks. The registry identifies them via metadata:

```json
{
  "name": "DataTable",
  "category": "data-display",
  "type": "smart",
  "dependencies": ["@tanstack/react-table"]
}
```

---

## 3. MVP Block Selection

Three blocks to validate the architecture:

| Block | Category | Primitives Used | Purpose |
|-------|----------|-----------------|---------|
| `PageHeader` | layout | Breadcrumb, Separator, Button, Heading | Consistent page title + nav + actions |
| `StatCard` | data-display | Card, Badge | Metric card with trend indicator |
| `EmptyState` | feedback | Card, Button | Zero-state with illustration + CTA |

These are composite patterns not provided by shadcn/ui directly.

---

## 4. Registry System

### 4.1 File Structure

```
registry/
├── registry.json          # Main catalog
├── schemas/
│   └── block.json         # JSON schema for validation
└── types/
    └── index.ts           # TypeScript types
```

### 4.2 Registry Format

```json
{
  "version": "0.1.0",
  "primitives": {
    "path": "src/primitives",
    "components": ["button", "card", "dialog"]
  },
  "blocks": {
    "layout": {
      "path": "src/blocks/layout",
      "components": [
        {
          "name": "PageHeader",
          "description": "Page title with breadcrumbs and actions",
          "type": "block",
          "files": ["page-header.tsx", "index.ts"],
          "primitives": ["breadcrumb", "separator", "button"],
          "dependencies": []
        }
      ]
    }
  }
}
```

---

## 5. Fumadocs Documentation

### 5.1 Directory Structure

```
app/
├── (docs)/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── docs/
│   │   └── [[...slug]]/
│   └── layout.config.tsx
├── api/
│   └── registry/
├── source.ts
└── layout.tsx

content/docs/
├── index.mdx
├── primitives/
│   └── index.mdx
└── blocks/
    ├── layout/
    │   └── page-header.mdx
    ├── data-display/
    │   └── stat-card.mdx
    └── feedback/
        └── empty-state.mdx
```

### 5.2 Content Organization

- Manual MDX pages for MVP (auto-generation in Phase 2)
- Each block page includes: description, props table, usage example, source code link
- Registry API endpoint for programmatic access

---

## 6. Component Conventions

### 6.1 File Structure

```
src/blocks/
├── layout/
│   ├── page-header.tsx      # Main component
│   ├── page-shell.tsx
│   └── index.ts             # Re-exports
├── data-display/
│   ├── stat-card.tsx
│   └── index.ts
├── feedback/
│   ├── empty-state.tsx
│   └── index.ts
└── index.ts                 # Root: export * from './layout'
```

### 6.2 Naming Conventions

- **Files:** kebab-case (`page-header.tsx`)
- **Components:** PascalCase (`PageHeader`)
- **Props Interface:** `{ComponentName}Props`
- **Export:** Default export for main component

### 6.3 Block Implementation Pattern

```tsx
// src/blocks/layout/page-header.tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem } from '@/primitives/breadcrumb';
import { Separator } from '@/primitives/separator';
import { Button } from '@/primitives/button';

export interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
}

export function PageHeader({ title, breadcrumbs, actions }: PageHeaderProps) {
  // Implementation
}

export default PageHeader;
```

---

## 7. Distribution

### 7.1 Package Exports

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    },
    "./blocks": {
      "import": "./dist/blocks/index.mjs",
      "types": "./dist/blocks/index.d.ts"
    }
  }
}
```

### 7.2 Usage Patterns

```tsx
// Import blocks (recommended)
import { PageHeader, StatCard } from '@iqbal-codes/ui-kit/blocks';

// Import primitives (blocks use these internally)
import { Button } from '@iqbal-codes/ui-kit';
```

---

## 8. Dependency Flow

```
Apps
  └─> Blocks (src/blocks/*)
        └─> Primitives (src/primitives/*)
              └─> External Libraries (radix, tailwind)

Registry (registry.json)
  └─> Describes all blocks and their dependencies
```

**Rules:**
- Primitives depend only on external libraries
- Blocks depend only on Primitives
- Apps should import Blocks, not Primitives directly

---

## 9. Phase 2/3 Roadmap

**Phase 2: Auto-Generation**
- Props extraction from TypeScript AST
- Auto-generated Fumadocs pages from registry
- Source code viewer component

**Phase 3: CLI Tool**
- `ui-kit add <component>` command
- Dependency resolution and installation
- File replication into consuming projects
- Registry update notifications

---

## 10. Success Criteria

1. **Architecture:** Two-layer hierarchy is clear and enforced
2. **Registry:** JSON schema validates, documents 3 MVP blocks
3. **Documentation:** Fumadocs site runs, shows all components
4. **Build:** Package builds, exports work correctly
5. **Blocks:** 3 blocks are composable, type-safe, and documented

---

## 11. Open Questions

None - design approved for implementation.

---

**Approved by:** @iqbal-codes
**Date:** 2026-03-02
