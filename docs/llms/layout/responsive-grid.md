# ResponsiveGrid

> Responsive grid with column configuration.

## Import

```typescript
import { ResponsiveGrid } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ResponsiveGrid provides responsive column layout.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Grid items |
| `columns` | `number \| object` | `1` | Column config |
| `gap` | `number` | `4` | Gap between items |
| `className` | `string` | - | Additional CSS classes |

---

## Usage

```tsx
import { ResponsiveGrid } from '@iqbal-codes/ui-kit/blocks';

// Fixed columns
<ResponsiveGrid columns={3} gap={6}>
  <Item />
  <Item />
  <Item />
</ResponsiveGrid>

// Responsive columns
<ResponsiveGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
  {items}
</ResponsiveGrid>
```

---

## Breakpoints

| Breakpoint | Width |
|------------|-------|
| base | 0px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

---

## Related Components

- [Stack](./stack.md) - Stack layout
- [CardGrid](../data-display/card-grid.md) - Card grid
