# Atomic Design System - Design Document

> **Date:** 2026-03-02
> **Project:** @iqbal-codes/atomic-design-system
> **Purpose:** Publishable npm library with bundled shadcn/ui components for Next.js App Router

---

## Overview

A comprehensive design system library following atomic design methodology. Built for Next.js App Router compatibility with all shadcn/ui components bundled for immediate use.

**Key Decisions:**
- **Architecture:** Monolithic with tiered exports (Approach 1)
- **Bundle Strategy:** All shadcn components included
- **Target Platform:** Next.js App Router (RSC compatible with "use client" directives)
- **Documentation:** Storybook with essential addons
- **Testing:** Vitest + React Testing Library

---

## Package Structure

```
@iqbal-codes/atomic-design-system/
├── index.ts              # Re-exports everything
├── shadcn/               # All shadcn/ui components (bundled)
│   ├── button.tsx
│   ├── input.tsx
│   └── ... (40+ components)
├── tokens/               # Design tokens
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── animation.ts
│   └── index.ts
├── molecules/            # Composed components (6 from PRD)
│   ├── FormField/
│   ├── SearchInput/
│   ├── StatCard/
│   └── ...
├── organisms/            # Complex components (3 from PRD)
│   ├── DataTable/
│   ├── NavigationShell/
│   └── ...
└── templates/            # Page layouts
    ├── DashboardTemplate/
    └── ListViewTemplate/
```

---

## Tiered Exports

Consumers can import at any level:

```typescript
// Full library
import { Button, FormField, DataTable } from '@iqbal-codes/atomic-design-system'

// Specific layers (tree-shaking friendly)
import { Button, Input } from '@iqbal-codes/atomic-design-system/shadcn'
import { colorTokens, spacingTokens } from '@iqbal-codes/atomic-design-system/tokens'
import { FormField, SearchInput } from '@iqbal-codes/atomic-design-system/molecules'
import { DataTable } from '@iqbal-codes/atomic-design-system/organisms'
```

---

## Shadcn Components Bundle

All shadcn/ui components bundled with Radix UI primitives:

| Category | Components |
|----------|-----------|
| Layout | accordion, collapsible, resizable, scroll-area, separator, tabs |
| Forms | button, checkbox, form, input, input-otp, label, radio-group, select, slider, switch, textarea, toggle, toggle-group |
| Overlays | alert-dialog, dialog, drawer, dropdown-menu, hover-card, menubar, popover, tooltip |
| Data Display | avatar, badge, calendar, card, carousel, progress, skeleton, table |
| Feedback | alert, sonner, toast |
| Navigation | breadcrumb, command, context-menu, navigation-menu, pagination, sheet |

Each component includes `"use client"` directive for Next.js App Router compatibility.

---

## Build Configuration

**Package.json Exports:**
```json
{
  "exports": {
    ".": { "import": "./dist/index.mjs", "require": "./dist/index.js", "types": "./dist/index.d.ts" },
    "./shadcn": { "import": "./dist/shadcn/index.mjs", "require": "./dist/shadcn/index.js", "types": "./dist/shadcn/index.d.ts" },
    "./tokens": { "import": "./dist/tokens/index.mjs", "require": "./dist/tokens/index.js", "types": "./dist/tokens/index.d.ts" },
    "./molecules": { "import": "./dist/molecules/index.mjs", "require": "./dist/molecules/index.js", "types": "./dist/molecules/index.d.ts" },
    "./organisms": { "import": "./dist/organisms/index.mjs", "require": "./dist/organisms/index.js", "types": "./dist/organisms/index.d.ts" },
    "./templates": { "import": "./dist/templates/index.mjs", "require": "./dist/templates/index.js", "types": "./dist/templates/index.d.ts" }
  },
  "sideEffects": ["*.css", "src/shadcn/**/*.tsx"]
}
```

**Tsup Configuration:**
- Multiple entry points for tree-shaking
- ESM + CJS dual output
- Type declarations generated
- External: react, react-dom, next (peer deps)
- Bundled: Radix UI primitives, date-fns, etc.

---

## Storybook Configuration

**Setup:**
- Storybook 8 with Vite builder
- Addons: essentials, a11y, themes
- Custom theme decorator for design tokens

**Story Structure:**
- One story file per component
- Token documentation stories
- Dark/light mode support
- Accessibility audits

---

## Testing Strategy

**Unit Tests (Vitest):**
- Co-located `.test.tsx` files
- React Testing Library
- Focus on behavior, not implementation

**Coverage Areas:**
- Component rendering with props
- User interactions
- Accessibility (keyboard, ARIA)
- Token consistency

---

## Dependencies

**Peer Dependencies (consumers provide):**
- react ^18.0.0
- react-dom ^18.0.0
- next ^14.0.0

**Bundled Dependencies:**
- All Radix UI primitives
- date-fns (for calendar)
- embla-carousel-react (for carousel)
- vaul (for drawer)
- cmdk (for command)
- sonner (for toast)

**Dev Dependencies:**
- typescript ^5.0.0
- tsup ^8.0.0
- vitest
- @testing-library/react
- storybook

---

## Consumer Setup

**Installation:**
```bash
npm install @iqbal-codes/atomic-design-system
```

**Required in consumer's globals.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Design tokens */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... etc */
}
```

---

## Approved By

User confirmed all design sections:
- Architecture & Package Structure
- Shadcn Components Bundle
- Build Configuration & Exports
- Storybook Configuration
- Testing Strategy
