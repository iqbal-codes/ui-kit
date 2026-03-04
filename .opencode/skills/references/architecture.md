# Architecture Reference

## Two-Layer Hierarchy

### Primitives Layer

**Location**: `src/primitives/`

Pure UI elements vendored from shadcn/ui. These are atomic visual elements with zero business logic.

**Characteristics**:
- Zero external business dependencies
- No manufacturing or domain-specific terminology
- Visual-only modifications allowed (touch targets, safety color variants)
- Importable only by Blocks, never by application code directly

**Categories**:
- **Actions**: Button, Toggle, Checkbox, Switch
- **Inputs**: Input, Select, Textarea, RadioGroup, Slider
- **Display**: Badge, Card, Progress, Separator, Skeleton
- **Overlays**: Dialog, Sheet, Tooltip, Popover, DropdownMenu
- **Data**: Table, List

### Blocks Layer

**Location**: `src/blocks/`

Composite components constructed from Primitives. Three sub-categories:

#### Layout Blocks

**Purpose**: Structural templates providing page-level composition frameworks.

**Examples**:
- `DashboardShell` - Main application layout with sidebar, header, content area
- `SplitPane` - Resizable two-panel layout
- `PageContainer` - Standard page wrapper with breadcrumbs, title, actions
- `ModalPortal` - Consistent modal overlay and positioning

**Pattern**: Slot-based props (header, content, sidebar, footer)

```tsx
interface DashboardShellProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
```

#### Domain Blocks

**Purpose**: Business-specific UI components containing manufacturing terminology.

**Examples**:
- `WorkOrderCard` - Display work order with status, priority, assignee
- `ProductionTimeline` - Visual timeline of production stages
- `StatusBadge` - Domain-specific status indicators (pending, in-progress, completed)
- `OperatorAssignment` - Display operator assignments with availability
- `QualityMetric` - Quality control metrics with pass/fail indicators

**Pattern**: Flat prop structures with branded types

```tsx
interface WorkOrderCardProps {
  workOrderId: string & { readonly __brand: 'WorkOrderId' };
  title: string;
  status: WorkOrderStatus; // 'pending' | 'in-progress' | 'completed'
  priority: Priority; // 'low' | 'medium' | 'high'
  dueDate: string; // ISO date string
  assignee?: string;
  onClick?: () => void;
}
```

#### Smart Blocks

**Purpose**: Comprehensive feature solutions integrating external state management.

**Examples**:
- `ManufacturingListPage` - List with URL-persisted filters, sorting, pagination
- `AutoSaveForm` - Form with automatic draft saving and validation
- `RealTimeDashboard` - Dashboard with live data updates via WebSocket
- `BulkActionTable` - Table with multi-select and batch operations

**Pattern**: Controller pattern with declarative configuration

```tsx
interface ManufacturingListPageProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filters: FilterConfig<T>;
  onRowClick?: (item: T) => void;
  actions?: BulkAction<T>[];
  // Internal state management via nuqs, react-hook-form, tanstack-query
}
```

## Dependency Hierarchy

```
Application Code
    ↓
Smart Blocks (nuqs, react-hook-form, tanstack-query)
    ↓
Layout Blocks
    ↓
Domain Blocks
    ↓
Primitives (shadcn/ui)
    ↓
Utility Libraries (cn, clsx, tailwind-merge)
```

**Rules**:
1. Dependencies flow downward only
2. No sibling imports between Blocks at the same level
3. Smart Blocks compose Layout Blocks; Layout Blocks accept Domain Blocks in slots
4. Application code imports only Blocks, never Primitives directly

## File Organization

```
src/
├── primitives/           # Shadcn components
│   ├── ui/              # Raw shadcn imports
│   ├── button.tsx       # Re-exported with customizations
│   ├── card.tsx
│   └── index.ts
├── blocks/
│   ├── index.ts         # Public barrel exports
│   ├── layout/
│   │   ├── dashboard-shell.tsx
│   │   ├── dashboard-shell.stories.tsx
│   │   └── index.ts
│   ├── data-display/
│   │   ├── entity-card.tsx
│   │   ├── entity-card.stories.tsx
│   │   └── index.ts
│   ├── data-entry/
│   ├── feedback/
│   └── navigation/
└── lib/
    └── utils.ts         # cn() utility
```

## Import Path Conventions

```typescript
// ✅ Correct - Explicit full paths
import { Button } from "@/primitives/button";
import { EntityCard } from "@/blocks/data-display/entity-card";
import { DashboardShell } from "@/blocks/layout/dashboard-shell";

// ❌ Wrong - Ambiguous or barrel imports
import { Button } from "@/components";
import { EntityCard } from "@/blocks";
```

## TypeScript Patterns

### Branded Types for Domain Safety

```typescript
// Prevent mixing IDs from different domains
type WorkOrderId = string & { readonly __brand: 'WorkOrderId' };
type OrderId = string & { readonly __brand: 'OrderId' };

function getWorkOrder(id: WorkOrderId) { ... }
getWorkOrder("wo-123" as WorkOrderId); // ✅
getWorkOrder("order-456" as OrderId);  // ❌ Type error
```

### Discriminated Unions for Status

```typescript
type WorkOrderStatus = 
  | { status: 'pending'; assignedTo?: null }
  | { status: 'in-progress'; assignedTo: string; startedAt: string }
  | { status: 'completed'; assignedTo: string; completedAt: string };
```

### Flat Prop Structures

```typescript
// ✅ Good - Flat, easy for AI to understand
interface Props {
  title: string;
  status: 'active' | 'inactive';
  statusLabel: string;
  onClick?: () => void;
}

// ❌ Bad - Nested, confusing for AI
interface Props {
  config: {
    title: string;
    status: {
      value: 'active' | 'inactive';
      label: string;
    };
  };
  interactions?: {
    onClick?: () => void;
  };
}
```
