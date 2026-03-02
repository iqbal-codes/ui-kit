Here is the **general-purpose block inventory** (domain-agnostic):

---

## 1. Data Display

### Smart Blocks

| Block              | Description                                                                                                | Key Deps                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **SmartDataTable** | Full-featured table with URL-persisted filters, sorting, pagination, column visibility, and row selection. | `nuqs`, `@tanstack/react-table` |
| **KanbanBoard**    | Drag-drop board with URL state for column filters and swimlane view.                                       | `@dnd-kit`, `nuqs`              |
| **CalendarView**   | Resource scheduling calendar with event templates and conflict detection.                                  | `date-fns`, `nuqs`              |
| **InfiniteList**   | Virtualized infinite scroll with real-time updates and bulk action bar.                                    | `@tanstack/react-query`         |
| **PivotDataGrid**  | Pivot table for analytics with draggable fields and aggregation functions.                                 | `@tanstack/react-table`         |

### Domain Blocks

| Block                | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **MetricCard**       | KPI display with trend indicator, sparkline mini-chart, and comparison period. |
| **StatusGrid**       | Color-coded status overview with progress rings and counters.                  |
| **ActivityTimeline** | Vertical timeline showing activity history and status changes.                 |
| **ComparisonView**   | Side-by-side comparison for before/after or plan vs actual.                    |
| **StatTrend**        | Line chart card showing metrics over time with anomaly highlighting.           |
| **EntityCard**       | Rich data card with badges, progress bars, avatars, and metadata.              |
| **DataGrid**         | Responsive grid layout with configurable columns and auto-dense packing.       |
| **MasonryBoard**     | Pinterest-style layout for irregular height content.                           |

---

## 2. Data Entry

### Smart Blocks

| Block                 | Description                                                                      | Key Deps                           |
| --------------------- | -------------------------------------------------------------------------------- | ---------------------------------- |
| **AutoSaveForm**      | Form with debounced auto-save, dirty state tracking, and conflict resolution.    | `react-hook-form`, `zod`           |
| **FormWizard**        | Multi-step form with step validation, progress indicator, and draft persistence. | `react-hook-form`, `nuqs`          |
| **FilterBuilder**     | Visual query builder with AND/OR conditions and date ranges.                     | `nuqs`                             |
| **BulkEditor**        | Spreadsheet-like inline editing with validation and undo stack.                  | `@tanstack/react-table`, `zod`     |
| **DynamicFieldArray** | Repeatable field groups with add/remove animations.                              | `react-hook-form`, `framer-motion` |

### Domain Blocks

| Block              | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| **CodeScanner**    | Input field with camera integration for QR/barcode scanning.    |
| **SignaturePad**   | Canvas-based signature capture with redo/clear actions.         |
| **ImageUploader**  | Multi-image upload with preview, cropping, and EXIF extraction. |
| **DurationPicker** | Time duration selector with preset shortcuts.                   |
| **IssueReporter**  | Structured issue entry with severity and category selection.    |
| **TimeSlotPicker** | Visual time range selector with availability indicators.        |
| **FormSection**    | Collapsible form grouping with validation status indicator.     |
| **StickyActions**  | Bottom bar for form actions with unsaved changes warning.       |

---

## 3. Feedback

### Smart Blocks

| Block                  | Description                                                            | Key Deps                       |
| ---------------------- | ---------------------------------------------------------------------- | ------------------------------ |
| **OperationStatus**    | Global status indicator showing sync state and offline mode.           | `zustand`                      |
| **ProgressTracker**    | Multi-step process tracker for long operations with cancel capability. | -                              |
| **ConfirmationDialog** | Contextual confirmation with warning severity levels.                  | `@radix-ui/react-alert-dialog` |

### Domain Blocks

| Block                 | Description                                             |
| --------------------- | ------------------------------------------------------- |
| **LoadingOverlay**    | Full-screen or inline spinner with contextual messages. |
| **SkeletonGenerator** | Automatic skeleton screens matching data shapes.        |
| **EmptyState**        | Contextual empty illustrations with CTA buttons.        |
| **ErrorFallback**     | Error boundary UI with retry action and error ID.       |
| **ToastManager**      | Notification stack with persistence and action buttons. |
| **ConnectionStatus**  | Badge showing WebSocket/API connection status.          |

---

## 4. Layout

### Layout Blocks

| Block                    | Description                                                 | Slots                                           |
| ------------------------ | ----------------------------------------------------------- | ----------------------------------------------- |
| **DashboardShell**       | Classic admin layout with collapsible sidebar and FAB area. | `sidebar`, `header`, `content`, `fab`, `modals` |
| **SplitPane**            | Resizable two-pane layout with draggable divider.           | `primary`, `secondary`                          |
| **MasterDetailLayout**   | CRUD-optimized layout with list and detail drawer.          | `filters`, `list`, `detail`, `actions`          |
| **OnboardingLayout**     | Centered layout for wizards with progress stepper.          | `content`, `navigation`, `progress`             |
| **PrintLayout**          | Optimized print layout with page break controls.            | `header`, `body`, `footer`                      |
| **TouchOptimizedLayout** | Thumb-zone layout for tablets with bottom sheets.           | `main`, `bottomSheet`, `sideDrawer`             |
| **AuthLayout**           | Split screen with branding and form areas.                  | `form`, `branding`                              |
| **HighContrastLayout**   | Accessibility-first layout for challenging environments.    | `main`, `alerts`                                |

### Composition Helpers

| Block                  | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| **StickyHeader**       | Header that pins on scroll with breadcrumb truncation. |
| **CollapsibleSidebar** | Sidebar with mini-mode and hover-expand.               |
| **FloatingToolbar**    | Contextual toolbar for quick actions on selection.     |
| **RightDrawer**        | Slide-out panel for secondary actions.                 |

---

## 5. Navigation

### Smart Blocks

| Block              | Description                                                | Key Deps          |
| ------------------ | ---------------------------------------------------------- | ----------------- |
| **CommandPalette** | Global search with keyboard shortcuts and action commands. | `cmdk`            |
| **FilterableTabs** | Tabs with search capability for many categories.           | `nuqs`            |
| **StepperWizard**  | Horizontal/vertical stepper with validation gates.         | `react-hook-form` |
| **ContextualNav**  | Navigation that changes based on current resource context. | Context API       |

### Domain Blocks

| Block                   | Description                                        |
| ----------------------- | -------------------------------------------------- |
| **SequentialNavigator** | Previous/Next navigation with progress indicators. |
| **BreadcrumbTrail**     | Dynamic breadcrumbs with history dropdown.         |
| **SectionJumper**       | In-page anchor navigation with scroll spy.         |
| **MobileNav**           | Bottom tab bar with badge counts.                  |
| **ContextMenu**         | Right-click menu with resource-specific actions.   |

---

## Cross-Category Solutions

These combine multiple categories for common patterns:

| Block               | Category Mix              | Purpose                                                |
| ------------------- | ------------------------- | ------------------------------------------------------ |
| **ResourceMonitor** | Layout + Data Display     | Real-time resource status with metrics and alerts      |
| **InspectionForm**  | Data Entry + Feedback     | Step-by-step checklist with pass/fail and media upload |
| **TaskCard**        | Data Display + Feedback   | Task ticket with priority, countdown, and assignment   |
| **ItemLocator**     | Navigation + Data Display | Map-based item location and navigation                 |
