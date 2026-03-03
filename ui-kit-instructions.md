# AI Instructions: Using @iqbal-codes/ui-kit

Copy this file to your project's `.claude/` directory to ensure AI always uses the UI kit components.

---

## Setup

1. **Install the UI kit:**
   ```bash
   npm install @iqbal-codes/ui-kit
   ```

2. **Copy this file to:** `.claude/ui-kit-instructions.md`

3. **Add to `.claude/settings.json`:**
   ```json
   {
     "context": ["ui-kit-instructions.md"]
   }
   ```

---

## Core Rule

**ALWAYS use components from `@iqbal-codes/ui-kit`** when building UIs. This kit provides everything needed.

### Import Paths

```tsx
// Primitives (base components)
import { Button, Card, Input, Dialog } from "@iqbal-codes/ui-kit/primitives";

// Blocks (composite components)
import { 
  PageHeader,      // Layout
  EntityCard,      // Data display
  SmartDataTable,  // Smart feature
  FormBuilder,     // Smart feature
  EmptyState,      // Feedback
} from "@iqbal-codes/ui-kit/blocks";

// Kanban Board
import {
  DraggableKanbanBoard,
  KanbanCard,
  BoardToolbar,
} from "@iqbal-codes/ui-kit/blocks/kanban";
```

---

## Component Selection Guide

### Building... | Use This First

| Task | Component | Import |
|------|-----------|--------|
| **Page with title + actions** | `PageHeader` | `/blocks` |
| **Dashboard metrics** | `StatCard`, `MetricCard` | `/blocks` |
| **Data table** | `SmartDataTable` | `/blocks` |
| **Card list** | `EntityCard` + `CardGrid` | `/blocks` |
| **Form** | `FormBuilder` | `/blocks` |
| **Search** | `SearchBar` | `/blocks` |
| **Filters** | `FilterChip` | `/blocks` |
| **Empty state** | `EmptyState` | `/blocks` |
| **Loading** | `LoadingOverlay`, `SkeletonGenerator` | `/blocks` |
| **Toast** | `ToastManager` | `/blocks` |
| **Confirmation** | `ConfirmationDialog` | `/blocks` |
| **Pagination** | `Pagination` | `/blocks` |
| **Breadcrumbs** | `BreadcrumbTrail` | `/blocks` |
| **Cmd+K search** | `CommandPalette` | `/blocks` |
| **Mobile nav** | `MobileNav` | `/blocks` |
| **Split view** | `SplitPane` | `/blocks` |
| **Slide-out panel** | `RightDrawer` | `/blocks` |
| **Kanban board** | `DraggableKanbanBoard` | `/blocks/kanban` |
| **Kanban card** | `KanbanCard` | `/blocks/kanban` |

### When No Block Exists

Use **Primitives**:

| Category | Components |
|----------|------------|
| Actions | `Button`, `Toggle`, `ToggleGroup` |
| Inputs | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Combobox` |
| Display | `Card`, `Badge`, `Avatar`, `Table`, `Separator` |
| Overlays | `Dialog`, `Sheet`, `Drawer`, `Popover`, `Tooltip`, `HoverCard` |
| Navigation | `Breadcrumb`, `Tabs`, `Pagination`, `Menubar`, `Command` |
| Feedback | `Alert`, `AlertDialog`, `Progress`, `Skeleton`, `Sonner`, `Spinner` |
| Forms | `Form`, `Field`, `Label` |

---

## Examples

### List Page with Filters

```tsx
import { PageHeader, SearchBar, FilterChip, SmartDataTable, Pagination } from "@iqbal-codes/ui-kit/blocks";
import { Button } from "@iqbal-codes/ui-kit/primitives";

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-4">
      <PageHeader
        title="Orders"
        actions={<Button>Create Order</Button>}
      />
      
      <div className="flex gap-2">
        <SearchBar placeholder="Search orders..." />
        <FilterChip label="Pending" count={12} />
        <FilterChip label="Completed" count={45} />
      </div>
      
      <SmartDataTable
        data={orders}
        columns={columns}
        filters={["status", "customer", "date"]}
        sortable
        pagination
      />
      
      <Pagination currentPage={1} totalPages={5} />
    </div>
  );
}
```

### Kanban Board

```tsx
import {
  DraggableKanbanBoard,
  KanbanCard,
  BoardToolbar,
} from "@iqbal-codes/ui-kit/blocks/kanban";

