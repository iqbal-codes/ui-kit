# EntityCard

> Card component for displaying entity details with image, title, and actions.

## Import

```typescript
import { EntityCard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

EntityCard displays entity information with:
- **Image** - Optional image/thumbnail
- **Title** - Entity name
- **Description** - Optional description
- **Status** - Optional status badge
- **Actions** - Action buttons

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Card title |
| `description` | `string` | - | Card description |
| `image` | `string` | - | Image URL |
| `imageAlt` | `string` | - | Image alt text |
| `actions` | `ReactNode` | - | Action buttons |
| `status` | `"active" \| "inactive" \| "pending"` | - | Entity status |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { EntityCard } from '@iqbal-codes/ui-kit/blocks';

<EntityCard
  title="Product Name"
  description="Product description here"
  image="/product.jpg"
/>
```

---

## With Status

```tsx
<EntityCard
  title="User Name"
  description="user@example.com"
  status="active"
  actions={<Button>View Profile</Button>}
/>
```

---

## Card Grid Example

```tsx
import { EntityCard } from '@iqbal-codes/ui-kit/blocks';

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {products.map(product => (
    <EntityCard
      key={product.id}
      title={product.name}
      description={product.description}
      image={product.image}
      status={product.status}
      actions={
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm">View</Button>
        </div>
      }
/>
  ))}
</div>
```

---

## Related Components

- [CardGrid](./card-grid.md) - Grid layout
- [StatCard](./stat-card.md) - Statistical card
