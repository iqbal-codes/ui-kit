# StickyHeader

> Sticky header that stays at top.

## Import

```typescript
import { StickyHeader } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Header content |
| `top` | `string \| number` | `0` | Top offset |
| `zIndex` | `number` | `50` | Z-index |
| `className` | `string` | - | Additional CSS classes |

---

## Usage

```tsx
import { StickyHeader } from '@iqbal-codes/ui-kit/blocks';

<StickyHeader top={0} zIndex={50}>
  <Navigation />
</StickyHeader>
```
