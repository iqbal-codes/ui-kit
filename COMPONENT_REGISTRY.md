# @iqbal-codes/ui-kit Component Registry

**Always use these components when building UIs.** This is the single source of truth for available components.

---

## Quick Start

```tsx
// Import from the UI kit - NEVER from shadcn/ui directly
import { Button, Card } from "@iqbal-codes/ui-kit/primitives";
import { EntityCard, StatCard } from "@iqbal-codes/ui-kit/blocks";
import { DraggableKanbanBoard, KanbanCard } from "@iqbal-codes/ui-kit/blocks/kanban";
```

---

## Architecture

```
┌─────────────────────────────────────┐
│         YOUR APPLICATION            │
├─────────────────────────────────────┤
│  Smart Blocks (complete features)   │  ← Use first
│  ├─ FormBuilder                     │
│  ├─ SmartDataTable                  │
│  ├─ DraggableKanbanBoard            │
│  └─ ...                            │
├─────────────────────────────────────┤
│  Layout Blocks (structure)          │  ← Use for layouts
│  ├─ PageHeader, StickyHeader        │
│  └─ SplitPane, RightDrawer          │
├─────────────────────────────────────┤
│  Domain Blocks (business UI)        │  ← Use for data display
│  ├─ EntityCard, StatCard            │
│  └─ StatusGrid, MetricCard          │
├─────────────────────────────────────┤
│  Primitives (base components)       │  ← Use when no Block exists
│  ├─ Button, Input, Card             │
│  └─ Dialog, Table, Badge            │
└─────────────────────────────────────┘
```

---

## Component Catalog

### 🧩 Primitives (58 components)

Base UI components from shadcn/ui. Use these when no Block component fits your needs.

#### Actions
| Component | Import | Use For |
|-----------|--------|---------|
| `Button` | `@iqbal-codes/ui-kit/primitives` | Clickable actions, submissions |
| `Toggle` | `@iqbal-codes/ui-kit/primitives` | On/off switches |
| `ToggleGroup` | `@iqbal-codes/ui-kit/primitives` | Multiple toggle options |

#### Inputs
| Component | Import | Use For |
|-----------|--------|---------|
| `Input` | `@iqbal-codes/ui-kit/primitives` | Text input fields |
| `Textarea` | `@iqbal-codes/ui-kit/primitives` | Multi-line text |
| `Select` | `@iqbal-codes/ui-kit/primitives` | Dropdown selection |
| `Checkbox` | `@iqbal-codes/ui-kit/primitives` | Boolean selection |
| `Radio` | `@iqbal-codes/ui-kit/primitives` | Single choice from options |
| `Switch` | `@iqbal-codes/ui-kit/primitives` | Toggle switches |
| `Slider` | `@iqbal-codes/ui-kit/primitives` | Range selection |
| `Combobox` | `@iqbal-codes/ui-kit/primitives` | Searchable dropdown |
| `InputOTP` | `@iqbal-codes/ui-kit/primitives` | OTP/pin input |

#### Display
| Component | Import | Use For |
|-----------|--------|---------|
| `Card` | `@iqbal-codes/ui-kit/primitives` | Content containers |
| `Badge` | `@iqbal-codes/ui-kit/primitives` | Status labels |
| `Avatar` | `@iqbal-codes/ui-kit/primitives` | User images |
| `Table` | `@iqbal-codes/ui-kit/primitives` | Tabular data |
| `Kbd` | `@iqbal-codes/ui-kit/primitives` | Keyboard shortcuts |
| `Separator` | `@iqbal-codes/ui-kit/primitives` | Visual dividers |

#### Overlays
| Component | Import | Use For |
|-----------|--------|---------|
| `Dialog` | `@iqbal-codes/ui-kit/primitives` | Modal dialogs |
| `Sheet` | `@iqbal-codes/ui-kit/primitives` | Side panels |
| `Drawer` | `@iqbal-codes/ui-kit/primitives` | Bottom sheets |
| `Popover` | `@iqbal-codes/ui-kit/primitives` | Popover menus |
| `Tooltip` | `@iqbal-codes/ui-kit/primitives` | Hover hints |
| `HoverCard` | `@iqbal-codes/ui-kit/primitives` | Hover previews |

