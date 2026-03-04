# DataGrid

> Basic tabular data display component.

## Import

```typescript
import { DataGrid } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DataGrid is a simple table component for displaying data in rows and columns.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `DataGridColumn[]` | **required** | Column definitions |
| `rows` | `DataGridRow[]` | **required** | Row data |
| `showHeader` | `boolean` | `true` | Show header row |
| `striped` | `boolean` | `false` | Striped rows |
| `hoverable` | `boolean` | `true` | Hover effect |
| `onRowClick` | `(row: DataGridRow) => void` | - | Row click handler |
| `className` | `string` | - | Additional CSS classes |

---

## Types

```typescript
interface DataGridColumn {
  id: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
}

interface DataGridRow {
  id: string;
  cells: Record<string, ReactNode>;
}
```

---

## Basic Usage

```tsx
import { DataGrid } from '@iqbal-codes/ui-kit/blocks';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'actions', label: 'Actions' },
];

const rows = [
  { 
    id: '1', 
    cells: { 
      name: 'John Doe', 
      email: 'john@example.com',
      actions: <Button>Edit</Button>
    } 
  },
];

<DataGrid columns={columns} rows={rows} />
```

---

## Related Components

- [SmartDataTable](./smart-data-table.md) - Full-featured table
