# SmartDataTable

> Full-featured data table with search, filters, sorting, and pagination.

## Import

```typescript
import { SmartDataTable, FilterBar, FilterChips, FilterDialog } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

SmartDataTable is a comprehensive data table component with:

- **Search** - Debounced inline search
- **Filters** - Filter dialog with multiple field types
- **Filter Chips** - Visual display of active filters
- **Pagination** - Client-side and server-side support
- **Row Selection** - Select rows for bulk actions
- **Custom Columns** - Flexible column definitions

---

## Basic Usage

```tsx
import { SmartDataTable } from '@iqbal-codes/ui-kit/blocks';

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
}

const columns = [
  { id: 'name', header: 'Name', accessorKey: 'name' as keyof User },
  { id: 'email', header: 'Email', accessorKey: 'email' as keyof User },
  { 
    id: 'status', 
    header: 'Status',
    cell: (item) => <Badge>{item.status}</Badge>
  },
];

<SmartDataTable
  data={users}
  columns={columns}
  enablePagination
  pageSize={10}
/>
```

---

## Props

### SmartDataTableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | **required** | Data array |
| `columns` | `ColumnDef<TData>[]` | **required** | Column definitions |
| `searchQuery` | `string` | - | Current search query |
| `onSearchChange` | `(query: string) => void` | - | Search handler |
| `filters` | `FilterState` | - | Current filters |
| `onFiltersChange` | `(filters: FilterState) => void` | - | Filter change handler |
| `filterFields` | `FilterField[]` | `[]` | Available filter fields |
| `searchPlaceholder` | `string` | `"Search..."` | Search placeholder |
| `enableSearchDebounce` | `boolean` | `true` | Enable search debounce |
| `searchDebounceDelay` | `number` | `300` | Debounce delay (ms) |
| `isLoading` | `boolean` | `false` | Loading state |
| `emptyMessage` | `string` | `"No data available"` | Empty message |
| `emptyState` | `ReactNode` | - | Custom empty state |
| `enableRowSelection` | `boolean` | `false` | Enable row selection |
| `onRowSelectionChange` | `(rows: TData[]) => void` | - | Selection handler |
| `enablePagination` | `boolean` | `false` | Enable pagination |
| `currentPage` | `number` | `1` | Current page |
| `onPageChange` | `(page: number) => void` | - | Page change handler |
| `pageSize` | `number` | `10` | Items per page |
| `onPageSizeChange` | `(size: number) => void` | - | Page size handler |
| `pageSizeOptions` | `number[]` | `[10, 20, 50]` | Page size options |
| `totalItems` | `number` | - | Total items (server-side) |
| `showFirstLast` | `boolean` | `false` | Show first/last buttons |
| `compactPagination` | `boolean` | `false` | Compact pagination |

---

## Types

### ColumnDef

```typescript
interface ColumnDef<TData> {
  id: string;
  header: string;
  accessorKey?: keyof TData;
  cell?: (item: TData) => ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
  enableSorting?: boolean;
}
```

### FilterField

```typescript
interface FilterField {
  name: string;
  label: string;
  type: "text" | "select" | "date" | "combobox";
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: any;
}
```

### FilterState

```typescript
type FilterState = Record<string, any>;
```

---

## Usage Examples

### Example 1: Basic Table with Search

```tsx
<SmartDataTable
  data={users}
  columns={columns}
  searchPlaceholder="Search users..."
  onSearchChange={(query) => api.search(query)}
/>
```

### Example 2: Table with Filters

```tsx
<SmartDataTable
  data={users}
  columns={columns}
  filterFields={[
    { name: 'status', label: 'Status', type: 'select', options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ]},
    { name: 'role', label: 'Role', type: 'combobox', options: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
    ]},
    { name: 'createdAt', label: 'Created', type: 'date' },
  ]}
  filters={filters}
  onFiltersChange={setFilters}
/>
```

### Example 3: Table with Pagination

```tsx
<SmartDataTable
  data={users}
  columns={columns}
  enablePagination
  pageSize={25}
  pageSizeOptions={[10, 25, 50, 100]}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>
```

### Example 4: Server-Side Pagination

```tsx
<SmartDataTable
  data={[]} // Empty, data comes from API
  columns={columns}
  enablePagination
  currentPage={currentPage}
  pageSize={pageSize}
  totalItems={totalCount}
  onPageChange={fetchPage}
  onPageSizeChange={fetchWithNewSize}
/>
```

### Example 5: With Row Selection

```tsx
<SmartDataTable
  data={users}
  columns={columns}
  enableRowSelection
  onRowSelectionChange={(selectedRows) => {
    console.log('Selected:', selectedRows);
  }}
/>
```

### Example 6: Complete Example

```tsx
import { SmartDataTable } from '@iqbal-codes/ui-kit/blocks';

function UserList() {
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { data, total, isLoading } = useUsers({ filters, search, page });

  const columns = [
    { id: 'name', header: 'Name', accessorKey: 'name' },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { 
      id: 'status', 
      header: 'Status',
      cell: (user) => (
        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
          {user.status}
        </Badge>
      )
    },
  ];

  return (
    <SmartDataTable
      data={data}
      columns={columns}
      searchQuery={search}
      onSearchChange={setSearch}
      filters={filters}
      onFiltersChange={setFilters}
      filterFields={[
        { name: 'status', label: 'Status', type: 'select', options: statusOptions },
        { name: 'role', label: 'Role', type: 'combobox', options: roleOptions },
      ]}
      enablePagination
      currentPage={page}
      onPageChange={setPage}
      pageSize={20}
      totalItems={total}
      isLoading={isLoading}
    />
  );
}
```

---

## Related Components

- [DataGrid](./data-grid.md) - Basic data grid
- [FilterBar](./smart-data-table.md#filter-bar) - Search and filter bar
- [FilterChips](./smart-data-table.md#filter-chips) - Active filter chips
- [FilterDialog](./smart-data-table.md#filter-dialog) - Filter dialog
- [Pagination](../navigation/pagination.md) - Pagination component
