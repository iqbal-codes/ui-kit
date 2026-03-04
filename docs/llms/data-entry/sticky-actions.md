# StickyActions

> Sticky footer component for form actions with dirty state warning.

## Import

```typescript
import { StickyActions } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

StickyActions keeps form action buttons visible while scrolling:
- **Sticky positioning** - Stays at top/bottom during scroll
- **Dirty warning** - Shows unsaved changes indicator
- **Flexible content** - Any buttons or controls

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Action buttons |
| `showDirtyWarning` | `boolean` | `false` | Show unsaved warning |
| `isDirty` | `boolean` | `false` | Form is dirty |
| `position` | `"bottom" \| "top"` | `"bottom"` | Sticky position |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { StickyActions } from '@iqbal-codes/ui-kit/blocks';
import { Button } from '@iqbal-codes/ui-kit/primitives';

<StickyActions>
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</StickyActions>
```

---

## With Dirty Warning

```tsx
import { StickyActions } from '@iqbal-codes/ui-kit/blocks';

function EditForm() {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div>
      {/* Form fields */}
      <StickyActions showDirtyWarning isDirty={isDirty}>
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave}>
          Save Changes
        </Button>
      </StickyActions>
    </div>
  );
}
```

---

## Top Position

```tsx
<StickyActions position="top">
  <Button>Submit</Button>
</StickyActions>
```

---

## Integration with FormBuilder/FormWizard

StickyActions is automatically used when `stickyFooter` prop is enabled:

```tsx
// FormBuilder with sticky footer
<FormBuilder
  sections={sections}
  stickyFooter  // Auto-includes StickyActions
  onSubmit={handleSubmit}
/>

// FormWizard with sticky footer
<FormWizard
  steps={steps}
  stickyFooter
  onSubmit={handleSubmit}
/>
```

---

## Manual Integration

```tsx
import { StickyActions } from '@iqbal-codes/ui-kit/blocks';
import { Button } from '@iqbal-codes/ui-kit/primitives';

function CustomForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className="pb-20"> {/* Padding for sticky footer */}
      <form ref={formRef}>
        {/* Form fields */}
      </form>
      
      <StickyActions
        showDirtyWarning
        isDirty={isDirty}
        className="justify-end"
      >
        <Button
          type="button"
          variant="outline"
          onClick={() => formRef.current?.reset()}
        >
          Reset
        </Button>
        <Button
          type="submit"
          form={formRef.current?.id}
        >
          Submit
        </Button>
      </StickyActions>
    </div>
  );
}
```

---

## CSS Classes Applied

The component applies these classes:
- `sticky z-30` - Sticky positioning
- `flex items-center justify-between gap-4` - Flex layout
- `border-t` - Top border
- `bg-background` - Background
- `px-4 py-3` - Padding
- `shadow-[0_-2px_10px_rgba(0,0,0,0.05)]` - Shadow (bottom only)

---

## Related Components

- [FormBuilder](./form-builder.md) - Uses StickyActions
- [FormWizard](./form-wizard.md) - Uses StickyActions
