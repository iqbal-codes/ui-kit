# ColumnHeader

The header component for kanban columns that displays the column title, card count, work-in-progress limits, and action buttons.

## Import

```typescript
import { ColumnHeader } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ColumnHeader renders the top section of a kanban column with the column title, card count with optional WIP limit, and action buttons (add card, collapse, options menu).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Column display title |
| `cardCount` | `number` | Optional | Number of cards in column |
| `cardLimit` | `number` | Optional | Work-in-progress limit |
| `isCollapsed` | `boolean` | `false` | Whether column is collapsed |
| `color` | `string` | Optional | Accent color for visual organization |
| `isDisabled` | `boolean` | `false` | Whether column is disabled |
| `onAddCard` | `() => void` | Optional | Callback when add button is clicked |
| `onOptionsClick` | `() => void` | Optional | Callback when options menu is opened |
| `onCollapseToggle` | `() => void` | Optional | Callback when collapse toggle is clicked |
| `showCollapse` | `boolean` | `false` | Show collapse toggle button |
| `showAdd` | `boolean` | `true` | Show add card button |
| `showOptions` | `boolean` | `true` | Show options menu |
| `className` | `string` | Optional | Custom CSS class |

## Usage Examples

### Basic Usage

```tsx
import { ColumnHeader } from '@iqbal-codes/ui-kit/blocks';

<ColumnHeader
  title="In Progress"
  cardCount={5}
  onAddCard={() => console.log('Add card')}
/>
```

### With WIP Limit

```tsx
<ColumnHeader
  title="In Progress"
  cardCount={7}
  cardLimit={5}
  onAddCard={handleAddCard}
  onOptionsClick={handleOptions}
/>
```

### Collapsible Column

```tsx
<ColumnHeader
  title="Backlog"
  cardCount={12}
  isCollapsed={false}
  showCollapse={true}
  onCollapseToggle={handleCollapse}
  onAddCard={handleAdd}
/>
```

### With Color

```tsx
<ColumnHeader
  title="In Progress"
  cardCount={3}
  color="blue"
  onAddCard={handleAdd}
/>
```

### Disabled Column

```tsx
<ColumnHeader
  title="Archived"
  cardCount={50}
  isDisabled={true}
/>
```

## Visual States

- **Default**: Shows all elements
- **Collapsed**: Chevron rotates to indicate collapsed state
- **Over Limit**: Card count shows in red when exceeding cardLimit
- **Disabled**: Reduced opacity, non-interactive
- **Color Accent**: Left border uses the specified color

## Options Menu Items

When the options menu is shown, it provides:
- Expand/Collapse column (if enabled)
- Rename column
- Sort cards
- Delete column

## Related Components

- [KanbanColumn](./kanban-column.md) - Parent column component
- [DraggableColumn](./draggable-column.md) - Column with drag support
- [KanbanBoard](./kanban-board.md) - Board containing columns
