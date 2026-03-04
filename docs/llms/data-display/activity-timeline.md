# ActivityTimeline

> Vertical timeline component for displaying activities and events.

## Import

```typescript
import { ActivityTimeline } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ActivityTimeline displays a chronological list of activities with:
- **Timeline** - Vertical connector line
- **Icons** - Optional icons per item
- **Timestamps** - Date/time display
- **Variants** - Color-coded by status

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TimelineItem[]` | **required** | Timeline items |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Timeline orientation |
| `showConnector` | `boolean` | `true` | Show connecting line |

---

## TimelineItem Type

```typescript
interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string | Date;
  icon?: ReactNode;
  variant?: "default" | "success" | "warning" | "error";
}
```

---

## Basic Usage

```tsx
import { ActivityTimeline } from '@iqbal-codes/ui-kit/blocks';

const items = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been received',
    timestamp: new Date('2024-01-15T10:30:00'),
    variant: 'success'
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Your order is being prepared',
    timestamp: new Date('2024-01-15T14:00:00'),
  },
];

<ActivityTimeline items={items} />
```

---

## With Icons

```tsx
import { PackageIcon, TruckIcon, CheckIcon } from 'lucide-react';

const items = [
  {
    id: '1',
    title: 'Order Shipped',
    icon: <PackageIcon className="h-4 w-4" />,
    timestamp: new Date(),
    variant: 'success'
  },
  {
    id: '2',
    title: 'In Transit',
    icon: <TruckIcon className="h-4 w-4" />,
    timestamp: new Date(),
  },
];
```

---

## Activity Feed Example

```tsx
const activities = [
  {
    id: '1',
    title: 'New order #1234',
    description: 'Customer John Doe placed an order',
    timestamp: new Date(),
    variant: 'success'
  },
  {
    id: '2',
    title: 'Payment received',
    description: 'Payment of $250.00 confirmed',
    timestamp: new Date(),
    variant: 'success'
  },
  {
    id: '3',
    title: 'Inventory low',
    description: 'Product "Widget" is running low on stock',
    timestamp: new Date(),
    variant: 'warning'
  },
];

<ActivityTimeline items={activities} />
```

---

## Related Components

- [SmartDataTable](./smart-data-table.md) - Data table
