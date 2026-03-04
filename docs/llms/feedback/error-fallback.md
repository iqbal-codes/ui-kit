# ErrorFallback

> Error boundary fallback UI for handling uncaught errors.

## Import

```typescript
import { ErrorFallback } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ErrorFallback displays error states with:
- **Error message** - User-friendly error display
- **Reset handler** - Try again functionality
- **Error details** - Optional technical details
- **Error ID** - Support reference

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | `Error` | - | Error object |
| `errorId` | `string` | - | Error ID for support |
| `resetError` | `() => void` | - | Reset error handler |
| `title` | `string` | `"Something went wrong"` | Error title |
| `description` | `string` | - | Custom description |
| `showDetails` | `boolean` | `false` | Show error details |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { ErrorFallback } from '@iqbal-codes/ui-kit/blocks';

// In an error boundary
class MyErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }
    return this.props.children;
  }
}
```

---

## With Error Details

```tsx
<ErrorFallback
  error={error}
  title="Failed to load data"
  description="There was a problem loading your data. Please try again."
  showDetails
  resetError={handleReset}
/>
```

---

## With Error ID

```tsx
<ErrorFallback
  error={error}
  errorId="ERR-12345"
  showDetails
/>
```

---

## Full Example

```tsx
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <YourApp />
    </ErrorBoundary>
  );
}
```

---

## Related Components

- [EmptyState](./empty-state.md) - Empty content
- [LoadingOverlay](./loading-overlay.md) - Loading state
