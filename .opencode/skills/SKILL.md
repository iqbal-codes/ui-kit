---
name: ai-uikit-builder
description: Build AI-optimized UI components following the shadcn-based two-layer architecture. Prioritize shadcn primitives, modular design, type-safe generics, and immediate linting. Use when creating components for manufacturing/business applications.
---

# AI UI Kit Builder

Build AI-optimized UI components following a strict architecture with **shadcn primitives first**, **modular design**, **type-safe generics**, and **immediate linting**.

## Core Principles

### 1. shadcn Primitives First (Highest Priority)

**BEFORE** creating any custom component, **ALWAYS** check and use existing shadcn primitives:

```markdown
Required Checklist - Ask yourself:
1. Can I use @/primitives/input for text fields?
2. Can I use @/primitives/select or @/primitives/combobox for dropdowns?
3. Can I use @/primitives/checkbox or @/primitives/switch for toggles?
4. Can I use @/primitives/calendar for date picking?
5. Can I use @/primitives/card for card layouts?
6. Can I use @/primitives/button for buttons?
7. Can I use @/primitives/form for form field wrappers?
```

**Primitive Reference Table:**

| Use Case | Primitive Import |
|----------|-----------------|
| Text input | `@/primitives/input` |
| Multi-line text | `@/primitives/textarea` |
| Dropdown | `@/primitives/select` |
| Searchable dropdown | `@/primitives/combobox` |
| Checkbox | `@/primitives/checkbox` |
| Toggle switch | `@/primitives/switch` |
| Radio group | `@/primitives/radio-group` |
| Date picker | `@/primitives/calendar` + `@/primitives/popover` |
| File upload | `@/primitives/upload-dropzone` |
| Button | `@/primitives/button` |
| Card | `@/primitives/card` |
| Dialog/Modal | `@/primitives/dialog` |
| Form field wrapper | `@/primitives/form` (FormItem, FormLabel, FormControl, FormMessage, FormField) |
| Badge | `@/primitives/badge` |
| Progress bar | `@/primitives/progress` |
| Skeleton loader | `@/primitives/skeleton` |
| Tooltip | `@/primitives/tooltip` |
| Popover | `@/primitives/popover` |
| Sheet/Drawer | `@/primitives/sheet` |
| Table | `@/primitives/table` |

### 2. Modular Architecture (Piece by Piece)

**Break complex components into smaller, focused files:**

```
Complexity Threshold: If file > 200 lines, split it!

❌ BAD: Single file with 500 lines
✅ GOOD: Multiple files with 50-150 lines each
```

**Modular Structure Pattern:**

```
src/blocks/{category}/{component-name}/
├── index.ts                  # Public exports (barrel file)
├── types.ts                  # TypeScript types and interfaces
├── {component-name}.tsx      # Main container component
├── {component-name}.stories.tsx  # Storybook stories
└── parts/                    # Sub-components (if needed)
    ├── header.tsx
    ├── content.tsx
    ├── footer.tsx
    └── ...
```

**For Form Smart Blocks:**

```
src/blocks/{category}/{form-name}/
├── index.ts                  # Public exports
├── types.ts                  # Form types
├── form-builder.tsx          # Main container with FormProvider
├── form-field-renderer.tsx   # Field type switch
└── fields/                   # Individual field components
    ├── text-field.tsx
    ├── select-field.tsx
    ├── checkbox-field.tsx
    └── ...
```

### 3. Type-Safe Generics

**ALWAYS** use TypeScript generics for reusable components:

```tsx
// ✅ GOOD: Generic type-safe props
export interface DataTableProps<TData, TValue> {
  /** Data array to display in table */
  data: TData[];
  /** Column definitions with accessor keys */
  columns: ColumnDef<TData, TValue>[];
  /** Handler when row is clicked */
  onRowClick?: (item: TData) => void;
  /** Enable row selection */
  enableSelection?: boolean;
}

export function DataTable<TData, TValue>({
  data,
  columns,
  onRowClick,
  enableSelection = false,
}: DataTableProps<TData, TValue>) {
  // Implementation
}

// ✅ GOOD: Generic form fields
export interface FormFieldProps<T extends FieldValues> {
  /** Field name for react-hook-form registration */
  name: Path<T>;
  /** Field label displayed above input */
  label?: string;
  /** Helper text displayed below input */
  description?: string;
  /** Validation rules for field */
  rules?: RegisterOptions<T>;
}
```

### 4. AI-Optimized Props with JSDoc

**EVERY prop must have JSDoc comments** explaining:
- What the prop does
- Expected values/format
- When to use it
- Any side effects

```tsx
// ✅ GOOD: AI-optimized props with clear JSDoc
export interface WorkOrderCardProps {
  /** 
   * Unique identifier for the work order 
   * Format: "WO-YYYY-NNN" (e.g., "WO-2024-001")
   */
  workOrderId: string;
  
  /** 
   * Display title shown in card header 
   * Usually the work order name or short description
   */
  title: string;
  
  /** 
   * Current status of work order
   * Controls badge color and label
   * - pending: Gray badge, waiting to start
   * - in-progress: Blue badge, actively working
   * - completed: Green badge, finished
   * - cancelled: Red badge, stopped
   */
  status: "pending" | "in-progress" | "completed" | "cancelled";
  
  /** 
   * Priority level affecting visual emphasis
   * - low: Minimal styling
   * - medium: Default styling
   * - high: Orange accent
   * - urgent: Red accent, prominent display
   */
  priority: "low" | "medium" | "high" | "urgent";
  
  /** 
   * ISO 8601 date string for due date
   * Format: "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm:ssZ"
   * Displayed in local timezone
   */
  dueDate: string;
  
  /** 
   * Optional click handler for card interaction
   * Triggers when user clicks anywhere on card
   * Use for navigation to detail page
   */
  onClick?: () => void;
  
  /** 
   * Additional CSS classes for custom styling
   * Merged with base classes using cn() utility
   */
  className?: string;
}
```

