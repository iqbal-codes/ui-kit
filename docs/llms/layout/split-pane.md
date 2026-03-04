# SplitPane

> Resizable split view with drag handle.

## Import

```typescript
import { SplitPane } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `left` | `ReactNode` | **required** | Left pane |
| `right` | `ReactNode` | **required** | Right pane |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | Split direction |
| `defaultSplit` | `number` | `50` | Initial split (%) |
| `minSize` | `number` | `20` | Min pane size (%) |
| `resizable` | `boolean` | `true` | Enable resizing |

---

## Usage

```tsx
import { SplitPane } from '@iqbal-codes/ui-kit/blocks';

<SplitPane
  left={<FileTree />}
  right={<Editor />}
  defaultSplit={30}
/>
```
