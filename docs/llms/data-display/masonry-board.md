# MasonryBoard

> Pinterest-style masonry grid for items of varying heights.

## Import

```typescript
import { MasonryBoard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

MasonryBoard displays items in a Pinterest-style layout that handles varying heights.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `MasonryItem[]` | **required** | Items to display |
| `columns` | `number` | `3` | Number of columns |
| `gap` | `number` | `4` | Gap between items |
| `renderItem` | `(item: MasonryItem) => ReactNode` | **required** | Item renderer |

---

## MasonryItem Type

```typescript
interface MasonryItem {
  id: string;
  height?: number;
  [key: string]: any;
}
```

---

## Basic Usage

```tsx
import { MasonryBoard } from '@iqbal-codes/ui-kit/blocks';

const items = [
  { id: '1', content: 'Short card', height: 150 },
  { id: '2', content: 'Medium card', height: 250 },
  { id: '3', content: 'Tall card', height: 350 },
  { id: '4', content: 'Another short', height: 180 },
];

<MasonryBoard
  items={items}
  columns={3}
  renderItem={(item) => <Card style={{ height: item.height }}>{item.content}</Card>}
/>
```

---

## Image Gallery Example

```tsx
const photos = [
  { id: '1', url: '/img1.jpg', aspectRatio: 1.5 },
  { id: '2', url: '/img2.jpg', aspectRatio: 0.8 },
  { id: '3', url: '/img3.jpg', aspectRatio: 1.2 },
];

<MasonryBoard
  items={photos}
  columns={4}
  renderItem={(photo) => (
    <img src={photo.url} alt="" style={{ aspectRatio: photo.aspectRatio }} />
  )}
/>
```

---

## Related Components

- [CardGrid](./card-grid.md) - Fixed-column grid
