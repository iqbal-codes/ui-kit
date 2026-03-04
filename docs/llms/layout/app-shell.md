# AppShell

> Application shell with sidebar and header.

## Import

```typescript
import { AppShell } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

AppShell provides base app structure.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar` | `ReactNode` | - | Sidebar content |
| `header` | `ReactNode` | - | Header content |
| `main` | `ReactNode` | **required** | Main content |
| `sidebarWidth` | `string \| number` | `280` | Sidebar width |
| `className` | `string` | - | Additional CSS classes |

---

## Usage

```tsx
import { AppShell } from '@iqbal-codes/ui-kit/blocks';

<AppShell
  sidebar={<Navigation />}
  header={<TopBar />}
  main={<Content />}
/>
```

---

## Related Components

- [DashboardLayout](./dashboard-layout.md) - Dashboard layout
