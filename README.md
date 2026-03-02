# @iqbal-codes/ui-kit

A comprehensive design system library with bundled shadcn/ui components for React 19 and Next.js App Router.

## Installation

```bash
npm install @iqbal-codes/ui-kit
```

## Requirements

- React ^19.0.0
- React DOM ^19.0.0
- Next.js ^15.0.0
- Tailwind CSS ^4.0.0

## Usage

### Import Components

```tsx
import { Button, Card, Input } from "@iqbal-codes/ui-kit";
import { colorTokens } from "@iqbal-codes/ui-kit/tokens";
```

### Example

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@iqbal-codes/ui-kit";

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
  );
}
```

## Project Structure

This library follows the Atomic Design methodology:

- **Atoms** (`/atom`): Basic building blocks (Button, Input, Card, etc.)
- **Tokens** (`/tokens`): Design tokens (colors, spacing, typography, animations)

## Available Components

### Atoms (56 components)

- **Layout**: Card, Sheet, Dialog, Alert, etc.
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, etc.
- **Navigation**: Breadcrumb, Tabs, Pagination, Menubar, etc.
- **Feedback**: Alert, Progress, Skeleton, Sonner, etc.
- **Data Display**: Avatar, Badge, Table, Calendar, Chart, etc.
- **Overlay**: Dialog, Drawer, Popover, Tooltip, HoverCard, etc.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build package
npm run build

# Type check
npm run typecheck
```

## License

MIT
