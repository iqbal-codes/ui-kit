# DraggableCard

A wrapper component that adds drag-and-drop capabilities to kanban cards using @dnd-kit.

## Import

```typescript
import { DraggableCard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DraggableCard wraps a kanban card with @dnd-kit's useSortable hook, enabling drag-and-drop reordering within and between columns. It provides visual feedback during drag operations and handles the touch interactions properly.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card` | `T extends BaseCardMetadata` | Required | Card data |
| `id` | `string` | Required | Unique identifier for dnd-kit (format: `${columnId}-card-${cardId}`) |
| `isDragging` | `boolean` | `false` | Whether card is being dragged |
| `onClick` | `() => void` | Optional | Click handler |
| `renderCard` | `(card: T) => ReactNode` | Optional | Custom card renderer |

## Usage Examples

### Basic Usage

```tsx
import { DraggableCard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

// In a column context
{column.cards.map((card) => (
  <DraggableCard
    key={card.id}
    id={`${column.id}-card-${card.id}`}
    card={card}
    onClick={() => openCard(card)}
  />
))}
```

### With Custom Card Renderer

```tsx
<DraggableCard
  id={`${columnId}-card-${card.id}`}
  card={card}
  renderCard={(card) => (
    <CustomCardComponent 
      title={card.title} 
      assignee={card.assignee} 
    />
  )}
/>
```

### In DraggableColumn

```tsx
import { DraggableColumn, DraggableCard, KanbanCard } from '@iqbal-codes/ui-kit/blocks';

<DraggableColumn
  id={column.id}
  column={column}
  renderCard={(card, column) => (
    <DraggableCard
      id={`${column.id}-card-${card.id}`}
      card={card}
      onClick={() => onCardClick(card)}
    />
  )}
/>
```

## How It Works

1. **Unique ID**: Cards require a unique ID in format `${columnId}-card-${cardId}` for proper tracking
2. **Drag Handle**: The entire card surface acts as the drag handle
3. **Visual Feedback**: 
   - Card hides (opacity: 0) while being dragged
   - Original position shows placeholder
   - Drag overlay shows rotated card
4. **Touch Support**: Uses `touch-action: none` for proper mobile handling

## Related Components

- [KanbanCard](./kanban-card.md) - Base card component
- [DraggableColumn](./draggable-column.md) - Column with drag support
- [DraggableKanbanBoard](./draggable-kanban-board.md) - Full drag-and-drop board
- [KanbanBoardProvider](./kanban-board-provider.md) - State management
