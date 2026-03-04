# DraggableColumn

A sortable kanban column with drag-and-drop support powered by @dnd-kit. The entire column and its cards can be reordered by dragging.

## Import

```typescript
import { DraggableColumn } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DraggableColumn wraps KanbanColumn with @dnd-kit's useSortable hook, enabling both column reordering and card drag-and-drop within the column. The column header serves as the drag handle.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `column` | `KanbanColumnType<T>` | Required | Column configuration data |
| `id` | `string` | Required | Unique column identifier for dnd-kit |
| `renderCard` | `(card: T, column: KanbanColumnType<T>) => ReactNode` | Optional | Custom card renderer |
| `onAddCard` | `() => void` | Optional | Callback when add card button is clicked |
| `onCardClick` | `(card: T) => void` | Optional | Callback when card is clicked |
| `onCardMove` | `(cardId, toColumnId, newIndex) => void` | Optional | Callback when card moves |
| `isDragging` | `boolean` | `false` | Whether column is being dragged |
| `showAdd` | `boolean` | `true` | Show add card button |
| `maxHeight` | `string` | `"calc(100vh - 200px)"` | Maximum height of column content |
| `className` | `string` | Optional | Custom CSS class |

## Usage Examples

### Basic Usage

```tsx
import { DraggableColumn, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

<DraggableColumn
  id="in-progress"
  column={columnData}
  renderCard={(card) => <KanbanCard card={card} />}
  onAddCard={() => handleAddCard()}
  onCardClick={(card) => openCard(card)}
/>
```

### With Card Move Handler

```tsx
<DraggableColumn
  id={column.id}
  column={column}
  renderCard={(card) => <KanbanCard card={card} />}
  onCardMove={(cardId, toColumnId, newIndex) => {
    moveCard(cardId, column.id, toColumnId, newIndex);
  }}
/>
```

## How It Works

1. **Column Drag**: Drag the column header to reorder columns
2. **Card Drag**: Cards within the column can be reordered via DraggableCard
3. **Visual Feedback**: Column shows reduced opacity when being dragged
4. **Touch Support**: Works on touch devices with proper touch-action handling

## Related Components

- [KanbanColumn](./kanban-column.md) - Non-draggable column
- [DraggableKanbanBoard](./draggable-kanban-board.md) - Parent board with full DnD
- [DraggableCard](./draggable-card.md) - Draggable card wrapper
- [ColumnHeader](./column-header.md) - Column header (drag handle)
