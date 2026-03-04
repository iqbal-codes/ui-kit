# ProgressTracker

> Multi-step progress indicator with horizontal/vertical orientation.

## Import

```typescript
import { ProgressTracker } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

ProgressTracker displays step progress with:
- **Steps** - Array of progress steps
- **Orientation** - Horizontal or vertical
- **States** - Completed, current, pending
- **Clickable** - Optional click handlers

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `ProgressStep[]` | **required** | Array of steps |
| `currentStep` | `number` | **required** | Current step index |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Step orientation |
| `showDescriptions` | `boolean` | `true` | Show step descriptions |
| `clickable` | `boolean` | `false` | Enable click handlers |
| `className` | `string` | - | Additional CSS classes |

### ProgressStep

```typescript
interface ProgressStep {
  id: string;
  title: string;
  description?: string;
  onClick?: () => void;
}
```

---

## Basic Usage

```tsx
import { ProgressTracker } from '@iqbal-codes/ui-kit/blocks';

const steps = [
  { id: '1', title: 'Step 1', description: 'First step' },
  { id: '2', title: 'Step 2', description: 'Second step' },
  { id: '3', title: 'Step 3', description: 'Third step' },
];

<ProgressTracker steps={steps} currentStep={1} />
```

---

## Horizontal (Default)

```tsx
<ProgressTracker
  steps={steps}
  currentStep={currentStep}
  orientation="horizontal"
/>
```

---

## Vertical

```tsx
<ProgressTracker
  steps={steps}
  currentStep={currentStep}
  orientation="vertical"
/>
```

---

## Clickable Steps

```tsx
const steps = [
  { id: '1', title: 'Basic Info', onClick: () => goToStep(0) },
  { id: '2', title: 'Details', onClick: () => goToStep(1) },
  { id: '3', title: 'Review', onClick: () => goToStep(2) },
];

<ProgressTracker
  steps={steps}
  currentStep={currentStep}
  clickable
/>
```

---

## In Forms

```tsx
import { ProgressTracker } from '@iqbal-codes/ui-kit/blocks';

function MultiStepForm() {
  const [step, setStep] = useState(0);

  const steps = [
    { id: 'personal', title: 'Personal', description: 'Your info' },
    { id: 'account', title: 'Account', description: 'Login details' },
    { id: 'confirm', title: 'Confirm', description: 'Review & submit' },
  ];

  return (
    <>
      <ProgressTracker steps={steps} currentStep={step} />
      {step === 0 && <PersonalForm />}
      {step === 1 && <AccountForm />}
      {step === 2 && <ReviewForm />}
    </>
  );
}
```

---

## Related Components

- [FormWizard](../data-entry/form-wizard.md) - Multi-step form
- [TabsPanel](../navigation/tabs-panel.md) - Tabbed navigation
