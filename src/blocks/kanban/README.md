# Kanban Board Components

Comprehensive, agnostic kanban board system built with React and dnd-kit for drag-and-drop functionality.

## Features

- ✅ **Fully Agnostic** - Works for any business domain (tasks, sales, content, manufacturing, etc.)
- ✅ **Drag & Drop** - Cards and columns with smooth animations
- ✅ **Compound Components** - shadcn-style customizable cards
- ✅ **Optimistic Updates** - Instant UI feedback with API integration
- ✅ **Type-Safe** - Full TypeScript generics support
- ✅ **Accessible** - Keyboard and touch support
- ✅ **Responsive** - Horizontal scrolling for many columns

## Installation

The kanban components are part of `@iqbal-codes/ui-kit`:

```bash
npm install @iqbal-codes/ui-kit
```

Dependencies (auto-installed):
- `@dnd-kit/core`
- `@dnd-kit/sortable`
- `@dnd-kit/utilities`

## Quick Start

### Basic Board

```tsx
import { KanbanBoard } from "@iqbal-codes/ui-kit/blocks/kanban";

const columns = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      {
        id: "1",
        title: "Fix login bug",
        description: "Users can't login",
        priority: "high",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [],
  },
  {
    id: "done",
    title: "Done",
    cards: [],
  },
];

function App() {
  return (
    <div className="h-screen">
      <KanbanBoard columns={columns} />
    </div>
  );
}
```

### With Drag & Drop

```tsx
import { DraggableKanbanBoard } from "@iqbal-codes/ui-kit/blocks/kanban";

function App() {
  const handleCardMove = async (cardId, fromColumnId, toColumnId, newIndex) => {
    // API call to persist
    await api.moveCard(cardId, toColumnId, newIndex);
  };

  return (
    <DraggableKanbanBoard
      columns={columns}
      onCardMove={handleCardMove}
      enableColumnDrag
      enableCardDrag
    />
  );
}
```

### With State Provider

```tsx
import {
  KanbanBoardProvider,
  DraggableKanbanBoard,
  useKanbanBoard,
} from "@iqbal-codes/ui-kit/blocks/kanban";

function App() {
  return (
    <KanbanBoardProvider
      columns={initialColumns}
      onMoveCard={api.moveCard}
      onAddCard={api.createCard}
      onUpdateCard={api.updateCard}
      onDeleteCard={api.deleteCard}
    >
      <BoardContent />
    </KanbanBoardProvider>
  );
}

function BoardContent() {
  const { moveCard, addCard, updateCard, deleteCard } = useKanbanBoard();

  return (
    <DraggableKanbanBoard
      columns={columns}
      onCardMove={moveCard}
    />
  );
}
```

### Custom Card Rendering

```tsx
import { KanbanBoard, KanbanCard } from "@iqbal-codes/ui-kit/blocks/kanban";

function App() {
  return (
    <KanbanBoard
      columns={columns}
      renderCard={(card, column) => (
        <KanbanCard>
          <KanbanCard.Header>
            <KanbanCard.Title>{card.title}</KanbanCard.Title>
            {card.priority && (
              <KanbanCard.Badge priority={card.priority}>
                {card.priority}
              </KanbanCard.Badge>
            )}
          </KanbanCard.Header>

          <KanbanCard.Content>
            {card.description && (
              <KanbanCard.Description>
                {card.description}
              </KanbanCard.Description>
            )}
            {card.tags && (
              <KanbanCard.Labels>
                {card.tags.map((tag) => (
                  <KanbanCard.Label key={tag.id} color={tag.color}>
                    {tag.label}
                  </KanbanCard.Label>
                ))}
              </KanbanCard.Labels>
            )}
          </KanbanCard.Content>

          <KanbanCard.Footer>
            {card.assignee && (
              <KanbanCard.Avatar name={card.assignee.name} />
            )}
            {card.dueDate && <KanbanCard.DueDate date={card.dueDate} />}
          </KanbanCard.Footer>
        </KanbanCard>
      )}
    />
  );
}
```

## Components

### Core Components

