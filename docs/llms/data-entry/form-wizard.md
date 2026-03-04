# FormWizard

> Multi-step form wizard with validation, progress tracking, and navigation.

## Import

```typescript
import { FormWizard } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

FormWizard is a comprehensive multi-step form component that guides users through a series of steps with:

- **Step-by-step navigation** - Progress through forms in logical steps
- **Progress stepper** - Visual indicator of current step and completion
- **Validation** - Per-step validation before proceeding
- **Auto-save** - Automatically save form data as users progress
- **Free or sequential navigation** - Allow jumping between completed steps or enforce linear progression
- **Conditional steps** - Show/hide steps based on form values
- **Custom renders** - Full control over step content rendering

## Features

| Feature | Description |
|---------|-------------|
| Horizontal Stepper | Visual progress with numbered steps and completion status |
| Sequential Navigation | Enforce linear progression through steps |
| Free Navigation | Allow jumping to any completed step |
| Per-Step Validation | Validate only current step fields before proceeding |
| Auto-Save | Automatically save form data with configurable delay |
| Conditional Steps | Show/hide steps based on form values |
| Custom Render | Full control over step content with render prop |
| Sticky Footer | Keep action buttons visible during scroll |

---

## Basic Usage

```tsx
import { FormWizard } from '@iqbal-codes/ui-kit/blocks';
import { WizardStepConfig } from '@iqbal-codes/ui-kit/blocks';

const steps: WizardStepConfig<UserForm>[] = [
  {
    id: 'personal',
    title: 'Personal Info',
    enableValidation: true,
    sections: [
      {
        id: 'personal-details',
        title: 'Personal Details',
        fields: [
          { name: 'firstName', type: 'text', label: 'First Name', rules: { required: 'Required' } },
          { name: 'lastName', type: 'text', label: 'Last Name', rules: { required: 'Required' } },
          { name: 'email', type: 'email', label: 'Email', rules: { required: 'Required' } },
        ],
      },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferences',
    enableValidation: false,
    sections: [
      {
        id: 'prefs',
        title: 'Your Preferences',
        fields: [
          { name: 'theme', type: 'select', label: 'Theme', options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]},
          { name: 'newsletter', type: 'switch', label: 'Subscribe to newsletter' },
        ],
      },
    ],
  },
];

<FormWizard
  steps={steps}
  defaultValues={{ firstName: '', lastName: '', email: '', theme: 'light', newsletter: false }}
  onSubmit={(data) => console.log('Submitted:', data)}
  submitLabel="Complete Registration"
/>
```

---

## Props

### FormWizardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Form identifier |
| `steps` | `WizardStepConfig<T>[]` | **required** | Wizard steps configuration |
| `defaultValues` | `Partial<T>` | - | Initial form values |
| `onSubmit` | `(data: T) => void \| Promise<void>` | **required** | Submit handler (called only on final step) |
| `onAutoSave` | `(data: Partial<T>) => void \| Promise<void>` | - | Auto-save handler |
| `autoSaveDelay` | `number` | `1000` | Auto-save delay in milliseconds |
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
| `error` | `string` | - | Form-level error message |
| `successMessage` | `string` | - | Success message to display |
| `renderField` | `(config, form) => ReactNode` | - | Custom field renderer |
| `stepperOrientation` | `"horizontal"` | `"horizontal"` | Stepper orientation |
| `navigationMode` | `"sequential" \| "free"` | `"free"` | Navigation mode |
| `showStepDescriptions` | `boolean` | `false` | Show step descriptions |
| `showStepIcons` | `boolean` | `true` | Show step icons/numbers |
| `onStepChange` | `(stepIndex, stepId) => void` | - | Step change callback |
| `className` | `string` | - | Additional CSS classes |

---

## Types

### WizardStepConfig

```typescript
interface WizardStepConfig<T extends FieldValues = FieldValues> {
  /** Unique step identifier */
  id: string;
  /** Step title displayed in stepper */
  title: string;
  /** Step description (shown in stepper tooltip or subtitle) */
  description?: string;
  /** Icon for the step */
  icon?: ReactNode;
  /** Form sections for this step (used when type is 'form') */
  sections?: FormSectionConfig<T>[];
  /** Custom render function for this step */
  render?: (props: {
    form: UseFormReturn<T>;
    values: T;
    navigation: WizardNavigationState;
  }) => ReactNode;
  /** Step type - 'form' for form fields, 'custom' for custom render */
  stepType?: "form" | "custom";
  /** Enable validation before proceeding to next step */
  enableValidation?: boolean;
  /** Conditional rendering - hide step based on form values */
  when?: (values: Partial<T>) => boolean;
}
```

### WizardNavigationState

```typescript
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
```

### NavigationMode

```typescript
type NavigationMode = "sequential" | "free";
// "sequential" - Must complete steps in order
// "free" - Can jump to any completed step
```

### StepStatus

```typescript
type StepStatus = "pending" | "current" | "completed";
```

---

## Usage Examples

### Example 1: Basic Employee Onboarding Form

```tsx
import { FormWizard } from '@iqbal-codes/ui-kit/blocks';
import { WizardStepConfig } from '@iqbal-codes/ui-kit/blocks';

