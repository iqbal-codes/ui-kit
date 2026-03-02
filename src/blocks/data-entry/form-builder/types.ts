import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

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
  | "url";

export interface FieldOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface FieldConfig<T extends FieldValues = FieldValues> {
  /** Field name (dot notation for nested: 'user.email') */
  name: Path<T>;
  /** Field type */
  type: FieldType;
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
  /** Options for select/radio/checkbox groups */
  options?: FieldOption[];
  /** Multiple selection for select/combobox */
  multiple?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Conditional rendering */
  when?: (values: Partial<T>) => boolean;
  /** Custom field component */
  render?: (field: any, form: any) => React.ReactNode;
  /** File upload specific */
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  onUpload?: (files: File[]) => void | Promise<void>;
  /** Textarea specific */
  rows?: number;
}

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
