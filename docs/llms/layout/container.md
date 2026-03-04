# Container

> Max-width container with optional padding.

## Import

```typescript
import { Container } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

Container provides a constrained-width wrapper with responsive padding.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Container content |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "full"` | `"xl"` | Max width |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Padding size |
| `center` | `boolean` | `false` | Center content |
| `className` | `string` | - | Additional CSS classes |

### Size Values

| Size | Max Width |
|------|-----------|
| `sm` | 48rem (768px) |
| `md` | 64rem (1024px) |
| `lg` | 72rem (1152px) |
| `xl` | 80rem (1280px) |
| `2xl` | 90rem (1440px) |
| `3xl` | 100rem (1600px) |
| `full` | 100% |

---

## Basic Usage

```tsx
import { Container } from '@iqbal-codes/ui-kit/blocks';

<Container>
  <PageContent />
</Container>
```

---

## With Padding

```tsx
<Container padding="lg">
  <PageContent />
</Container>
```

---

## Centered

```tsx
<Container size="md" center padding="md">
  <CenteredContent />
</Container>
```

---

## Related Components

- [Stack](./stack.md) - Stack layout
- [Center](./center.md) - Center content
