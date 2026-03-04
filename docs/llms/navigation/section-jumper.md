# SectionJumper

> Jump to section navigation.

## Import

```typescript
import { SectionJumper } from '@iqbal-codes/ui-kit/blocks';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `SectionJumperSection[]` | **required** | Sections |
| `activeSection` | `string` | - | Active section |
| `onSectionChange` | `(section: string) => void` | **required** | Change handler |
| `position` | `"left" \| "right"` | `"right"` | Jumper position |

### SectionJumperSection

```typescript
interface SectionJumperSection {
  id: string;
  label: string;
  icon?: ReactNode;
}
```

---

## Usage

```tsx
import { SectionJumper } from '@iqbal-codes/ui-kit/blocks';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'details', label: 'Details' },
  { id: 'settings', label: 'Settings' },
];

<SectionJumper
  sections={sections}
  activeSection={activeSection}
  onSectionChange={setSection}
/>
```
