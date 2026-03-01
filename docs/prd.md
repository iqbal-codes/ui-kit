# AI-Native Design System (ANDS) - Component Requirements Document

**Strategy**: shadcn/ui Atoms + Custom Compositions  
**Architecture**: Atomic Design (Tokens → Molecules → Organisms → Templates → Pages)  
**Version**: 3.0 - Component Inventory

---

## 1. Design Tokens Requirements

### 1.1 Color Tokens

| Token Category      | Requirements                   | Variants                                                                                       |
| ------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Semantic Colors** | Map to CSS variables           | Background, Foreground, Primary, Secondary, Muted, Accent, Destructive, Success, Warning, Info |
| **Brand Scale**     | 50-900 scale for primary brand | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900                                                |
| **State Colors**    | Interactive states             | Hover, Active, Disabled, Focus, Error, Valid                                                   |
| **Elevation**       | Surface hierarchy              | Base, Elevated, Overlay, Modal, Popover                                                        |
| **Border**          | Divider colors                 | Default, Strong, Interactive, Error                                                            |

### 1.2 Typography Tokens

| Token              | Requirements        | Specifications                                          |
| ------------------ | ------------------- | ------------------------------------------------------- |
| **Font Families**  | Sans, Mono, Display | CSS variable references                                 |
| **Type Scale**     | 12 levels           | 2xs, xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl |
| **Font Weights**   | 4 weights           | Regular (400), Medium (500), Semibold (600), Bold (700) |
| **Line Heights**   | Per size            | Tight (1.25), Normal (1.5), Relaxed (1.75)              |
| **Letter Spacing** | 4 levels            | Tighter, Tight, Normal, Wide, Wider                     |

### 1.3 Spacing & Layout Tokens

| Token Category    | Requirements     | Values                                                                                |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------- |
| **Spacing Scale** | 4px base unit    | 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96               |
| **Layout Sizes**  | Fixed dimensions | Header height, Sidebar width, Max container widths (sm, md, lg, xl, 2xl)              |
| **Border Radius** | 5 levels         | None, sm, md, lg, xl, full                                                            |
| **Z-Index Scale** | Layer management | Hide, Base, Docked, Dropdown, Sticky, Banner, Overlay, Modal, Popover, Toast, Tooltip |

### 1.4 Animation Tokens

| Token           | Requirements      | Specifications                                                            |
| --------------- | ----------------- | ------------------------------------------------------------------------- |
| **Durations**   | Timing            | Instant (0ms), Fast (150ms), Normal (250ms), Slow (350ms), Slower (500ms) |
| **Easing**      | Curves            | Linear, Ease-in, Ease-out, Ease-in-out, Spring (bounce)                   |
| **Transitions** | Property defaults | Colors, Transform, Opacity, All                                           |

---

## 2. Molecules (Component Specifications)

### 2.1 Input Compositions

#### FormField

**Purpose**: Wraps shadcn Input with Label, Helper Text, and Error handling  
**Dependencies**: Label (shadcn), Input (shadcn), Text (tokens)  
**Requirements**:

- Vertical stack layout (label top, input middle, message bottom)
- Error state styling (red border, red text)
- Helper text support (gray, below input)
- Required indicator (asterisk)
- Disabled state handling
- HTMLFor linkage for accessibility
- **Variants**: Default, Error, Disabled, Required
- **Props**: label, helperText, error, required, disabled, name, type, placeholder, value, onChange

#### SearchInput

**Purpose**: Specialized input with search icon and clear button  
**Dependencies**: Input (shadcn), Button (shadcn), Search/X icons (lucide)  
**Requirements**:

- Search icon positioned left (absolute)
- Clear button appears when value present (right positioned)
- Debounced onChange support (configurable ms)
- Loading state (spinner instead of search icon)
- Keyboard support (Enter triggers onSearch)
- Auto-focus capability
- **Variants**: Default, Loading, Disabled
- **Props**: value, onChange, onSearch, placeholder, loading, debounceMs, autoFocus, className

#### InputGroup

**Purpose**: Input with attached buttons or text (e.g., currency input)  
**Dependencies**: Input (shadcn), Button (shadcn) or Text  
**Requirements**:

- Left and/or right addons
- Seamless border radius handling (middle flat, outer rounded)
- Button addons support (primary action attached)
- Text addons support (units, currency symbols)
- **Variants**: WithLeftAddon, WithRightAddon, WithBothAddons, ButtonAddon
- **Props**: leftAddon, rightAddon, inputProps, buttonProps

#### PasswordInput

**Purpose**: Input with visibility toggle  
**Dependencies**: Input (shadcn), Button (shadcn), Eye/EyeOff icons  
**Requirements**:

- Toggle button right-aligned
- Type switching (password ↔ text)
- ARIA labels for toggle action
- Optional strength indicator integration slot
- **Variants**: Default, WithStrengthIndicator
- **Props**: showStrength, strengthValue, ...inputProps

