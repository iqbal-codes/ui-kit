import * as React$1 from 'react';
import React__default from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { LucideIcon } from 'lucide-react';

/** biome-ignore-all lint/style/useImportType: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */

interface TimelineItem {
    /** Unique identifier */
    id: string;
    /** Title of the activity */
    title: string;
    /** Optional description */
    description?: string;
    /** Timestamp */
    timestamp?: string;
    /** Optional icon */
    icon?: React__default.ReactNode;
    /** Status variant */
    variant?: "default" | "success" | "warning" | "error" | "info";
}
interface ActivityTimelineProps {
    /** Timeline items */
    items: TimelineItem[];
    /** Show timestamps */
    showTimestamp?: boolean;
    /** Compact variant */
    compact?: boolean;
    className?: string;
}
declare function ActivityTimeline({ items, showTimestamp, compact, className, }: ActivityTimelineProps): React__default.JSX.Element;

interface CardGridProps {
    /** Grid columns (1-6) */
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Gap between cards */
    gap?: "sm" | "md" | "lg";
    /** Card content */
    children: React__default.ReactNode;
    className?: string;
}
declare function CardGrid({ columns, gap, children, className }: CardGridProps): React__default.JSX.Element;

interface DataGridColumn {
    /** Unique identifier */
    id: string;
    /** Column header label */
    label: string;
    /** Width hint (e.g., '100px', '20%', 'auto') */
    width?: string;
    /** Text alignment */
    align?: "left" | "center" | "right";
}
interface DataGridRow {
    /** Unique identifier */
    id: string;
    /** Cell values keyed by column id */
    cells: Record<string, React__default.ReactNode>;
}
interface DataGridProps {
    /** Column definitions */
    columns: DataGridColumn[];
    /** Row data */
    rows: DataGridRow[];
    /** Show header row */
    showHeader?: boolean;
    /** Striped rows */
    striped?: boolean;
    /** Hover effect */
    hoverable?: boolean;
    /** Click handler for rows */
    onRowClick?: (row: DataGridRow) => void;
    className?: string;
}
declare function DataGrid({ columns, rows, showHeader, striped, hoverable, onRowClick, className, }: DataGridProps): React__default.JSX.Element;

interface EntityCardProps {
    /** The entity name/title - required */
    title: string;
    /** Optional subtitle or secondary text */
    subtitle?: string;
    /** Optional description text */
    description?: string;
    /** Status badge configuration */
    status?: {
        label: string;
        variant?: "default" | "secondary" | "destructive" | "outline";
        className?: string;
    };
    /** Progress value (0-100) */
    progress?: number;
    /** Optional avatar or image */
    avatar?: React__default.ReactNode;
    /** Metadata key-value pairs */
    metadata?: Array<{
        label: string;
        value: string;
    }>;
    /** Action buttons or content */
    actions?: React__default.ReactNode;
    /** Click handler for the whole card */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
}
declare function EntityCard({ title, subtitle, description, status, progress, avatar, metadata, actions, onClick, className, }: EntityCardProps): React__default.JSX.Element;

/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

interface MasonryItem {
    /** Unique identifier */
    id: string;
    /** Item content */
    content: React$1.ReactNode;
    /** Optional height hint for better layout */
    heightHint?: number;
}
interface MasonryBoardProps {
    /** Items to display */
    items: MasonryItem[];
    /** Number of columns */
    columns?: 2 | 3 | 4;
    /** Gap between items */
    gap?: number;
    className?: string;
}
declare function MasonryBoard({ items, columns, gap, className }: MasonryBoardProps): React$1.JSX.Element;

type TrendDirection$1 = "up" | "down" | "neutral";
interface MetricCardProps {
    /** Metric label */
    label: string;
    /** Current value */
    value: string | number;
    /** Previous value for comparison */
    previousValue?: string | number;
    /** Trend direction */
    trend?: TrendDirection$1;
    /** Trend percentage */
    trendValue?: string;
    /** Optional description */
    description?: string;
    /** Compact variant */
    compact?: boolean;
    /** Click handler */
    onClick?: () => void;
    className?: string;
}
declare function MetricCard({ label, value, previousValue, trend, trendValue, description, compact, onClick, className, }: MetricCardProps): React$1.JSX.Element;

interface SectionHeaderProps {
    /** The section title - required */
    title: string;
    /** Optional description text */
    description?: string;
    /** Optional action button configuration */
    action?: {
        label: string;
        onClick: () => void;
        variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
        icon?: React__default.ReactNode;
    };
    /** Optional icon or badge before title */
    icon?: React__default.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
declare function SectionHeader({ title, description, action, icon, className }: SectionHeaderProps): React__default.JSX.Element;

/**
 * Filter field configuration
 * Defines the structure for each filter field in the dialog
 */
interface FilterField<_T extends FieldValues = FieldValues> {
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
interface ActiveFilter {
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
type FilterState = Record<string, any>;
/**
 * SmartDataTable component props
 */
interface SmartDataTableProps<TData extends Record<string, any>> {
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
interface ColumnDef<TData extends Record<string, any>> {
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
interface FilterDialogProps<T extends FieldValues = FieldValues> {
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
interface FilterBarProps {
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
interface FilterChipsProps {
    /** Active filters to display */
    filters: ActiveFilter[];
    /** Handler when filter removed */
    onRemoveFilter: (field: string) => void;
    /** Handler when clear all clicked */
    onClearAll?: () => void;
    /** Additional CSS classes */
    className?: string;
}

/**
 * FilterBar - Top wrapper with search input and filter buttons
 *
 * Layout:
 * - Left: Search input (flex-grow)
 * - Right: Add Filter button + Clear button
 */
declare function FilterBar({ searchValue, onSearchChange, onAddFilter, onClearAll, searchPlaceholder, hasFilters, isLoading, className, }: FilterBarProps): React__default.JSX.Element;

/**
 * FilterChips - Bottom row displaying active filter chips
 *
 * Layout:
 * - Chips wrap horizontally
 * - Each chip has label = value format with remove button
 * - Clear All button at the end (optional)
 */
declare function FilterChips({ filters, onRemoveFilter, onClearAll, className }: FilterChipsProps): React$1.JSX.Element | null;

declare function FilterDialog({ open, onOpenChange, fields, values, onChange, onApply, onClearAll, isMobile, }: FilterDialogProps): React$1.JSX.Element;

/**
 * SmartDataTable - Full-featured data table with search and filters
 *
 * Features:
 * - Inline search with debounce
 * - Filter dialog/sheet (responsive)
 * - Filter chips display
 * - Optional URL state persistence
 * - Sorting, pagination, row selection (coming soon)
 *
 * @example
 * ```tsx
 * <SmartDataTable
 *   data={workOrders}
 *   columns={columns}
 *   filterFields={[
 *     { name: 'status', label: 'Status', type: 'select', options: [...] },
 *     { name: 'priority', label: 'Priority', type: 'combobox', options: [...] },
 *     { name: 'dueDate', label: 'Due Date', type: 'date' },
 *   ]}
 *   onFiltersChange={(filters) => api.getData(filters)}
 *   onSearchChange={(query) => api.search(query)}
 * />
 * ```
 */
declare function SmartDataTable<TData extends Record<string, any>>({ data, columns, searchQuery, onSearchChange, filters, onFiltersChange, filterFields, searchPlaceholder, enableSearchDebounce, searchDebounceDelay, useUrlState, urlStateId, isLoading, emptyMessage, emptyState, enableRowSelection, onRowSelectionChange, enableColumnVisibility, enableSorting, enablePagination, currentPage, onPageChange, pageSize, onPageSizeChange, pageSizeOptions, totalItems, showFirstLast, compactPagination, className, }: SmartDataTableProps<TData>): React$1.JSX.Element;

type TrendDirection = "up" | "down" | "neutral";
interface StatCardProps {
    /** Card title (metric name) */
    title: string;
    /** Current value to display */
    value: string | number;
    /** Optional description below title */
    description?: string;
    /** Trend direction for indicator */
    trend?: {
        direction: TrendDirection;
        value: string;
        label?: string;
    };
    /** Additional CSS classes */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}
declare function StatCard({ title, value, description, trend, className, onClick }: StatCardProps): React$1.JSX.Element;

interface StatusItem {
    /** Unique identifier */
    id: string;
    /** Status label */
    label: string;
    /** Count value */
    count: number;
    /** Color variant */
    variant: "default" | "success" | "warning" | "error" | "info";
}
interface StatusGridProps {
    /** Status items to display */
    items: StatusItem[];
    /** Total count for percentage calculation */
    total?: number;
    /** Show progress ring */
    showProgress?: boolean;
    /** Size of progress ring */
    ringSize?: "sm" | "md" | "lg";
    className?: string;
}
declare function StatusGrid({ items, total, showProgress, ringSize, className, }: StatusGridProps): React$1.JSX.Element;

interface DurationPickerProps {
    /** Duration value in minutes */
    value?: number;
    /** Change handler */
    onChange?: (minutes: number) => void;
    /** Minimum value in minutes */
    min?: number;
    /** Maximum value in minutes */
    max?: number;
    /** Show presets */
    showPresets?: boolean;
    /** Preset options in minutes */
    presets?: number[];
    className?: string;
}
declare function DurationPicker({ value, onChange, min, max, showPresets, presets, className, }: DurationPickerProps): React$1.JSX.Element;

interface FilterChipProps {
    /** Chip label */
    label: string;
    /** Whether chip is selected */
    selected?: boolean;
    /** Selection handler */
    onToggle?: () => void;
    /** Remove handler */
    onRemove?: () => void;
    /** Number indicator */
    count?: number;
    className?: string;
}
declare function FilterChip({ label, selected, onToggle, onRemove, count, className, }: FilterChipProps): React$1.JSX.Element;

/**
 * Union type of all available field types
 */
type FieldType = "text" | "email" | "number" | "password" | "textarea" | "select" | "checkbox" | "switch" | "radio" | "date" | "datetime" | "time" | "file" | "combobox" | "multi-select" | "tel" | "url" | "currency" | "phone" | "percentage" | "otp" | "rating" | "color" | "slider" | "rich-text" | "code" | "address" | "name" | "credit-card" | "array" | "chip" | "custom";
interface FieldOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
/**
 * Base field config shared by all field types
 */
interface BaseFieldConfig<T extends FieldValues = FieldValues> {
    /** Field name (dot notation for nested: 'user.email') */
    name: Path<T>;
    /** Field label */
    label?: string;
    /** Field description/help text */
    description?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Default value */
    defaultValue?: any;
    /** Validation rules */
    rules?: {
        required?: string | boolean;
        minLength?: {
            value: number;
            message: string;
        };
        maxLength?: {
            value: number;
            message: string;
        };
        min?: {
            value: number;
            message: string;
        };
        max?: {
            value: number;
            message: string;
        };
        pattern?: {
            value: RegExp;
            message: string;
        };
        validate?: (value: any) => boolean | string;
    };
    /** Disabled state (static) */
    disabled?: boolean;
    /** Read-only state */
    readOnly?: boolean;
    /** Conditional rendering - hide field based on form values */
    when?: (values: Partial<T>) => boolean;
    /** Fields to watch for changes (for performance optimization) */
    watchFields?: Path<T>[];
    /** Dynamic disabled state - function to determine if field should be disabled */
    isDisabled?: (values: Partial<T>, currentValue?: any) => boolean;
    /** Dynamic hidden state - function to determine if field should be hidden (alternative to `when`) */
    isHidden?: (values: Partial<T>, currentValue?: any) => boolean;
    /** Custom onChange callback with access to watched values */
    onChangeCallback?: (value: any, watchedValues: Partial<T>, form: any) => void;
    /** Custom field component */
    render?: (field: any, form: any) => React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Text-based input fields
 */
interface TextFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "text" | "email" | "password" | "number" | "tel" | "url";
    inputMode?: "text" | "email" | "numeric" | "tel" | "url";
    autoComplete?: string;
}
/**
 * Multi-line text input
 */
interface TextareaFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "textarea";
    rows?: number;
}
/**
 * Select dropdown with options
 */
interface SelectFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "select";
    options: FieldOption[];
    placeholder?: string;
}
/**
 * Checkbox field
 */
interface CheckboxFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "checkbox";
}
/**
 * Switch/toggle field
 */
interface SwitchFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "switch";
}
/**
 * Radio group with options
 */
interface RadioGroupFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "radio";
    options: FieldOption[];
}
/**
 * Date picker field
 */
interface DateFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "date" | "datetime" | "time";
}
/**
 * File upload field
 */
interface FileUploadFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "file";
    accept?: string;
    maxSize?: number;
    maxFiles?: number;
    onUpload?: (files: File[]) => void | Promise<void>;
}
/**
 * Combobox (searchable select) field
 */