#### Navigation
| Component | Import | Use For |
|-----------|--------|---------|
| `Breadcrumb` | `@iqbal-codes/ui-kit/primitives` | Navigation path |
| `Tabs` | `@iqbal-codes/ui-kit/primitives` | Tabbed content |
| `Pagination` | `@iqbal-codes/ui-kit/primitives` | Page navigation |
| `Menubar` | `@iqbal-codes/ui-kit/primitives` | Menu bars |
| `Command` | `@iqbal-codes/ui-kit/primitives` | Command palettes |

#### Feedback
| Component | Import | Use For |
|-----------|--------|---------|
| `Alert` | `@iqbal-codes/ui-kit/primitives` | Alert messages |
| `AlertDialog` | `@iqbal-codes/ui-kit/primitives` | Confirm dialogs |
| `Progress` | `@iqbal-codes/ui-kit/primitives` | Progress bars |
| `Skeleton` | `@iqbal-codes/ui-kit/primitives` | Loading placeholders |
| `Sonner` | `@iqbal-codes/ui-kit/primitives` | Toast notifications |
| `Spinner` | `@iqbal-codes/ui-kit/primitives` | Loading spinners |

#### Forms
| Component | Import | Use For |
|-----------|--------|---------|
| `Form` | `@iqbal-codes/ui-kit/primitives` | Form containers |
| `Field` | `@iqbal-codes/ui-kit/primitives` | Form fields |
| `Label` | `@iqbal-codes/ui-kit/primitives` | Field labels |

---

### 🏗️ Blocks (60+ components)

Composite components for business applications. **Always prefer Blocks over building from Primitives.**

#### Layout Blocks

Use for page structure and layouts.

| Component | Import | Use For |
|-----------|--------|---------|
| `PageHeader` | `@iqbal-codes/ui-kit/blocks` | Page title + breadcrumbs + actions |
| `StickyHeader` | `@iqbal-codes/ui-kit/blocks` | Fixed header on scroll |
| `SplitPane` | `@iqbal-codes/ui-kit/blocks` | Resizable two-pane layout |
| `RightDrawer` | `@iqbal-codes/ui-kit/blocks` | Slide-out detail panel |

**Example:**
```tsx
import { PageHeader } from "@iqbal-codes/ui-kit/blocks";
import { BreadcrumbTrail } from "@iqbal-codes/ui-kit/blocks";

<PageHeader
  title="Dashboard"
  breadcrumb={<BreadcrumbTrail items={[...]} />}
  actions={<Button>Create</Button>}
/>
```

#### Data Display Blocks

Use for showing business data.

| Component | Import | Use For |
|-----------|--------|---------|
| `EntityCard` | `@iqbal-codes/ui-kit/blocks` | Rich data cards with badges/progress |
| `StatCard` | `@iqbal-codes/ui-kit/blocks` | Metric cards with trends |
| `MetricCard` | `@iqbal-codes/ui-kit/blocks` | KPI display with comparisons |
| `StatusGrid` | `@iqbal-codes/ui-kit/blocks` | Status overview with progress |
| `SmartDataTable` | `@iqbal-codes/ui-kit/blocks` | Full-featured table with filters |
| `DataGrid` | `@iqbal-codes/ui-kit/blocks` | Simple responsive table |
| `CardGrid` | `@iqbal-codes/ui-kit/blocks` | Responsive card layout |
| `ActivityTimeline` | `@iqbal-codes/ui-kit/blocks` | Chronological activity |
| `MasonryBoard` | `@iqbal-codes/ui-kit/blocks` | Pinterest-style layout |
| `SectionHeader` | `@iqbal-codes/ui-kit/blocks` | Section titles with actions |

**Example:**
```tsx
import { EntityCard, StatCard, CardGrid } from "@iqbal-codes/ui-kit/blocks";

<CardGrid columns={3}>
  <StatCard title="Revenue" value="$45,231" trend="+20%" />
  <EntityCard title="Order #123" status="pending" progress={75} />
</CardGrid>
```