### 2.2 Display Compositions

#### StatCard

**Purpose**: Metric display with trend indicator  
**Dependencies**: Card (shadcn), Badge (shadcn), Text (tokens)  
**Requirements**:

- Title (small, muted)
- Large value display (bold, prominent)
- Optional trend (up/down/neutral with percentage)
- Optional icon (top-right)
- Optional description (bottom)
- Loading skeleton state
- **Variants**: Default, WithTrend, WithIcon, Loading
- **Props**: title, value, trend (value, direction, label), icon, description, loading, onClick

#### InfoCard

**Purpose**: Content container with icon, title, and description  
**Dependencies**: Card (shadcn), Icon slot  
**Requirements**:

- Icon area (left or top)
- Title (semibold)
- Description (muted, smaller)
- Action button slot (bottom)
- Border or filled background variant
- **Variants**: Horizontal (icon left), Vertical (icon top), Bordered, Filled
- **Props**: icon, title, description, action, variant, className

#### EmptyState

**Purpose**: Zero-state display for lists/pages  
**Dependencies**: Card (shadcn) or div, Icon (lucide), Button (shadcn)  
**Requirements**:

- Icon (large, muted)
- Title (centered)
- Description (centered, muted)
- Primary action button (optional)
- Secondary action link (optional)
- **Variants**: Small (inline), Medium (card), Large (page)
- **Props**: icon, title, description, primaryAction, secondaryAction, size

#### AlertMessage

**Purpose**: Contextual message banner (success, error, warning, info)  
**Dependencies**: Alert (shadcn), Icon (lucide)  
**Requirements**:

- Four semantic variants (success, warning, error, info)
- Icon mapping per variant
- Dismissible option (X button)
- Title + description support
- Inline or banner layout
- **Variants**: Success, Warning, Error, Info, Dismissible, Banner
- **Props**: variant, title, description, dismissible, onDismiss, action

### 2.3 Action Compositions

#### IconButton

**Purpose**: Button with only icon and tooltip  
**Dependencies**: Button (shadcn), Tooltip (shadcn), Icon (lucide)  
**Requirements**:

- Square aspect ratio
- Tooltip on hover (label prop)
- All button variants support (primary, ghost, outline)
- Size variants (sm, md, lg)
- Loading state (spinner replaces icon)
- **Variants**: Primary, Secondary, Ghost, Outline, Destructive (each in sm, md, lg)
- **Props**: icon, label (for tooltip), variant, size, loading, onClick, disabled

#### CopyButton

**Purpose**: Click to copy text with feedback  
**Dependencies**: Button (shadcn) or IconButton, Clipboard icons  
**Requirements**:

- Copy icon default, Check icon on success
- Auto-reset after 2 seconds
- Tooltip feedback ("Copy", "Copied!")
- Text to copy prop
- **Variants**: Default, IconOnly, WithText
- **Props**: textToCopy, label, resetDelay, onCopy, variant

#### ToggleButton

**Purpose**: Stateful on/off button  
**Dependencies**: Button (shadcn) or Toggle (shadcn)  
**Requirements**:

- Pressed state styling
- Icon swap on toggle
- ARIA-pressed attribute
- **Variants**: Default, WithIcon, WithLabel
- **Props**: pressed, onToggle, iconOn, iconOff, labelOn, labelOff

#### ActionMenu

**Purpose**: Dropdown menu for row/item actions  
**Dependencies**: DropdownMenu (shadcn), Button (shadcn), MoreHorizontal icon  
**Requirements**:

- Trigger button (ellipsis/kebab)
- Menu items with icons
- Separator support
- Destructive action styling (red text)
- Disabled items support
- **Variants**: Default, WithIcons, WithSeparators
- **Props**: actions (array of label, icon, onClick, variant, disabled, separator)

### 2.4 Feedback Compositions

#### SkeletonCard

**Purpose**: Loading placeholder for card content  
**Dependencies**: Skeleton (shadcn), Card (shadcn)  
**Requirements**:

- Title skeleton (shorter width)
- Content lines (multiple, varying widths)
- Optional image/avatar skeleton
- Animated pulse effect
- **Variants**: TextOnly, WithAvatar, WithImage, Stats
- **Props**: lines, showAvatar, showImage, className

#### LoadingOverlay

**Purpose**: Full-container loading state  
**Dependencies**: Skeleton or Spinner, div  
**Requirements**:

- Absolute positioning covering parent
- Backdrop blur or opacity
- Centered spinner or progress
- Text label support ("Loading...")
- Prevent interaction with children (pointer-events)
- **Variants**: Spinner, Progress, Skeleton
- **Props**: visible, text, type (spinner/progress/skeleton), blur

#### ProgressBar

**Purpose**: Visual progress indicator  
**Dependencies**: Progress (shadcn)  
**Requirements**:

