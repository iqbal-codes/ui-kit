# DashboardLayout

> Dashboard layout with sidebar and header.

## Import

```typescript
import { DashboardLayout } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DashboardLayout provides a complete dashboard structure.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar` | `ReactNode` | **required** | Sidebar content |
| `header` | `ReactNode` | **required** | Header content |
| `children` | `ReactNode` | **required** | Main content |
| `sidebarWidth` | `string \| number` | `260` | Sidebar width |
| `className` | `string` | - | Additional CSS classes |

---

## Usage

```tsx
import { DashboardLayout } from '@iqbal-codes/ui-kit/blocks';

<DashboardLayout
  sidebar={<Sidebar />}
  header={<Header />}
>
  <DashboardContent />
</DashboardLayout>
```

---

## Related Components

- [AppShell](./app-shell.md) - App shell
- [TwoColumnLayout](./two-column-layout.md) - Two column layout
