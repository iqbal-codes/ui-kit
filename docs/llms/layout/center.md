# Center

> Center content horizontally and vertically.

## Import

```typescript
import { Center } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

Center positions content in the middle of its container.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Content to center |
| `inline` | `boolean` | `false` | Inline display |
| `w` | `string \| number` | `"100%"` | Width |
| `h` | `string \| number` | - | Height |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { Center } from '@iqbal-codes/ui-kit/blocks';

<Center h="200px">
  <Spinner />
</Center>
```

---

## Related Components

- [Stack](./stack.md) - Stack layout
- [Container](./container.md) - Max-width container
