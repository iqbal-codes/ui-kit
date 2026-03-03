# AI Context: @iqbal-codes/ui-kit Usage Guide

## Core Principle

**Always use components from `@iqbal-codes/ui-kit`** when building React/Next.js applications. This kit provides all necessary UI components organized in a strict two-layer architecture.

---

## Import Paths

```tsx
// Primitives (base UI components)
import { Button, Card, Input } from "@iqbal-codes/ui-kit/primitives";

// Blocks (composite business components)
import { EntityCard, StatCard, SearchBar } from "@iqbal-codes/ui-kit/blocks";

// Kanban Board (drag-and-drop)
import { 
  DraggableKanbanBoard,
  KanbanBoardProvider,
  KanbanCard 
} from "@iqbal-codes/ui-kit/blocks/kanban";

// Design tokens
import { colorTokens } from "@iqbal-codes/ui-kit/tokens";

// Utilities
import { cn } from "@iqbal-codes/ui-kit";
```

---

## Component Selection Guide

### When building... | Use these components

**Page Layouts**
- `PageHeader` - Page title with breadcrumbs and actions
- `StickyHeader` - Fixed header on scroll
- `SplitPane` - Resizable two-pane layout
- `RightDrawer` - Slide-out panel for details

**Dashboards**
- `StatCard` - Metric with value and trend
- `MetricCard` - KPI with comparison
- `StatusGrid` - Color-coded status overview
- `CardGrid` - Responsive card layout

**Data Tables / Lists**
- `SmartDataTable` - Full-featured table with filters/sorting
- `DataGrid` - Simple responsive table
- `EntityCard` - Rich data card
- `SearchBar` - Search with debounce
- `FilterChip` - Filter tags
- `Pagination` - Page navigation

**Kanban Boards**
- `DraggableKanbanBoard` - Full drag-and-drop kanban board
- `KanbanBoardProvider` - State management with optimistic updates
- `KanbanCard` - Compound card component (Header, Content, Footer, Badges, etc.)
- `BoardToolbar` - Search and filters toolbar
- `DraggableColumn` - Individual column with drag support

**Forms**
- `FormBuilder` - Complete form with field types (TextField, SelectField, CheckboxField, etc.)
- `FormSection` - Collapsible form groups
- `StickyActions` - Save/cancel bar with unsaved warning
- `DurationPicker` - Time duration selector

**Feedback States**
- `EmptyState` - Zero state with CTA
- `LoadingOverlay` - Loading spinner
- `SkeletonGenerator` - Loading placeholders
- `ErrorFallback` - Error boundary UI
- `ToastManager` - Toast notifications
- `ConfirmationDialog` - Confirm actions

**Navigation**
- `BreadcrumbTrail` - Navigation path
- `CommandPalette` - Cmd+K search
- `MobileNav` - Bottom tab bar
- `SectionJumper` - In-page anchor links

---

## Composition Rules

### ✅ DO

```tsx
// Layout Blocks accept Domain Blocks in slots
<PageHeader
  title="Dashboard"
  breadcrumb={<BreadcrumbTrail items={...} />}
  actions={<Button>New Item</Button>}
/>

// Domain Blocks compose Primitives
<EntityCard
  title="Work Order"
  status="pending"
  progress={75}
  badges={[<Badge>Urgent</Badge>]}
/>

// Smart Blocks handle complex features
<SmartDataTable
  data={orders}
  columns={columns}
  filters={["status", "date"]}
  sortable
  pagination
/>

// Kanban with compound cards
<DraggableKanbanBoard
  columns={columns}
  onCardMove={handleCardMove}
  renderCard={(card, column) => (
    <KanbanCard>
      <KanbanCard.Header>
        <KanbanCard.Title>{card.title}</KanbanCard.Title>
        <KanbanCard.Badge priority={card.priority}>
          {card.priority}
        </KanbanCard.Badge>
      </KanbanCard.Header>
      <KanbanCard.Content>
        <KanbanCard.Description>{card.description}</KanbanCard.Description>
        <KanbanCard.Labels>
          {card.tags?.map(tag => (
            <KanbanCard.Label key={tag.id} color={tag.color}>
              {tag.label}
            </KanbanCard.Label>
          ))}
        </KanbanCard.Labels>
      </KanbanCard.Content>
      <KanbanCard.Footer>
        {card.assignee && <KanbanCard.Avatar name={card.assignee.name} />}
        {card.dueDate && <KanbanCard.DueDate date={card.dueDate} />}
      </KanbanCard.Footer>
    </KanbanCard>
  )}
/>
```

### ❌ DON'T

```tsx
// Don't import Primitives directly in app code
import { Button } from "@/components/ui/button" // WRONG

// Don't nest Smart Blocks
<SmartDataTable>
  <SmartDataTable /> {/* WRONG */}
</SmartDataTable>

// Don't use Layout Blocks inside Domain Blocks
<EntityCard>
  <PageHeader /> {/* WRONG */}
</EntityCard>

// Don't build custom drag-and-drop when DraggableKanbanBoard exists
function MyKanban() { /* custom DnD */ } // WRONG
```