### 5. Linting Workflow (Non-Negotiable)

**ALWAYS** run linting immediately after creating or modifying files:

```bash
# After EACH file or logical group
bun run lint

# Fix ALL errors before moving to next task
# NEVER accumulate errors
```

**Verification Sequence:**

```bash
# 1. Lint (fix all errors)
bun run lint

# 2. TypeScript check
bunx tsc --noEmit

# 3. Build verification
bun run build
```

## Task Breakdown Process

**BEFORE** writing any code, create a task breakdown:

```markdown
## Task Breakdown

### Phase 1: Planning
- [ ] Identify component type (Domain/Layout/Smart)
- [ ] List required shadcn primitives
- [ ] Plan file structure
- [ ] Define TypeScript interfaces

### Phase 2: Implementation
- [ ] Create directory structure
- [ ] Implement base components
- [ ] Implement main container
- [ ] Add type definitions

### Phase 3: Documentation
- [ ] Create Storybook stories
- [ ] Add JSDoc comments to all props
- [ ] Write usage examples

### Phase 4: Verification
- [ ] Run linting (fix all errors)
- [ ] Run TypeScript check
- [ ] Run build
- [ ] Test in Storybook
```

## Questions to Ask Users

**BEFORE** implementing, ask 3-5 clarifying questions:

### For Domain Blocks (Display Components):
1. What data will this component display? (list the fields)
2. How will users interact with it? (click, hover, expand, etc.)
3. What are the different states? (loading, empty, error, success)
4. Are there visual variations? (compact, detailed, with/without image)
5. What actions can users perform? (edit, delete, view details)

### For Smart Blocks (Forms with Logic):
1. What fields are needed? (list each field with type)
2. What validation rules apply to each field?
3. Are there conditional fields that show/hide based on other values?
4. Does it need auto-save or real-time updates?
5. What happens on submit? (API call, navigation, etc.)

### For Layout Blocks:
1. What regions/slots are needed? (header, sidebar, content, footer)
2. Is it responsive? (mobile, tablet, desktop behavior)
3. Are regions collapsible or resizable?
4. What's the default layout configuration?
5. Are there nested layout requirements?

## Component Generation Workflow

### Step 1: Receive Request & Ask Questions

User: "Create a work order form"

You: "I'll create a work order form. First, let me clarify:
1. What fields are needed? (title, description, priority, assignee, due date, etc.)
2. What validation rules apply? (required fields, min length, date ranges)
3. Are there conditional fields? (e.g., show assignee only when status changes)
4. Does it need auto-save functionality?
5. What happens on submit - API endpoint or callback?"

### Step 2: Create Task Breakdown

After receiving answers, create detailed task breakdown showing what you'll build.

### Step 3: Check shadcn Primitives

List which primitives you'll use:
- Input for text fields
- Select/Combobox for dropdowns
- Calendar for date fields
- etc.

### Step 4: Implement (Piece by Piece)

Create files one at a time, running lint after each:
1. Create directory structure
2. Create types.ts with interfaces
3. Create individual field components
4. Create main container
5. Create stories

### Step 5: Verify

Run full verification sequence before marking complete.

## Usage Examples

### Example 1: Creating a Domain Block

```tsx
/**
 * TaskCard - Display task information with status and priority
 * 
 * @example
 * <TaskCard
 *   taskId="TASK-001"
 *   title="Fix login bug"
 *   status="in-progress"
 *   priority="high"
 *   assignee="John Doe"
 *   onClick={() => navigate('/tasks/TASK-001')}
 * />
 */
export interface TaskCardProps {
  /** Unique task identifier */
  taskId: string;
  /** Task title or summary */
  title: string;
  // ... more props with JSDoc
}
```

### Example 2: Creating a Smart Block (Form)

```tsx
/**
 * WorkOrderForm - Comprehensive form for creating/editing work orders
 * 
 * Features:
 * - Auto-save every 30 seconds
 * - Conditional fields based on work order type
 * - File upload for attachments
 * - Real-time validation
 * 
 * @example
 * <WorkOrderForm
 *   defaultValues={{ title: "", priority: "medium" }}
 *   onSubmit={(data) => api.createWorkOrder(data)}
 *   onAutoSave={(data) => api.draftWorkOrder(data)}
 * />
 */
```

## Anti-Patterns to Avoid

❌ **Plain HTML elements** - Always use shadcn primitives  
❌ **Large single files** - Split if > 200 lines  
❌ **Missing JSDoc** - Every prop needs documentation  
❌ **Any types** - Use proper TypeScript generics  
❌ **No linting** - Run lint after every change  
❌ **Accumulated errors** - Fix immediately  
❌ **Nested configs** - Keep props flat and simple  
❌ **Importing primitives in app code** - Import Blocks only  

## Reference Files

- **Architecture**: `references/architecture.md` - Layer specifications and dependency rules
- **Prop Patterns**: `references/prop-patterns.md` - AI-optimized prop design patterns
- **Examples**: `references/component-examples.md` - Complete component templates
