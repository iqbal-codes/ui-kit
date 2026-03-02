// FormBuilder Smart Block
// Comprehensive declarative form builder with shadcn primitives

export { FormBuilder } from "./form-builder";
export { FieldRenderer } from "./form-field-renderer";

// Types
export type {
  FieldType,
  FieldOption,
  FieldConfig,
  FormSectionConfig,
  FormBuilderProps,
} from "./types";

// Field components (for custom usage)
export {
  TextField,
  TextareaField,
  SelectField,
  ComboboxField,
  CheckboxField,
  SwitchField,
  RadioGroupField,
  DateField,
  FileUploadField,
} from "./fields";

export type {
  TextFieldProps,
  TextareaFieldProps,
  SelectFieldProps,
  ComboboxFieldProps,
  CheckboxFieldProps,
  SwitchFieldProps,
  RadioGroupFieldProps,
  DateFieldProps,
  FileUploadFieldProps,
  UploadedFile,
} from "./fields";
