# QuickAddCard

An inline card creation form that allows users to quickly add new cards to a column.

## Import

```typescript
import { QuickAddCard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

QuickAddCard displays an inline form for creating new kanban cards. It appears as a text area with add and cancel buttons, providing a quick way to add cards without navigating away from the board.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Whether form is visible |
| `value` | `string` | `""` | Current input value |
| `onChange` | `(value: string) => void` | Optional | Callback when value changes |
| `onAdd` | `(title: string) => void` | Optional | Callback when add is clicked |
| `onCancel` | `() => void` | Optional | Callback when cancel is clicked |
| `isSubmitting` | `boolean` | `false` | Shows loading state |
| `placeholder` | `string` | `"Enter card title..."` | Input placeholder |
| `addButtonText` | `string` | `"Add card"` | Add button label |
| `cancelButtonText` | `string` | `"Cancel"` | Cancel button label |
| `className` | `string` | Optional | Custom CSS class |

## Usage Examples

### Basic Usage

```tsx
import { QuickAddCard } from '@iqbal-codes/ui-kit/blocks';

const [isOpen, setIsOpen] = useState(false);
const [title, setTitle] = useState('');

<QuickAddCard
  isOpen={isOpen}
  value={title}
  onChange={setTitle}
  onAdd={(title) => {
    handleAddCard(title);
    setTitle('');
    setIsOpen(false);
  }}
  onCancel={() => {
    setTitle('');
    setIsOpen(false);
  }}
/>
```

### With Custom Labels

```tsx
<QuickAddCard
  isOpen={isOpen}
  value={title}
  onChange={setTitle}
  onAdd={handleAdd}
  onCancel={handleCancel}
  placeholder="What needs to be done?"
  addButtonText="Create Task"
  cancelButtonText="Close"
/>
```

### With Submitting State

```tsx
<QuickAddCard
  isOpen={isOpen}
  value={title}
  onChange={setTitle}
  onAdd={handleAdd}
  onCancel={handleCancel}
  isSubmitting={isSubmitting}
/>
```

## Behavior

1. **Form Submission**: Pressing Enter or clicking Add creates the card
2. **Cancel**: Pressing Escape or clicking Cancel closes the form
3. **Validation**: Add button is disabled when value is empty or whitespace
4. **Auto-focus**: Textarea auto-focuses when form opens

## Related Components

- [KanbanColumn](./kanban-column.md) - Column containing quick add
- [KanbanCard](./kanban-card.md) - Created card component
- [KanbanBoardProvider](./kanban-board-provider.md) - State management