| Component | Description |
|-----------|-------------|
| `KanbanBoard` | Basic board container (no DnD) |
| `DraggableKanbanBoard` | Board with drag-and-drop support |
| `KanbanColumn` | Basic column container |
| `DraggableColumn` | Column with drag-and-drop |
| `DraggableCard` | Card wrapper with drag-and-drop |
| `KanbanBoardProvider` | State management context |

### Card Components (Compound Pattern)

| Component | Description |
|-----------|-------------|
| `KanbanCard` | Main card container |
| `KanbanCard.Header` | Header area |
| `KanbanCard.Content` | Content area |
| `KanbanCard.Footer` | Footer metadata |
| `KanbanCard.Title` | Card title |
| `KanbanCard.Description` | Card description |
| `KanbanCard.Badge` | Priority badge |
| `KanbanCard.Label` | Single tag/label |
| `KanbanCard.Labels` | Multiple labels container |
| `KanbanCard.Avatar` | Assignee avatar |
| `KanbanCard.DueDate` | Due date display |
| `KanbanCard.Subtasks` | Subtask progress |
| `KanbanCard.Attachments` | Attachment count |

### Supporting Components

| Component | Description |
|-----------|-------------|
| `BoardToolbar` | Search + filters toolbar |
| `ColumnHeader` | Column title with actions |
| `QuickAddCard` | Inline card creation form |

## Usage Examples

### Sales Pipeline

```tsx
interface Deal {
  id: string;
  company: string;
  value: number;
  probability: number;
  closeDate: string;
}

const columns: KanbanColumn<Deal>[] = [
  { id: "leads", title: "Leads", cards: deals, color: "gray" },
  { id: "contacted", title: "Contacted", cards: [], color: "blue" },
  { id: "proposal", title: "Proposal", cards: [], color: "yellow" },
  { id: "closed", title: "Closed Won", cards: [], color: "green" },
];

<DraggableKanbanBoard<Deal>
  columns={columns}
  renderCard={(deal) => (
    <KanbanCard>
      <KanbanCard.Header>
        <KanbanCard.Title>{deal.company}</KanbanCard.Title>
        <KanbanCard.Badge priority="medium">
          ${deal.value.toLocaleString()}
        </KanbanCard.Badge>
      </KanbanCard.Header>
      <KanbanCard.Footer>
        <KanbanCard.DueDate date={deal.closeDate} />
      </KanbanCard.Footer>
    </KanbanCard>
  )}
  onCardMove={handleDealStageChange}
/>
```

### Content Calendar

```tsx
interface ContentPiece {
  id: string;
  topic: string;
  author: string;
  publishDate: string;
  channel: "blog" | "social" | "video";
}

<DraggableKanbanBoard<ContentPiece>
  columns={contentColumns}
  renderCard={(content) => (
    <KanbanCard>
      <KanbanCard.Header>
        <KanbanCard.Title>{content.topic}</KanbanCard.Title>
        <KanbanCard.Label
          color={content.channel === "blog" ? "blue" : "purple"}
        >
          {content.channel}
        </KanbanCard.Label>
      </KanbanCard.Header>
      <KanbanCard.Footer>
        <KanbanCard.Avatar name={content.author} />
        <KanbanCard.DueDate date={content.publishDate} />
      </KanbanCard.Footer>
    </KanbanCard>
  )}
/>
```

### Manufacturing Work Orders

```tsx
interface WorkOrder {
  id: string;
  machineId: string;
  issueType: "repair" | "maintenance" | "inspection";
  priority: "critical" | "high" | "normal";
  estimatedHours: number;
}

<DraggableKanbanBoard<WorkOrder>
  columns={woColumns}
  renderCard={(wo) => (
    <KanbanCard>
      <KanbanCard.Header>
        <KanbanCard.Title>WO: {wo.machineId}</KanbanCard.Title>
        <KanbanCard.Badge priority={wo.priority === "critical" ? "urgent" : "high"}>
          {wo.priority}
        </KanbanCard.Badge>
      </KanbanCard.Header>
      <KanbanCard.Content>
        <KanbanCard.Label color={wo.issueType === "repair" ? "red" : "orange"}>
          {wo.issueType}
        </KanbanCard.Label>
      </KanbanCard.Content>
    </KanbanCard>
  )}
/>
```

