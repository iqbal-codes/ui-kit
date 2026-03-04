# FormBuilder

> Dynamic form builder from configuration with auto-save, validation, and sticky footer.

## Import

```typescript
import { FormBuilder } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

FormBuilder is a dynamic form component that generates forms from configuration objects. It provides:

- **Configuration-driven** - Build forms from JSON-like config
- **30+ field types** - Text, select, date, currency, rating, etc.
- **Validation** - Built-in and custom validation rules
- **Auto-save** - Automatically save form data with configurable delay
- **Sticky footer** - Keep action buttons visible during scroll

---

## Basic Usage

```tsx
import { FormBuilder } from '@iqbal-codes/ui-kit/blocks';

const sections = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Enter your personal details',
    fields: [
      { name: 'firstName', type: 'text', label: 'First Name', rules: { required: 'Required' } },
      { name: 'lastName', type: 'text', label: 'Last Name', rules: { required: 'Required' } },
      { name: 'email', type: 'email', label: 'Email', rules: { required: 'Required' } },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferences',
    fields: [
      { name: 'theme', type: 'select', label: 'Theme', options: [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
      ]},
      { name: 'newsletter', type: 'switch', label: 'Subscribe to newsletter' },
    ],
  },
];

<FormBuilder
  sections={sections}
  defaultValues={{ firstName: '', lastName: '', email: '', theme: 'light', newsletter: false }}
  onSubmit={(data) => console.log('Submitted:', data)}
  submitLabel="Save"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Form identifier |
| `sections` | `FormSectionConfig<T>[]` | **required** | Form sections configuration |
| `defaultValues` | `Partial<T>` | - | Initial form values |
| `onSubmit` | `(data: T) => void \| Promise<void>` | **required** | Submit handler |
| `onAutoSave` | `(data: Partial<T>) => void \| Promise<void>` | - | Auto-save handler |
| `autoSaveDelay` | `number` | `1000` | Auto-save delay (ms) |
| `isLoading` | `boolean` | `false` | Loading state |
| `submitLabel` | `string` | `"Submit"` | Submit button text |
| `cancelLabel` | `string` | `"Cancel"` | Cancel button text |
| `showCancel` | `boolean` | `false` | Show cancel button |
| `onCancel` | `() => void` | - | Cancel handler |
| `showDirtyWarning` | `boolean` | `false` | Show unsaved changes warning |
| `stickyFooter` | `boolean` | `false` | Make footer sticky |
| `submitButton` | `ReactNode` | - | Custom submit button |
| `header` | `ReactNode` | - | Custom header content |
| `footer` | `ReactNode` | - | Custom footer content |
| `error` | `string` | - | Form-level error |
| `successMessage` | `string` | - | Success message |
| `renderField` | `(config, form) => ReactNode` | - | Custom field renderer |
| `className` | `string` | - | Additional CSS classes |

---

## Types

### FormSectionConfig

```typescript
interface FormSectionConfig<T extends FieldValues = FieldValues> {
  id: string;
  title: string;
  description?: string;
  fields: FieldConfig<T>[];
  validationStatus?: "valid" | "invalid" | "pending" | "none";
  actions?: ReactNode;
  when?: (values: Partial<T>) => boolean;
}
```

### FieldConfig

```typescript
type FieldType = 
  | "text" | "email" | "password" | "number" | "tel" | "url"
  | "textarea" | "select" | "checkbox" | "switch" | "radio"
  | "date" | "datetime" | "time" | "file"
  | "combobox" | "multi-select"
  | "currency" | "phone" | "percentage" | "otp"
  | "rating" | "color" | "slider"
  | "rich-text" | "code" | "address" | "name" | "credit-card"
  | "array" | "chip" | "custom";

interface FieldConfig<T> {
  name: Path<T>;
  type: FieldType;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: any;
  rules?: ValidationRules;
  disabled?: boolean;
  readOnly?: boolean;
  when?: (values: Partial<T>) => boolean;
  // Type-specific props...
  options?: FieldOption[];  // for select, radio, combobox
  currencySymbol?: string;   // for currency
  minValue?: number;        // for currency, percentage, slider
  maxValue?: number;
  // ... etc
}
```

### ValidationRules

```typescript
interface ValidationRules {
  required?: string | boolean;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: any, formValues?: T) => boolean | string;
}
```

---

## Usage Examples

### Example 1: Complete Form with All Features

