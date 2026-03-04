# RightDrawer

> Right-side slide-out drawer panel.

## Import

```typescript
import { RightDrawer } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Drawer open state |
| `onOpenChange` | `(open: boolean) => void` | **required** | Open state handler |
| `title` | `string` | - | Drawer title |
| `children` | `ReactNode` | **required** | Drawer content |
| `width` | `string \| number` | `400` | Drawer width |

---

## Usage

```tsx
import { RightDrawer } from '@iqbal-codes/ui-kit/blocks';

<RightDrawer
  open={isOpen}
  onOpenChange={setOpen}
  title="Settings"
  width={500}
>
  <SettingsForm />
</RightDrawer>
```
