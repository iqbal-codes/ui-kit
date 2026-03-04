# SearchBar

> Search input with debounce, loading state, and clear button.

## Import

```typescript
import { SearchBar } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

SearchBar provides a polished search input with:
- **Debounced search** - Prevents excessive API calls
- **Loading state** - Shows spinner while searching
- **Clear button** - Easy reset functionality
- **Controlled/uncontrolled** - Works with both patterns

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Current value (controlled) |
| `placeholder` | `string` | `"Search..."` | Placeholder text |
| `onSearch` | `(value: string) => void` | - | Search handler (debounced) |
| `onClear` | `() => void` | - | Clear handler |
| `isLoading` | `boolean` | `false` | Loading state |
| `debounce` | `number` | `300` | Debounce delay (ms) |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { SearchBar } from '@iqbal-codes/ui-kit/blocks';

function SearchComponent() {
  const handleSearch = (query: string) => {
    console.log('Searching:', query);
    // Trigger search API
  };

  return (
    <SearchBar
      placeholder="Search products..."
      onSearch={handleSearch}
    />
  );
}
```

---

## Controlled Usage

```tsx
import { SearchBar } from '@iqbal-codes/ui-kit/blocks';

function ControlledSearch() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (value: string) => {
    setIsLoading(true);
    await api.search(value);
    setIsLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    // Clear results
  };

  return (
    <SearchBar
      value={query}
      onSearch={handleSearch}
      onClear={handleClear}
      isLoading={isLoading}
      debounce={500}
    />
  );
}
```

---

## With Custom Debounce

```tsx
// Fast debounce for instant search (150ms)
<SearchBar debounce={150} onSearch={handleQuickSearch} />

// Slow debounce for heavy queries (1000ms)
<SearchBar debounce={1000} onSearch={handleHeavySearch} />

// No debounce (immediate)
<SearchBar debounce={0} onSearch={handleImmediate} />
```

---

## Integration with Data Table

```tsx
import { SearchBar, SmartDataTable } from '@iqbal-codes/ui-kit/blocks';

function ProductList() {
  const [filters, setFilters] = useState({ search: '' });

  return (
    <div className="space-y-4">
      <SearchBar
        placeholder="Search products..."
        onSearch={(value) => setFilters(f => ({ ...f, search: value }))}
      />
      <SmartDataTable
        data={products}
        filters={filters}
      />
    </div>
  );
}
```

---

## Related Components

- [SmartDataTable](../data-display/smart-data-table.md) - Data table with filtering
- [FilterChip](./filter-chip.md) - Filter chip/tag
