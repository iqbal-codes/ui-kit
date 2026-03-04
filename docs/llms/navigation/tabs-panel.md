# TabsPanel

> Tabbed content panel with multiple variants.

## Import

```typescript
import { TabsPanel } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | **required** | Tab items |
| `defaultTab` | `string` | - | Default tab ID |
| `value` | `string` | - | Controlled value |
| `onValueChange` | `(value: string) => void` | - | Tab change handler |
| `variant` | `"default" \| "pills" \| "outline"` | `"default"` | Tab variant |
| `className` | `string` | - | Additional CSS |

### TabItem

```typescript
interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}
```

---

## Usage

```tsx
import { TabsPanel } from '@iqbal-codes/ui-kit/blocks';

const items = [
  { id: 'general', label: 'General', content: <GeneralSettings /> },
  { id: 'security', label: 'Security', content: <SecuritySettings /> },
  { id: 'notifications', label: 'Notifications', content: <NotifSettings /> },
];

<TabsPanel items={items} />
```

---

## Variants

```tsx
// Default
<TabsPanel items={items} variant="default" />

// Pills
<TabsPanel items={items} variant="pills" />

// Outline
<TabsPanel items={items} variant="outline" />
```