```tsx
interface UserForm {
  name: string;
  email: string;
  age: number;
  role: string;
  bio: string;
  notifications: boolean;
  avatar: FileList;
}

const sections: FormSectionConfig<UserForm>[] = [
  {
    id: 'basic',
    title: 'Basic Information',
    description: 'Enter your basic details',
    fields: [
      { name: 'name', type: 'text', label: 'Full Name', placeholder: 'John Doe',
        rules: { required: 'Name is required' } },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'john@example.com',
        rules: { 
          required: 'Email is required',
          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }
        } },
      { name: 'age', type: 'number', label: 'Age', placeholder: '25',
        rules: { min: { value: 18, message: 'Must be 18+' } } },
      { name: 'role', type: 'select', label: 'Role', 
        options: [
          { value: 'admin', label: 'Administrator' },
          { value: 'user', label: 'User' },
          { value: 'guest', label: 'Guest' },
        ],
        rules: { required: 'Select a role' } },
    ],
  },
  {
    id: 'bio',
    title: 'Biography',
    fields: [
      { name: 'bio', type: 'textarea', label: 'About You', rows: 4,
        placeholder: 'Tell us about yourself...' },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    fields: [
      { name: 'notifications', type: 'switch', label: 'Enable notifications' },
    ],
  },
];

function UserProfileForm() {
  const handleSubmit = async (data: UserForm) => {
    await api.saveProfile(data);
  };

  return (
    <FormBuilder
      sections={sections}
      defaultValues={{ name: '', email: '', age: 0, role: '', bio: '', notifications: true }}
      onSubmit={handleSubmit}
      header={<h1 className="text-2xl font-bold">Edit Profile</h1>}
      submitLabel="Save Changes"
      showCancel
      stickyFooter
    />
  );
}
```

### Example 2: With Auto-Save

```tsx
<FormBuilder
  sections={sections}
  defaultValues={defaultValues}
  onSubmit={handleSubmit}
  onAutoSave={async (data) => {
    await api.saveDraft(data);
  }}
  autoSaveDelay={2000}
  showDirtyWarning
/>
```

### Example 3: Conditional Fields

```tsx
const sections = [
  {
    id: 'account',
    title: 'Account Type',
    fields: [
      { name: 'accountType', type: 'radio', label: 'Account Type',
        options: [
          { value: 'personal', label: 'Personal' },
          { value: 'business', label: 'Business' },
        ]},
    ],
  },
  {
    id: 'business',
    title: 'Business Details',
    // Only show when accountType is 'business'
    when: (values) => values.accountType === 'business',
    fields: [
      { name: 'companyName', type: 'text', label: 'Company Name',
        rules: { required: 'Company name is required' } },
      { name: 'taxId', type: 'text', label: 'Tax ID' },
    ],
  },
];
```

### Example 4: Custom Field Renderer

```tsx
<FormBuilder
  sections={sections}
  defaultValues={defaultValues}
  onSubmit={handleSubmit}
  renderField={(config, form) => {
    if (config.type === 'custom') {
      return <CustomField config={config} form={form} />;
    }
    return undefined; // Use default renderer
  }}
/>
```

---

## Field Types

| Type | Props | Description |
|------|-------|-------------|
| `text` | `inputMode`, `autoComplete` | Single-line text |
| `email` | - | Email input |
| `password` | - | Password input |
| `number` | `min`, `max` | Number input |
| `tel` | - | Phone input |
| `textarea` | `rows` | Multi-line text |
| `select` | `options[]` | Dropdown |
| `checkbox` | - | Checkbox |
| `switch` | - | Toggle |
| `radio` | `options[]` | Radio buttons |
| `date` | - | Date picker |
| `datetime` | - | Date & time |
| `time` | - | Time picker |
| `file` | `accept`, `maxSize` | File upload |
| `combobox` | `options[]`, `searchable` | Searchable dropdown |
| `multi-select` | `options[]` | Multiple selection |
| `currency` | `currencySymbol`, `decimalPlaces` | Currency input |
| `phone` | `defaultCountry` | Phone with country |
| `percentage` | `minValue`, `maxValue` | Percentage input |
| `otp` | `otpLength` | OTP input |
| `rating` | `maxRating`, `icon` | Star rating |
| `color` | `format`, `presets` | Color picker |
| `slider` | `min`, `max`, `step` | Range slider |
| `array` | `fields[]`, `minItems` | Repeatable fields |
| `chip` | `maxChips` | Input chips |

---

## Related Components

- [FormWizard](./form-wizard.md) - Multi-step wizard
- [FormSection](./form-section.md) - Section wrapper
- [StickyActions](./sticky-actions.md) - Sticky footer