- Percentage display (0-100)
- Label support (above or inline)
- Success state at 100%
- Error state support
- Indeterminate state (animated)
- **Variants**: Default, WithLabel, Success, Error, Indeterminate
- **Props**: value, max, label, showPercentage, variant, size

#### ToastNotification

**Purpose**: Brief notification popup  
**Dependencies**: Sonner (shadcn) or Toast (shadcn)  
**Requirements**:

- Four variants (success, error, warning, info)
- Icon per variant
- Title + description
- Action button support
- Auto-dismiss timer (configurable)
- Manual close button
- Positioning (top-right, bottom-center, etc.)
- **Variants**: Success, Error, Warning, Info, WithAction, Persistent
- **Props**: title, description, variant, duration, action, position, onDismiss

### 2.5 Selection Compositions

#### CheckboxField

**Purpose**: Checkbox with label and helper  
**Dependencies**: Checkbox (shadcn), Label (shadcn)  
**Requirements**:

- Clickable label (htmlFor)
- Helper text below (muted)
- Error state support
- Indeterminate state support
- **Variants**: Default, WithHelper, Error, Indeterminate
- **Props**: label, helperText, error, checked, indeterminate, onChange

#### SwitchField

**Purpose**: Toggle switch with label  
**Dependencies**: Switch (shadcn), Label (shadcn)  
**Requirements**:

- Label right or left of switch
- Checked/Unchecked labels (optional)
- Disabled state
- Loading state (disabled with spinner)
- **Variants**: Default, WithLabels, Disabled, Loading
- **Props**: label, checkedLabel, uncheckedLabel, checked, onChange, disabled, loading

#### SelectField

**Purpose**: Select dropdown with label and error  
**Dependencies**: Select (shadcn), Label (shadcn)  
**Requirements**:

- Label above select
- Error message below
- Placeholder support
- Disabled state
- Grouped options support
- Searchable variant (with input)
- **Variants**: Default, Searchable, Grouped, Error, Disabled
- **Props**: label, placeholder, options, value, onChange, error, disabled, searchable, groups

#### DateRangePicker

**Purpose**: Date range selection  
**Dependencies**: Calendar (shadcn), Popover (shadcn), Button (shadcn)  
**Requirements**:

- Preset ranges (Today, Last 7 days, Last 30 days, etc.)
- Custom range selection (two calendars)
- Input display (formatted range)
- Clear selection button
- Min/max date constraints
- **Variants**: Default, WithPresets, SingleMonth, TwoMonths
- **Props**: startDate, endDate, onChange, presets, minDate, maxDate, format

### 2.6 Navigation Compositions

#### BreadcrumbNav

**Purpose**: Hierarchical navigation trail  
**Dependencies**: Breadcrumb (shadcn), Link (next)  
**Requirements**:

- Dynamic items array
- Home icon first item
- Separator between items (chevron or slash)
- Current page (non-clickable, bold)
- Truncation for long paths (>5 items)
- **Variants**: Default, WithHome, Collapsed (ellipsis for middle items)
- **Props**: items (label, href, icon), separator, maxItems

#### TabsList

**Purpose**: Content section tabs  
**Dependencies**: Tabs (shadcn)  
**Requirements**:

- Horizontal scroll on mobile
- Badge counts on tabs
- Icon + label support
- Disabled tabs
- **Variants**: Default, Pills, Underline, WithBadges, WithIcons
- **Props**: tabs (value, label, icon, badge, disabled), defaultValue, onChange

#### Pagination

**Purpose**: Page navigation for lists  
**Dependencies**: Button (shadcn), Chevron icons  
**Requirements**:

- Previous/Next buttons
- Page numbers (with truncation ...)
- First/Last buttons (optional)
- Items per page selector
- Showing X of Y text
- **Variants**: Simple (prev/next), Numbered, Compact, WithPageSize
- **Props**: currentPage, totalPages, totalItems, pageSize, onPageChange, onPageSizeChange, showFirstLast

#### Stepper

**Purpose**: Multi-step process indicator  
**Dependencies**: Custom (divs), icons  
**Requirements**:

- Horizontal or vertical layout
- Step states (pending, current, completed, error)
- Connector lines between steps
- Step labels and descriptions
- Clickable completed steps (optional)
- **Variants**: Horizontal, Vertical, Compact, WithContent
- **Props**: steps (label, description, state), currentStep, orientation, onStepClick, clickableCompleted

---

## 3. Organisms (Complex Component Specifications)

### 3.1 Data Display Organisms

#### DataTable

**Purpose**: Full-featured data grid with sorting, filtering, pagination  
**Dependencies**: Table (shadcn), Input (shadcn), Button (shadcn), Badge (shadcn), DropdownMenu (shadcn), SearchInput (molecule), DataTableRowActions (molecule), Skeleton (shadcn)  
**Requirements**:

