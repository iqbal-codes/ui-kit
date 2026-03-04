# LoadingOverlay

> Full-screen or inline loading overlay with spinner.

## Import

```typescript
import { LoadingOverlay } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

LoadingOverlay provides visual feedback during loading with:
- **Full screen mode** - Covers entire viewport
- **Inline mode** - Covers parent container
- **Message** - Optional loading text
- **Children** - Content that becomes dimmed

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isLoading` | `boolean` | **required** | Show/hide overlay |
| `message` | `string` | - | Loading message |
| `description` | `string` | - | Description text |
| `fullScreen` | `boolean` | `false` | Full screen mode |
| `children` | `ReactNode` | - | Content to overlay |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { LoadingOverlay } from '@iqbal-codes/ui-kit/blocks';

<LoadingOverlay isLoading message="Loading...">
  <PageContent />
</LoadingOverlay>
```

---

## Full Screen Mode

```tsx
<LoadingOverlay
  isLoading={isSubmitting}
  fullScreen
  message="Saving..."
  description="Please wait while we save your changes"
/>
```

---

## Inline Mode

```tsx
// Dims content while loading
<LoadingOverlay isLoading={isLoading} message="Loading data...">
  <DataTable data={data} columns={columns} />
</LoadingOverlay>
```

---

## Form Submission

```tsx
function SubmitForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await submitData();
    setIsLoading(false);
  };

  return (
    <LoadingOverlay isLoading={isLoading} message="Submitting..." fullScreen>
      <Form onSubmit={handleSubmit} />
    </LoadingOverlay>
  );
}
```

---

## Related Components

- [EmptyState](./empty-state.md) - Empty content
- [SkeletonGenerator](./skeleton-generator.md) - Loading placeholders
- [Spinner](../../primitives/spinner.md) - Spinner primitive
