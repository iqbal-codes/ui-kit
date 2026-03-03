# @iqbal-codes/ui-kit

An AI-native design system for building manufacturing and business applications with React 19 and Next.js App Router. Built on shadcn/ui primitives with a strict two-layer architecture optimized for AI-assisted development.

## Installation

```bash
npm install @iqbal-codes/ui-kit
```

## Requirements

- React ^19.0.0
- React DOM ^19.0.0
- Next.js ^15.0.0
- Tailwind CSS ^4.0.0

## Architecture

This UI kit follows a **strict two-layer hierarchy** inspired by the Lego principle:

```
┌─────────────────────────────────────────┐
│           Blocks Layer                  │
│  (Business logic, domain components)    │
│  ┌─────────┬──────────┬───────────────┐ │
│  │ Layout  │  Domain  │    Smart      │ │
│  │ Blocks  │  Blocks  │    Blocks     │ │
│  └─────────┴──────────┴───────────────┘ │
├─────────────────────────────────────────┤
│         Primitives Layer                │
│   (Pure shadcn/ui components)           │
└─────────────────────────────────────────┘
```

### Primitives Layer

Pure UI elements vendored from shadcn/ui with zero business logic:

- **Actions**: Button, Toggle, ToggleGroup
- **Inputs**: Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Combobox
- **Display**: Card, Badge, Avatar, Table, Kbd, Separator
- **Overlays**: Dialog, Sheet, Drawer, Popover, Tooltip, HoverCard, ContextMenu
- **Navigation**: Breadcrumb, Tabs, Pagination, Menubar, NavigationMenu
- **Feedback**: Alert, Alertdialog, Progress, Skeleton, Sonner, Spinner
- **Layout**: Resizable, SplitPane, AspectRatio, Collapsible
- **Forms**: Form, Field, Label

### Blocks Layer

Composite components organized by category:

#### Layout Blocks
Structural templates (dashboard shells, page layouts, split-pane views)

#### Domain Blocks
Business-specific UI components (entity cards, status grids, metric displays)

#### Smart Blocks
Feature-complete solutions with integrated state management (list pages with filters, auto-saving forms)

## Usage

### Import Components

```tsx
// Import primitives
import { Button, Card, Input } from "@iqbal-codes/ui-kit/primitives";

// Import blocks
import { EntityCard, StatCard } from "@iqbal-codes/ui-kit/blocks";

// Import design tokens
import { colorTokens } from "@iqbal-codes/ui-kit/tokens";
```

### Example

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@iqbal-codes/ui-kit/primitives";

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

```
src/
├── primitives/     # shadcn/ui components (58 components)
├── blocks/
│   ├── layout/     # Layout blocks
│   ├── navigation/ # Navigation patterns
│   ├── data-display/  # Domain blocks for data presentation
│   ├── data-entry/    # Form and input blocks
│   └── feedback/      # Alert, loading, error states
├── tokens/         # Design tokens (colors, spacing, typography)
├── hooks/          # Shared React hooks
└── lib/            # Utilities
```

## Available Components

### Primitives (58 components)

| Category | Components |
|----------|------------|
| Actions | Button, Toggle, ToggleGroup |
| Inputs | Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Combobox, InputOTP |
| Display | Card, Badge, Avatar, Table, Kbd, Separator, ScrollArea |
| Overlays | Dialog, Sheet, Drawer, Popover, Tooltip, HoverCard, ContextMenu, Menubar |
| Navigation | Breadcrumb, Tabs, Pagination, NavigationMenu, Command |
| Feedback | Alert, AlertDialog, Progress, Skeleton, Sonner, Spinner, Empty |
| Forms | Form, Field, Label, InputGroup, NativeSelect |
| Layout | Resizable, AspectRatio, Collapsible, Direction |
| Charts | Chart, Carousel |

### Blocks (by category)

| Category | Components |
|----------|------------|
| Layout | PageHeader, StickyHeader, SplitPane |
| Navigation | BreadcrumbTrail, CommandPalette, MobileNav, SectionJumper, Pagination |
| Data Display | EntityCard, StatCard, MetricCard, StatusGrid, SectionHeader, ActivityTimeline, CardGrid, DataGrid, MasonryBoard, SmartDataTable |
| Data Entry | SearchBar, FormSection, StickyActions, DurationPicker, FilterChip, FormBuilder (with 12+ field types) |
| Feedback | ToastManager, LoadingOverlay, ErrorFallback, EmptyState, ConfirmationDialog, ProgressTracker, SkeletonGenerator, ConnectionStatus |

## Development

```bash
# Install dependencies
bun install

# Run tests
bun run test

# Build package
bun run build

# Type check
bun run typecheck

# Lint
bun run lint

# Dev server
bun run dev

# Storybook
bun run storybook
```

## Distribution Model

Components distribute via **source code replication** (copy-paste pattern) rather than traditional NPM bundling. This ensures:

- AI agents can read and modify component source
- No minified dependencies to navigate
- Full TypeScript types available
- Easy customization per project

## AI Integration

This kit is designed for AI-assisted development:

- **Machine-readable registry**: Component manifests enable programmatic discovery
- **Flat prop structures**: Prevents AI hallucination of nested configurations
- **Explicit import paths**: Eliminates module resolution ambiguity
- **Self-documenting components**: JSDoc annotations provide usage context

## Documentation

Full documentation with interactive examples available at the documentation site.

## License

MIT
