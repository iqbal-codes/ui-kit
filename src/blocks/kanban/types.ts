/**
 * Kanban Board Types
 *
 * Generic, agnostic types for any business use case.
 * Extend these types with your domain-specific fields.
 */

// ============================================================================
// Base Card Metadata (Optional - use what you need)
// ============================================================================

/**
 * User assignee information
 */
export interface Assignee {
  /** Unique user identifier */
  id: string;
  /** User display name */
  name: string;
  /** Avatar image URL (optional) */
  avatarUrl?: string;
}

/**
 * Tag/Label for categorization
 */
export interface Tag {
  /** Unique tag identifier */
  id: string;
  /** Tag display text */
  label: string;
  /**
   * Color for the tag
   * Can be:
   * - Tailwind color name: "blue", "green", "red", etc.
   * - Hex color: "#3B82F6"
   * - CSS class: "bg-blue-500"
   */
  color: string;
}

/**
 * Subtask/Checklist item
 */
export interface Subtask {
  /** Unique subtask identifier */
  id: string;
  /** Subtask title/description */
  title: string;
  /** Whether subtask is completed */
  completed: boolean;
}

/**
 * File attachment
 */
export interface Attachment {
  /** Unique attachment identifier */
  id: string;
  /** File display name */
  name: string;
  /** File URL for download/view */
  url: string;
  /** File MIME type (e.g., "image/png", "application/pdf") */
  type: string;
  /** File size in bytes (optional) */
  size?: number;
}

/**
 * Base card metadata that all kanban cards share
 * Extend this interface with your domain-specific fields
 */
export interface BaseCardMetadata {
  /** Unique card identifier */
  id: string;
  /** Card title (required, displayed prominently) */
  title: string;
  /** Card description (optional, longer text) */
  description?: string;
  /** Assigned user (optional) */
  assignee?: Assignee;
  /** Due date in ISO 8601 format (optional) */
  dueDate?: string;
  /**
   * Priority level
   * Controls visual emphasis and badge color
   */
  priority?: "low" | "medium" | "high" | "urgent";
  /** Tags/Labels for categorization (optional) */
  tags?: Tag[];
  /** Subtasks/checklist items (optional) */
  subtasks?: Subtask[];
  /** File attachments (optional) */
  attachments?: Attachment[];
  /** When card was created */
  createdAt?: string;
  /** When card was last updated */
  updatedAt?: string;
}

// ============================================================================
// Column Types
// ============================================================================

/**
 * Kanban column configuration
 */
export interface KanbanColumn<T extends BaseCardMetadata = BaseCardMetadata> {
  /** Unique column identifier */
  id: string;
  /** Column display title */
  title: string;
  /** Cards in this column */
  cards: T[];
  /**
   * Accent color for column header
   * Used for visual organization
   */
  color?: string;
  /** Whether column is collapsed (optional) */
  isCollapsed?: boolean;
  /** Work-in-progress limit (optional) */
  cardLimit?: number;
  /** Whether column is disabled (optional) */
  isDisabled?: boolean;
}

// ============================================================================
// Board Configuration
// ============================================================================

/**
 * Feature flags for kanban board
 * Enable/disable specific functionality
 */
export interface KanbanFeatures {
  /** Enable drag-and-drop card movement */
  dragDrop?: boolean;
  /** Enable creating new cards */
  cardCreation?: boolean;
  /** Enable editing existing cards */
  cardEditing?: boolean;
  /** Enable deleting cards */
  cardDeletion?: boolean;
  /** Enable collapsing columns */
  columnCollapse?: boolean;
  /** Enable subtasks feature */
  subtasks?: boolean;
  /** Enable attachments feature */
  attachments?: boolean;
  /** Enable due dates */
  dueDates?: boolean;
  /** Enable assignees */
  assignees?: boolean;
  /** Enable tags/labels */
  tags?: boolean;
  /** Enable priority badges */
  priority?: boolean;
  /** Enable search functionality */
  search?: boolean;
  /** Enable filtering */
  filters?: boolean;
  /** Enable column sorting */
  columnSorting?: boolean;
  /** Enable card sorting within columns */
  cardSorting?: boolean;
}

/**
 * Default feature configuration
 */