export default function TaskBoard() {
  const [search, setSearch] = React.useState("");
  
  return (
    <div className="h-screen flex flex-col">
      <BoardToolbar
        searchQuery={search}
        onSearchChange={setSearch}
        filtersCount={0}
      />
      
      <DraggableKanbanBoard
        columns={columns}
        onCardMove={async (cardId, from, to, index) => {
          await api.moveCard(cardId, to, index);
        }}
        renderCard={(card) => (
          <KanbanCard>
            <KanbanCard.Header>
              <KanbanCard.Title>{card.title}</KanbanCard.Title>
              <KanbanCard.Badge priority={card.priority}>
                {card.priority}
              </KanbanCard.Badge>
            </KanbanCard.Header>
            <KanbanCard.Content>
              <KanbanCard.Description>
                {card.description}
              </KanbanCard.Description>
            </KanbanCard.Content>
            <KanbanCard.Footer>
              <KanbanCard.Avatar name={card.assignee?.name} />
              <KanbanCard.DueDate date={card.dueDate} />
            </KanbanCard.Footer>
          </KanbanCard>
        )}
      />
    </div>
  );
}
```

### Form with Validation

```tsx
import { FormBuilder, StickyActions, FormSection } from "@iqbal-codes/ui-kit/blocks";
import { toast } from "sonner";

export default function OrderForm() {
  return (
    <div className="p-6">
      <FormBuilder
        fields={[
          { type: "text", name: "name", label: "Name", required: true },
          { type: "select", name: "status", options: ["pending", "completed"] },
          { type: "checkbox", name: "active", label: "Active" },
        ]}
        onSubmit={async (data) => {
          await saveOrder(data);
          toast.success("Order saved!");
        }}
        sections={[
          <FormSection title="Details" key="details">
            {/* nested fields */}
          </FormSection>
        ]}
        actions={<StickyActions />}
      />
    </div>
  );
}
```

### Dashboard

```tsx
import { StatCard, MetricCard, CardGrid } from "@iqbal-codes/ui-kit/blocks";

export default function Dashboard() {
  return (
    <div className="p-6">
      <CardGrid columns={4}>
        <StatCard title="Revenue" value="$45,231" trend="+20%" />
        <StatCard title="Orders" value="1,234" trend="+15%" />
        <MetricCard title="Conversion" value="3.2%" comparison="+0.5%" />
        <MetricCard title="AOV" value="$89" comparison="-$5" />
      </CardGrid>
    </div>
  );
}
```

### Loading + Empty States

```tsx
import { EmptyState, LoadingOverlay, SkeletonGenerator } from "@iqbal-codes/ui-kit/blocks";
import { Button } from "@iqbal-codes/ui-kit/primitives";

export default function OrdersList({ orders, isLoading }) {
  if (isLoading) {
    return <LoadingOverlay message="Loading orders..." />;
    // Or: <SkeletonGenerator type="card" count={5} />
  }
  
  if (orders.length === 0) {
    return (
      <EmptyState
        title="No orders yet"
        description="Create your first order to get started"
        action={<Button>Create Order</Button>}
      />
    );
  }
  
  return <div>{/* render orders */}</div>;
}
```

---

## Anti-Patterns

### ❌ Never Do This

```tsx
// Don't import from shadcn/ui
import { Button } from "@/components/ui/button";

// Don't build from scratch when Block exists
function MyTable() { /* 200 lines of custom table */ }

// Don't nest Smart Blocks
<SmartDataTable>
  <SmartDataTable />
</SmartDataTable>

// Don't use Layout Blocks inside Domain Blocks
<EntityCard>
  <PageHeader />  {/* Wrong! */}
</EntityCard>

// Don't build custom kanban
function MyKanban() { /* custom DnD */ }  // Use DraggableKanbanBoard
```

### ✅ Always Do This

```tsx
// Import from UI kit
import { Button } from "@iqbal-codes/ui-kit/primitives";
import { SmartDataTable } from "@iqbal-codes/ui-kit/blocks";
import { DraggableKanbanBoard } from "@iqbal-codes/ui-kit/blocks/kanban";