interface ComboboxFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "combobox" | "multi-select";
    options: FieldOption[];
    searchable?: boolean;
    multiple?: boolean;
}
/**
 * Currency input with formatting
 */
interface CurrencyFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "currency";
    currencySymbol?: string;
    currencyPosition?: "prefix" | "suffix";
    allowNegative?: boolean;
    decimalPlaces?: number;
    minValue?: number;
    maxValue?: number;
}
/**
 * Phone number input with country code
 */
interface PhoneFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "phone";
    defaultCountry?: string;
    showCountrySelect?: boolean;
    countryFieldName?: Path<T>;
}
/**
 * Percentage input
 */
interface PercentageFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "percentage";
    minValue?: number;
    maxValue?: number;
    decimalPlaces?: number;
    step?: number;
}
/**
 * OTP (One-Time Password) input
 */
interface OTPFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "otp";
    otpLength?: number;
    otpType?: "numeric" | "alphanumeric";
    showSeparator?: boolean;
    groupSize?: number;
}
/**
 * Star rating input
 */
interface RatingFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "rating";
    maxRating?: number;
    showNumbers?: boolean;
    labels?: string[];
    size?: "sm" | "md" | "lg";
    allowClear?: boolean;
    icon?: "star" | "heart" | "thumbs-up";
}
/**
 * Color picker input
 */
interface ColorFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "color";
    format?: "hex" | "rgb" | "hsl";
    showAlpha?: boolean;
    presets?: string[];
    showPreview?: boolean;
}
/**
 * Slider/range input
 */
interface SliderFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "slider";
    min?: number;
    max?: number;
    step?: number;
    showInput?: boolean;
    showValue?: boolean;
    suffix?: string;
    orientation?: "horizontal" | "vertical";
    inverted?: boolean;
}
/**
 * Rich text editor field (placeholder for future implementation)
 */
interface RichTextFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "rich-text" | "code";
    minHeight?: string;
    toolbar?: string[];
}
/**
 * Address field group (placeholder for future implementation)
 */
interface AddressFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "address";
    showCounty?: boolean;
    showCountry?: boolean;
    defaultCountry?: string;
}
/**
 * Name field group (placeholder for future implementation)
 */
interface NameFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "name";
    showMiddleName?: boolean;
    showPrefix?: boolean;
    showSuffix?: boolean;
}
/**
 * Credit card input (placeholder for future implementation)
 */
interface CreditCardFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "credit-card";
    showExpiry?: boolean;
    showCvv?: boolean;
    showCardHolder?: boolean;
}
/**
 * Array/repeatable field group
 * Each item in the array contains the same set of fields
 */
interface ArrayFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "array";
    /** The fields to repeat for each array item */
    fields: FieldConfig<any>[];
    /** Minimum number of items required */
    minItems?: number;
    /** Maximum number of items allowed */
    maxItems?: number;
    /** Label for the "Add Item" button */
    addItemLabel?: string;
    /** Show drag-and-drop reordering controls */
    showReorder?: boolean;
    /** Field to use as item title when collapsed (e.g., 'itemName') */
    itemTitleField?: Path<T>;
    /** Custom item title template (supports dot notation for nested fields) */
    itemTitleTemplate?: string;
    /** Default values for new items */
    itemDefaultValue?: any;
    /** Collapsible items */
    collapsibleItems?: boolean;
    /** Start with all items collapsed */
    defaultCollapsed?: boolean;
}
/**
 * Input chip/tag field for string arrays
 * Allows users to add/remove multiple string values as chips
 */
interface ChipFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "chip";
    /** Maximum number of chips allowed */
    maxChips?: number;
    /** Allow duplicate chips */
    allowDuplicates?: boolean;
    /** Transform chip value (e.g., lowercase, trim) */
    transform?: (value: string) => string;
    /** Validation function for individual chips */
    validateChip?: (value: string) => boolean | string;
}
/**
 * Custom field - render any custom component
 * Use this when you need to render a component that's not in the standard field types
 */
interface CustomFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
    type: "custom";
    /** Custom render function */
    render: (props: {
        /** Current field value */
        value: any;
        /** onChange handler to update form value */
        onChange: (value: any) => void;
        /** Form context */
        form: {
            control: any;
            getValues: () => T;
            setValue: (name: any, value: any) => void;
            watchedValues: Partial<T>;
        };
        /** Field configuration */
        field: CustomFieldConfig<T>;
    }) => React.ReactNode;
}
/**
 * Union of all field config types - enables type-safe field configurations
 * When type is "select", only "options" prop is shown, not currency/phone/etc props
 */