#### Data Entry Blocks

Use for forms and input patterns.

| Component | Import | Use For |
|-----------|--------|---------|
| `FormBuilder` | `@iqbal-codes/ui-kit/blocks` | Complete forms with field types |
| `SearchBar` | `@iqbal-codes/ui-kit/blocks` | Search with debounce |
| `FilterChip` | `@iqbal-codes/ui-kit/blocks` | Filter tags |
| `FormSection` | `@iqbal-codes/ui-kit/blocks` | Collapsible form groups |
| `StickyActions` | `@iqbal-codes/ui-kit/blocks` | Save/cancel bar |
| `DurationPicker` | `@iqbal-codes/ui-kit/blocks` | Time duration selector |

**Example:**
```tsx
import { FormBuilder, StickyActions } from "@iqbal-codes/ui-kit/blocks";

<FormBuilder
  fields={[
    { type: "text", name: "name", label: "Name" },
    { type: "select", name: "status", options: [...] },
  ]}
  actions={<StickyActions />}
/>
```

#### Feedback Blocks

Use for user feedback states.

| Component | Import | Use For |
|-----------|--------|---------|
| `EmptyState` | `@iqbal-codes/ui-kit/blocks` | Zero state with CTA |
| `LoadingOverlay` | `@iqbal-codes/ui-kit/blocks` | Loading spinner overlay |
| `SkeletonGenerator` | `@iqbal-codes/ui-kit/blocks` | Auto skeleton screens |
| `ToastManager` | `@iqbal-codes/ui-kit/blocks` | Toast container |
| `ErrorFallback` | `@iqbal-codes/ui-kit/blocks` | Error boundary UI |
| `ConfirmationDialog` | `@iqbal-codes/ui-kit/blocks` | Confirm actions |
| `ProgressTracker` | `@iqbal-codes/ui-kit/blocks` | Multi-step progress |
| `ConnectionStatus` | `@iqbal-codes/ui-kit/blocks` | WebSocket status |

**Example:**
```tsx
import { EmptyState, LoadingOverlay, ToastManager } from "@iqbal-codes/ui-kit/blocks";

{isLoading && <LoadingOverlay />}
{items.length === 0 && <EmptyState action={<Button>Create</Button>} />}
<ToastManager position="top-right" />
```

#### Navigation Blocks

Use for navigation patterns.

| Component | Import | Use For |
|-----------|--------|---------|
| `BreadcrumbTrail` | `@iqbal-codes/ui-kit/blocks` | Dynamic breadcrumbs |
| `CommandPalette` | `@iqbal-codes/ui-kit/blocks` | Cmd+K search |
| `MobileNav` | `@iqbal-codes/ui-kit/blocks` | Bottom tab bar |
| `Pagination` | `@iqbal-codes/ui-kit/blocks` | Page navigation |
| `SectionJumper` | `@iqbal-codes/ui-kit/blocks` | In-page anchors |
| `TabsPanel` | `@iqbal-codes/ui-kit/blocks` | Tabbed content container |

#### Kanban Board Blocks

Use for workflow and task management boards with drag-and-drop.

