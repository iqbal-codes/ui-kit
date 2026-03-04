# TwoColumnLayout

> Two column layout with sidebar and main content.

## Import

```typescript
import { TwoColumnLayout } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar` | `ReactNode` | - | Sidebar content |
| `main` | `ReactNode` | **required** | Main content |
| `sidebarWidth` | `string \| number` | `280` | Sidebar width |
| `sidebarPosition` | `"left" \| "right"` | `"left"` | Sidebar position |

---

## Usage

```tsx
import { TwoColumnLayout } from '@iqbal-codes/ui-kit/blocks';

<TwoColumnLayout
  sidebar={<Sidebar />}
  main={<Content />}
/>
```

---

## Right Sidebar

```tsx
<TwoColumnLayout
  main={<Content />}
  sidebar={<RightPanel />}
  sidebarPosition="right"
/>
```
