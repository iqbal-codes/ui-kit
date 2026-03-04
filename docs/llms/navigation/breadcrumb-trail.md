# BreadcrumbTrail

> Breadcrumb navigation component.

## Import

```typescript
import { BreadcrumbTrail } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | **required** | Breadcrumb items |
| `separator` | `ReactNode` | - | Custom separator |

### BreadcrumbItem

```typescript
interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
}
```

---

## Usage

```tsx
import { BreadcrumbTrail } from '@iqbal-codes/ui-kit/blocks';

const items = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'Products', href: '/products' },
  { id: '3', label: 'Details' },
];

<BreadcrumbTrail items={items} />
```
