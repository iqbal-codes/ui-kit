# Pagination

> Page navigation with smart page calculation.

## Import

```typescript
import { Pagination } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | **required** | Current page |
| `totalPages` | `number` | **required** | Total pages |
| `onPageChange` | `(page: number) => void` | **required** | Page change handler |
| `siblingCount` | `number` | `1` | Visible siblings |
| `showFirstLast` | `boolean` | `false` | Show first/last |
| `compact` | `boolean` | `false` | Compact mode |

---

## Usage

```tsx
import { Pagination } from '@iqbal-codes/ui-kit/blocks';

<Pagination
  page={currentPage}
  totalPages={totalPages}
  onPageChange={setPage}
/>
```

---

## With First/Last

```tsx
<Pagination
  page={currentPage}
  totalPages={totalPages}
  onPageChange={setPage}
  showFirstLast
/>
```