type FieldConfig<T extends FieldValues = FieldValues> = TextFieldConfig<T> | TextareaFieldConfig<T> | SelectFieldConfig<T> | CheckboxFieldConfig<T> | SwitchFieldConfig<T> | RadioGroupFieldConfig<T> | DateFieldConfig<T> | FileUploadFieldConfig<T> | ComboboxFieldConfig<T> | CurrencyFieldConfig<T> | PhoneFieldConfig<T> | PercentageFieldConfig<T> | OTPFieldConfig<T> | RatingFieldConfig<T> | ColorFieldConfig<T> | SliderFieldConfig<T> | RichTextFieldConfig<T> | AddressFieldConfig<T> | NameFieldConfig<T> | CreditCardFieldConfig<T> | ArrayFieldConfig<T> | ChipFieldConfig<T> | CustomFieldConfig<T>;
interface FormSectionConfig<T extends FieldValues = FieldValues> {
    /** Section identifier */
    id: string;
    /** Section title */
    title: string;
    /** Section description */
    description?: string;
    /** Fields in this section */
    fields: FieldConfig<T>[];
    /** Validation status */
    validationStatus?: "valid" | "invalid" | "pending" | "none";
    /** Section-level actions */
    actions?: React.ReactNode;
    /** Conditional rendering */
    when?: (values: Partial<T>) => boolean;
}
interface FormBuilderProps<T extends FieldValues = FieldValues> {
    /** Form identifier */
    id?: string;
    /** Form sections configuration */
    sections: FormSectionConfig<T>[];
    /** Initial form values */
    defaultValues?: any;
    /** Submit handler */
    onSubmit: (data: T) => void | Promise<void>;
    /** Submit handler for auto-save */
    onAutoSave?: (data: Partial<T>) => void | Promise<void>;
    /** Auto-save delay in ms */
    autoSaveDelay?: number;
    /** Loading state */
    isLoading?: boolean;
    /** Submit button text */
    submitLabel?: string;
    /** Cancel button text */
    cancelLabel?: string;
    /** Show cancel button */
    showCancel?: boolean;
    /** Cancel handler */
    onCancel?: () => void;
    /** Show unsaved changes warning */
    showDirtyWarning?: boolean;
    /** Sticky footer with actions */
    stickyFooter?: boolean;
    /** Custom submit button */
    submitButton?: React.ReactNode;
    /** Custom header content */
    header?: React.ReactNode;
    /** Custom footer content (before actions) */
    footer?: React.ReactNode;
    /** Form-level error */
    error?: string;
    /** Success message */
    successMessage?: string;
    /** Custom field renderer override */
    renderField?: (config: FieldConfig<T>, form: UseFormReturn<T>) => React.ReactNode;
    className?: string;
}

declare function FormBuilder<T extends FieldValues>({ id, sections, defaultValues, onSubmit, onAutoSave, autoSaveDelay, isLoading, submitLabel, cancelLabel, showCancel, onCancel, showDirtyWarning, stickyFooter, submitButton, header, footer, error, successMessage, renderField, className, }: FormBuilderProps<T>): React$1.JSX.Element;

type ValidationStatus = "valid" | "invalid" | "pending" | "none";
interface FormSectionProps {
    /** Section title */
    title: string;
    /** Optional description */
    description?: string;
    /** Validation status */
    validationStatus?: ValidationStatus;
    /** Section content */
    children: React__default.ReactNode;
    /** Optional actions (buttons, etc.) */
    actions?: React__default.ReactNode;
    /** Error message to display */
    error?: string;
    className?: string;
}
declare function FormSection({ title, description, validationStatus, children, actions, error, className, }: FormSectionProps): React__default.JSX.Element;

/**
 * Wizard step configuration
 */
interface WizardStepConfig<T extends FieldValues = FieldValues> {
    /** Unique step identifier */
    id: string;
    /** Step title displayed in stepper */
    title: string;
    /** Step description (optional, shown in stepper tooltip or subtitle) */
    description?: string;
    /** Icon for the step (optional) */
    icon?: React.ReactNode;
    /** Form sections for this step (used when type is 'form') */
    sections?: FormSectionConfig<T>[];
    /** Custom render function for this step */
    render?: (props: {
        /** Form instance from react-hook-form */
        form: UseFormReturn<T>;
        /** Current form values */
        values: T;
        /** Navigation state */
        navigation: WizardNavigationState;
    }) => React.ReactNode;
    /** Step type - 'form' for form fields, 'custom' for custom render */
    stepType?: "form" | "custom";
    /** Enable validation before proceeding to next step */
    enableValidation?: boolean;
    /** Conditional rendering - hide step based on form values */
    when?: (values: Partial<T>) => boolean;
}
/**
 * Stepper orientation (horizontal only)
 */
type StepperOrientation = "horizontal";
/**
 * Navigation mode for the wizard
 */
type NavigationMode = "sequential" | "free";
/**
 * FormWizard props
 */
