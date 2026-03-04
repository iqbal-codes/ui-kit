# StatusGrid

> Grid displaying a collection of status items.

## Import

```typescript
import { StatusGrid } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

StatusGrid displays a collection of status items in a grid layout.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `StatusItem[]` | **required** | Status items array |
| `columns` | `number` | `4` | Number of columns |
| `variant` | `"default" \| "compact"` | `"default"` | Grid variant |

---

## StatusItem Type

```typescript
interface StatusItem {
  id: string;
  label: string;
  value: string | number;
  status: "success" | "warning" | "error" | "info" | "neutral";
  icon?: ReactNode;
}
```

---

## Basic Usage

```tsx
import { StatusGrid } from '@iqbal-codes/ui-kit/blocks';

const items = [
  { id: '1', label: 'Online', value: 45, status: 'success' },
  { id: '2', label: 'Offline', value: 3, status: 'error' },
  { id: '3', label: 'Pending', value: 12, status: 'warning' },
];

<StatusGrid items={items} columns={3} />
```

---

## Compact Variant

```tsx
<StatusGrid items={items} variant="compact" columns={4} />
```

---

## Dashboard Example

```tsx
const systemStatus = [
  { id: 'api', label: 'API', value: 'Healthy', status: 'success' },
  { id: 'database', label: 'Database', value: 'Healthy', status: 'success' },
  { id: 'cache', label: 'Cache', value: 'Degraded', status: 'warning' },
  { id: 'queue', label: 'Queue', value: 'Healthy', status: 'success' },
];

<StatusGrid items={systemStatus} columns={4} />
```

---

## Related Components

- [StatCard](./stat-card.md) - Statistical card
- [CardGrid](./card-grid.md) - Card grid layout