---

## Dependency Hierarchy

```
Application Code
    ↓
Smart Blocks (nuqs, react-hook-form, tanstack-query)
    ↓
Layout Blocks
    ↓
Domain Blocks
    ↓
Primitives (shadcn/ui)
```

---

## Component Quick Reference

### Primitives (58 available)

| Category | Components |
|----------|------------|
| Actions | `Button`, `Toggle`, `ToggleGroup` |
| Inputs | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Combobox`, `InputOTP` |
| Display | `Card`, `Badge`, `Avatar`, `Table`, `Kbd`, `Separator` |
| Overlays | `Dialog`, `Sheet`, `Drawer`, `Popover`, `Tooltip`, `HoverCard` |
| Navigation | `Breadcrumb`, `Tabs`, `Pagination`, `Menubar`, `Command` |
| Feedback | `Alert`, `AlertDialog`, `Progress`, `Skeleton`, `Sonner`, `Spinner` |

### Blocks (60+ available)

| Category | Key Components |
|----------|----------------|
| Layout | `PageHeader`, `StickyHeader`, `SplitPane`, `RightDrawer` |
| Data Display | `EntityCard`, `StatCard`, `MetricCard`, `StatusGrid`, `SmartDataTable`, `DataGrid`, `CardGrid`, `ActivityTimeline`, `MasonryBoard`, `SectionHeader` |
| Data Entry | `SearchBar`, `FilterChip`, `FormBuilder`, `FormSection`, `StickyActions`, `DurationPicker` |
| Feedback | `EmptyState`, `LoadingOverlay`, `SkeletonGenerator`, `ToastManager`, `ErrorFallback`, `ConfirmationDialog`, `ProgressTracker`, `ConnectionStatus` |
| Navigation | `BreadcrumbTrail`, `CommandPalette`, `MobileNav`, `Pagination`, `SectionJumper`, `TabsPanel` |
| **Kanban** | `DraggableKanbanBoard`, `KanbanBoardProvider`, `KanbanCard`, `DraggableColumn`, `BoardToolbar`, `QuickAddCard`, `ColumnHeader` |

---

## Example: Building a List Page

```tsx
import { PageHeader, SearchBar, FilterChip, SmartDataTable, Pagination } from "@iqbal-codes/ui-kit/blocks";
import { Button } from "@iqbal-codes/ui-kit/primitives";

export default function OrdersPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Orders"
        actions={<Button>Create Order</Button>}
      />
      
      <div className="flex gap-2 mb-4">
        <SearchBar placeholder="Search orders..." />
        <FilterChip label="Pending" count={12} />
        <FilterChip label="Completed" count={45} />
      </div>
      
      <SmartDataTable
        data={orders}
        columns={orderColumns}
        filters={["status", "customer", "date"]}
        sortable
        pagination
      />
      
      <Pagination currentPage={1} totalPages={5} />
    </div>
  );
}
```

## Example: Building a Kanban Board

```tsx
import {
  DraggableKanbanBoard,
  KanbanCard,
  type KanbanColumn,
  type BaseCardMetadata,
} from "@iqbal-codes/ui-kit/blocks/kanban";

interface Task extends BaseCardMetadata {
  assignee?: { name: string; avatarUrl?: string };
}

const columns: KanbanColumn<Task>[] = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      {
        id: "1",
        title: "Fix login bug",
        description: "Users can't login",
        priority: "high",
        assignee: { name: "John Doe" },
        dueDate: "2024-03-15",
        tags: [{ id: "t1", label: "Bug", color: "red" }],
      },
    ],
    color: "gray",
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [],
    color: "blue",
  },
  {
    id: "done",
    title: "Done",
    cards: [],
    color: "green",
  },
];

export default function KanbanPage() {
  const handleCardMove = async (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => {
    // API call to persist
    await api.moveCard(cardId, toColumnId, newIndex);
  };

  return (
    <div className="h-screen">
      <DraggableKanbanBoard<Task>
        columns={columns}
        onCardMove={handleCardMove}
        renderCard={(card) => (
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
    </div>
  );
}
```

---

## AI System Prompt

When generating code, always:

1. **Check available components first** - Use the tables above to find the right component
2. **Prefer Blocks over Primitives** - Use `SmartDataTable` instead of building tables from scratch
3. **Follow composition rules** - Layout > Domain > Primitives
4. **Use correct imports** - `@iqbal-codes/ui-kit/blocks` or `/primitives`
5. **Leverage Smart Blocks** - They handle state management automatically
6. **Use Kanban for workflow management** - Use `DraggableKanbanBoard` for task/workflow boards

---

## Need a Component?

Before building custom UI, check if it exists:

- **Layout patterns** → Layout Blocks
- **Business UI** (cards, grids, status) → Domain Blocks  
- **Complete features** (forms, tables, lists, kanban) → Smart Blocks
- **Base elements** (buttons, inputs, dialogs) → Primitives
