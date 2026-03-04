# FormSection

> Form section wrapper with title, description, validation status, and actions.

## Import

```typescript
import { FormSection } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

FormSection is a wrapper component for grouping form fields with:
- **Title and description** - Section headers
- **Validation status** - Visual indicator (valid/invalid/pending)
- **Error display** - Section-level error messages
- **Actions** - Buttons or other controls

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Section title |
| `description` | `string` | - | Section description |
| `validationStatus` | `"valid" \| "invalid" \| "pending" \| "none"` | `"none"` | Validation status |
| `children` | `ReactNode` | **required** | Section content |
| `actions` | `ReactNode` | - | Action buttons |
| `error` | `string` | - | Error message |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { FormSection } from '@iqbal-codes/ui-kit/blocks';

<FormSection
  title="Personal Information"
  description="Enter your personal details"
  validationStatus="valid"
>
  <Input name="firstName" />
  <Input name="lastName" />
  <Input name="email" />
</FormSection>
```

---

## Validation Status

```tsx
// Valid state - green checkmark
<FormSection title="Section" validationStatus="valid">
  {/* fields */}
</FormSection>

// Invalid state - red alert
<FormSection title="Section" validationStatus="invalid" error="Please fix the errors">
  {/* fields */}
</FormSection>

// Pending state - amber alert
<FormSection title="Section" validationStatus="pending">
  {/* fields */}
</FormSection>
```

---

## With Actions

```tsx
<FormSection
  title="Contact Information"
  description="How can we reach you?"
  actions={
    <Button size="sm" onClick={addContact}>
      Add Contact
    </Button>
  }
>
  <Input name="email" />
  <Input name="phone" />
</FormSection>
```

---

## Complete Example

```tsx
import { FormSection } from '@iqbal-codes/ui-kit/blocks';

function ContactFormSection() {
  const [status, setStatus] = useState<'none' | 'valid' | 'invalid'>('none');
  const [error, setError] = useState('');

  const validate = () => {
    if (!email) {
      setStatus('invalid');
      setError('Email is required');
      return false;
    }
    setStatus('valid');
    setError('');
    return true;
  };

  return (
    <FormSection
      title="Contact Information"
      description="Enter your contact details"
      validationStatus={status}
      error={error}
      actions={
        <Button size="sm" variant="outline" onClick={validate}>
          Validate
        </Button>
      }
    >
      <div className="grid gap-4">
        <Input name="email" placeholder="email@example.com" />
        <Input name="phone" placeholder="+1 (555) 000-0000" />
      </div>
    </FormSection>
  );
}
```

---

## Related Components

- [FormBuilder](./form-builder.md) - Full form builder
- [FormWizard](./form-wizard.md) - Multi-step wizard
