# UI Blocks for LLMs

> Quick reference index for AI assistants working with this UI kit.

## Unified Import

```typescript
import { 
  // Data Display
  ActivityTimeline,
  CardGrid,
  DataGrid,
  EntityCard,
  MasonryBoard,
  MetricCard,
  SectionHeader,
  SmartDataTable,
  StatCard,
  StatusGrid,
  
  // Data Entry
  DurationPicker,
  FilterChip,
  FormBuilder,
  FormSection,
  FormWizard,
  SearchBar,
  StickyActions,
  
  // Feedback
  ConfirmationDialog,
  ConnectionStatus,
  EmptyState,
  ErrorFallback,
  LoadingOverlay,
  ProgressTracker,
  SkeletonGenerator,
  ToastManager,
  
  // Layout
  AppShell,
  AspectRatio,
  Center,
  Container,
  DashboardLayout,
  Footer,
  PageHeader,
  ResponsiveGrid,
  RightDrawer,
  SplitPane,
  Stack,
  HStack,
  VStack,
  StickyHeader,
  ThreeColumnLayout,
  TwoColumnLayout,
  
  // Navigation
  BreadcrumbTrail,
  CommandPalette,
  MobileNav,
  Pagination,
  SectionJumper,
  TabsPanel,
  
  // Kanban
  KanbanBoard,
  DraggableKanbanBoard,
  KanbanColumn,
  DraggableColumn,
  KanbanCard,
  DraggableCard,
  KanbanBoardProvider,
  QuickAddCard,
  BoardToolbar,
  ColumnHeader
} from '@iqbal-codes/ui-kit/blocks';
```

## Component Reference

Use this reference to find the detailed documentation for any component.

### Data Display → [`./data-display/`](./data-display/)

| Component | Description | File |
|-----------|-------------|------|
| [`ActivityTimeline`](./data-display/activity-timeline.md) | Vertical timeline of activities/events | activity-timeline.md |
| [`CardGrid`](./data-display/card-grid.md) | Responsive grid of cards | card-grid.md |
| [`DataGrid`](./data-display/data-grid.md) | Tabular data display | data-grid.md |
| [`EntityCard`](./data-display/entity-card.md) | Card for displaying entity details | entity-card.md |
| [`MasonryBoard`](./data-display/masonry-board.md) | Pinterest-style masonry grid | masonry-board.md |
| [`MetricCard`](./data-display/metric-card.md) | Metric display with trend indicator | metric-card.md |
| [`SectionHeader`](./data-display/section-header.md) | Section heading with actions | section-header.md |
| [`SmartDataTable`](./data-display/smart-data-table.md) | Advanced table with filtering/pagination | smart-data-table.md |
| [`StatCard`](./data-display/stat-card.md) | Statistical card with icon/stats | stat-card.md |
| [`StatusGrid`](./data-display/status-grid.md) | Grid of status items | status-grid.md |

### Data Entry → [`./data-entry/`](./data-entry/)

| Component | Description | File |
|-----------|-------------|------|
| [`DurationPicker`](./data-entry/duration-picker.md) | Time duration input | duration-picker.md |
| [`FilterChip`](./data-entry/filter-chip.md) | Selectable filter chip/tag | filter-chip.md |
| [`FormBuilder`](./data-entry/form-builder.md) | Dynamic form builder | form-builder.md |
| [`FormSection`](./data-entry/form-section.md) | Form section wrapper | form-section.md |
| [`FormWizard`](./data-entry/form-wizard.md) | Multi-step wizard/stepper | form-wizard.md |
| [`SearchBar`](./data-entry/search-bar.md) | Search input | search-bar.md |
| [`StickyActions`](./data-entry/sticky-actions.md) | Sticky footer | sticky-actions.md |

### Feedback → [`./feedback/`](./feedback/)

| Component | Description | File |
|-----------|-------------|------|
| [`ConfirmationDialog`](./feedback/confirmation-dialog.md) | Modal dialog for user confirmation | confirmation-dialog.md |
| [`ConnectionStatus`](./feedback/connection-status.md) | Network/connection status indicator | connection-status.md |
| [`EmptyState`](./feedback/empty-state.md) | Empty content placeholder | empty-state.md |
| [`ErrorFallback`](./feedback/error-fallback.md) | Error boundary fallback UI | error-fallback.md |
| [`LoadingOverlay`](./feedback/loading-overlay.md) | Full-screen loading overlay | loading-overlay.md |
| [`ProgressTracker`](./feedback/progress-tracker.md) | Multi-step progress indicator | progress-tracker.md |
| [`SkeletonGenerator`](./feedback/skeleton-generator.md) | Loading skeleton placeholders | skeleton-generator.md |
| [`ToastManager`](./feedback/toast-manager.md) | Toast notification system | toast-manager.md |

