import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

/**
 * Union type of all available field types
 */
export type FieldType =
  | "text"
  | "email"
  | "number"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "radio"
  | "date"
  | "datetime"
  | "time"
  | "file"
  | "combobox"
  | "multi-select"
  | "tel"
  | "url"
  | "currency"
  | "phone"
  | "percentage"
  | "otp"
  | "rating"
  | "color"
  | "slider"
  | "rich-text"
  | "code"
  | "address"
  | "name"
  | "credit-card"
  | "array"
  | "chip";

export interface FieldOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Base field config shared by all field types
 */
export interface BaseFieldConfig<T extends FieldValues = FieldValues> {
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
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    min?: { value: number; message: string };
    max?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
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
  maxSize?: number; // in bytes
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
export interface ArrayFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
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
export interface ChipFieldConfig<T extends FieldValues = FieldValues> extends BaseFieldConfig<T> {
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
 * Union of all field config types - enables type-safe field configurations
 * When type is "select", only "options" prop is shown, not currency/phone/etc props
 */
export type FieldConfig<T extends FieldValues = FieldValues> =
  | TextFieldConfig<T>
  | TextareaFieldConfig<T>
  | SelectFieldConfig<T>
  | CheckboxFieldConfig<T>
  | SwitchFieldConfig<T>
  | RadioGroupFieldConfig<T>
  | DateFieldConfig<T>
  | FileUploadFieldConfig<T>
  | ComboboxFieldConfig<T>
  | CurrencyFieldConfig<T>
  | PhoneFieldConfig<T>
  | PercentageFieldConfig<T>
  | OTPFieldConfig<T>
  | RatingFieldConfig<T>
  | ColorFieldConfig<T>
  | SliderFieldConfig<T>
  | RichTextFieldConfig<T>
  | AddressFieldConfig<T>
  | NameFieldConfig<T>
  | CreditCardFieldConfig<T>
  | ArrayFieldConfig<T>
  | ChipFieldConfig<T>;

/**
 * Helper type to get field-specific config based on type
 * @example
 * type SelectConfig = FieldConfigByType<"select">
 * // Result: SelectFieldConfig with required "options" prop
 */
export type FieldConfigByType<
  K extends FieldConfig["type"],
  T extends FieldValues = FieldValues,
> = Extract<FieldConfig<T>, { type: K }>;

export interface FormSectionConfig<T extends FieldValues = FieldValues> {
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
  /** Collapsible */
  collapsible?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Section-level actions */
  actions?: React.ReactNode;
  /** Conditional rendering */
  when?: (values: Partial<T>) => boolean;
}

export interface FormBuilderProps<T extends FieldValues = FieldValues> {
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
