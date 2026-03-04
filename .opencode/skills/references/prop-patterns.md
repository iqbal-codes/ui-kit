# Prop Patterns for AI-Optimized Components

## Design Principles

### 1. Flat Structures

AI agents struggle with deeply nested configurations. Keep props flat and explicit.

```typescript
// ✅ AI-Friendly - Flat props
interface EntityCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  statusLabel?: string;
  statusVariant?: "default" | "secondary" | "destructive";
  progress?: number;
  onClick?: () => void;
}

// ❌ AI-Unfriendly - Nested config
interface EntityCardProps {
  content: {
    title: string;
    subtitle?: string;
    description?: string;
  };
  status?: {
    label: string;
    variant: "default" | "secondary" | "destructive";
  };
  interactions?: {
    onClick?: () => void;
  };
}
```

### 2. Discriminated Unions

Use discriminated unions for status and variant props. This gives AI clear options.

```typescript
// ✅ Clear options for AI
type Status = "pending" | "in-progress" | "completed" | "cancelled";
type Priority = "low" | "medium" | "high" | "urgent";

interface WorkOrderCardProps {
  status: Status;
  priority: Priority;
}
```

### 3. Branded Types for IDs

Prevent AI from mixing up different entity IDs.

```typescript
// Brand types to prevent ID confusion
type WorkOrderId = string & { readonly __brand: 'WorkOrderId' };
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

interface Props {
  workOrderId: WorkOrderId;
  assigneeId?: UserId;
  relatedOrderId?: OrderId;
}
```

### 4. Optional Callbacks with Clear Names

Name callbacks by user action, not implementation detail.

```typescript
// ✅ Clear intent
interface Props {
  onClick?: () => void;
  onSave?: (data: FormData) => void;
  onDelete?: (id: string) => void;
  onStatusChange?: (status: Status) => void;
}

// ❌ Unclear implementation details
interface Props {
  handleAction?: () => void;
  callback?: (data: any) => void;
  handler?: (id: string) => void;
}
```

### 5. React.ReactNode for Content Slots

Use `React.ReactNode` for flexible content injection.

```typescript
interface CardProps {
  title: string;
  actions?: React.ReactNode;  // Buttons, dropdowns, etc.
  avatar?: React.ReactNode;   // Image, icon, initials
  children?: React.ReactNode; // Arbitrary content
}
```

### 6. Controlled vs Uncontrolled

Be explicit about controlled state.

```typescript
// Controlled pattern
interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

// Uncontrolled pattern (clearly marked)
interface SelectProps {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}
```

### 7. CSS and Styling

Use `className` prop with `cn()` utility for consistent styling.

```typescript
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function Component({ className, ...props }: Props) {
  return (
    <div className={cn("base-styles", className)} {...props} />
  );
}
```

## Common Prop Patterns

### Data Display

```typescript
interface DataDisplayProps {
  label: string;
  value: string | number | React.ReactNode;
  format?: "default" | "currency" | "percentage" | "date";
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}
```

### Status Indicators

```typescript
interface StatusProps {
  status: "success" | "warning" | "error" | "info";
  label?: string;
  showIcon?: boolean;
  variant?: "badge" | "dot" | "full";
}
```

### List Items

```typescript
interface ListItemProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  avatar?: React.ReactNode;
  actions?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}
```

### Forms

```typescript
interface FormFieldProps {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}
```

### Tables

```typescript
interface ColumnDef<T> {
  id: string;
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (item: T) => void;
  sortable?: boolean;
  striped?: boolean;
}
```

## JSDoc Annotations

Always add JSDoc comments for AI context:

```typescript
export interface WorkOrderCardProps {
  /** Unique identifier for the work order */
  workOrderId: string;
  
  /** Display title - typically the work order number */
  title: string;
  
  /** Current status of the work order */
  status: "pending" | "in-progress" | "completed";
  
  /** Priority level affecting visual emphasis */
  priority: "low" | "medium" | "high";
  
  /** ISO date string for due date display */
  dueDate: string;
  
  /** Name of assigned operator, if any */
  assignee?: string;
  
  /** Click handler for navigation */
  onClick?: () => void;
  
  /** Additional CSS classes for customization */
  className?: string;
}
```

## Anti-Patterns

### ❌ Generic Props

```typescript
interface Props {
  data: any;
  config: Record<string, any>;
  callback?: Function;
}
```

### ❌ Boolean Overload

```typescript
interface Props {
  showTitle: boolean;
  showSubtitle: boolean;
  showActions: boolean;
  isClickable: boolean;
  // ... too many boolean flags
}

// ✅ Better: Variant or size props
interface Props {
  variant: "compact" | "default" | "detailed";
  interaction: "none" | "click" | "hover";
}
```

### ❌ String Union Explosion

```typescript
interface Props {
  variant: 
    | "default" 
    | "primary" 
    | "secondary" 
    | "destructive" 
    | "outline" 
    | "ghost" 
    | "link"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "muted"; // Too many options confuse AI
}

// ✅ Better: Separate concerns
interface Props {
  variant: "default" | "primary" | "secondary";
  intent?: "success" | "warning" | "error" | "info";
}
```
