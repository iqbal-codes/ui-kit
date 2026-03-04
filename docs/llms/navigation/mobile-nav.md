# MobileNav

> Mobile navigation drawer.

## Import

```typescript
import { MobileNav } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Nav open state |
| `onOpenChange` | `(open: boolean) => void` | **required** | Open handler |
| `items` | `MobileNavItem[]` | **required** | Nav items |
| `title` | `string` | - | Nav title |

### MobileNavItem

```typescript
interface MobileNavItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
}
```

---

## Usage

```tsx
import { MobileNav } from '@iqbal-codes/ui-kit/blocks';

const items = [
  { id: 'home', label: 'Home', href: '/', icon: <HomeIcon /> },
  { id: 'settings', label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
];

<MobileNav
  open={isOpen}
  onOpenChange={setOpen}
  items={items}
  title="Menu"
/>
```
