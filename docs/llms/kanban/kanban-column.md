# KanbanColumn

An individual column in a kanban board that displays a list of cards with a header containing title, card count, and action buttons.

## Import

```typescript
import { KanbanColumn } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

KanbanColumn renders a single column in the kanban board with a header showing the column title, card count, work-in-progress limits, and action buttons. It manages card rendering and provides hooks for user interactions.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `column` | `KanbanColumnType<T>` | Required | Column configuration data |
| `renderCard` | `(card: T, column: KanbanColumnType<T>) => ReactNode` | Required | Custom card renderer |
| `onAddCard` | `() => void` | Optional | Callback when add card button is clicked |
| `onCardClick` | `(card: T) => void` | Optional | Callback when card is clicked |
| `onOptionsClick` | `() => void` | Optional | Callback when column options menu is opened |
| `onCollapseToggle` | `() => void` | Optional | Callback when collapse toggle is clicked |
| `isDragging` | `boolean` | `false` | Whether column is being dragged |
| `showCollapse` | `boolean` | `false` | Show collapse toggle button |
| `showAdd` | `boolean` | `true` | Show add card button |
| `showOptions` | `boolean` | `true` | Show options menu |
| `maxHeight` | `string` | `"calc(100vh - 200px)"` | Maximum height of column content |
| `className` | `string` | Optional | Custom CSS class |

## Types

```typescript
interface KanbanColumn<T extends BaseCardMetadata> {
  id: string;
  title: string;
  cards: T[];
  color?: string;
  isCollapsed?: boolean;
  cardLimit?: number;
  isDisabled?: boolean;
}
```

## Usage Examples

### Basic Column

```tsx
import { KanbanColumn, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

const column = {
  id: 'in-progress',
  title: 'In Progress',
  cards: [
    { id: '1', title: 'Build API', priority: 'high' },
    { id: '2', title: 'Write tests', priority: 'medium' },
  ],
  color: 'blue',
};

<KanbanColumn
  column={column}
  renderCard={(card) => <KanbanCard card={card} />}
  onAddCard={() => console.log('Add card')}
/>
```

### Column with Card Limit

```tsx
const wipColumn = {
  id: 'wip',
  title: 'In Progress',
  cards: tasks,
  cardLimit: 5, // Work-in-progress limit
  color: 'orange',
};

<KanbanColumn
  column={wipColumn}
  renderCard={(card) => <KanbanCard card={card} />}
  onAddCard={handleAddCard}
  onOptionsClick={handleOptions}
  showCollapse={true}
  onCollapseToggle={handleCollapse}
/>
```

### Collapsed Column

```tsx
const collapsedColumn = {
  id: 'backlog',
  title: 'Backlog',
  cards: backlogTasks,
  isCollapsed: true,
};

<KanbanColumn
  column={collapsedColumn}
  renderCard={(card) => <KanbanCard card={card} />}
  showCollapse={true}
/>
```

### Disabled Column

```tsx
const disabledColumn = {
  id: 'archived',
  title: 'Archived',
  cards: archivedTasks,
  isDisabled: true,
};

<KanbanColumn
  column={disabledColumn}
  renderCard={(card) => <KanbanCard card={card} />}
/>
```

## Visual States

- **Default**: Normal column with full content
- **Collapsed**: Narrow column showing only header
- **Over Limit**: Red border when card count exceeds cardLimit
- **Disabled**: Reduced opacity, non-interactive
- **Dragging**: Reduced opacity during drag operations

## Related Components

- [KanbanBoard](./kanban-board.md) - Parent board component
- [ColumnHeader](./column-header.md) - Column header subcomponent
- [KanbanCard](./kanban-card.md) - Card component
- [QuickAddCard](./quick-add-card.md) - Inline card creation
