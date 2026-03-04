# BoardToolbar

A toolbar component for kanban boards with search, filters, and sorting controls.

## Import

```typescript
import { BoardToolbar } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

BoardToolbar provides a horizontal toolbar with search input, filter dropdown, and sort toggle. It's designed to work with the kanban board for filtering and searching cards.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `searchQuery` | `string` | Optional | Current search query |
| `onSearchChange` | `(query: string) => void` | Optional | Callback when search changes |
| `filtersCount` | `number` | Optional | Number of active filters |
| `onFiltersClick` | `() => void` | Optional | Callback when filters button is clicked |
| `sortDirection` | `"asc" \| "desc"` | Optional | Current sort direction |
| `onSortToggle` | `() => void` | Optional | Callback when sort is toggled |
| `showSearch` | `boolean` | `true` | Show search input |
| `showFilters` | `boolean` | `true` | Show filters button |
| `showSort` | `boolean` | `true` | Show sort button |
| `searchPlaceholder` | `string` | `"Search cards..."` | Placeholder text |
| `className` | `string` | Optional | Custom CSS class |

## Usage Examples

### Basic Usage

```tsx
import { BoardToolbar } from '@iqbal-codes/ui-kit/blocks';

const [search, setSearch] = useState('');
const [filters, setFilters] = useState(0);

<BoardToolbar
  searchQuery={search}
  onSearchChange={setSearch}
  filtersCount={filters}
  onFiltersClick={() => openFilterModal()}
/>
```

### With Sorting

```tsx
const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

<BoardToolbar
  searchQuery={search}
  onSearchChange={setSearch}
  sortDirection={sortDir}
  onSortToggle={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
/>
```

### With Custom Placeholder

```tsx
<BoardToolbar
  searchQuery={search}
  onSearchChange={setSearch}
  searchPlaceholder="Search tasks..."
/>
```

### Selective Visibility

```tsx
// Only search
<BoardToolbar
  searchQuery={search}
  onSearchChange={setSearch}
  showFilters={false}
  showSort={false}
/>
```

## Visual Indicators

- **Active Search**: Clear button (X) appears when query is not empty
- **Active Filters**: Badge shows number of active filters
- **Sort Direction**: Icon changes between ascending and descending

## Related Components

- [KanbanBoard](./kanban-board.md) - Board component
- [DraggableKanbanBoard](./draggable-kanban-board.md) - Draggable board
- [KanbanBoardProvider](./kanban-board-provider.md) - State management
