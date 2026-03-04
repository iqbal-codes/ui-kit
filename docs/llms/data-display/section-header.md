# SectionHeader

> Section heading with title, description, and action button.

## Import

```typescript
import { SectionHeader } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

SectionHeader provides a consistent header for page sections with:
- **Title** - Section title
- **Description** - Optional subtitle
- **Icon** - Optional icon
- **Action** - Optional action button

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Section title |
| `description` | `string` | - | Section description |
| `action` | `{ label: string; onClick: () => void; variant?: ButtonVariant; icon?: ReactNode }` | - | Action button config |
| `icon` | `ReactNode` | - | Icon element |
| `className` | `string` | - | Additional CSS classes |

### ButtonVariant

```typescript
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
```

---

## Basic Usage

```tsx
import { SectionHeader } from '@iqbal-codes/ui-kit/blocks';

<SectionHeader
  title="Users"
  description="Manage your team members"
/>
```

---

## With Action Button

```tsx
<SectionHeader
  title="Products"
  description="Manage your product catalog"
  action={{
    label: 'Add Product',
    onClick: () => navigate('/products/new'),
    icon: <PlusIcon />
  }}
/>
```

---

## With Icon

```tsx
<SectionHeader
  title="Dashboard"
  description="Overview of your business"
  icon={<LayoutDashboardIcon />}
/>
```

---

## Complete Example

```tsx
<SectionHeader
  title="Orders"
  description="Track and manage customer orders"
  icon={<ShoppingCartIcon />}
  action={{
    label: 'Create Order',
    onClick: handleCreateOrder,
    variant: 'default'
  }}
/>
```

---

## Related Components

- [PageHeader](../layout/page-header.md) - Page-level header
- [CardGrid](./card-grid.md) - Card grid layout
