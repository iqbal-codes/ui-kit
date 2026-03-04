# ThreeColumnLayout

> Three column layout with left sidebar, main, and right sidebar.

## Import

```typescript
import { ThreeColumnLayout } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `leftSidebar` | `ReactNode` | - | Left sidebar |
| `main` | `ReactNode` | **required** | Main content |
| `rightSidebar` | `ReactNode` | - | Right sidebar |
| `leftWidth` | `string \| number` | `250` | Left sidebar width |
| `rightWidth` | `string \| number` | `300` | Right sidebar width |

---

## Usage

```tsx
import { ThreeColumnLayout } from '@iqbal-codes/ui-kit/blocks';

<ThreeColumnLayout
  leftSidebar={<Navigation />}
  main={<Content />}
  rightSidebar={<DetailsPanel />}
/>
```
