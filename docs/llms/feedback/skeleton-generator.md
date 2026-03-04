# SkeletonGenerator

> Loading skeleton placeholders for various content types.

## Import

```typescript
import { SkeletonGenerator } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

SkeletonGenerator creates loading placeholders with:
- **Variants** - card, list, table, text
- **Count** - Number of skeletons
- **Custom styling** - Additional CSS classes

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"card" \| "list" \| "table" \| "text"` | `"card"` | Skeleton type |
| `count` | `number` | `3` | Number of skeletons |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { SkeletonGenerator } from '@iqbal-codes/ui-kit/blocks';

// Card skeletons
<SkeletonGenerator variant="card" count={3} />

// List skeletons
<SkeletonGenerator variant="list" count={5} />

// Table skeletons
<SkeletonGenerator variant="table" count={10} />

// Text skeletons
<SkeletonGenerator variant="text" count={4} />
```

---

## Loading States

### Card Loading

```tsx
{isLoading ? (
  <SkeletonGenerator variant="card" count={3} />
) : (
  <CardGrid>
    {items.map(item => <Card key={item.id}>{item.content}</Card>)}
  </CardGrid>
)}
```

### List Loading

```tsx
{isLoading ? (
  <SkeletonGenerator variant="list" count={5} />
) : (
  <List>
    {items.map(item => <ListItem key={item.id}>{item.name}</ListItem>)}
  </List>
)}
```

### Table Loading

```tsx
{isLoading ? (
  <SkeletonGenerator variant="table" count={10} />
) : (
  <DataTable data={data} columns={columns} />
)}
```

---

## Common Patterns

### Data Fetching

```tsx
function DataComponent() {
  const { data, isLoading } = useData();

  if (isLoading) {
    return <SkeletonGenerator variant="card" count={6} />;
  }

  return <CardGrid>{data.map(renderCard)}</CardGrid>;
}
```

### Form Loading

```tsx
function EditForm() {
  const { data, isLoading } = useFormData();

  if (isLoading) {
    return <SkeletonGenerator variant="text" count={8} />;
  }

  return <FormBuilder sections={sections} />;
}
```

---

## Related Components

- [LoadingOverlay](./loading-overlay.md) - Full-screen loading
- [EmptyState](./empty-state.md) - Empty content
