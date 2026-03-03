import type { FieldValues } from "react-hook-form";

/**
 * Filter field configuration
 * Defines the structure for each filter field in the dialog
 */
export interface FilterField<_T extends FieldValues = FieldValues> {
  /** Unique field identifier (matches data key) */
  name: string;
  /** Display label for the field */
  label: string;
  /** Field type determines which input component to use */
  type: "text" | "select" | "date" | "combobox";
  /** Placeholder text for input fields */
  placeholder?: string;
  /** Options for select/combobox field types */
  options?: Array<{
    /** Option value sent to backend */
    value: string;
    /** Option label displayed to user */
    label: string;
    /** Disable this option */
    disabled?: boolean;
  }>;
  /** Default value for the field */
  defaultValue?: any;
}

/**
 * Active filter object
 * Represents a single applied filter
 */
export interface ActiveFilter {
  /** Field name being filtered */
  field: string;
  /** Display label for the filter chip */
  label: string;
  /** Filter value */
  value: any;
  /** Formatted value for display in chip */
  displayValue: string;
}

/**
 * Filter state object
 * Key-value pairs of field: value
 */
export type FilterState = Record<string, any>;

/**
 * SmartDataTable component props
 */
export interface SmartDataTableProps<TData extends Record<string, any>> {
  /** Data array to display in table */
  data: TData[];
  /** Column definitions for table */
  columns: ColumnDef<TData>[];
  /** Current search query */
  searchQuery?: string;
  /** Handler when search changes */
  onSearchChange?: (query: string) => void;
  /** Current filters object */
  filters?: FilterState;
  /** Handler when filters change */
  onFiltersChange?: (filters: FilterState) => void;
  /** Available filter fields configuration */
  filterFields?: FilterField[];
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Enable debounced search (default: 300ms) */
  enableSearchDebounce?: boolean;
  /** Search debounce delay in ms */
  searchDebounceDelay?: number;
  /** Use URL state (nuqs) instead of local state */
  useUrlState?: boolean;
  /** Unique identifier for URL state (required if useUrlState) */
  urlStateId?: string;
  /** Loading state for table */
  isLoading?: boolean;
  /** Empty state message (simple text) */
  emptyMessage?: string;
  /** Custom empty state component (renders when data is empty) */
  emptyState?: React.ReactNode;
  /** Enable row selection */
  enableRowSelection?: boolean;
  /** Handler when row is selected */
  onRowSelectionChange?: (selectedRows: TData[]) => void;
  /** Enable column visibility toggle */
  enableColumnVisibility?: boolean;
  /** Enable sorting */
  enableSorting?: boolean;
  /** Enable pagination */
  enablePagination?: boolean;
  /** Current page number (1-based) */
  currentPage?: number;
  /** Handler when page changes */
  onPageChange?: (page: number) => void;
  /** Number of items per page */
  pageSize?: number;
  /** Handler when page size changes */
  onPageSizeChange?: (size: number) => void;
  /** Page size options */
  pageSizeOptions?: number[];
  /** Total item count (for server-side pagination) */
  totalItems?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Compact pagination mode */
  compactPagination?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Column definition for table
 * Simplified version of tanstack table column def
 */
export interface ColumnDef<TData extends Record<string, any>> {
  /** Unique column identifier */
  id: string;
  /** Column header label */
  header: string;
  /** Accessor key for data */
  accessorKey?: keyof TData;
  /** Custom cell renderer */
  cell?: (item: TData) => React.ReactNode;
  /** Column width */
  width?: string;
  /** Cell alignment */
  align?: "left" | "center" | "right";
  /** Enable sorting for this column */
  enableSorting?: boolean;
}

/**
 * FilterDialog component props
 */
export interface FilterDialogProps<T extends FieldValues = FieldValues> {
  /** Dialog open state */
  open: boolean;
  /** Handler when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Available filter fields */
  fields: FilterField<T>[];
  /** Current filter values */
  values: FilterState;
  /** Handler when filter values change */
  onChange: (values: FilterState) => void;
  /** Handler when apply is clicked */
  onApply: () => void;
  /** Handler when clear all is clicked */
  onClearAll?: () => void;
  /** Is mobile view (use Sheet instead of Dialog) */
  isMobile?: boolean;
}

/**
 * FilterBar component props (top wrapper with search + buttons)
 */
export interface FilterBarProps {
  /** Current search value */
  searchValue?: string;
  /** Handler when search changes */
  onSearchChange?: (query: string) => void;
  /** Handler when add filter button clicked */
  onAddFilter?: () => void;
  /** Handler when clear all clicked */
  onClearAll?: () => void;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Has active filters */
  hasFilters?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * FilterChips component props (bottom row of chips)
 */
export interface FilterChipsProps {
  /** Active filters to display */
  filters: ActiveFilter[];
  /** Handler when filter removed */
  onRemoveFilter: (field: string) => void;
  /** Handler when clear all clicked */
  onClearAll?: () => void;
  /** Additional CSS classes */
  className?: string;
}
