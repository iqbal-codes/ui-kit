# KanbanBoard

A horizontally scrollable board that displays kanban columns with cards. This is the main container component for building kanban-style workflow interfaces.

## Import

```typescript
import { KanbanBoard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

KanbanBoard provides a flexible, horizontally scrollable container for displaying workflow columns. It supports customizable rendering of cards, drag-and-drop functionality, and various board features through feature flags.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `KanbanColumn<T>[]` | Required | Array of column definitions |
| `cards` | `T[]` | Optional | Flat array of all cards (optional) |
| `features` | `KanbanFeatures` | `defaultFeatures` | Feature flags for board functionality |
| `onCardMove` | `(cardId, fromColumnId, toColumnId, newIndex) => void \| Promise<void>` | Optional | Callback when card moves between columns |
| `onCardReorder` | `(cardId, fromIndex, toIndex, columnId) => void \| Promise<void>` | Optional | Callback when card is reordered within column |
| `onCardClick` | `(card: T) => void` | Optional | Callback when card is clicked |
| `isLoading` | `boolean` | `false` | Shows loading skeleton |
| `emptyStateMessage` | `string` | `"No cards yet"` | Message when board is empty |
| `className` | `string` | Optional | Custom CSS class |

## Types

### KanbanColumn<T>

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

### KanbanFeatures

```typescript
interface KanbanFeatures {
  dragDrop?: boolean;
  cardCreation?: boolean;
  cardEditing?: boolean;
  cardDeletion?: boolean;
  columnCollapse?: boolean;
  subtasks?: boolean;
  attachments?: boolean;
  dueDates?: boolean;
  assignees?: boolean;
  tags?: boolean;
  priority?: boolean;
  search?: boolean;
  filters?: boolean;
  columnSorting?: boolean;
  cardSorting?: boolean;
}
```

## Usage Examples

### Basic Usage

```tsx
import { KanbanBoard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

const columns = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: '1', title: 'Design mockups', priority: 'high' },
      { id: '2', title: 'Write documentation', priority: 'medium' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: [
      { id: '3', title: 'Build API endpoints', priority: 'urgent' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [],
  },
];

function MyBoard() {
  return (
    <KanbanBoard
      columns={columns}
      renderCard={(card) => <KanbanCard card={card} />}
      onCardClick={(card) => console.log('Clicked:', card)}
    />
  );
}
```

### With Feature Flags

```tsx
<KanbanBoard
  columns={columns}
  renderCard={(card) => <KanbanCard card={card} />}
  features={{
    dragDrop: true,
    cardCreation: true,
    columnCollapse: true,
    priority: true,
    tags: true,
  }}
/>
```

### With Custom Card Renderer

```tsx
<KanbanBoard
  columns={columns}
  renderCard={(card, column) => (
    <CustomCard
      title={card.title}
      assignee={card.assignee}
      columnColor={column.color}
    />
  )}
/>
```

### With Loading State

```tsx
<KanbanBoard
  columns={columns}
  renderCard={(card) => <KanbanCard card={card} />}
  isLoading={isLoading}
/>
```

## Related Components

- [KanbanColumn](./kanban-column.md) - Individual column component
- [KanbanCard](./kanban-card.md) - Card component with compound components
- [DraggableKanbanBoard](./draggable-kanban-board.md) - Board with full drag-and-drop support
- [KanbanBoardProvider](./kanban-board-provider.md) - Context provider for state management
