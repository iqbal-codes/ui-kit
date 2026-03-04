# CardGrid

> Responsive grid layout for displaying cards.

## Import

```typescript
import { CardGrid } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

CardGrid provides a responsive grid layout for cards with configurable columns and gaps.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number` | `3` | Number of columns |
| `gap` | `number` | `4` | Gap between cards |
| `children` | `ReactNode` | **required** | Card content |

---

## Basic Usage

```tsx
import { CardGrid } from '@iqbal-codes/ui-kit/blocks';

<CardGrid columns={3} gap={4}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</CardGrid>
```

---

## Responsive Columns

```tsx
// Use responsive class names or inline styles
<CardGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</CardGrid>
```

---

## Related Components

- [MasonryBoard](./masonry-board.md) - Pinterest-style grid
- [StatCard](./stat-card.md) - Statistical card
- [EntityCard](./entity-card.md) - Entity display card