- Column definitions (key, header, cell renderer, width, sortable)
- Sortable columns (click header, indicator arrow)
- Global search/filter
- Column-specific filters (dropdown inputs)
- Pagination (client or server-side)
- Row selection (checkbox, batch actions)
- Row actions (edit, delete, view - dropdown)
- Empty state handling
- Loading state (skeleton rows)
- Sticky header option
- Resizable columns (optional)
- Expandable rows (accordion detail view)
- **Variants**: Default, Sortable, Filterable, Selectable, Expandable, Resizable
- **Props**:
  - columns (array: accessorKey, header, cell, width, sortable, filterable)
  - data (array of objects)
  - loading (boolean)
  - pagination (object: pageSize, currentPage, total, onChange)
  - selectable (boolean, onSelectionChange)
  - rowActions (array or function)
  - onRowClick (function)
  - emptyMessage (string)
  - stickyHeader (boolean)

#### DataGrid (Card Layout)

**Purpose**: Card-based data display alternative to table  
**Dependencies**: Card (shadcn), Grid layout, Badge (shadcn), Button (shadcn)  
**Requirements**:

- Grid layout (responsive: 1 col mobile → 4 col desktop)
- Card per item with image/icon slot
- Title, subtitle, metadata fields
- Action buttons per card
- Selection mode (checkbox overlay)
- Empty state
- Loading skeleton cards
- **Variants**: Default, Selectable, WithImage, Compact
- **Props**: items, renderItem, columns, gap, selectable, onSelectionChange, loading, emptyState

#### TreeView

**Purpose**: Hierarchical data display (folders, categories)  
**Dependencies**: Collapsible (shadcn), Chevron icons, Checkbox (shadcn)  
**Requirements**:

- Expand/collapse nodes
- Indentation levels
- Selection (single or multi)
- Icons per node type (folder, file, etc.)
- Search/filter within tree
- Drag and drop reordering (optional)
- Lazy loading children (async)
- **Variants**: Default, Checkable, Draggable, Async
- **Props**: data (tree structure), onSelect, onToggle, selectable, draggable, loadChildren (async), selectedKeys, expandedKeys

#### Calendar/Scheduler

**Purpose**: Date-based event display  
**Dependencies**: Calendar (shadcn), Popover (shadcn), Badge (shadcn)  
**Requirements**:

- Month/Week/Day views
- Event dots/bars on dates
- Event list on date selection
- Navigation (prev/next month)
- Today button
- Event creation slot (click date)
- **Variants**: MonthView, WeekView, DayView, Mini (sidebar size)
- **Props**: events (date, title, color, data), view, onDateClick, onEventClick, onRangeChange, eventRenderer

### 3.2 Form Organisms

#### FormBuilder

**Purpose**: Dynamic form generation from schema  
**Dependencies**: FormField (molecule), SelectField (molecule), SwitchField (molecule), DatePicker (shadcn), Button (shadcn), zod  
**Requirements**:

- Schema-driven fields (type, validation, label, options)
- Field types: text, email, number, textarea, select, switch, date, checkbox, radio, password
- Validation (Zod schema integration)
- Error display per field
- Section grouping (fieldsets)
- Conditional fields (show if X)
- Array fields (add/remove rows)
- Submit/Reset buttons
- Loading state
- **Variants**: Default, Inline, Wizard (stepper), Sections
- **Props**: fields (array), schema (zod), onSubmit, defaultValues, layout (vertical/inline), loading, submitLabel

#### FilterPanel

**Purpose**: Advanced filtering sidebar for data  
**Dependencies**: Accordion (shadcn), Input (shadcn), Select (shadcn), Checkbox (shadcn), DatePicker (shadcn), Button (shadcn), Badge (shadcn)  
**Requirements**:

- Collapsible filter sections (accordion)
- Multiple filter types (text, select, multi-select, date range, boolean)
- Active filter chips (removable)
- Clear all filters button
- Apply/Cancel actions
- Filter count badge
- Mobile responsive (drawer on mobile)
- **Variants**: Sidebar, Drawer, HorizontalBar, Compact
- **Props**: filters (config), activeFilters, onChange, onClear, onApply, position

#### SearchFilterBar

**Purpose**: Top bar with search and quick filters  
**Dependencies**: SearchInput (molecule), Select (shadcn), Button (shadcn), Badge (shadcn), ToggleGroup (shadcn)  
**Requirements**:

- Global search input (debounced)
- Quick filter buttons/toggles (status, type)
- Sort dropdown
- View toggle (list/grid)
- Filter button (opens FilterPanel)
- Result count display
- **Variants**: Default, Minimal, WithSort, WithViewToggle
- **Props**: searchPlaceholder, onSearch, filters (quick), sortOptions, viewMode, onViewChange, resultCount, onFilterOpen

#### MultiStepForm

**Purpose**: Wizard-style form flow  
**Dependencies**: Stepper (molecule), FormBuilder (organism), Button (shadcn), Card (shadcn)  
**Requirements**:

