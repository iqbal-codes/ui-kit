# CommandPalette

> Command/search palette (Ctrl+K).

## Import

```typescript
import { CommandPalette } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Open state |
| `onOpenChange` | `(open: boolean) => void` | **required** | Open handler |
| `items` | `CommandItem[]` | **required** | Command items |
| `placeholder` | `string` | - | Placeholder text |
| `onSelect` | `(item: CommandItem) => void` | - | Select handler |

### CommandItem

```typescript
interface CommandItem {
  id: string;
  label: string;
  action: () => void;
}
```

---

## Usage

```tsx
import { CommandPalette } from '@iqbal-codes/ui-kit/blocks';

<CommandPalette
  open={isOpen}
  onOpenChange={setOpen}
  items={items}
  onSelect={handleSelect}
/>
```
