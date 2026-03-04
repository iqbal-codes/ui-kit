# ConnectionStatus

> Network/connection status indicator badge.

## Import

```typescript
import { ConnectionStatus } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ConnectionStatus displays network state with:
- **States** - connected, disconnected, connecting
- **Icon** - Visual indicator
- **Custom labels** - Customizable text

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `ConnectionState` | **required** | Connection state |
| `showIcon` | `boolean` | `true` | Show status icon |
| `labels` | `{ connected?: string; disconnected?: string; connecting?: string }` | - | Custom labels |
| `className` | `string` | - | Additional CSS classes |

### ConnectionState

```typescript
type ConnectionState = "connected" | "disconnected" | "connecting";
```

---

## Basic Usage

```tsx
import { ConnectionStatus } from '@iqbal-codes/ui-kit/blocks';

// Online
<ConnectionStatus status="connected" />

// Offline
<ConnectionStatus status="disconnected" />

// Connecting
<ConnectionStatus status="connecting" />
```

---

## Custom Labels

```tsx
<ConnectionStatus
  status={status}
  labels={{
    connected: 'Online',
    disconnected: 'Offline',
    connecting: 'Connecting...'
  }}
/>
```

---

## With API Status

```tsx
function APIStatus() {
  const { isConnected } = useNetworkStatus();

  return (
    <div className="flex items-center gap-2">
      <span>API:</span>
      <ConnectionStatus
        status={isConnected ? 'connected' : 'disconnected'}
      />
    </div>
  );
}
```

---

## Without Icon

```tsx
<ConnectionStatus status="connected" showIcon={false} />
```

---

## Related Components

- [ToastManager](./toast-manager.md) - Toast notifications
- [LoadingOverlay](./loading-overlay.md) - Loading state