- Step indicator (progress)
- Step validation (prevent next if invalid)
- Navigation (next, previous, skip)
- Summary review step (final)
- Async step submission
- Save draft functionality (localStorage)
- **Variants**: HorizontalSteps, VerticalSteps, Mobile (bottom nav)
- **Props**: steps (title, fields, validation), onComplete, onStepChange, persistKey (for draft), allowSkip

### 3.3 Navigation Organisms

#### NavigationShell

**Purpose**: Application layout with sidebar and header  
**Dependencies**: Card (shadcn), Avatar (shadcn), Button (shadcn), Collapsible (shadcn), Tooltip (shadcn), DropdownMenu (shadcn), ScrollArea (shadcn)  
**Requirements**:

- Collapsible sidebar (icons only mode)
- Navigation items (icon, label, badge, active state)
- User profile section (avatar, name, email, dropdown)
- Header bar (mobile menu toggle, breadcrumbs slot, actions slot)
- Mobile responsive (drawer for sidebar)
- Keyboard navigation support
- **Variants**: Default, Mini (icons only), HorizontalNav, MobileDrawer
- **Props**: navigation (array), user (name, email, avatar, actions), headerActions, collapsible, defaultCollapsed, logo

#### CommandPalette

**Purpose**: Global search and command interface  
**Dependencies**: Command (shadcn), Dialog (shadcn), Kbd (shadcn)  
**Requirements**:

- Modal overlay (CMD+K trigger)
- Search input (fuzzy search)
- Grouped results (Pages, Actions, Recent)
- Keyboard navigation (up/down arrows)
- Icons for items
- Shortcut keys display
- Empty state
- Recent searches
- **Variants**: Default, WithCategories, WithPreview, Inline (navbar embedded)
- **Props**: commands (title, icon, shortcut, action, category), recentItems, placeholder, hotkey

#### BreadcrumbResolver

**Purpose**: Automatic breadcrumb generation from route  
**Dependencies**: BreadcrumbNav (molecule)  
**Requirements**:

- Route parsing to breadcrumb items
- Dynamic parameters substitution (e.g., :id → Entity Name)
- Home root link
- Current page (non-clickable)
- Route configuration object (path, label, parent)
- **Variants**: Default, WithBackButton, Collapsed
- **Props**: routeConfig, currentPath, paramResolver (function to resolve IDs to names)

### 3.4 Feedback Organisms

#### NotificationCenter

**Purpose**: Centralized notification management UI  
**Dependencies**: Popover (shadcn), Card (shadcn), Badge (shadcn), Button (shadcn), ScrollArea (shadcn), Tabs (shadcn)  
**Requirements**:

- Bell icon with unread count badge
- Popover list of notifications
- Categories/Filter tabs (All, Unread, Mentions)
- Notification items (icon, title, message, timestamp, read status)
- Mark all as read
- Individual dismiss
- Empty state
- Infinite scroll or pagination
- Click notification to navigate/mark read
- **Variants**: Popover, Drawer (mobile), FullPage
- **Props**: notifications (array), unreadCount, onMarkRead, onDismiss, onMarkAllRead, onLoadMore

#### GlobalAlert

**Purpose**: Application-wide alert banner  
**Dependencies**: Alert (shadcn), Button (shadcn)  
**Requirements**:

- Full-width banner (top of page)
- Severity levels (info, warning, error, success)
- Dismissible (with persistence in localStorage)
- Icon + Message + Action button
- Maintenance mode styling
- Sticky or static positioning
- **Variants**: Sticky, Dismissible, WithAction, Maintenance
- **Props**: message, variant, dismissible, onDismiss, action (label, onClick), position (top/bottom)

#### ProgressTracker

**Purpose**: Multi-step process progress display  
**Dependencies**: Stepper (molecule), Card (shadcn)  
**Requirements**:

- Visual timeline of steps
- Current step highlighting
- Completed steps checkmarks
- Future steps (muted)
- Step descriptions/tooltips
- Estimated time remaining (optional)
- **Variants**: Horizontal, Vertical, Compact
- **Props**: steps (label, status, description), currentStep, orientation, showEstimation

### 3.5 Media Organisms

#### ImageGallery

**Purpose**: Grid of images with lightbox  
**Dependencies**: Dialog (shadcn), Card (shadcn), Button (shadcn), Chevron icons  
**Requirements**:

- Grid layout (configurable columns)
- Thumbnail optimization
- Lightbox modal (click to expand)
- Navigation in lightbox (prev/next)
- Zoom functionality
- Download button
- Delete action (if editable)
- Empty state
- **Variants**: Grid, Masonry, Carousel, Single
- **Props**: images (src, alt, caption), columns, editable, onDelete, onDownload, aspectRatio

#### FileUploader

**Purpose**: Drag-drop file upload with progress  
**Dependencies**: Card (shadcn), Progress (shadcn), Button (shadcn), X icon  
**Requirements**:

