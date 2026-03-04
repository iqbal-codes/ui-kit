# FilterChip

> Selectable filter chip/tag with optional remove button and count indicator.

## Import

```typescript
import { FilterChip } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

FilterChip is a toggleable chip component for filter options:
- **Selectable** - Toggle on/off state
- **Count indicator** - Show number of items
- **Removable** - Optional remove button
- **Badge-based** - Uses Badge component

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Chip label |
| `selected` | `boolean` | `false` | Selected state |
| `onToggle` | `() => void` | - | Toggle handler |
| `onRemove` | `() => void` | - | Remove handler |
| `count` | `number` | - | Count to display |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { FilterChip } from '@iqbal-codes/ui-kit/blocks';

function FilterBar() {
  const [selected, setSelected] = useState(false);

  return (
    <FilterChip
      label="Active"
      selected={selected}
      onToggle={() => setSelected(!selected)}
    />
  );
}
```

---

## Filter Group

```tsx
function StatusFilters() {
  const [filters, setFilters] = useState(['active']);

  const toggleFilter = (status: string) => {
    setFilters(prev =>
      prev.includes(status)
        ? prev.filter(f => f !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="flex gap-2">
      <FilterChip
        label="Active"
        selected={filters.includes('active')}
        onToggle={() => toggleFilter('active')}
      />
      <FilterChip
        label="Pending"
        selected={filters.includes('pending')}
        onToggle={() => toggleFilter('pending')}
      />
      <FilterChip
        label="Completed"
        selected={filters.includes('completed')}
        onToggle={() => toggleFilter('completed')}
      />
    </div>
  );
}
```

---

## With Count

```tsx
<FilterChip
  label="Unread"
  selected={isSelected}
  onToggle={toggle}
  count={12}
/>
// Renders: Unread (12)
```

---

## Removable Chip

```tsx
function ActiveFilters() {
  const [filters, setFilters] = useState(['category:electronics', 'price:low']);

  const removeFilter = (filter: string) => {
    setFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <FilterChip
          key={filter}
          label={filter}
          onRemove={() => removeFilter(filter)}
        />
      ))}
    </div>
  );
}
```

---

## With Categories

```tsx
function CategoryFilters() {
  const categories = [
    { id: 'electronics', label: 'Electronics', count: 45 },
    { id: 'clothing', label: 'Clothing', count: 32 },
    { id: 'books', label: 'Books', count: 18 },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex gap-2">
      {categories.map(cat => (
        <FilterChip
          key={cat.id}
          label={cat.label}
          count={cat.count}
          selected={selected.includes(cat.id)}
          onToggle={() => setSelected(prev =>
            prev.includes(cat.id)
              ? prev.filter(id => id !== cat.id)
              : [...prev, cat.id]
          )}
        />
      ))}
    </div>
  );
}
```

---

## Related Components

- [SearchBar](./search-bar.md) - Search input
- [SmartDataTable](../data-display/smart-data-table.md) - Table with filters
- [FilterChips](../data-display/smart-data-table.md#filter-chips) - Active filter display
