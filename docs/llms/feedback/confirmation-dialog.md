# ConfirmationDialog

> Modal dialog for user confirmation with customizable actions.

## Import

```typescript
import { ConfirmationDialog } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ConfirmationDialog displays a modal for user confirmation with:
- **Variants** - danger, warning, info, question
- **Custom buttons** - Configurable labels and variants
- **Loading state** - Disable button during async operations
- **Callbacks** - onConfirm, onCancel handlers

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Dialog open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open state handler |
| `title` | `string` | **required** | Dialog title |
| `description` | `string` | - | Dialog description |
| `variant` | `"danger" \| "warning" \| "info" \| "question"` | `"question"` | Dialog variant |
| `confirmText` | `string` | `"Confirm"` | Confirm button text |
| `cancelText` | `string` | `"Cancel"` | Cancel button text |
| `confirmVariant` | `ButtonVariant` | - | Confirm button variant |
| `onConfirm` | `() => void` | - | Confirm handler |
| `onCancel` | `() => void` | - | Cancel handler |
| `disabled` | `boolean` | `false` | Disable confirm button |
| `loading` | `boolean` | `false` | Loading state |

---

## Basic Usage

```tsx
import { ConfirmationDialog } from '@iqbal-codes/ui-kit/blocks';

function DeleteButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete</Button>
      <ConfirmationDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        variant="danger"
        onConfirm={handleDelete}
      />
    </>
  );
}
```

---

## Variants

### Danger (Delete)
```tsx
<ConfirmationDialog
  title="Delete Account"
  description="This will permanently delete your account."
  variant="danger"
  onConfirm={deleteAccount}
/>
```

### Warning
```tsx
<ConfirmationDialog
  title="Leave Page"
  description="You have unsaved changes. Are you sure you want to leave?"
  variant="warning"
  onConfirm={handleLeave}
/>
```

### Question
```tsx
<ConfirmationDialog
  title="Continue Action"
  description="Do you want to proceed with this action?"
  variant="question"
  onConfirm={handleProceed}
/>
```

---

## With Loading State

```tsx
<ConfirmationDialog
  open={open}
  onOpenChange={setOpen}
  title="Submit Form"
  description="Are you ready to submit?"
  loading={isSubmitting}
  onConfirm={async () => {
    setIsSubmitting(true);
    await submitForm();
    setIsSubmitting(false);
  }}
/>
```

---

## Related Components

- [EmptyState](./empty-state.md) - Empty content
- [ToastManager](./toast-manager.md) - Toast notifications