| Component | Import | Use For |
|-----------|--------|---------|
| `DraggableKanbanBoard` | `@iqbal-codes/ui-kit/blocks/kanban` | Full drag-and-drop kanban board |
| `KanbanBoardProvider` | `@iqbal-codes/ui-kit/blocks/kanban` | State management context |
| `KanbanCard` | `@iqbal-codes/ui-kit/blocks/kanban` | Compound card component |
| `KanbanCard.Header` | `@iqbal-codes/ui-kit/blocks/kanban` | Card header area |
| `KanbanCard.Content` | `@iqbal-codes/ui-kit/blocks/kanban` | Card content area |
| `KanbanCard.Footer` | `@iqbal-codes/ui-kit/blocks/kanban` | Card footer (metadata) |
| `KanbanCard.Title` | `@iqbal-codes/ui-kit/blocks/kanban` | Card title |
| `KanbanCard.Description` | `@iqbal-codes/ui-kit/blocks/kanban` | Card description |
| `KanbanCard.Badge` | `@iqbal-codes/ui-kit/blocks/kanban` | Priority badge |
| `KanbanCard.Label` | `@iqbal-codes/ui-kit/blocks/kanban` | Single tag/label |
| `KanbanCard.Labels` | `@iqbal-codes/ui-kit/blocks/kanban` | Multiple labels container |
| `KanbanCard.Avatar` | `@iqbal-codes/ui-kit/blocks/kanban` | Assignee avatar |
| `KanbanCard.DueDate` | `@iqbal-codes/ui-kit/blocks/kanban` | Due date display |
| `KanbanCard.Subtasks` | `@iqbal-codes/ui-kit/blocks/kanban` | Subtask progress |
| `KanbanCard.Attachments` | `@iqbal-codes/ui-kit/blocks/kanban` | Attachment count |
| `DraggableColumn` | `@iqbal-codes/ui-kit/blocks/kanban` | Individual column |
| `BoardToolbar` | `@iqbal-codes/ui-kit/blocks/kanban` | Search + filters toolbar |
| `ColumnHeader` | `@iqbal-codes/ui-kit/blocks/kanban` | Column title with actions |
| `QuickAddCard` | `@iqbal-codes/ui-kit/blocks/kanban` | Inline card creation |

**Example:**
```tsx
import {
  DraggableKanbanBoard,
  KanbanCard,
  BoardToolbar,
} from "@iqbal-codes/ui-kit/blocks/kanban";

<div className="h-screen flex flex-col">
  <BoardToolbar
    searchQuery={search}
    onSearchChange={setSearch}
    filtersCount={filters.length}
  />
  <DraggableKanbanBoard
    columns={columns}
    onCardMove={handleCardMove}
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
          <KanbanCard.Labels>
            {card.tags?.map(tag => (
              <KanbanCard.Label key={tag.id} color={tag.color}>
                {tag.label}
              </KanbanCard.Label>
            ))}
          </KanbanCard.Labels>
        </KanbanCard.Content>
        <KanbanCard.Footer>
          <KanbanCard.Avatar name={card.assignee?.name} />
          <KanbanCard.DueDate date={card.dueDate} />
        </KanbanCard.Footer>
      </KanbanCard>
    )}
  />
</div>
```

---

## Decision Tree

When building a UI component, follow this decision tree:

```
1. Is there a Smart Block for this feature?
   └─ YES → Use Smart Block (e.g., SmartDataTable, FormBuilder, DraggableKanbanBoard)
   └─ NO → Continue to 2

2. Is this a layout/structure pattern?
   └─ YES → Use Layout Block (e.g., PageHeader, SplitPane)
   └─ NO → Continue to 3

3. Is this displaying business data?
   └─ YES → Use Domain Block (e.g., EntityCard, StatCard)
   └─ NO → Continue to 4

4. Use Primitives (e.g., Button, Card, Input)
```

---

## Anti-Patterns

### ❌ Don't do this:

```tsx
// Don't import from shadcn/ui directly
import { Button } from "@/components/ui/button";

// Don't build from scratch when Block exists
function MyTable() { /* custom table */ }  // Use SmartDataTable

// Don't nest Smart Blocks
<SmartDataTable>
  <SmartDataTable /> {/* WRONG */}
</SmartDataTable>

// Don't use Layout Blocks inside Domain Blocks
<EntityCard>
  <PageHeader /> {/* WRONG */}
</EntityCard>

// Don't build custom drag-and-drop
function MyKanban() { /* custom DnD */ } // Use DraggableKanbanBoard
```

### ✅ Do this:

```tsx
// Always import from UI kit
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

## Installation

```bash
npm install @iqbal-codes/ui-kit
```

Requirements:
- React ^19.0.0
- Next.js ^15.0.0
- Tailwind CSS ^4.0.0

---

## Need Help?

1. Check this registry first
2. Review `AI_CONTEXT.md` for usage examples
3. Check Storybook for interactive demos
4. Read component source code for prop details