### Layout → [`./layout/`](./layout/)

| Component | Description | File |
|-----------|-------------|------|
| [`AppShell`](./layout/app-shell.md) | Application shell with sidebar/header | app-shell.md |
| [`AspectRatio`](./layout/aspect-ratio.md) | Aspect ratio container | aspect-ratio.md |
| [`Center`](./layout/center.md) | Center content | center.md |
| [`Container`](./layout/container.md) | Max-width container | container.md |
| [`DashboardLayout`](./layout/dashboard-layout.md) | Dashboard layout | dashboard-layout.md |
| [`Footer`](./layout/footer.md) | Page footer | footer.md |
| [`PageHeader`](./layout/page-header.md) | Page header | page-header.md |
| [`ResponsiveGrid`](./layout/responsive-grid.md) | Responsive grid | responsive-grid.md |
| [`RightDrawer`](./layout/right-drawer.md) | Right-side drawer | right-drawer.md |
| [`SplitPane`](./layout/split-pane.md) | Resizable split view | split-pane.md |
| [`Stack`](./layout/stack.md) | Stack layout (HStack/VStack) | stack.md |
| [`StickyHeader`](./layout/sticky-header.md) | Sticky header | sticky-header.md |
| [`ThreeColumnLayout`](./layout/three-column-layout.md) | Three column layout | three-column-layout.md |
| [`TwoColumnLayout`](./layout/two-column-layout.md) | Two column layout | two-column-layout.md |

### Navigation → [`./navigation/`](./navigation/)

| Component | Description | File |
|-----------|-------------|------|
| [`BreadcrumbTrail`](./navigation/breadcrumb-trail.md) | Breadcrumb navigation | breadcrumb-trail.md |
| [`CommandPalette`](./navigation/command-palette.md) | Command/search palette | command-palette.md |
| [`MobileNav`](./navigation/mobile-nav.md) | Mobile navigation drawer | mobile-nav.md |
| [`Pagination`](./navigation/pagination.md) | Page navigation | pagination.md |
| [`SectionJumper`](./navigation/section-jumper.md) | Jump to section | section-jumper.md |
| [`TabsPanel`](./navigation/tabs-panel.md) | Tabbed content panel | tabs-panel.md |

### Kanban → [`./kanban/`](./kanban/)

| Component | Description | File |
|-----------|-------------|------|
| [`KanbanBoard`](./kanban/kanban-board.md) | Main board container | kanban-board.md |
| [`DraggableKanbanBoard`](./kanban/draggable-kanban-board.md) | Board with drag-and-drop | draggable-kanban-board.md |
| [`KanbanColumn`](./kanban/kanban-column.md) | Board column | kanban-column.md |
| [`DraggableColumn`](./kanban/draggable-column.md) | Draggable column | draggable-column.md |
| [`KanbanCard`](./kanban/kanban-card.md) | Card component | kanban-card.md |
| [`DraggableCard`](./kanban/draggable-card.md) | Draggable card | draggable-card.md |
| [`KanbanBoardProvider`](./kanban/kanban-board-provider.md) | State provider | kanban-board-provider.md |
| [`QuickAddCard`](./kanban/quick-add-card.md) | Quick add card input | quick-add-card.md |
| [`BoardToolbar`](./kanban/board-toolbar.md) | Board toolbar | board-toolbar.md |
| [`ColumnHeader`](./kanban/column-header.md) | Column header | column-header.md |

## Quick Search

| Search | Category | Directory |
|--------|----------|-----------|
| Timeline, Card, Table, Grid, Metric, Stat | Data Display | [`./data-display/`](./data-display/) |
| Form, Wizard, Search, Filter, Input | Data Entry | [`./data-entry/`](./data-entry/) |
| Loading, Empty, Toast, Dialog, Error | Feedback | [`./feedback/`](./feedback/) |
| Layout, Container, Grid, Shell, Header | Layout | [`./layout/`](./layout/) |
| Nav, Menu, Tabs, Breadcrumb, Pagination | Navigation | [`./navigation/`](./navigation/) |
| Kanban, Board, Column, Card, Drag | Kanban | [`./kanban/`](./kanban/) |

## Usage for AI

1. **Find the component** - Search the table above for the component name
2. **Check the category** - Note which category (Data Display, Data Entry, etc.)
3. **Read the docs** - Open the corresponding `.md` file in the category directory

Example: Looking for `FormBuilder` → Data Entry category → See [`./data-entry/form-builder.md`](./data-entry/form-builder.md)
