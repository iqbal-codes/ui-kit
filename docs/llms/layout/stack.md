# Stack

> Stack layout (HStack/VStack) with gap, alignment, and justify.

## Import

```typescript
import { Stack, HStack, VStack } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

Stack provides flexible layout with:
- **Direction** - Horizontal or vertical
- **Gap** - Spacing between items
- **Alignment** - Cross-axis alignment
- **Justify** - Main-axis distribution

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Stack content |
| `direction` | `"horizontal" \| "vertical"` | `"vertical"` | Stack direction |
| `gap` | `number` | `4` | Gap between items |
| `align` | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | - | Cross-axis alignment |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | - | Main-axis distribution |
| `wrap` | `boolean` | `false` | Allow wrap |
| `fullWidth` | `boolean` | `false` | Full width |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { Stack, HStack, VStack } from '@iqbal-codes/ui-kit/blocks';

// Vertical stack (default)
<Stack gap={4}>
  <Item />
  <Item />
  <Item />
</Stack>

// Horizontal stack
<HStack gap={2} align="center">
  <Icon />
  <Text>Label</Text>
</HStack>
```

---

## Alignment Examples

```tsx
// Center items
<Stack align="center" gap={4}>
  <Box>Centered</Box>
</Stack>

// Stretch items
<Stack align="stretch" gap={4}>
  <Box>Stretched</Box>
</Stack>

// Justify between
<HStack justify="between">
  <Left />
  <Right />
</HStack>
```

---

## With Wrap

```tsx
<HStack wrap gap={4}>
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</HStack>
```

---

## Related Components

- [Container](./container.md) - Max-width container
- [Center](./center.md) - Center content