interface EmployeeForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  agreeToTerms: boolean;
}

const steps: WizardStepConfig<EmployeeForm>[] = [
  {
    id: 'personal-info',
    title: 'Personal Information',
    enableValidation: true,
    sections: [
      {
        id: 'personal-details',
        title: 'Personal Details',
        fields: [
          { name: 'firstName', type: 'text', label: 'First Name', rules: { required: 'Required' } },
          { name: 'lastName', type: 'text', label: 'Last Name', rules: { required: 'Required' } },
          { name: 'email', type: 'email', label: 'Email', rules: { required: 'Required' } },
          { name: 'phone', type: 'tel', label: 'Phone' },
        ],
      },
    ],
  },
  {
    id: 'employment',
    title: 'Employment',
    enableValidation: true,
    sections: [
      {
        id: 'job-info',
        title: 'Job Information',
        fields: [
          { name: 'jobTitle', type: 'text', label: 'Job Title', rules: { required: 'Required' } },
          { name: 'department', type: 'select', label: 'Department', options: [
            { value: 'engineering', label: 'Engineering' },
            { value: 'design', label: 'Design' },
            { value: 'marketing', label: 'Marketing' },
          ], rules: { required: 'Required' } },
        ],
      },
    ],
  },
  {
    id: 'review',
    title: 'Review & Submit',
    enableValidation: true,
    sections: [
      {
        id: 'review-section',
        title: 'Review Your Information',
        fields: [
          { name: 'agreeToTerms', type: 'checkbox', label: 'I agree to the terms', rules: { required: 'Required' } },
        ],
      },
    ],
  },
];

function EmployeeOnboarding() {
  const handleSubmit = async (data: EmployeeForm) => {
    await api.submitOnboarding(data);
  };

  return (
    <FormWizard
      steps={steps}
      defaultValues={{
        firstName: '', lastName: '', email: '', phone: '',
        jobTitle: '', department: '', agreeToTerms: false
      }}
      onSubmit={handleSubmit}
      submitLabel="Complete Onboarding"
      showCancel
      stickyFooter
    />
  );
}
```

### Example 2: Sequential Navigation (No Skipping)

```tsx
<FormWizard
  steps={steps}
  defaultValues={defaultValues}
  onSubmit={handleSubmit}
  navigationMode="sequential"  // Users must complete steps in order
  submitLabel="Submit"
