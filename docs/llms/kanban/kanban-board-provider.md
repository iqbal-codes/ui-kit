# KanbanBoardProvider

A React context provider for managing kanban board state with optimistic updates and API integration.

## Import

```typescript
import { KanbanBoardProvider, useKanbanBoard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

KanbanBoardProvider provides centralized state management for kanban boards. It manages columns, cards, search, filters, and provides actions for all CRUD operations with optimistic updates.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `KanbanColumn<T>[]` | Required | Initial column definitions |
| `features` | `KanbanFeatures` | `{}` | Feature flags |
| `onMoveCard` | `(cardId, fromColumnId, toColumnId, newIndex) => Promise<void>` | Optional | API callback for moving cards |
| `onReorderCard` | `(cardId, fromIndex, toIndex, columnId) => Promise<void>` | Optional | API callback for reordering cards |
| `onReorderColumns` | `(columnId, fromIndex, toIndex) => Promise<void>` | Optional | API callback for reordering columns |
| `onAddCard` | `(columnId, card: T) => Promise<void>` | Optional | API callback for adding cards |
| `onUpdateCard` | `(cardId, updates) => Promise<void>` | Optional | API callback for updating cards |
| `onDeleteCard` | `(cardId) => Promise<void>` | Optional | API callback for deleting cards |
| `children` | `ReactNode` | Required | Child components |

## State Provided

```typescript
interface KanbanBoardState<T> {
  columns: KanbanColumn<T>[];
  features: KanbanFeatures;
  searchQuery: string;
  filters: {
    assignees?: string[];
    priorities?: string[];
    tags?: string[];
  };
  isLoading: boolean;
  error: string | null;
}
```

## Actions Provided

```typescript
interface KanbanBoardActions<T> {
  setSearchQuery: (query: string) => void;
  setFilters: (filters) => void;
  moveCard: (cardId, fromColumnId, toColumnId, newIndex) => Promise<void>;
  reorderCard: (cardId, fromIndex, toIndex, columnId) => Promise<void>;
  reorderColumns: (columnId, fromIndex, toIndex) => Promise<void>;
  addCard: (columnId, card: T) => Promise<void>;
  updateCard: (cardId, updates: Partial<T>) => Promise<void>;
  deleteCard: (cardId) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
```

## Hook Usage

```typescript
function useKanbanBoard<T extends BaseCardMetadata>() {
  const context = React.useContext(KanbanBoardContext);
  if (context === undefined) {
    throw new Error("useKanbanBoard must be used within a KanbanBoardProvider");
  }
  return context as KanbanBoardContextValue<T>;
}
```

## Usage Examples

### Basic Setup

```tsx
import { KanbanBoardProvider, DraggableKanbanBoard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

function TaskBoard() {
  const initialColumns = [
    { id: 'todo', title: 'To Do', cards: [] },
    { id: 'in-progress', title: 'In Progress', cards: [] },
    { id: 'done', title: 'Done', cards: [] },
  ];

  return (
    <KanbanBoardProvider columns={initialColumns}>
      <DraggableKanbanBoard
        renderCard={(card) => <KanbanCard card={card} />}
      />
    </KanbanBoardProvider>
  );
}
```

### With API Callbacks

```tsx
<KanbanBoardProvider
  columns={columns}
  onMoveCard={async (cardId, fromColumnId, toColumnId, newIndex) => {
    await api.moveCard(cardId, fromColumnId, toColumnId, newIndex);
  }}
  onReorderCard={async (cardId, fromIndex, toIndex, columnId) => {
    await api.reorderCard(cardId, fromIndex, toIndex, columnId);
  }}
  onAddCard={async (columnId, card) => {
    await api.createCard(columnId, card);
  }}
  onUpdateCard={async (cardId, updates) => {
    await api.updateCard(cardId, updates);
  }}
  onDeleteCard={async (cardId) => {
    await api.deleteCard(cardId);
  }}
>
  <DraggableKanbanBoard
    renderCard={(card) => <KanbanCard card={card} />}
  />
</KanbanBoardProvider>
```

### Accessing State in Components

```tsx
function CardCount() {
  const { columns, searchQuery, filters } = useKanbanBoard();
  
  const totalCards = columns.reduce(
    (sum, col) => sum + col.cards.length, 
    0
  );
  
  return <div>{totalCards} cards</div>;
}
```

### Using Actions

```tsx
function AddCardButton({ columnId }) {
  const { addCard } = useKanbanBoard();
  
  const handleAdd = () => {
    addCard(columnId, {
      id: crypto.randomUUID(),
      title: 'New Task',
    });
  };
  
  return <button onClick={handleAdd}>Add Card</button>;
}
```

### Optimistic Updates

The provider automatically handles optimistic updates:

1. **Immediate Feedback**: UI updates immediately when an action is taken
2. **Rollback on Error**: If API fails, the state reverts to previous
3. **Error State**: Error messages are captured in the `error` state

```tsx
function BoardWithErrorHandling() {
  const { error, setError } = useKanbanBoard();
  
  useEffect(() => {
    if (error) {
      // Show toast notification
      toast.error(error);
      // Clear error after showing
      setError(null);
    }
  }, [error]);
  
  // ... rest of component
}
```

## Default Features

```typescript
const defaultFeatures = {
  dragDrop: true,
  cardCreation: true,
  cardEditing: true,
  cardDeletion: true,
  columnCollapse: false,
  subtasks: true,
  attachments: true,
  dueDates: true,
  assignees: true,
  tags: true,
  priority: true,
  search: true,
  filters: true,
  columnSorting: false,
  cardSorting: true,
};
```

## Related Components

- [KanbanBoard](./kanban-board.md) - Basic board
- [DraggableKanbanBoard](./draggable-kanban-board.md) - Full drag-and-drop board
- [KanbanCard](./kanban-card.md) - Card component
- [BoardToolbar](./board-toolbar.md) - Toolbar component
