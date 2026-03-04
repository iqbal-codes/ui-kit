# AspectRatio

> Aspect ratio container for media.

## Import

```typescript
import { AspectRatio } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

AspectRatio maintains a fixed aspect ratio for content.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `16 / 9` | Aspect ratio (width/height) |
| `children` | `ReactNode` | **required** | Content |
| `className` | `string` | - | Additional CSS classes |

---

## Usage

```tsx
import { AspectRatio } from '@iqbal-codes/ui-kit/blocks';

// 16:9 (default)
<AspectRatio>
  <img src="video.jpg" />
</AspectRatio>

// 1:1 (square)
<AspectRatio ratio={1}>
  <img src="avatar.jpg" />
</AspectRatio>

// 4:3
<AspectRatio ratio={4/3}>
  <img src="photo.jpg" />
</AspectRatio>
```

---

## Common Ratios

| Ratio | Value | Use Case |
|-------|-------|----------|
| 16:9 | 1.777 | Video, widescreen |
| 4:3 | 1.333 | Photo, standard |
| 1:1 | 1 | Avatar, square |
| 21:9 | 2.333 | Ultrawide |
| 9:16 | 0.5625 | Mobile video |

---

## Related Components

- [Container](./container.md) - Max-width container