- Dropzone area (drag overlay)
- File type validation
- Multiple file support
- Individual file progress bars
- Thumbnail preview (images) or icon (documents)
- File size display
- Remove/cancel upload per file
- Success/error states per file
- Max file size warning
- **Variants**: Single, Multiple, AvatarUpload (circular crop), Compact (inline)
- **Props**: accept (file types), multiple, maxSize, maxFiles, onUpload, value, onChange, preview

#### MediaPlayer

**Purpose**: Audio/video player controls  
**Dependencies**: Slider (shadcn), Button (shadcn), Play/Pause/Volume icons  
**Requirements**:

- Play/Pause toggle
- Progress scrubber
- Time display (current/total)
- Volume control
- Fullscreen toggle (video)
- Download button
- Playback speed selector
- **Variants**: Audio, Video, Minimal, Compact
- **Props**: src, type (audio/video), autoPlay, controls, poster (for video)

### 3.6 Communication Organisms

#### CommentThread

**Purpose**: Nested comment display and input  
**Dependencies**: Card (shadcn), Avatar (shadcn), Button (shadcn), Textarea (shadcn), Collapsible (shadcn)  
**Requirements**:

- Threaded/nested replies
- Author avatar + name + timestamp
- Comment text (markdown support optional)
- Reply button (opens input)
- Like/upvote button
- Edit/Delete actions (owner only)
- Collapse long threads
- Real-time indicator (user typing)
- **Variants**: Threaded, Flat, Minimal, Review (with rating)
- **Props**: comments (nested array), currentUser, onReply, onEdit, onDelete, onLike, maxDepth

#### ChatInterface

**Purpose**: Real-time messaging UI  
**Dependencies**: ScrollArea (shadcn), Avatar (shadcn), Input (shadcn), Button (shadcn), Card (shadcn)  
**Requirements**:

- Message bubbles (left/right alignment)
- Timestamp grouping (Today, Yesterday)
- User avatar + name
- Message status (sent, delivered, read)
- Typing indicator
- File attachment preview
- Scroll to bottom button (new messages)
- Auto-scroll on new message
- **Variants**: Default, Compact, Sidebar, FullPage
- **Props**: messages (text, sender, timestamp, status), currentUser, onSend, typingUsers, onLoadMore

#### ActivityFeed

**Purpose**: Timeline of user/system activities  
**Dependencies**: Card (shadcn), Avatar (shadcn), Badge (shadcn), Separator (shadcn)  
**Requirements**:

- Chronological list
- Activity icon per type (created, updated, deleted, commented)
- Actor name + action + target
- Timestamp (relative: "2 hours ago")
- Grouping by date
- Filter by activity type
- Load more pagination
- **Variants**: Default, Compact, GroupedByDate, Filterable
- **Props**: activities (type, actor, target, timestamp, metadata), onLoadMore, filterTypes

---

## 4. Templates (Page Layout Specifications)

### 4.1 DashboardTemplate

**Purpose**: Standard admin dashboard shell  
**Dependencies**: NavigationShell (organism), StatCard (molecule), Grid layout  
**Requirements**:

- Fixed sidebar navigation
- Header bar with title + actions
- Stats row (1-4 cards, responsive grid)
- Main content area (flexible)
- Breadcrumbs integration
- Mobile responsive (collapsible sidebar)
- **Slots**: HeaderActions, Stats, Content, SidebarFooter
- **Variants**: Default, Analytics (larger stats), Minimal (no stats)
- **Props**: title, description, stats (array), navigation, user, headerActions, children

### 4.2 ListViewTemplate

**Purpose**: CRUD list page with search/filter/table  
**Dependencies**: DataTable (organism) or DataGrid (organism), SearchFilterBar (molecule), Button (shadcn)  
**Requirements**:

- Page header with title + primary action button
- SearchFilterBar (sticky optional)
- DataTable or DataGrid (toggleable)
- Pagination footer
- Bulk actions bar (appears on selection)
- Empty state handling
- Loading state (skeleton)
- **Slots**: HeaderActions, Filters, Table, EmptyState
- **Variants**: TableView, GridView, SplitView (preview pane)
- **Props**: title, description, data, columns, filters, viewMode, onViewChange, primaryAction, bulkActions

### 4.3 DetailViewTemplate

**Purpose**: Single entity display page  
**Dependencies**: Tabs (shadcn), Card (shadcn), Button (shadcn), BreadcrumbNav (molecule)  
**Requirements**:

- Back navigation
- Title + subtitle + status badge
- Action buttons (Edit, Delete, Share)
- Tabbed content sections
- Metadata sidebar (right side on desktop, below on mobile)
- Loading state (skeleton)
- **Slots**: HeaderActions, Sidebar, Tabs, Footer
- **Variants**: Default, SideBySide (no tabs), Minimal, Wizard (stepper)
- **Props**: title, subtitle, status, tabs (label, content), sidebarContent, backHref, onEdit, actions

