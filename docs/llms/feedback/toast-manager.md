# Toast notification system using ToastManager

> sonner.

## Import

```typescript
import { ToastManager } from '@iqbal-codes/ui-kit/blocks';
import { toast } from 'sonner';
```

## Overview

ToastManager displays toast notifications using sonner:
- **Positions** - top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- **Themes** - light, dark, system
- **Types** - success, error, warning, info, default

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `ToastPosition` | `"bottom-right"` | Toast position |
| `theme` | `"light" \| "dark" \| "system"` | `"system"` | Toast theme |
| `className` | `string` | - | Additional CSS classes |

### ToastPosition

```typescript
type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right";
```

---

## Setup

```tsx
// Add ToastManager to your app root
import { ToastManager } from '@iqbal-codes/ui-kit/blocks';

function App() {
  return (
    <>
      <YourApp />
      <ToastManager position="top-right" />
    </>
  );
}
```

---

## Usage

```tsx
import { toast } from 'sonner';

// Success
toast.success('Saved!', { description: 'Changes saved successfully' });

// Error
toast.error('Failed!', { description: 'Something went wrong' });

// Warning
toast.warning('Warning', { description: 'Please review your input' });

// Info
toast.info('Info', { description: 'New updates available' });

// Default
toast.message('Hello!');
```

---

## With Actions

```tsx
toast.success('File saved', {
  action: {
    label: 'Undo',
    onClick: () => handleUndo(),
  },
});
```

---

## Promise Toast

```tsx
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save',
});
```

---

## Custom Toast

```tsx
toast.custom((t) => (
  <div className="flex items-center gap-2">
    <Icon />
    <span>Custom message</span>
    <button onClick={() => toast.dismiss(t)}>Dismiss</button>
  </div>
));
```

---

## Related Components

- [ConfirmationDialog](./confirmation-dialog.md) - Confirmation dialog
- [EmptyState](./empty-state.md) - Empty content