export const defaultFeatures: KanbanFeatures = {
  dragDrop: true,
  cardCreation: true,
  cardEditing: true,
  cardDeletion: true,
  columnCollapse: false,
  subtasks: true,
  attachments: true,
  dueDates: true,
  assignees: true,
  tags: true,
  priority: true,
  search: true,
  filters: true,
  columnSorting: false,
  cardSorting: true,
};

// ============================================================================
// Board Props
// ============================================================================

/**
 * Props for the main KanbanBoard component
 * @template T - Your custom card data type (must extend BaseCardMetadata)
 */
export interface KanbanBoardProps<T extends BaseCardMetadata = BaseCardMetadata> {
  /**
   * Column definitions
   * Define your workflow stages
   */
  columns: KanbanColumn<T>[];

  /**
   * All cards data
   * Flat array - cards are assigned to columns via their position
   */
  cards?: T[];

  /**
   * Feature flags to enable/disable functionality
   * @default defaultFeatures
   */
  features?: KanbanFeatures;

  /**
   * Called when card is moved to different column
   * Implement optimistic updates here
   */
  onCardMove?: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => void | Promise<void>;

  /**
   * Called when card is reordered within same column
   */
  onCardReorder?: (
    cardId: string,
    fromIndex: number,
    toIndex: number,
    columnId: string
  ) => void | Promise<void>;

  /**
   * Called when card is clicked
   * Use for opening detail view
   */
  onCardClick?: (card: T) => void;

  /**
   * Custom CSS class for the board container
   */
  className?: string;

  /**
   * Loading state - shows skeletons
   */
  isLoading?: boolean;

  /**
   * Empty state message when no cards exist
   */
  emptyStateMessage?: string;
}

// ============================================================================
// Card Component Props
// ============================================================================

/**
 * Props for KanbanCard component
 * @template T - Your custom card data type
 */
export interface KanbanCardProps<T extends BaseCardMetadata = BaseCardMetadata>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card data for default rendering
   * If omitted, use compound components (children)
   */
  card?: T;

  /**
   * Children for custom composition
   * Takes precedence over card prop
   */
  children?: React.ReactNode;

  /**
   * Whether card is currently being dragged
   */
  isDragging?: boolean;

  /**
   * Whether card is selected
   */
  isSelected?: boolean;

  /**
   * Called when card is clicked
   */
  onClick?: () => void;

  /**
   * Priority level (for styling when using compound mode)
   */
  priority?: "low" | "medium" | "high" | "urgent";
}

// ============================================================================
// Sub-component Props
// ============================================================================

/**
 * Props for KanbanCardHeader
 */
export interface KanbanCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardContent
 */
export interface KanbanCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardFooter
 */
export interface KanbanCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardTitle
 */
export interface KanbanCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardDescription
 */
export interface KanbanCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardBadge (Priority badge)
 */
export interface KanbanCardBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Priority level */
  priority: "low" | "medium" | "high" | "urgent";
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardLabel (Tag/Label)
 */
export interface KanbanCardLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Label color
   * Can be Tailwind color name or hex
   */
  color: string;
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardLabels (Container for multiple labels)
 */
export interface KanbanCardLabelsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardAvatar
 */
export interface KanbanCardAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** User display name */
  name: string;
  /** Avatar image URL */
  avatarUrl?: string;
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardDueDate
 */
export interface KanbanCardDueDateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Due date in ISO 8601 format */
  date: string;
  /** Custom CSS class */
  className?: string;
  /** Whether to show time (default: false) */
  showTime?: boolean;
  /** Whether date is overdue (auto-calculated if not provided) */
  isOverdue?: boolean;
}

/**
 * Props for KanbanCardSubtasks
 */
export interface KanbanCardSubtasksProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of completed subtasks */
  completed: number;
  /** Total number of subtasks */
  total: number;
  /** Custom CSS class */
  className?: string;
}

/**
 * Props for KanbanCardAttachments
 */
export interface KanbanCardAttachmentsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of attachments */
  count: number;
  /** Custom CSS class */
  className?: string;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Helper type to get card type from column
 */
export type CardTypeFromColumn<T> = T extends KanbanColumn<infer U> ? U : never;

/**
 * Helper type for partial card updates
 */
export type CardUpdate<T extends BaseCardMetadata> = Partial<Omit<T, "id">>;