### 4.4 FormTemplate

**Purpose**: Create/Edit entity page  
**Dependencies**: FormBuilder (organism), Card (shadcn), Button (shadcn), BreadcrumbNav (molecule)  
**Requirements**:

- Page header with title (Create vs Edit context)
- Cancel/Back button
- Form sections (grouped fields)
- Sticky footer with Save/Cancel buttons
- Auto-save indicator (optional)
- Unsaved changes warning (dialog)
- Validation summary (top)
- **Slots**: Header, Form, Footer, SidebarHelp
- **Variants**: SingleColumn, TwoColumn (form + preview), WizardSteps
- **Props**: title, schema, defaultValues, onSubmit, onCancel, loading, sections

### 4.5 SplitViewTemplate

**Purpose**: Master-detail layout (email client style)  
**Dependencies**: Resizable (shadcn), DataTable (organism) or List, Card (shadcn)  
**Requirements**:

- Resizable panes (left list, right detail)
- List selection highlights detail
- Mobile: List view ↔ Detail view navigation
- Collapsible sidebar
- Sync scroll position
- **Slots**: List, Detail, EmptyDetail
- **Variants**: FixedSplit, Resizable, CollapsibleList
- **Props**: items, selectedId, onSelect, renderDetail, renderItem

### 4.6 AuthTemplate

**Purpose**: Login/Register/Forgot password pages  
**Dependencies**: Card (shadcn), Tabs (shadcn), Logo component  
**Requirements**:

- Centered card layout
- Logo + Title + Description
- Social login buttons (Google, GitHub, etc.)
- Divider ("or continue with email")
- Form area
- Footer links (privacy, terms)
- Background pattern or image option
- **Slots**: Header, Form, SocialLogins, Footer
- **Variants**: Simple, SplitScreen (image side), CoverImage
- **Props**: mode (login/register/forgot), onSubmit, socialProviders, errorMessage

### 4.7 SettingsTemplate

**Purpose**: Application settings page  
**Dependencies**: NavigationShell (organism) or Tabs, FormBuilder (organism), Card (shadcn)  
**Requirements**:

- Settings categories sidebar (vertical tabs)
- Section cards (grouped settings)
- Save bar (appears on change, sticky bottom)
- Reset to defaults option
- Search settings (filter sidebar)
- Mobile: Accordion sections
- **Slots**: Sidebar, Content, SaveBar
- **Variants**: SidebarNav, HorizontalTabs, SinglePage
- **Props**: categories (label, icon, fields), onSave, onReset, hasChanges

### 4.8 EmptyStateTemplate

**Purpose**: Full-page empty states (404, No access, Coming soon)  
**Dependencies**: Card (shadcn), Button (shadcn), Illustration slot  
**Requirements**:

- Large illustration/icon (centered)
- Title + Description
- Primary action button
- Secondary link
- Decorative background (optional)
- **Slots**: Illustration, Content, Actions
- **Variants**: 404NotFound, 403Forbidden, EmptyWorkspace, Maintenance, ComingSoon
- **Props**: type, title, description, action, secondaryAction

### 4.9 OnboardingTemplate

**Purpose**: New user onboarding flow  
**Dependencies**: Stepper (organism), Card (shadcn), Button (shadcn)  
**Requirements**:

- Stepper progress (horizontal top)
- Step content (forms/info)
- Skip option (optional steps)
- Progress saving (return later)
- Completion celebration
- **Slots**: Steps, Navigation, Progress
- **Variants**: Linear, Branching (different paths), Checklist
- **Props**: steps (content, optional), onComplete, onSkip, allowSkip, currentStep

---

## 5. Page Specifications (Route-Level)

### 5.1 Dashboard Pages

**DashboardHome**

- Stats overview (revenue, users, activity)
- Recent activity feed
- Quick action buttons
- Charts/analytics widgets

**AnalyticsDashboard**

- Date range selector
- Multiple chart types (line, bar, pie)
- Data table below charts
- Export functionality
- Real-time updates (optional)

### 5.2 Entity Management Pages

**UserListPage**

- DataTable with user columns (name, email, role, status, created)
- Role filter
- Status filter (active/inactive)
- Invite user button (modal)
- Bulk actions (activate/deactivate/delete)

**UserDetailPage**

- Profile header (avatar, name, email, role)
- Tabs: Overview, Activity, Settings, Permissions
- Edit profile form
- Reset password action
- Audit log

**ProductListPage**

- Grid view (cards with images)
- Category filter sidebar
- Search by name/SKU
- Stock status badges
- Bulk edit categories
- Export CSV

**ProductDetailPage**

- Image gallery
- Variant selector (size/color)
- Pricing history
- Inventory management
- Related products

### 5.3 Content Pages

**ContentListPage**

