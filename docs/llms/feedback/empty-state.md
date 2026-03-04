# EmptyState

> Placeholder UI for empty content with icon, title, description, and actions.

## Import

```typescript
import { EmptyState } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

EmptyState displays placeholder content with:
- **Icon** - Visual indicator (defaults to PackageOpen)
- **Title** - Main message
- **Description** - Optional subtitle
- **Actions** - Primary and secondary buttons
- **Compact mode** - Smaller inline variant

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Title text |
| `description` | `string` | - | Descriptive message |
| `icon` | `LucideIcon` | `PackageOpen` | Icon component |
| `action` | `EmptyStateAction` | - | Primary action |
| `secondaryAction` | `EmptyStateAction` | - | Secondary action |
| `compact` | `boolean` | `false` | Compact mode |
| `className` | `string` | - | Additional CSS classes |

### EmptyStateAction

```typescript
interface EmptyStateAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  icon?: ReactNode;
}
```

---

## Basic Usage

```tsx
import { EmptyState } from '@iqbal-codes/ui-kit/blocks';

<EmptyState
  title="No items found"
  description="Get started by creating your first item"
  action={{ label: 'Create Item', onClick: handleCreate }}
/>
```

---

## With Icon

```tsx
import { UsersIcon, PlusIcon } from 'lucide-react';

<EmptyState
  title="No team members"
  description="Invite your first team member to get started"
  icon={UsersIcon}
  action={{ label: 'Invite Member', onClick: handleInvite, icon: <PlusIcon /> }}
/>
```

---

## With Two Actions

```tsx
<EmptyState
  title="No notifications"
  description="You're all caught up!"
  action={{ label: 'Mark all read', onClick: handleMarkRead }}
  secondaryAction={{ label: 'Settings', onClick: handleSettings, variant: 'outline' }}
/>
```

---

## Compact Mode

```tsx
<EmptyState
  title="No results"
  description="Try adjusting your search"
  compact
  action={{ label: 'Clear filters', onClick: handleClear }}
/>
```

---

## Table Empty State

```tsx
// In a data table
{data.length === 0 ? (
  <EmptyState
    title="No records found"
    description="Try adjusting your filters"
    action={{ label: 'Clear filters', onClick: clearFilters }}
  />
) : (
  <DataTable data={data} columns={columns} />
)}
```

---

## Related Components

- [SmartDataTable](../data-display/smart-data-table.md) - Data table
- [LoadingOverlay](./loading-overlay.md) - Loading state