/>
```

### Example 3: Conditional Steps

Show/hide steps based on form values:

```tsx
const steps: WizardStepConfig<RegistrationForm>[] = [
  {
    id: 'basic',
    title: 'Basic Info',
    enableValidation: true,
    sections: [{
      id: 'basic-info',
      fields: [
        { name: 'name', type: 'text', label: 'Full Name', rules: { required: 'Required' } },
        { name: 'hasCompany', type: 'switch', label: 'I have a company' },
      ],
    }],
  },
  {
    id: 'company',
    title: 'Company Details',
    enableValidation: true,
    // Only show when hasCompany is true
    when: (values) => values.hasCompany === true,
    sections: [{
      id: 'company-info',
      fields: [
        { name: 'companyName', type: 'text', label: 'Company Name', rules: { required: 'Required' } },
        { name: 'companySize', type: 'select', label: 'Company Size', options: [...] },
      ],
    }],
  },
  {
    id: 'confirm',
    title: 'Confirm',
    enableValidation: true,
    sections: [{
      id: 'confirm',
      fields: [
        { name: 'agree', type: 'checkbox', label: 'I agree to terms', rules: { required: 'Required' } },
      ],
    }],
  },
];
```

### Example 4: Custom Render (Review Step)

Use `render` prop to display read-only form data:

```tsx
const steps: WizardStepConfig<FormData>[] = [
  // ... form steps
  {
    id: 'review',
    title: 'Review',
    stepType: 'custom',  // Use custom render
    render: ({ values, navigation }) => (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Review Your Information</h3>
          <p className="text-sm text-muted-foreground">
            Please review before submitting
          </p>
        </div>

        {/* Display all form values in read-only format */}
        <div className="rounded-lg border">
          <div className="border-b px-4 py-3">
            <h4 className="font-medium">Personal Information</h4>
          </div>
          <dl className="divide-y">
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium">Name</dt>
              <dd className="col-span-2 text-sm">{values.name}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium">Email</dt>
              <dd className="col-span-2 text-sm">{values.email}</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="confirm" className="h-4 w-4" />
          <label htmlFor="confirm" className="text-sm">
            I confirm all information is accurate
          </label>
        </div>
      </div>
    ),
  },
];
```

### Example 5: Auto-Save

```tsx
<FormWizard
  steps={steps}
  defaultValues={defaultValues}
  onSubmit={handleSubmit}
  onAutoSave={async (data) => {
    await api.saveDraft(data);
  }}
  autoSaveDelay={2000}  // Wait 2 seconds after last change
  showDirtyWarning
/>
```

### Example 6: With Custom Header and Footer

```tsx
<FormWizard
  steps={steps}
  defaultValues={defaultValues}
  onSubmit={handleSubmit}
  header={
    <div className="mb-6">
      <h2 className="text-2xl font-bold">Create New Account</h2>
      <p className="text-muted-foreground">Follow the steps to create your account</p>
    </div>
  }
  footer={
    <div className="text-sm text-muted-foreground">
      <p>Need help? <a href="/support">Contact support</a></p>
    </div>
  }
  submitLabel="Create Account"
/>
```

---

## Form Section Configuration

FormWizard uses `FormSectionConfig` from [FormBuilder](./form-builder.md) for defining form fields. Each step can contain multiple sections:

```typescript
interface FormSectionConfig<T> {
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
  actions?: ReactNode;
  /** Conditional rendering */
  when?: (values: Partial<T>) => boolean;
}
```

### Field Types

Supported field types include:

| Type | Description |
|------|-------------|
| `text` | Single-line text input |
| `email` | Email input |
| `password` | Password input |
| `number` | Number input |
| `tel` | Phone number input |
| `textarea` | Multi-line text |
| `select` | Dropdown select |
| `checkbox` | Checkbox |
| `switch` | Toggle switch |
| `radio` | Radio buttons |
| `date` | Date picker |
| `datetime` | Date & time picker |
| `time` | Time picker |
| `currency` | Currency input with symbol |
| `percentage` | Percentage input |
| `rating` | Star rating |
| `slider` | Range slider |
| `combobox` | Searchable dropdown |
| `multi-select` | Multiple selection |
| `file` | File upload |
| `phone` | Phone with country code |
| `otp` | One-time password |
| `color` | Color picker |
| `array` | Repeatable field group |
| `chip` | Input chips/tags |

### Validation Rules

```typescript
const field = {
  name: 'email',
  type: 'email',
  label: 'Email Address',
  rules: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
};

// Or with custom validation
const field = {
  name: 'confirmPassword',
  type: 'password',
  rules: {
    required: 'Please confirm your password',
    validate: (value, formValues) => 
      value === formValues.password || 'Passwords do not match',
  },
};
```

---

## Related Components

- [FormBuilder](./form-builder.md) - Single-page form builder
- [FormSection](./form-section.md) - Form section wrapper
- [StickyActions](./sticky-actions.md) - Sticky footer for forms