- Draft/Published tabs
- Content type filter (article, page, media)
- Author filter
- Last modified sort
- Quick edit (inline)
- Preview modal

**ContentEditorPage**

- Rich text editor integration
- SEO metadata sidebar
- Publish schedule
- Version history
- Auto-save status
- Preview toggle (desktop/mobile)

### 5.4 System Pages

**SettingsGeneralPage**

- Site name/logo upload
- Contact information
- Timezone/locale
- Maintenance mode toggle

**SettingsUsersPage**

- User management table
- Role management (create/edit roles)
- Permissions matrix
- Invite settings

**SettingsIntegrationsPage**

- Connected services list (cards)
- Connect/Disconnect buttons
- API keys management
- Webhook configuration

**AuditLogPage**

- Activity timeline
- Actor filter
- Action type filter
- Date range filter
- Export logs

### 5.5 User Account Pages

**ProfilePage**

- Avatar upload
- Personal information form
- Change password
- Two-factor auth setup
- Session management (active devices)

**NotificationsSettingsPage**

- Email preferences toggles
- Push notification settings
- Notification history
- Digest frequency

### 5.6 Communication Pages

**InboxPage**

- Split view (list + message)
- Compose button (modal)
- Archive/Delete actions
- Star/Favorite
- Search messages

**TeamChatPage**

- Channel list sidebar
- Message thread
- Member list
- File sharing
- Thread replies

---

## 6. Cross-Cutting Requirements

### 6.1 Accessibility Standards

- **WCAG 2.1 Level AA** compliance for all components
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Screen reader support (ARIA labels, roles, live regions)
- Focus management (visible focus rings, trap focus in modals)
- Color contrast ratios (4.5:1 minimum)
- Reduced motion support (prefers-reduced-motion)

### 6.2 Responsive Breakpoints

- **Mobile**: < 640px (Single column, stacked layouts, drawers)
- **Tablet**: 640px - 1024px (2 columns, adjusted navigation)
- **Desktop**: > 1024px (Full layouts, sidebars visible)
- **Large**: > 1280px (Maximum container widths, more padding)

### 6.3 Performance Requirements

- **Lazy Loading**: Organisms below fold load on intersection
- **Bundle Splitting**: Route-based code splitting
- **Image Optimization**: WebP format, responsive sizes
- **Debouncing**: Search inputs (300ms), Resize observers (200ms)
- **Memoization**: Expensive computations in organisms
- **Skeleton Loading**: Never show blank loading states

### 6.4 State Management

- **Local State**: UI state (modals, toggles, forms) use React useState
- **Server State**: Data fetching uses React Query (caching, refetching)
- **Form State**: React Hook Form for validation and submission
- **Global State**: Zustand for cross-cutting concerns (auth, theme)
- **URL Query State**: nuqs for list page filters and query parameters

#### nuqs

**Purpose**: URL-first state for shareable, bookmarkable filter states  
**Dependencies**: nuqs, Next.js App Router  

**Requirements**:

- All list page filters sync to URL query params
- Shareable URLs (e.g., `?status=active&page=2`)
- Back/forward buttons restore previous filter states
- Type-safe filter schemas
- Default values in URL
- Unused params auto-removed on filter clear

**Integration**: SearchFilterBar (search query), FilterPanel (filter values), Pagination (page state), DataTable (sort + filter + pagination)

### 6.5 Error Handling

- **Error Boundaries**: Per-organism error catching
- **Fallback UI**: Generic error component with retry
- **Toast Errors**: User action feedback (form errors, network failures)
- **Logging**: Error tracking integration (Sentry)

---

## 7. Implementation Priority Matrix

### Phase 1: Foundation (Week 1)

**Tokens**

- Color tokens (semantic)
- Typography tokens
- Spacing tokens

**Molecules**

- FormField
- SearchInput
- StatCard
- EmptyState
- IconButton
- ActionMenu

**Organisms**

- DataTable (basic)
- NavigationShell
- FormBuilder

**Templates**

- DashboardTemplate
- ListViewTemplate

### Phase 2: Core Features (Week 2-3)

**Molecules**

- DateRangePicker
- CheckboxField/SwitchField
- AlertMessage
- ProgressBar

**Organisms**

- FilterPanel
- SearchFilterBar
- NotificationCenter
- FileUploader

**Templates**

- DetailViewTemplate
- FormTemplate
- SplitViewTemplate

**Pages**

- UserListPage
- UserDetailPage
- SettingsGeneralPage

### Phase 3: Advanced Features (Week 4)

**Organisms**

- Calendar/Scheduler
- TreeView
- ImageGallery
- CommentThread
- ChatInterface

**Templates**

- AuthTemplate
- OnboardingTemplate

**Pages**

- AnalyticsDashboard
- ContentEditorPage
- InboxPage

---

This specification provides the complete component inventory for your AI-optimized design system. Each component can now be specced individually with these requirements as the foundation.
