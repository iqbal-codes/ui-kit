# StatCard

> Statistical card with trend indicator and value display.

## Import

```typescript
import { StatCard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

StatCard displays a statistic with:
- **Title** - Metric name
- **Value** - Large numeric display
- **Description** - Optional subtitle
- **Trend** - Up/down/neutral indicator with value

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Card title |
| `value` | `string \| number` | **required** | Stat value |
| `description` | `string` | - | Optional description |
| `trend` | `{ direction: TrendDirection; value: string; label?: string }` | - | Trend indicator |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |

### TrendDirection

```typescript
type TrendDirection = "up" | "down" | "neutral";
```

---

## Basic Usage

```tsx
import { StatCard } from '@iqbal-codes/ui-kit/blocks';

<StatCard
  title="Total Users"
  value="1,234"
  trend={{ direction: 'up', value: '+12%', label: 'vs last month' }}
/>
```

---

## Without Trend

```tsx
<StatCard
  title="Total Orders"
  value={543}
  description="This month"
/>
```

---

## Clickable Card

```tsx
<StatCard
  title="Revenue"
  value="$12,500"
  trend={{ direction: 'up', value: '+8%' }}
  onClick={() => navigate('/revenue')}
/>
```

---

## Dashboard Example

```tsx
import { StatCard } from '@iqbal-codes/ui-kit/blocks';

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <StatCard title="Total Users" value="1,234" trend={{ direction: 'up', value: '+12%' }} />
  <StatCard title="Active Now" value="89" trend={{ direction: 'neutral', value: '0%' }} />
  <StatCard title="Revenue" value="$45,000" trend={{ direction: 'up', value: '+23%' }} />
  <StatCard title="Orders" value="567" trend={{ direction: 'down', value: '-5%' }} />
</div>
```

---

## Related Components

- [MetricCard](./metric-card.md) - Metric display card
- [StatusGrid](./status-grid.md) - Grid of status items
- [CardGrid](./card-grid.md) - Grid layout for cards