// Use Smart Blocks first
<SmartDataTable data={data} columns={columns} />

// Compose correctly
<PageHeader
  title="Orders"
  breadcrumb={<BreadcrumbTrail items={items} />}
  actions={<Button>Create</Button>}
/>

// Use Kanban for workflows
<DraggableKanbanBoard
  columns={columns}
  onCardMove={handleCardMove}
/>
```

---

## Decision Tree

```
Need a UI component?
│
├─ Is there a Smart Block? (FormBuilder, SmartDataTable, DraggableKanbanBoard)
│  └─ YES → Use it!
│  └─ NO → Continue ↓
│
├─ Is this layout/structure?
│  └─ YES → Use Layout Block (PageHeader, SplitPane)
│  └─ NO → Continue ↓
│
├─ Is this displaying business data?
│  └─ YES → Use Domain Block (EntityCard, StatCard)
│  └─ NO → Continue ↓
│
└─ Use Primitives (Button, Card, Input, etc.)
```

---

## Available Components

### Blocks (60+)
- **Layout**: PageHeader, StickyHeader, SplitPane, RightDrawer
- **Data Display**: EntityCard, StatCard, MetricCard, StatusGrid, SmartDataTable, DataGrid, CardGrid, ActivityTimeline, MasonryBoard, SectionHeader
- **Data Entry**: FormBuilder, SearchBar, FilterChip, FormSection, StickyActions, DurationPicker
- **Feedback**: EmptyState, LoadingOverlay, SkeletonGenerator, ToastManager, ErrorFallback, ConfirmationDialog, ProgressTracker, ConnectionStatus
- **Navigation**: BreadcrumbTrail, CommandPalette, MobileNav, Pagination, SectionJumper, TabsPanel
- **Kanban**: DraggableKanbanBoard, KanbanBoardProvider, KanbanCard (with compound parts), DraggableColumn, BoardToolbar, ColumnHeader, QuickAddCard

### Primitives (58)
- Button, Input, Card, Dialog, Sheet, Table, Badge, Avatar, Select, Checkbox, Radio, Switch, Tabs, Breadcrumb, Pagination, Alert, Progress, Skeleton, Tooltip, Popover, etc.

---

## Kanban Card Compound Components

The `KanbanCard` uses a compound component pattern for maximum flexibility:

```tsx
<KanbanCard>
  <KanbanCard.Header>
    <KanbanCard.Title>Title</KanbanCard.Title>
    <KanbanCard.Badge priority="high">High</KanbanCard.Badge>
  </KanbanCard.Header>
  
  <KanbanCard.Content>
    <KanbanCard.Description>Description</KanbanCard.Description>
    <KanbanCard.Labels>
      <KanbanCard.Label color="red">Bug</KanbanCard.Label>
      <KanbanCard.Label color="blue">Frontend</KanbanCard.Label>
    </KanbanCard.Labels>
  </KanbanCard.Content>
  
  <KanbanCard.Footer>
    <KanbanCard.Avatar name="John Doe" />
    <KanbanCard.DueDate date="2024-03-15" />
    <KanbanCard.Subtasks completed={3} total={5} />
    <KanbanCard.Attachments count={2} />
  </KanbanCard.Footer>
</KanbanCard>
```

**Available parts:**
- `KanbanCard.Header` - Header container
- `KanbanCard.Content` - Content area
- `KanbanCard.Footer` - Footer metadata
- `KanbanCard.Title` - Card title
- `KanbanCard.Description` - Description text
- `KanbanCard.Badge` - Priority badge
- `KanbanCard.Label` - Single tag
- `KanbanCard.Labels` - Multiple tags container
- `KanbanCard.Avatar` - Assignee avatar
- `KanbanCard.DueDate` - Due date display
- `KanbanCard.Subtasks` - Subtask progress
- `KanbanCard.Attachments` - Attachment count

---

## Need a Component?

1. Check this file first
2. See full registry: `COMPONENT_REGISTRY.md` in UI kit repo
3. Check Storybook for interactive demos
4. Read component source for prop details

**Remember:** Always prefer Blocks → Primitives → Custom (in that order)
