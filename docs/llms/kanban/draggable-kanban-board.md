# DraggableKanbanBoard

A kanban board with full drag-and-drop support powered by @dnd-kit. Supports moving cards between columns and reordering cards within columns.

## Import

```typescript
import { DraggableKanbanBoard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DraggableKanbanBoard extends the basic KanbanBoard with full drag-and-drop functionality. It uses @dnd-kit for accessible drag-and-drop interactions and provides optimistic UI updates.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `KanbanColumn<T>[]` | Required | Array of column definitions |
| `onCardMove` | `(cardId, fromColumnId, toColumnId, newIndex) => void \| Promise<void>` | Required | Callback when card moves between columns |
| `onCardReorder` | `(cardId, fromIndex, toIndex, columnId) => void \| Promise<void>` | Optional | Callback when card is reordered within column |
| `renderCard` | `(card: T, column: KanbanColumnType<T>) => ReactNode` | Optional | Custom card renderer |
| `onCardClick` | `(card: T) => void` | Optional | Callback when card is clicked |
| `isLoading` | `boolean` | `false` | Shows loading skeleton |
| `emptyStateMessage` | `string` | `"No cards yet"` | Message when board is empty |
| `className` | `string` | Optional | Custom CSS class |

## Usage Examples

### Basic Usage with Drag-and-Drop

```tsx
import { DraggableKanbanBoard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

function MyBoard() {
  const handleCardMove = async (cardId, fromColumnId, toColumnId, newIndex) => {
    await api.moveCard(cardId, fromColumnId, toColumnId, newIndex);
  };

  const handleCardReorder = async (cardId, fromIndex, toIndex, columnId) => {
    await api.reorderCard(cardId, fromIndex, toIndex, columnId);
  };

  return (
    <DraggableKanbanBoard
      columns={columns}
      renderCard={(card) => <KanbanCard card={card} />}
      onCardMove={handleCardMove}
      onCardReorder={handleCardReorder}
      onCardClick={(card) => openCardDetail(card)}
    />
  );
}
```

### With Optimistic Updates

```tsx
function OptimisticBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const handleCardMove = (cardId, fromColumnId, toColumnId, newIndex) => {
    // Optimistic update - immediately update UI
    setColumns(prev => {
      // Move card in local state
      return prev;
    });

    // Then sync with server
    return api.moveCard(cardId, fromColumnId, toColumnId, newIndex);
  };

  return (
    <DraggableKanbanBoard
      columns={columns}
      onCardMove={handleCardMove}
    />
  );
}
```

### Using with KanbanBoardProvider

```tsx
import { KanbanBoardProvider, DraggableKanbanBoard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

function MyBoard() {
  return (
    <KanbanBoardProvider
      columns={columns}
      onMoveCard={api.moveCard}
      onReorderCard={api.reorderCard}
    >
      <DraggableKanbanBoard
        renderCard={(card) => <KanbanCard card={card} />}
      />
    </KanbanBoardProvider>
  );
}
```

## How Drag-and-Drop Works

1. **Card to Card**: Dragging a card over another card will insert it at that position
2. **Card to Column**: Dragging a card to an empty column area will add it to that column
3. **Column Reordering**: Columns can be reordered using the sortable context
4. **Visual Feedback**: Cards show a rotation effect when being dragged

## Related Components

- [KanbanBoard](./kanban-board.md) - Non-draggable board
- [DraggableColumn](./draggable-column.md) - Column with drag support
- [DraggableCard](./draggable-card.md) - Card wrapper with drag support
- [KanbanBoardProvider](./kanban-board-provider.md) - State management