## Props

### DraggableKanbanBoard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `KanbanColumn<T>[]` | - | Column data with cards |
| `onCardMove` | `(cardId, fromColumnId, toColumnId, newIndex) => void` | - | Card moved between columns |
| `onCardReorder` | `(cardId, fromIndex, toIndex, columnId) => void` | - | Card reordered within column |
| `onColumnReorder` | `(columnId, fromIndex, toIndex) => void` | - | Column reordered |
| `enableColumnDrag` | `boolean` | `true` | Enable column DnD |
| `enableCardDrag` | `boolean` | `true` | Enable card DnD |
| `renderCard` | `(card, column) => ReactNode` | - | Custom card renderer |
| `onCardClick` | `(card) => void` | - | Card click handler |
| `isLoading` | `boolean` | `false` | Loading state |
| `emptyStateMessage` | `string` | `"No cards yet"` | Empty state text |

### KanbanCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card` | `T extends BaseCardMetadata` | - | Card data (default mode) |
| `children` | `ReactNode` | - | Custom content (compound mode) |
| `onClick` | `() => void` | - | Click handler |
| `isDragging` | `boolean` | `false` | Dragging state |
| `priority` | `"low" \| "medium" \| "high" \| "urgent"` | - | Priority for styling |

## Data Structure

### Base Card Metadata

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
  dueDate?: string; // ISO 8601
  priority?: "low" | "medium" | "high" | "urgent";
  tags?: {
    id: string;
    label: string;
    color: string;
  }[];
  subtasks?: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: string;
  }[];
}
```

### Column

```typescript
interface KanbanColumn<T extends BaseCardMetadata = BaseCardMetadata> {
  id: string;
  title: string;
  cards: T[];
  color?: string;
  isCollapsed?: boolean;
  cardLimit?: number;
  isDisabled?: boolean;
}
```

Extend these with your domain-specific fields:

```typescript
interface Deal extends BaseCardMetadata {
  company: string;
  value: number;
  probability: number;
}

const columns: KanbanColumn<Deal>[] = [...];
```

## Best Practices

### 1. Use Generics for Type Safety

```tsx
// ✅ Good: Type-safe
<DraggableKanbanBoard<Deal>
  columns={dealColumns}
  renderCard={(deal) => <DealCard deal={deal} />}
/>

// ❌ Avoid: No type safety
<DraggableKanbanBoard
  columns={columns}
  renderCard={(card) => <div>{card.title}</div>}
/>
```

### 2. Implement Optimistic Updates

```tsx
<KanbanBoardProvider
  columns={initialColumns}
  onMoveCard={async (cardId, from, to, index) => {
    // API call
    await api.moveCard(cardId, to, index);
  }}
>
  <DraggableKanbanBoard />
</KanbanBoardProvider>
```

### 3. Handle Card Clicks for Details

```tsx
<DraggableKanbanBoard
  columns={columns}
  onCardClick={(card) => {
    navigate(`/cards/${card.id}`);
    // or open modal
  }}
/>
```

### 4. Use Toolbar for Filtering

```tsx
<div className="h-screen flex flex-col">
  <BoardToolbar
    searchQuery={search}
    onSearchChange={setSearch}
    filtersCount={filters.length}
  />
  <DraggableKanbanBoard columns={filteredColumns} />
</div>
```

## Accessibility

- Keyboard navigation (Tab, Enter, Space, Escape)
- Screen reader announcements
- Touch support for mobile
- Focus indicators
- ARIA labels

## Performance

- Virtual scrolling for large lists (coming soon)
- Memoized card rendering
- Optimistic UI updates
- Debounced API calls

## Storybook

View interactive examples:

```bash
bun run storybook
```

Stories available:
- Default
- With Toolbar
- With Provider
- Custom Cards
- Sales Pipeline

## Related Components

- `BoardToolbar` - Search and filters
- `QuickAddCard` - Inline card creation
- `ColumnHeader` - Column actions

## License

MIT