interface FormWizardProps<T extends FieldValues = FieldValues> {
    /** Wizard identifier */
    id?: string;
    /** Wizard steps configuration */
    steps: WizardStepConfig<T>[];
    /** Initial form values */
    defaultValues?: Partial<T>;
    /** Submit handler (called only on final step) */
    onSubmit: (data: T) => void | Promise<void>;
    /** Auto-save handler (optional) */
    onAutoSave?: (data: Partial<T>) => void | Promise<void>;
    /** Auto-save delay in ms */
    autoSaveDelay?: number;
    /** Loading state */
    isLoading?: boolean;
    /** Submit button text */
    submitLabel?: string;
    /** Cancel button text */
    cancelLabel?: string;
    /** Show cancel button */
    showCancel?: boolean;
    /** Cancel handler */
    onCancel?: () => void;
    /** Show unsaved changes warning */
    showDirtyWarning?: boolean;
    /** Sticky footer with actions */
    stickyFooter?: boolean;
    /** Custom submit button */
    submitButton?: React.ReactNode;
    /** Custom header content */
    header?: React.ReactNode;
    /** Custom footer content (before actions) */
    footer?: React.ReactNode;
    /** Form-level error */
    error?: string;
    /** Success message */
    successMessage?: string;
    /** Custom field renderer override */
    renderField?: (config: FieldConfig<T>, form: UseFormReturn<T>) => React.ReactNode;
    /** Stepper orientation (horizontal only) */
    stepperOrientation?: StepperOrientation;
    /** Navigation mode - sequential or free (jump to completed steps) */
    navigationMode?: NavigationMode;
    /** Show step descriptions in stepper */
    showStepDescriptions?: boolean;
    /** Show step icons in stepper */
    showStepIcons?: boolean;
    /** Callback when step changes */
    onStepChange?: (stepIndex: number, stepId: string) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Wizard navigation state
 */
interface WizardNavigationState {
    /** Current step index */
    currentStep: number;
    /** Total number of steps */
    totalSteps: number;
    /** Is first step */
    isFirst: boolean;
    /** Is last step */
    isLast: boolean;
    /** Can go to previous step */
    canGoBack: boolean;
    /** Can proceed to next step */
    canGoNext: boolean;
    /** Completed step indices */
    completedSteps: number[];
}

/**
 * FormWizard - Multi-step form wizard component
 *
 * Provides a guided form experience with:
 * - Step-by-step navigation with validation
 * - Progress stepper (horizontal)
 * - Free or sequential navigation modes
 * - Auto-save support
 * - Single submit at the end
 *
 * @example
 * <FormWizard
 *   steps={wizardSteps}
 *   defaultValues={{ firstName: "", lastName: "" }}
 *   onSubmit={(data) => handleSubmit(data)}
 *   stepperOrientation="horizontal"
 *   navigationMode="free"
 * />
 */
declare function FormWizard<T extends FieldValues>({ id, steps, defaultValues, onSubmit, onAutoSave, autoSaveDelay, isLoading, submitLabel, cancelLabel, showCancel, onCancel, showDirtyWarning, stickyFooter, submitButton, header, footer, error, successMessage, renderField, stepperOrientation, navigationMode, showStepDescriptions, showStepIcons, onStepChange, className, }: FormWizardProps<T>): React$1.JSX.Element;

interface SearchBarProps {
    /** Current search value */
    value?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Search handler */
    onSearch?: (value: string) => void;
    /** Clear handler */
    onClear?: () => void;
    /** Loading state */
    isLoading?: boolean;
    /** Debounce delay in ms */
    debounce?: number;
    className?: string;
}
declare function SearchBar({ value, placeholder, onSearch, onClear, isLoading, debounce, className, }: SearchBarProps): React$1.JSX.Element;

interface StickyActionsProps {
    /** Action buttons */
    children: React__default.ReactNode;
    /** Show unsaved changes warning */
    showDirtyWarning?: boolean;
    /** Is the form dirty (has unsaved changes) */
    isDirty?: boolean;
    /** Position */
    position?: "bottom" | "top";
    className?: string;
}
declare function StickyActions({ children, showDirtyWarning, isDirty, position, className, }: StickyActionsProps): React__default.JSX.Element;

type ConfirmationVariant = "danger" | "warning" | "info" | "question";
interface ConfirmationDialogProps {
    /** Whether the dialog is open */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Dialog title */
    title: string;
    /** Dialog description */
    description?: string;
    /** Variant determines icon and button colors */
    variant?: ConfirmationVariant;
    /** Confirm button text */
    confirmText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Confirm button variant */
    confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    /** Handler when confirmed */
    onConfirm?: () => void;
    /** Handler when cancelled */
    onCancel?: () => void;
    /** Disable the confirm button */
    disabled?: boolean;
    /** Loading state */
    loading?: boolean;
}
declare function ConfirmationDialog({ open, onOpenChange, title, description, variant, confirmText, cancelText, confirmVariant, onConfirm, onCancel, disabled, loading, }: ConfirmationDialogProps): React$1.JSX.Element;

type ConnectionState = "connected" | "disconnected" | "connecting";
interface ConnectionStatusProps {
    /** Current connection state */
    status: ConnectionState;
    /** Show icon */
    showIcon?: boolean;
    /** Custom labels */
    labels?: {
        connected?: string;
        disconnected?: string;
        connecting?: string;
    };
    className?: string;
}
declare function ConnectionStatus({ status, showIcon, labels, className, }: ConnectionStatusProps): React$1.JSX.Element;

interface EmptyStateAction {
    /** Button label */
    label: string;
    /** Click handler */
    onClick: () => void;
    /** Button variant */
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
    /** Icon to show alongside label */
    icon?: React__default.ReactNode;
}
interface EmptyStateProps {
    /** Title text */
    title: string;
    /** Descriptive message */
    description?: string;
    /** Icon to display (defaults to PackageOpen) */
    icon?: LucideIcon;
    /** Primary action button */
    action?: EmptyStateAction;
    /** Secondary action button */
    secondaryAction?: EmptyStateAction;
    /** Compact mode for inline empty states */
    compact?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function EmptyState({ title, description, icon: Icon, action, secondaryAction, compact, className, }: EmptyStateProps): React__default.JSX.Element;

interface ErrorFallbackProps {
    /** The error that occurred */
    error?: Error;
    /** Optional error ID for support reference */
    errorId?: string;
    /** Reset error handler */
    resetError?: () => void;
    /** Custom fallback message */
    title?: string;
    /** Custom description */
    description?: string;
    /** Show error details */
    showDetails?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function ErrorFallback({ error, errorId, resetError, title, description, showDetails, className, }: ErrorFallbackProps): React$1.JSX.Element;

interface LoadingOverlayProps {
    /** Show/hide the overlay */
    isLoading: boolean;
    /** Optional message to display */
    message?: string;
    /** Optional description text */
    description?: string;
    /** Full screen or inline mode */
    fullScreen?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Children content (hidden when loading) */
    children?: React__default.ReactNode;
}
declare function LoadingOverlay({ isLoading, message, description, fullScreen, className, children, }: LoadingOverlayProps): React__default.JSX.Element;

interface ProgressStep {
    /** Unique identifier */
    id: string;
    /** Step title */
    title: string;
    /** Optional description */
    description?: string;
    /** Optional click handler */
    onClick?: () => void;
}
interface ProgressTrackerProps {
    /** Array of steps */
    steps: ProgressStep[];
    /** Current active step index (0-based) */
    currentStep: number;
    /** Orientation */
    orientation?: "horizontal" | "vertical";
    /** Show descriptions */
    showDescriptions?: boolean;
    /** Clickable steps */
    clickable?: boolean;
    className?: string;
}
declare function ProgressTracker({ steps, currentStep, orientation, showDescriptions, clickable, className, }: ProgressTrackerProps): React$1.JSX.Element;

interface SkeletonGeneratorProps {
    /** Type of skeleton */
    variant?: "card" | "list" | "table" | "text";
    /** Number of items */
    count?: number;
    className?: string;
}
declare function SkeletonGenerator({ variant, count, className, }: SkeletonGeneratorProps): React$1.JSX.Element;

interface ToastManagerProps {
    /** Position of the toaster */
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    /** Theme */
    theme?: "light" | "dark" | "system";
    /** Additional CSS classes */
    className?: string;
}
/**
 * ToastManager - Container for displaying toast notifications
 *
 * Use with sonner's toast() function:
 * import { toast } from 'sonner'
 * toast.success('Saved!')
 * toast.error('Failed')
 */
declare function ToastManager({ position, theme, className, }: ToastManagerProps): React$1.JSX.Element;

/**
 * Board toolbar props
 */
interface BoardToolbarProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Current search query */
    searchQuery?: string;
    /** Called when search query changes */
    onSearchChange?: (query: string) => void;
    /** Active filters count */
    filtersCount?: number;
    /** Called when filters button is clicked */
    onFiltersClick?: () => void;
    /** Current sort direction */
    sortDirection?: "asc" | "desc";
    /** Called when sort is toggled */
    onSortToggle?: () => void;
    /** Show search input */
    showSearch?: boolean;
    /** Show filters button */
    showFilters?: boolean;
    /** Show sort button */
    showSort?: boolean;
    /** Placeholder text for search */
    searchPlaceholder?: string;
}
/**
 * BoardToolbar - Toolbar for kanban board with search and filters
 *
 * @example
 * <BoardToolbar
 *   searchQuery={search}
 *   onSearchChange={setSearch}
 *   filtersCount={2}
 *   onFiltersClick={handleFilters}
 * />
 */
declare const BoardToolbar: React$1.ForwardRefExoticComponent<BoardToolbarProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Kanban Board Types
 *
 * Generic, agnostic types for any business use case.
 * Extend these types with your domain-specific fields.
 */
/**
 * User assignee information
 */
interface Assignee {
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
interface Tag {
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
interface Subtask {
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
interface Attachment {
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
interface BaseCardMetadata {
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
/**
 * Kanban column configuration
 */
interface KanbanColumn$1<T extends BaseCardMetadata = BaseCardMetadata> {
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
/**
 * Feature flags for kanban board
 * Enable/disable specific functionality
 */
interface KanbanFeatures {
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
declare const defaultFeatures: KanbanFeatures;
/**
 * Props for the main KanbanBoard component
 * @template T - Your custom card data type (must extend BaseCardMetadata)
 */
interface KanbanBoardProps<T extends BaseCardMetadata = BaseCardMetadata> {
    /**
     * Column definitions
     * Define your workflow stages
     */
    columns: KanbanColumn$1<T>[];
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
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void | Promise<void>;
    /**
     * Called when card is reordered within same column
     */
    onCardReorder?: (cardId: string, fromIndex: number, toIndex: number, columnId: string) => void | Promise<void>;
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
/**
 * Props for KanbanCard component
 * @template T - Your custom card data type
 */
interface KanbanCardProps<T extends BaseCardMetadata = BaseCardMetadata> extends React.HTMLAttributes<HTMLDivElement> {
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
/**
 * Props for KanbanCardHeader
 */
interface KanbanCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardContent
 */
interface KanbanCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardFooter
 */
interface KanbanCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardTitle
 */
interface KanbanCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardDescription
 */
interface KanbanCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardBadge (Priority badge)
 */
interface KanbanCardBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Priority level */
    priority: "low" | "medium" | "high" | "urgent";
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardLabel (Tag/Label)
 */
interface KanbanCardLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
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
interface KanbanCardLabelsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom CSS class */
    className?: string;
}
/**
 * Props for KanbanCardAvatar
 */
interface KanbanCardAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
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
interface KanbanCardDueDateProps extends React.HTMLAttributes<HTMLDivElement> {
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
interface KanbanCardSubtasksProps extends React.HTMLAttributes<HTMLDivElement> {
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
interface KanbanCardAttachmentsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Number of attachments */
    count: number;
    /** Custom CSS class */
    className?: string;
}
/**
 * Helper type to get card type from column
 */
type CardTypeFromColumn<T> = T extends KanbanColumn$1<infer U> ? U : never;
/**
 * Helper type for partial card updates
 */
type CardUpdate<T extends BaseCardMetadata> = Partial<Omit<T, "id">>;

/**
 * KanbanCard - Main container component for kanban cards
 *
 * Supports two usage patterns:
 * 1. Default rendering: Pass `card` prop with data
 * 2. Compound components: Use sub-components for custom layout
 *
 * @example
 * // Pattern 1: Default rendering
 * <KanbanCard card={cardData} />
 *
 * @example
 * // Pattern 2: Compound components
 * <KanbanCard>
 *   <KanbanCard.Header>
 *     <KanbanCard.Title>Title</KanbanCard.Title>
 *   </KanbanCard.Header>
 *   <KanbanCard.Content>Content</KanbanCard.Content>
 * </KanbanCard>
 */
declare const KanbanCard: <T extends BaseCardMetadata>(props: KanbanCardProps<T> & {
    ref?: React$1.ForwardedRef<HTMLDivElement>;
}) => React$1.ReactElement;

/**
 * KanbanCardAvatar - Assignee avatar for kanban cards
 *
 * Displays user avatar with fallback to initials
 *
 * @example
 * <KanbanCard.Avatar name="John Doe" avatarUrl="/avatars/john.jpg" />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Avatar name="Jane Smith" />
 * </KanbanCard.Footer>
 */
declare const KanbanCardAvatar: React$1.ForwardRefExoticComponent<KanbanCardAvatarProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardBadge - Priority badge for kanban cards
 *
 * Displays priority level with color-coded styling
 *
 * @example
 * <KanbanCard.Badge priority="high">High Priority</KanbanCard.Badge>
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Title</KanbanCard.Title>
 *   <KanbanCard.Badge priority="urgent">Urgent</KanbanCard.Badge>
 * </KanbanCard.Header>
 */
declare const KanbanCardBadge: React$1.ForwardRefExoticComponent<KanbanCardBadgeProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardContent - Content area for kanban cards
 *
 * Contains description, tags, and other card details
 *
 * @example
 * <KanbanCard.Content>
 *   <KanbanCard.Description>Description text</KanbanCard.Description>
 *   <KanbanCard.Labels>
 *     <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *   </KanbanCard.Labels>
 * </KanbanCard.Content>
 */
declare const KanbanCardContent: React$1.ForwardRefExoticComponent<KanbanCardContentProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardDescription - Description text for kanban cards
 *
 * Displays longer card description in muted text
 *
 * @example
 * <KanbanCard.Content>
 *   <KanbanCard.Description>
 *     Users can't login with special characters in password
 *   </KanbanCard.Description>
 * </KanbanCard.Content>
 */
declare const KanbanCardDescription: React$1.ForwardRefExoticComponent<KanbanCardDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>>;

/**
 * KanbanCardDueDate - Due date display for kanban cards
 *
 * Shows formatted date with calendar icon
 * Highlights overdue dates in red
 *
 * @example
 * <KanbanCard.DueDate date="2024-03-15" />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.DueDate date="2024-03-15" showTime />
 * </KanbanCard.Footer>
 */
declare const KanbanCardDueDate: React$1.ForwardRefExoticComponent<KanbanCardDueDateProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardFooter - Footer container for kanban cards
 *
 * Contains metadata like assignee, due date, subtasks, attachments
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Avatar name="John Doe" />
 *   <KanbanCard.DueDate date="2024-03-15" />
 *   <KanbanCard.Subtasks completed={3} total={5} />
 * </KanbanCard.Footer>
 */
declare const KanbanCardFooter: React$1.ForwardRefExoticComponent<KanbanCardFooterProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardHeader - Header container for kanban cards
 *
 * Contains title and badge/actions area
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Task Title</KanbanCard.Title>
 *   <KanbanCard.Badge priority="high">High</KanbanCard.Badge>
 * </KanbanCard.Header>
 */
declare const KanbanCardHeader: React$1.ForwardRefExoticComponent<KanbanCardHeaderProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardLabel - Single tag/label for kanban cards
 *
 * Displays a colored label for categorization
 *
 * @example
 * <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *
 * @example
 * <KanbanCard.Labels>
 *   <KanbanCard.Label color="red">Urgent</KanbanCard.Label>
 *   <KanbanCard.Label color="blue">Frontend</KanbanCard.Label>
 * </KanbanCard.Labels>
 */
declare const KanbanCardLabel: React$1.ForwardRefExoticComponent<KanbanCardLabelProps & React$1.RefAttributes<HTMLSpanElement>>;

/**
 * KanbanCardLabels - Container for multiple labels/tags
 *
 * Displays labels in a horizontal row with wrapping
 *
 * @example
 * <KanbanCard.Labels>
 *   <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *   <KanbanCard.Label color="green">Frontend</KanbanCard.Label>
 *   <KanbanCard.Label color="purple">v2.0</KanbanCard.Label>
 * </KanbanCard.Labels>
 */
declare const KanbanCardLabels: React$1.ForwardRefExoticComponent<KanbanCardLabelsProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardSubtasks - Subtask progress indicator for kanban cards
 *
 * Shows progress bar and completed/total count
 *
 * @example
 * <KanbanCard.Subtasks completed={3} total={5} />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Subtasks completed={8} total={10} />
 * </KanbanCard.Footer>
 */
declare const KanbanCardSubtasks: React$1.ForwardRefExoticComponent<KanbanCardSubtasksProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * KanbanCardTitle - Title text for kanban cards
 *
 * Displays the card title prominently
 *
 * @example
 * <KanbanCard.Header>
 *   <KanbanCard.Title>Fix login bug</KanbanCard.Title>
 * </KanbanCard.Header>
 */
declare const KanbanCardTitle: React$1.ForwardRefExoticComponent<KanbanCardTitleProps & React$1.RefAttributes<HTMLHeadingElement>>;

/**
 * Column header props
 */
interface ColumnHeaderProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Column title */
    title: string;
    /** Number of cards in column (optional) */
    cardCount?: number;
    /** Work-in-progress limit (optional) */
    cardLimit?: number;
    /** Whether column is collapsed */
    isCollapsed?: boolean;
    /** Accent color for visual organization */
    color?: string;
    /** Whether column is disabled */
    isDisabled?: boolean;
    /** Called when add card button is clicked */
    onAddCard?: () => void;
    /** Called when column options menu is opened */
    onOptionsClick?: () => void;
    /** Called when collapse toggle is clicked */
    onCollapseToggle?: () => void;
    /** Show collapse toggle button */
    showCollapse?: boolean;
    /** Show add card button */
    showAdd?: boolean;
    /** Show options menu */
    showOptions?: boolean;
}
/**
 * ColumnHeader - Header for kanban columns
 *
 * Displays column title, card count, and action buttons
 *
 * @example
 * <ColumnHeader
 *   title="In Progress"
 *   cardCount={5}
 *   cardLimit={10}
 *   onAddCard={() => handleAdd()}
 * />
 */
declare const ColumnHeader: React$1.ForwardRefExoticComponent<ColumnHeaderProps & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Draggable card props
 */
interface DraggableCardProps<T extends BaseCardMetadata = BaseCardMetadata> {
    /** Card data */
    card: T;
    /** Unique card identifier for dnd-kit */
    id: string;
    /** Whether card is currently being dragged */
    isDragging?: boolean;
    /** Called when card is clicked */
    onClick?: () => void;
    /** Custom card renderer */
    renderCard?: (card: T) => React__default.ReactNode;
}
/**
 * DraggableCard - Wrapper for kanban cards with drag-and-drop support
 */
declare function DraggableCard<T extends BaseCardMetadata>({ card, id, isDragging, onClick, renderCard, }: DraggableCardProps<T>): React__default.JSX.Element;

/**
 * Draggable column props
 */
interface DraggableColumnProps<T extends BaseCardMetadata = BaseCardMetadata> extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Column configuration data */
    column: KanbanColumn$1<T>;
    /** Unique column identifier for dnd-kit */
    id: string;
    /** Custom card renderer */
    renderCard?: (card: T, column: KanbanColumn$1<T>) => React__default.ReactNode;
    /** Called when add card button is clicked */
    onAddCard?: () => void;
    /** Called when card is clicked */
    onCardClick?: (card: T) => void;
    /** Called when card is moved */
    onCardMove?: (cardId: string, toColumnId: string, newIndex: number) => void;
    /** Whether column is being dragged */
    isDragging?: boolean;
    /** Show add card button */
    showAdd?: boolean;
    /** Maximum height of column content */
    maxHeight?: string;
}
/**
 * DraggableColumn - Column with drag-and-drop support
 */
declare function DraggableColumn<T extends BaseCardMetadata>({ column, id, renderCard, onAddCard, onCardClick, onCardMove, isDragging, showAdd, maxHeight, className, }: DraggableColumnProps<T>): React__default.JSX.Element;

/**
 * Draggable kanban board props
 */
interface DraggableKanbanBoardProps<T extends BaseCardMetadata = BaseCardMetadata> extends Omit<KanbanBoardProps<T>, "features"> {
    /** Called when card is moved between columns */
    onCardMove: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void | Promise<void>;
    /** Called when card is reordered within same column */
    onCardReorder?: (cardId: string, fromIndex: number, toIndex: number, columnId: string) => void | Promise<void>;
    /** Custom card renderer */
    renderCard?: (card: T, column: KanbanColumn$1<T>) => React$1.ReactNode;
}
/**
 * DraggableKanbanBoard - Kanban board with full drag-and-drop support
 */
declare function DraggableKanbanBoard<T extends BaseCardMetadata>({ columns: initialColumns, onCardMove, onCardReorder, renderCard, onCardClick, isLoading, emptyStateMessage, className, }: DraggableKanbanBoardProps<T>): React$1.JSX.Element;

/**
 * KanbanBoard - Main board container for kanban
 *
 * Displays columns horizontally with scrollable overflow
 *
 * @example
 * <KanbanBoard
 *   columns={columns}
 *   renderCard={(card) => <KanbanCard card={card} />}
 *   onCardMove={handleCardMove}
 * />
 */
declare const KanbanBoard: React$1.ForwardRefExoticComponent<KanbanBoardProps<any> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Kanban board state
 */
interface KanbanBoardState<T extends BaseCardMetadata> {
    /** All columns */
    columns: KanbanColumn$1<T>[];
    /** Board features */
    features: KanbanFeatures;
    /** Search query */
    searchQuery: string;
    /** Active filters */
    filters: {
        assignees?: string[];
        priorities?: string[];
        tags?: string[];
    };
    /** Loading state */
    isLoading: boolean;
    /** Error state */
    error: string | null;
}
/**
 * Kanban board actions
 */
interface KanbanBoardActions<T extends BaseCardMetadata> {
    /** Set search query */
    setSearchQuery: (query: string) => void;
    /** Set filters */
    setFilters: (filters: KanbanBoardState<T>["filters"]) => void;
    /** Move card between columns */
    moveCard: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => Promise<void>;
    /** Reorder card within column */
    reorderCard: (cardId: string, fromIndex: number, toIndex: number, columnId: string) => Promise<void>;
    /** Reorder columns */
    reorderColumns: (columnId: string, fromIndex: number, toIndex: number) => Promise<void>;
    /** Add new card */
    addCard: (columnId: string, card: T) => Promise<void>;
    /** Update card */
    updateCard: (cardId: string, updates: Partial<T>) => Promise<void>;
    /** Delete card */
    deleteCard: (cardId: string) => Promise<void>;
    /** Set loading state */
    setLoading: (loading: boolean) => void;
    /** Set error */
    setError: (error: string | null) => void;
}
type KanbanBoardContextValue<T extends BaseCardMetadata> = KanbanBoardState<T> & KanbanBoardActions<T>;
/**
 * Kanban board provider props
 */
interface KanbanBoardProviderProps<T extends BaseCardMetadata> {
    /** Initial columns */
    columns: KanbanColumn$1<T>[];
    /** Board features */
    features?: KanbanFeatures;
    /** API callback for moving cards */
    onMoveCard?: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => Promise<void>;
    /** API callback for reordering cards */
    onReorderCard?: (cardId: string, fromIndex: number, toIndex: number, columnId: string) => Promise<void>;
    /** API callback for reordering columns */
    onReorderColumns?: (columnId: string, fromIndex: number, toIndex: number) => Promise<void>;
    /** API callback for adding cards */
    onAddCard?: (columnId: string, card: T) => Promise<void>;
    /** API callback for updating cards */
    onUpdateCard?: (cardId: string, updates: Partial<T>) => Promise<void>;
    /** API callback for deleting cards */
    onDeleteCard?: (cardId: string) => Promise<void>;
    /** Children */
    children: React$1.ReactNode;
}
/**
 * KanbanBoardProvider - Context provider for kanban board state
 *
 * Provides:
 * - State management for columns, filters, search
 * - Optimistic updates for drag-and-drop
 * - API integration callbacks
 * - Loading and error states
 *
 * @example
 * <KanbanBoardProvider
 *   columns={initialColumns}
 *   onMoveCard={api.moveCard}
 * >
 *   <DraggableKanbanBoard />
 * </KanbanBoardProvider>
 */
declare function KanbanBoardProvider<T extends BaseCardMetadata>({ columns: initialColumns, features, onMoveCard, onReorderCard, onReorderColumns, onAddCard, onUpdateCard, onDeleteCard, children, }: KanbanBoardProviderProps<T>): React$1.JSX.Element;
/**
 * Hook to use kanban board context
 */
declare function useKanbanBoard<T extends BaseCardMetadata>(): KanbanBoardContextValue<T>;

/**
 * KanbanColumn props
 */
interface KanbanColumnProps<T extends BaseCardMetadata = BaseCardMetadata> extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Column configuration data */
    column: KanbanColumn$1<T>;
    /** Custom card renderer */
    renderCard?: (card: T, column: KanbanColumn$1<T>) => React$1.ReactNode;
    /** Called when add card button is clicked */
    onAddCard?: () => void;
    /** Called when card is clicked */
    onCardClick?: (card: T) => void;
    /** Called when column options menu is opened */
    onOptionsClick?: () => void;
    /** Called when collapse toggle is clicked */
    onCollapseToggle?: () => void;
    /** Whether column is being dragged */
    isDragging?: boolean;
    /** Show collapse toggle */
    showCollapse?: boolean;
    /** Show add card button */
    showAdd?: boolean;
    /** Show options menu */
    showOptions?: boolean;
    /** Maximum height of column content (default: "calc(100vh - 200px)") */
    maxHeight?: string;
}
/**
 * KanbanColumn - Individual column in a kanban board
 *
 * Contains header and scrollable list of cards
 *
 * @example
 * <KanbanColumn
 *   column={columnData}
 *   renderCard={(card) => <KanbanCard card={card} />}
 *   onAddCard={() => handleAddCard()}
 * />
 */
declare const KanbanColumn: React$1.ForwardRefExoticComponent<KanbanColumnProps<any> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Quick add card props
 */
interface QuickAddCardProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Whether form is open */
    isOpen?: boolean;
    /** Current card title value */
    value?: string;
    /** Called when value changes */
    onChange?: (value: string) => void;
    /** Called when add is clicked */
    onAdd?: (title: string) => void;
    /** Called when cancel is clicked */
    onCancel?: () => void;
    /** Whether form is submitting */
    isSubmitting?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Add button text */
    addButtonText?: string;
    /** Cancel button text */
    cancelButtonText?: string;
}
/**
 * QuickAddCard - Inline card creation form
 *
 * @example
 * <QuickAddCard
 *   isOpen={isAdding}
 *   value={title}
 *   onChange={setTitle}
 *   onAdd={(title) => handleAdd(title)}
 *   onCancel={() => setIsAdding(false)}
 * />
 */
declare const QuickAddCard: React$1.ForwardRefExoticComponent<QuickAddCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface AppShellProps {
    /** Sidebar navigation items */
    sidebar?: React__default.ReactNode;
    /** Custom sidebar header content */
    sidebarHeader?: React__default.ReactNode;
    /** Custom sidebar footer content */
    sidebarFooter?: React__default.ReactNode;
    /** Header content */
    header?: React__default.ReactNode;
    /** Main content */
    children: React__default.ReactNode;
    /** Footer content */
    footer?: React__default.ReactNode;
    /** Initial sidebar state */
    defaultOpen?: boolean;
    /** Sidebar variant */
    variant?: "sidebar" | "floating" | "inset";
    /** Additional CSS classes */
    className?: string;
}
/**
 * AppShell - A complete application shell with sidebar, header, content, and footer
 *
 * Uses the shadcn/ui Sidebar primitive for:
 * - Collapsible sidebar (icon-only mode)
 * - Automatic mobile sheet/drawer
 * - Built-in SidebarTrigger button
 * - Cookie-based state persistence
 * - Keyboard shortcut (Cmd/Ctrl + B)
 *
 * @example
 * <AppShell
 *   sidebar={<Nav />}
 *   header={<Header />}
 *   footer={<Footer />}
 *   sidebarHeader={<Logo />}
 *   sidebarFooter={<UserMenu />}
 * >
 *   <PageContent />
 * </AppShell>
 */
declare function AppShell({ sidebar, sidebarHeader, sidebarFooter, header, children, footer, defaultOpen, variant, className, }: AppShellProps): React__default.JSX.Element;

interface AspectRatioProps {
    /** Content to display */
    children?: React__default.ReactNode;
    /** Aspect ratio (default: 16/9) */
    ratio?: "square" | "video" | "photo" | "wide" | "golden" | number;
    /** Additional CSS classes */
    className?: string;
}
declare function AspectRatio({ children, ratio, className }: AspectRatioProps): React__default.JSX.Element;

interface CenterProps {
    /** Content to center */
    children: React__default.ReactNode;
    /** Center horizontally only */
    horizontal?: boolean;
    /** Center vertically only */
    vertical?: boolean;
    /** Full height container */
    fullHeight?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function Center({ children, horizontal, vertical, fullHeight, className, }: CenterProps): React__default.JSX.Element;

interface ContainerProps {
    /** Content to wrap */
    children: React__default.ReactNode;
    /** Maximum width (default: 'xl' = 1280px) */
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /** Padding size (default: 'md') */
    padding?: "none" | "sm" | "md" | "lg";
    /** Center content horizontally */
    center?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function Container({ children, size, padding, center, className, }: ContainerProps): React__default.JSX.Element;

/**
 * Navigation item for sidebar
 */
interface NavItem {
    /** Unique identifier */
    id: string;
    /** Display title */
    title: string;
    /** URL or href */
    url?: string;
    /** Icon component */
    icon?: LucideIcon;
    /** Badge count */
    badge?: number;
    /** Sub-items for collapsible menu */
    items?: NavItem[];
    /** Whether this item is active */
    isActive?: boolean;
    /** Disabled state */
    disabled?: boolean;
}
/**
 * Navigation group configuration
 */
interface NavGroup {
    /** Unique identifier */
    id: string;
    /** Group title (shown in sidebar) */
    title: string;
    /** Navigation items in this group */
    items: NavItem[];
    /** Icon for the group (optional) */
    icon?: LucideIcon;
}
/**
 * User information for sidebar footer
 */
interface SidebarUser {
    /** User name */
    name: string;
    /** User email */
    email: string;
    /** Avatar image URL */
    avatar?: string;
    /** Avatar fallback text */
    fallback?: string;
}
/**
 * Team information for sidebar header
 */
interface SidebarTeam {
    /** Team name */
    name: string;
    /** Team plan */
    plan: string;
    /** Team logo icon */
    icon: LucideIcon;
}
/**
 * Dashboard layout props
 */
interface DashboardLayoutProps {
    /** Navigation groups */
    navGroups?: NavGroup[];
    /** Current active URL (for highlighting) */
    activeUrl?: string;
    /** User information for sidebar footer */
    user?: SidebarUser;
    /** Teams for team switcher in header */
    teams?: SidebarTeam[];
    /** Currently active team */
    activeTeam?: SidebarTeam;
    /** Callback when team changes */
    onTeamChange?: (team: SidebarTeam) => void;
    /** Custom sidebar header content (overrides default) */
    sidebarHeader?: React$1.ReactNode;
    /** Custom sidebar footer content (overrides default) */
    sidebarFooter?: React$1.ReactNode;
    /** Header content */
    header?: React$1.ReactNode;
    /** Main content area */
    children: React$1.ReactNode;
    /** Footer content */
    footer?: React$1.ReactNode;
    /** Initial sidebar state */
    defaultOpen?: boolean;
    /** Sidebar variant */
    variant?: "sidebar" | "floating" | "inset";
    /** Additional CSS classes */
    className?: string;
}
/**
 * DashboardLayout - A complete admin panel layout with collapsible sidebar
 *
 * Features:
 * - Built-in navigation support with icons, groups, and badges
 * - Collapsible sidebar (icon-only mode)
 * - Automatic mobile sheet/drawer
 * - Built-in SidebarTrigger button
 * - Team switcher in sidebar header
 * - User menu in sidebar footer
 * - Cookie-based state persistence
 * - Keyboard shortcut (Cmd/Ctrl + B)
 *
 * @example
 * <DashboardLayout
 *   navGroups={[
 *     { id: "main", title: "Main", items: [
 *       { id: "dashboard", title: "Dashboard", url: "/", icon: LayoutDashboard }
 *     ]}
 *   ]}
 *   user={{ name: "John", email: "john@example.com" }}
 *   header={<SearchBar />}
 * >
 *   <PageContent />
 * </DashboardLayout>
 */
declare function DashboardLayout({ navGroups, activeUrl, user, teams, activeTeam, onTeamChange, sidebarHeader, sidebarFooter, header, children, footer, defaultOpen, variant, className, }: DashboardLayoutProps): React$1.JSX.Element;

interface FooterProps {
    /** Footer content */
    children: React__default.ReactNode;
    /** Footer variant */
    variant?: "default" | "sticky" | "fixed";
    /** Center content */
    center?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function Footer({ children, variant, center, className }: FooterProps): React__default.JSX.Element;

interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Optional subtitle or description */
    subtitle?: string;
    /** Breadcrumb items (last item is current page) */
    breadcrumbs?: Array<{
        label: string;
        href?: string;
    }>;
    /** Actions to display in the header (buttons, etc.) */
    actions?: React$1.ReactNode;
    /** Custom content to render below the title */
    children?: React$1.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
declare function PageHeader({ title, subtitle, breadcrumbs, actions, children, className, }: PageHeaderProps): React$1.JSX.Element;

interface ResponsiveGridProps {
    /** Grid items */
    children: React__default.ReactNode;
    /** Number of columns at each breakpoint */
    columns?: {
        /** Columns on mobile (default: 1) */
        mobile?: number;
        /** Columns on tablet (default: 2) */
        tablet?: number;
        /** Columns on desktop (default: 3) */
        desktop?: number;
        /** Columns on large screens (default: 4) */
        wide?: number;
    };
    /** Gap between grid items (default: 4 = 1rem) */
    gap?: number;
    /** Additional CSS classes */
    className?: string;
}
/**
 * ResponsiveGrid - A grid that automatically adjusts columns based on viewport
 *
 * @example
 * <ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 3, wide: 4 }} gap={4}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </ResponsiveGrid>
 */
declare function ResponsiveGrid({ children, columns, gap, className, }: ResponsiveGridProps): React__default.JSX.Element;

interface RightDrawerProps {
    /** Whether drawer is open */
    open?: boolean;
    /** Callback when open changes */
    onOpenChange?: (open: boolean) => void;
    /** Drawer title */
    title?: string;
    /** Drawer description */
    description?: string;
    /** Drawer width */
    width?: "sm" | "md" | "lg" | "xl";
    /** Drawer content */
    children: React__default.ReactNode;
    /** Show close button */
    showClose?: boolean;
    className?: string;
}
declare function RightDrawer({ open, onOpenChange, title, description, width, children, showClose, className, }: RightDrawerProps): React__default.JSX.Element;

interface SplitPaneProps {
    /** Primary panel content */
    primary: React$1.ReactNode;
    /** Secondary panel content */
    secondary: React$1.ReactNode;
    /** Initial split ratio (0-100) */
    initialRatio?: number;
    /** Minimum primary panel width in pixels */
    minPrimaryWidth?: number;
    /** Minimum secondary panel width in pixels */
    minSecondaryWidth?: number;
    /** Orientation */
    orientation?: "horizontal" | "vertical";
    className?: string;
}
declare function SplitPane({ primary, secondary, initialRatio, minPrimaryWidth, minSecondaryWidth, orientation, className, }: SplitPaneProps): React$1.JSX.Element;

interface StackProps {
    /** Stack content */
    children: React__default.ReactNode;
    /** Stack direction */
    direction?: "horizontal" | "vertical";
    /** Gap between items (default: 4 = 1rem) */
    gap?: number;
    /** Align items on cross axis */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Justify items on main axis */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /** Allow items to wrap */
    wrap?: boolean;
    /** Full width */
    fullWidth?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function Stack({ children, direction, gap, align, justify, wrap, fullWidth, className, }: StackProps): React__default.JSX.Element;
/**
 * Horizontal Stack - items arranged in a row
 */
declare function HStack(props: Omit<StackProps, "direction">): React__default.JSX.Element;
/**
 * Vertical Stack - items arranged in a column
 */
declare function VStack(props: Omit<StackProps, "direction">): React__default.JSX.Element;

interface StickyHeaderProps {
    /** Header content */
    children: React$1.ReactNode;
    /** Offset from top in pixels */
    offset?: number;
    /** Show border/shadow on scroll */
    showBorder?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function StickyHeader({ children, offset, showBorder, className, }: StickyHeaderProps): React$1.JSX.Element;

interface ThreeColumnLayoutProps {
    /** Left sidebar content (navigation) */
    sidebar: React$1.ReactNode;
    /** Main content area */
    children: React$1.ReactNode;
    /** Right panel content (details) */
    aside?: React$1.ReactNode;
    /** Sidebar width in pixels (default: 240) */
    sidebarWidth?: number;
    /** Aside panel width in pixels (default: 320) */
    asideWidth?: number;
    /** Whether sidebar can be collapsed */
    sidebarCollapsible?: boolean;
    /** Whether aside can be collapsed */
    asideCollapsible?: boolean;
    /** Initial sidebar collapsed state */
    defaultSidebarCollapsed?: boolean;
    /** Initial aside collapsed state */
    defaultAsideCollapsed?: boolean;
    /** Additional CSS classes */
    className?: string;
}
declare function ThreeColumnLayout({ sidebar, children, aside, sidebarWidth, asideWidth, sidebarCollapsible, asideCollapsible, defaultSidebarCollapsed, defaultAsideCollapsed, className, }: ThreeColumnLayoutProps): React$1.JSX.Element;

interface TwoColumnLayoutProps {
    /** Sidebar content */
    sidebar: React$1.ReactNode;
    /** Main content */
    children: React$1.ReactNode;
    /** Sidebar width in pixels (default: 280) */
    sidebarWidth?: number;
    /** Whether sidebar can be collapsed */
    collapsible?: boolean;
    /** Initial collapsed state */
    defaultCollapsed?: boolean;
    /** Sidebar position */
    sidebarPosition?: "left" | "right";
    /** Additional CSS classes */
    className?: string;
}
declare function TwoColumnLayout({ sidebar, children, sidebarWidth, collapsible, defaultCollapsed, sidebarPosition, className, }: TwoColumnLayoutProps): React$1.JSX.Element;

interface BreadcrumbItemType {
    /** Display label */
    label: string;
    /** Link href (last item may not have link) */
    href?: string;
    /** Whether this item is active */
    isActive?: boolean;
}
interface BreadcrumbTrailProps {
    /** Array of breadcrumb items */
    items: BreadcrumbItemType[];
    /** Show ellipsis for collapsed items */
    collapsible?: boolean;
    /** Maximum items to show before collapsing */
    maxItems?: number;
    /** Additional CSS classes */
    className?: string;
}
declare function BreadcrumbTrail({ items, collapsible, maxItems, className, }: BreadcrumbTrailProps): React$1.JSX.Element | null;

interface CommandItem {
    id: string;
    label: string;
    icon?: React$1.ReactNode;
    onSelect?: () => void;
}
interface CommandPaletteProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    items?: CommandItem[];
    placeholder?: string;
    className?: string;
}
declare function CommandPalette({ open, onOpenChange, items, placeholder, className, }: CommandPaletteProps): React$1.JSX.Element;

interface MobileNavItem {
    /** Unique identifier */
    id: string;
    /** Label */
    label: string;
    /** Icon */
    icon: React__default.ReactNode;
    /** Badge count (optional) */
    badge?: number;
    /** Handler */
    onClick?: () => void;
}
interface MobileNavProps {
    /** Navigation items */
    items: MobileNavItem[];
    /** Currently active item */
    activeItem?: string;
    /** Show search button */
    showSearch?: boolean;
    /** Search handler */
    onSearch?: () => void;
    /** Menu handler */
    onMenu?: () => void;
    className?: string;
}
declare function MobileNav({ items, activeItem, showSearch, onSearch, onMenu, className, }: MobileNavProps): React__default.JSX.Element;

/**
 * Pagination component with smart page calculation
 *
 * A comprehensive pagination component that handles:
 * - Page number calculation with ellipsis
 * - First/Last page navigation (optional)
 * - Previous/Next navigation
 * - Disabled states for boundaries
 * - Accessibility (ARIA labels)
 *
 * @example
 * ```tsx
 * <Pagination
 *   page={currentPage}
 *   totalPages={100}
 *   onPageChange={(page) => setPage(page)}
 *   siblingCount={1}
 *   showFirstLast
 * />
 * ```
 */
interface PaginationProps {
    /** Current page number (1-based) */
    page: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Number of visible page buttons on each side of current page */
    siblingCount?: number;
    /** Show first/last page buttons with chevrons */
    showFirstLast?: boolean;
    /** Compact mode - hides page numbers, shows only prev/next */
    compact?: boolean;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Smart Pagination Component
 *
 * Uses primitive pagination components with added logic for:
 * - Page number calculation
 * - Boundary handling
 * - First/Last page buttons
 * - Compact mode
 */
declare function Pagination({ page, totalPages, onPageChange, siblingCount, showFirstLast, compact, className, }: PaginationProps): React$1.JSX.Element | null;

interface SectionJumperSection {
    /** Unique identifier */
    id: string;
    /** Section label */
    label: string;
    /** Optional icon */
    icon?: React__default.ReactNode;
}
interface SectionJumperProps {
    /** Sections to jump to */
    sections: SectionJumperSection[];
    /** Currently active section */
    activeSection?: string;
    /** Section click handler */
    onSectionClick?: (id: string) => void;
    /** Show icons */
    showIcons?: boolean;
    className?: string;
}
declare function SectionJumper({ sections, activeSection, onSectionClick, showIcons, className, }: SectionJumperProps): React__default.JSX.Element;

interface TabItem {
    /** Unique identifier */
    id: string;
    /** Tab label */
    label: string;
    /** Tab content */
    content: React__default.ReactNode;
    /** Disable tab */
    disabled?: boolean;
}
interface TabsPanelProps {
    /** Tab items */
    items: TabItem[];
    /** Default active tab */
    defaultTab?: string;
    /** Currently active tab (controlled) */
    value?: string;
    /** Callback when tab changes */
    onValueChange?: (value: string) => void;
    /** Tabs variant */
    variant?: "default" | "pills" | "outline";
    className?: string;
}
declare function TabsPanel({ items, defaultTab, value, onValueChange, variant, className, }: TabsPanelProps): React__default.JSX.Element;

export { type ActiveFilter, ActivityTimeline, type ActivityTimelineProps, AppShell, type AppShellProps, AspectRatio, type AspectRatioProps, type Assignee, type Attachment, KanbanCardAvatar as Avatar, KanbanCardBadge as Badge, type BaseCardMetadata, BoardToolbar, type BoardToolbarProps, type BreadcrumbItemType, BreadcrumbTrail, type BreadcrumbTrailProps, KanbanCard as Card, CardGrid, type CardGridProps, type CardTypeFromColumn, type CardUpdate, Center, type CenterProps, type ColumnDef, ColumnHeader, type ColumnHeaderProps, type CommandItem, CommandPalette, type CommandPaletteProps, ConfirmationDialog, type ConfirmationDialogProps, type ConfirmationVariant, type ConnectionState, ConnectionStatus, type ConnectionStatusProps, Container, type ContainerProps, KanbanCardContent as Content, DashboardLayout, type DashboardLayoutProps, DataGrid, type DataGridColumn, type DataGridProps, type DataGridRow, KanbanCardDescription as Description, DraggableCard, type DraggableCardProps, DraggableColumn, type DraggableColumnProps, DraggableKanbanBoard, type DraggableKanbanBoardProps, KanbanCardDueDate as DueDate, DurationPicker, type DurationPickerProps, EmptyState, type EmptyStateAction, type EmptyStateProps, EntityCard, type EntityCardProps, ErrorFallback, type ErrorFallbackProps, type FieldConfig, type FieldOption, type FieldType, FilterBar, type FilterBarProps, FilterChip, type FilterChipProps, FilterChips, type FilterChipsProps, FilterDialog, type FilterDialogProps, type FilterField, type FilterState, Footer, type FooterProps, FormBuilder, type FormBuilderProps, FormSection, type FormSectionConfig, type FormSectionProps, FormWizard, type FormWizardProps, HStack, KanbanCardHeader as Header, KanbanBoard, type KanbanBoardProps, KanbanBoardProvider, KanbanCard, type KanbanCardAttachmentsProps, type KanbanCardAvatarProps, type KanbanCardBadgeProps, type KanbanCardContentProps, type KanbanCardDescriptionProps, type KanbanCardDueDateProps, KanbanCardFooter, type KanbanCardFooterProps, type KanbanCardHeaderProps, type KanbanCardLabelProps, type KanbanCardLabelsProps, type KanbanCardProps, type KanbanCardSubtasksProps, type KanbanCardTitleProps, KanbanColumn, type KanbanFeatures, KanbanCardLabel as Label, KanbanCardLabels as Labels, LoadingOverlay, type LoadingOverlayProps, MasonryBoard, type MasonryBoardProps, type MasonryItem, MetricCard, type MetricCardProps, type TrendDirection$1 as MetricTrendDirection, MobileNav, type MobileNavItem, type MobileNavProps, PageHeader, type PageHeaderProps, Pagination, type PaginationProps, type ProgressStep, ProgressTracker, type ProgressTrackerProps, QuickAddCard, type QuickAddCardProps, ResponsiveGrid, type ResponsiveGridProps, RightDrawer, type RightDrawerProps, SearchBar, type SearchBarProps, SectionHeader, type SectionHeaderProps, SectionJumper, type SectionJumperProps, type SectionJumperSection, SkeletonGenerator, type SkeletonGeneratorProps, SmartDataTable, type SmartDataTableProps, SplitPane, type SplitPaneProps, Stack, type StackProps, StatCard, type StatCardProps, StatusGrid, type StatusGridProps, type StatusItem, StickyActions, type StickyActionsProps, StickyHeader, type StickyHeaderProps, type Subtask, KanbanCardSubtasks as Subtasks, type TabItem, TabsPanel, type TabsPanelProps, type Tag, ThreeColumnLayout, type ThreeColumnLayoutProps, type TimelineItem, KanbanCardTitle as Title, ToastManager, type ToastManagerProps, type TrendDirection, TwoColumnLayout, type TwoColumnLayoutProps, VStack, type ValidationStatus, type WizardNavigationState, type WizardStepConfig, defaultFeatures, useKanbanBoard };
