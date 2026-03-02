# @iqbal-codes/atomic-design-system

A comprehensive design system library with bundled shadcn/ui components for React 19 and Next.js App Router.

## Installation

```bash
npm install @iqbal-codes/atomic-design-system
```

## Requirements

- React ^19.0.0
- React DOM ^19.0.0
- Next.js ^15.0.0
- Tailwind CSS ^4.0.0

## Usage

### Import Components

```tsx
import { Button, Card, Input } from '@iqbal-codes/atomic-design-system'
import { SearchInput, StatsCard } from '@iqbal-codes/atomic-design-system/molecules'
import { colorTokens } from '@iqbal-codes/atomic-design-system/tokens'
```

### Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@iqbal-codes/atomic-design-system'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Project Structure

This library follows the Atomic Design methodology:

- **Atoms** (`/atom`): Basic building blocks (Button, Input, Card, etc.)
- **Molecules** (`/molecules`): Combinations of atoms (SearchInput, StatsCard, etc.)
- **Organisms** (`/organisms`): Complex components (placeholder for future)
- **Templates** (`/templates`): Page layouts (placeholder for future)
- **Tokens** (`/tokens`): Design tokens (colors, spacing, typography, animations)

## Available Components

### Atoms (56 components)
- **Layout**: Card, Sheet, Dialog, Alert, etc.
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, etc.
- **Navigation**: Breadcrumb, Tabs, Pagination, Menubar, etc.
- **Feedback**: Alert, Progress, Skeleton, Sonner, etc.
- **Data Display**: Avatar, Badge, Table, Calendar, Chart, etc.
- **Overlay**: Dialog, Drawer, Popover, Tooltip, HoverCard, etc.

### Molecules (11 components)
- `ActionMenu` - Dropdown menu for row/item actions
- `AlertMessage` - Alert with variants and auto icons
- `ConfirmDialog` - Confirmation dialog with variants
- `DataTable` - Table with sorting and pagination
- `EmptyState` - Empty state with icon and actions
- `IconButton` - Button with icon and tooltip support
- `InputField` - Input with label, error, and helper text
- `LoadingOverlay` - Loading overlay with spinner
- `PageHeader` - Page header with title and actions
- `SearchInput` - Search input with debounce and clear
- `StatsCard` - Stat card with trend indicator

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build package
npm run build

# Type check
npm run typecheck
```

## Storybook

Run `npm run storybook` to view component documentation and examples.

## License

MIT
