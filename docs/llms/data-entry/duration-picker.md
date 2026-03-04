# DurationPicker

> Time duration input with hours/minutes fields and preset buttons.

## Import

```typescript
import { DurationPicker } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

DurationPicker allows users to input time durations with:
- **Hours and minutes** - Separate input fields
- **Preset buttons** - Quick selection of common durations
- **Min/max limits** - Constrain allowed values
- **Value in minutes** - Returns total minutes for easy storage

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Duration in minutes |
| `onChange` | `(minutes: number) => void` | - | Change handler |
| `min` | `number` | `0` | Minimum value (minutes) |
| `max` | `number` | `1440` | Maximum value (minutes) |
| `showPresets` | `boolean` | `true` | Show preset buttons |
| `presets` | `number[]` | `[15,30,60,120,240,480,720]` | Preset values (minutes) |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { DurationPicker } from '@iqbal-codes/ui-kit/blocks';

function TimeEntry() {
  const [duration, setDuration] = useState(60);

  return (
    <DurationPicker
      value={duration}
      onChange={setDuration}
    />
  );
}
```

---

## With Custom Presets

```tsx
// Common meeting durations
<DurationPicker
  presets={[15, 30, 45, 60, 90, 120]}
  onChange={setDuration}
/>

// Work shift durations
<DurationPicker
  presets={[240, 480, 600, 720]}  // 4h, 8h, 10h, 12h
  max={720}
  onChange={setDuration}
/>
```

---

## With Limits

```tsx
// Booking time (30 min - 4 hours)
<DurationPicker
  min={30}
  max={240}
  onChange={setDuration}
/>

// Sprint duration (1-4 weeks in minutes)
<DurationPicker
  min={10080}   // 1 week
  max={40320}   // 4 weeks
  presets={[10080, 20160, 30240, 40320]}
  onChange={setDuration}
/>
```

---

## Complete Example

```tsx
import { DurationPicker } from '@iqbal-codes/ui-kit/blocks';

function MeetingScheduler() {
  const [duration, setDuration] = useState<number | undefined>();

  const handleSchedule = () => {
    if (!duration) return;
    
    api.scheduleMeeting({
      duration: duration, // stored as minutes
      // ...
    });
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Meeting Duration</label>
      <DurationPicker
        value={duration}
        onChange={setDuration}
        presets={[15, 30, 45, 60, 90, 120]}
      />
      <p className="text-sm text-muted-foreground">
        Selected: {duration ? `${Math.floor(duration/60)}h ${duration%60}m` : 'Not set'}
      </p>
    </div>
  );
}
```

---

## Value Format

The component returns value in **minutes**:

| Input | Value Returned |
|-------|----------------|
| 0h 30m | `30` |
| 1h 0m | `60` |
| 2h 30m | `150` |
| 1d 0h | `1440` |

---

## Related Components

- [FormBuilder](./form-builder.md) - Include in forms
- [FormWizard](./form-wizard.md) - Include in wizards
