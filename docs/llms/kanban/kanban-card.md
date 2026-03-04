# KanbanCard

A flexible card component for kanban boards that supports two usage patterns: default rendering with data prop, and compound components for custom layouts.

## Import

```typescript
import { KanbanCard } from '@iqbal-codes/ui-kit/blocks';
// Or import specific sub-components
import { 
  KanbanCard, 
  KanbanCard.Header, 
  KanbanCard.Content, 
  KanbanCard.Footer,
  KanbanCard.Title,
  KanbanCard.Description,
  KanbanCard.Badge,
  KanbanCard.Label,
  KanbanCard.Labels,
  KanbanCard.Avatar,
  KanbanCard.DueDate,
  KanbanCard.Subtasks,
  KanbanCard.Attachments
} from '@iqbal-codes/ui-kit/blocks';
```

## Overview

KanbanCard renders task cards with rich metadata display. It supports automatic rendering based on card data (title, description, assignee, due date, priority, tags, subtasks, attachments) or custom composition using compound components.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card` | `T extends BaseCardMetadata` | Optional | Card data for default rendering |
| `isDragging` | `boolean` | `false` | Shows dragging state styling |
| `isSelected` | `boolean` | `false` | Shows selected state styling |
| `onClick` | `() => void` | Optional | Click handler |
| `priority` | `"low" \| "medium" \| "high" \| "urgent"` | Optional | Priority (for compound mode) |
| `className` | `string` | Optional | Custom CSS class |

## Types

### BaseCardMetadata

```typescript
interface BaseCardMetadata {
  id: string;
  title: string;
  description?: string;
  assignee?: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  dueDate?: string;
  priority?: "low" | "medium" | "high" | "urgent";
  tags?: Array<{
    id: string;
    label: string;
    color: string;
  }>;
  subtasks?: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
  attachments?: Array<{
    id: string;
    name: string;
    url: string;
    type: string;
    size?: number;
  }>;
  createdAt?: string;
  updatedAt?: string;
}
```

## Usage Examples

### Pattern 1: Default Rendering

The simplest usage - pass card data and the component automatically renders all available metadata:

```tsx
import { KanbanCard } from '@iqbal-codes/ui-kit/blocks';

const card = {
  id: '1',
  title: 'Implement authentication',
  description: 'Add OAuth2 login flow',
  priority: 'high',
  assignee: {
    id: 'user-1',
    name: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg'
  },
  dueDate: '2024-03-15',
  tags: [
    { id: 'tag-1', label: 'Backend', color: 'blue' },
    { id: 'tag-2', label: 'Security', color: 'red' }
  ],
  subtasks: [
    { id: 'st-1', title: 'Setup OAuth provider', completed: true },
    { id: 'st-2', title: 'Create login page', completed: false }
  ],
  attachments: [
    { id: 'att-1', name: 'design.png', url: '/files/design.png', type: 'image/png' }
  ]
};

<KanbanCard 
  card={card} 
  onClick={() => openCardDetail(card)} 
/>
```

### Pattern 2: Compound Components

For custom layouts, use compound components:

```tsx
<KanbanCard>
  <KanbanCard.Header>
    <KanbanCard.Title>Custom Title</KanbanCard.Title>
    <KanbanCard.Badge priority="urgent">URGENT</KanbanCard.Badge>
  </KanbanCard.Header>
  
  <KanbanCard.Content>
    <KanbanCard.Description>
      Custom description content
    </KanbanCard.Description>
    <KanbanCard.Labels>
      <KanbanCard.Label color="blue">Feature</KanbanCard.Label>
      <KanbanCard.Label color="green">In Review</KanbanCard.Label>
    </KanbanCard.Labels>
  </KanbanCard.Content>
  
  <KanbanCard.Footer>
    <KanbanCard.Avatar 
      name="Jane Smith" 
      avatarUrl="https://example.com/jane.jpg" 
    />
    <KanbanCard.DueDate date="2024-03-20" />
    <KanbanCard.Subtasks completed={3} total={5} />
    <KanbanCard.Attachments count={2} />
  </KanbanCard.Footer>
</KanbanCard>
```

### Priority Styling

Priority is displayed via left border color:

```tsx
// Urgent - Red
<KanbanCard card={{ ...card, priority: 'urgent' }} />

// High - Orange  
<KanbanCard card={{ ...card, priority: 'high' }} />

// Medium - Yellow
<KanbanCard card={{ ...card, priority: 'medium' }} />

// Low - Blue
<KanbanCard card={{ ...card, priority: 'low' }} />
```

### With Click Handler

```tsx
<KanbanCard 
  card={card}
  onClick={() => {
    // Open modal, navigate, etc.
    openCardModal(card.id);
  }}
/>
```

## Compound Components

| Component | Description |
|-----------|-------------|
| `KanbanCard.Header` | Container for title and badge |
| `KanbanCard.Title` | Card title heading |
| `KanbanCard.Description` | Description text |
| `KanbanCard.Badge` | Priority badge |
| `KanbanCard.Content` | Main content area (labels, description) |
| `KanbanCard.Label` | Individual tag/label |
| `KanbanCard.Labels` | Container for multiple labels |
| `KanbanCard.Footer` | Footer area (avatar, due date, etc.) |
| `KanbanCard.Avatar` | Assignee avatar |
| `KanbanCard.DueDate` | Due date display |
| `KanbanCard.Subtasks` | Subtask progress |
| `KanbanCard.Attachments` | Attachment count |

## Visual States

- **Default**: Standard card with all metadata
- **Dragging**: Reduced opacity with shadow
- **Selected**: Ring highlight
- **Priority**: Left border color (urgent=red, high=orange, medium=yellow, low=blue)

## Related Components

- [KanbanBoard](./kanban-board.md) - Parent board
- [KanbanColumn](./kanban-column.md) - Column container
- [DraggableCard](./draggable-card.md) - Draggable wrapper for cards
- [BaseCardMetadata](./types.md) - Type definitions
