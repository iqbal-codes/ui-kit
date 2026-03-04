# MetricCard

> Metric display card with trend calculation and formatting.

## Import

```typescript
import { MetricCard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

MetricCard displays metrics with:
- **Label** - Metric name
- **Value** - Large numeric display
- **Trend** - Direction with automatic percentage calculation
- **Description** - Optional subtitle

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Metric label |
| `value` | `string \| number` | **required** | Metric value |
| `previousValue` | `string \| number` | - | Previous value for comparison |
| `trend` | `TrendDirection` | - | Trend direction |
| `trendValue` | `string` | - | Trend percentage text |
| `description` | `string` | - | Optional description |
| `compact` | `boolean` | `false` | Compact variant |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |

### TrendDirection

```typescript
type TrendDirection = "up" | "down" | "neutral";
```

---

## Basic Usage

```tsx
import { MetricCard } from '@iqbal-codes/ui-kit/blocks';

<MetricCard
  label="Total Revenue"
  value={125000}
  previousValue={100000}
  trend="up"
  trendValue="+25%"
/>
```

---

## Compact Variant

```tsx
<MetricCard
  label="Users"
  value="1,234"
  trend="up"
  trendValue="+12%"
  compact
/>
```

---

## With Description

```tsx
<MetricCard
  label="Monthly Sales"
  value="$45,000"
  previousValue="$38,000"
  trend="up"
  trendValue="+18.4%"
  description="vs last month"
/>
```

---

## Dashboard Grid

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <MetricCard label="Revenue" value="$125K" trend="up" trendValue="+25%" />
  <MetricCard label="Orders" value="3,456" trend="up" trendValue="+12%" />
  <MetricCard label="Customers" value="892" trend="down" trendValue="-3%" />
  <MetricCard label="Avg. Order" value="$156" trend="neutral" />
</div>
```

---

## Related Components

- [StatCard](./stat-card.md) - Alternative stat card
- [StatusGrid](./status-grid.md) - Grid of status items
