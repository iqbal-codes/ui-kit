# Atomic Design System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build `@iqbal-codes/atomic-design-system` as a publishable npm library with all shadcn/ui components bundled, React 19 support, and Tailwind CSS v4 compatibility.

**Architecture:**
- Monolithic package with tiered exports for tree-shaking
- All shadcn/ui components bundled with Radix UI primitives
- Tailwind CSS v4 CSS-first configuration approach
- ESM + CJS dual output via tsup

**Tech Stack:** React 19, TypeScript 5.7, tsup 8.x, Tailwind CSS 4.x, Radix UI, Storybook 8, Vitest 3.x

**Latest Versions (from Context7):**
- React 19 (useActionState, form actions support)
- Tailwind CSS 4.x (CSS-first @theme configuration)
- tsup 8.x (multiple entry points, declaration files)
- Radix UI (tree-shakeable single package or individual primitives)

---

## Phase 1: Package Setup

### Task 1: Initialize Package Structure

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsup.config.ts`
- Create: `.gitignore`

**Step 1: Create package.json with latest versions**

```json
{
  "name": "@iqbal-codes/atomic-design-system",
  "version": "0.1.0",
  "description": "Atomic design system with bundled shadcn/ui components for React 19 and Next.js App Router",
  "author": "iqbal-codes",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/iqbal-codes/atomic-design-system.git"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./shadcn": {
      "import": "./dist/shadcn/index.mjs",
      "require": "./dist/shadcn/index.js",
      "types": "./dist/shadcn/index.d.ts"
    },
    "./tokens": {
      "import": "./dist/tokens/index.mjs",
      "require": "./dist/tokens/index.js",
      "types": "./dist/tokens/index.d.ts"
    },
    "./molecules": {
      "import": "./dist/molecules/index.mjs",
      "require": "./dist/molecules/index.js",
      "types": "./dist/molecules/index.d.ts"
    },
    "./organisms": {
      "import": "./dist/organisms/index.mjs",
      "require": "./dist/organisms/index.js",
      "types": "./dist/organisms/index.d.ts"
    },
    "./templates": {
      "import": "./dist/templates/index.mjs",
      "require": "./dist/templates/index.js",
      "types": "./dist/templates/index.d.ts"
    }
  },
  "sideEffects": [
    "*.css",
    "src/shadcn/**/*.tsx"
  ],
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsup",
    "typecheck": "tsc --noEmit",
    "lint": "eslint src/",
    "test": "vitest",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^15.0.0",
    "tailwindcss": "^4.0.0"
  },
  "dependencies": {
    "radix-ui": "^1.1.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "lucide-react": "^0.474.0",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.5.0",
    "vaul": "^1.1.0",
    "cmdk": "^1.0.0",
    "sonner": "^1.7.0",
    "input-otp": "^1.4.0",
    "react-day-picker": "^9.5.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/node": "^22.0.0",
    "typescript": "^5.7.0",
    "tsup": "^8.3.0",
    "vitest": "^3.0.0",
    "@testing-library/react": "^16.2.0",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/user-event": "^14.6.0",
    "jsdom": "^26.0.0",
    "@storybook/react": "^8.5.0",
    "@storybook/react-vite": "^8.5.0",
    "@storybook/addon-essentials": "^8.5.0",
    "@storybook/addon-a11y": "^8.5.0",
    "@storybook/addon-themes": "^8.5.0",
    "storybook": "^8.5.0",
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^6.0.0",
    "globals": "^15.14.0"
  }
}
```

**Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"]
}
```

**Step 3: Create tsup.config.ts**

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'shadcn/index': 'src/shadcn/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'molecules/index': 'src/molecules/index.ts',
    'organisms/index': 'src/organisms/index.ts',
    'templates/index': 'src/templates/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss'
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
```

**Step 4: Create .gitignore**

```
node_modules
dist
*.log
.DS_Store
.env
.env.local
coverage
.storybook-out
```

**Step 5: Install dependencies**

```bash
npm install
```

Expected: All dependencies installed without errors.

**Step 6: Commit**

```bash
git add package.json tsconfig.json tsup.config.ts .gitignore
git commit -m "chore: initialize package structure with React 19 and Tailwind v4"
```

---

### Task 2: Create Directory Structure

**Files:**
- Create: `src/index.ts`
- Create: `src/shadcn/index.ts`
- Create: `src/tokens/index.ts`
- Create: `src/molecules/index.ts`
- Create: `src/organisms/index.ts`
- Create: `src/templates/index.ts`
- Create: `src/lib/utils.ts`

**Step 1: Create src/index.ts**

```typescript
// Export shadcn components
export * from './shadcn'

// Export design tokens
export * from './tokens'

// Export molecules
export * from './molecules'

// Export organisms
export * from './organisms'

// Export templates
export * from './templates'

// Export utilities
export { cn } from './lib/utils'
```

**Step 2: Create src/lib/utils.ts**

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 3: Create placeholder exports for each layer**

```typescript
// src/shadcn/index.ts
export {}

// src/tokens/index.ts
export const tokens = {}
export type TokenConfig = typeof tokens

// src/molecules/index.ts
export {}

// src/organisms/index.ts
export {}

// src/templates/index.ts
export {}
```

**Step 4: Commit**

```bash
git add src/
git commit -m "chore: create directory structure"
```

---

## Phase 2: Design Tokens

### Task 3: Implement Color Tokens

**Files:**
- Create: `src/tokens/colors.ts`
- Create: `src/tokens/colors.test.ts`
- Modify: `src/tokens/index.ts`

**Step 1: Write test for color tokens**

```typescript
// src/tokens/colors.test.ts
import { describe, it, expect } from 'vitest'
import { colorTokens } from './colors'

describe('colorTokens', () => {
  it('should have semantic colors', () => {
    expect(colorTokens.semantic).toHaveProperty('background')
    expect(colorTokens.semantic).toHaveProperty('foreground')
    expect(colorTokens.semantic).toHaveProperty('primary')
  })

  it('should have brand scale 50-950', () => {
    expect(colorTokens.brand).toHaveProperty('50')
    expect(colorTokens.brand).toHaveProperty('500')
    expect(colorTokens.brand).toHaveProperty('950')
  })

  it('should have state colors', () => {
    expect(colorTokens.state).toHaveProperty('hover')
    expect(colorTokens.state).toHaveProperty('active')
    expect(colorTokens.state).toHaveProperty('disabled')
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test -- src/tokens/colors.test.ts
```

Expected: FAIL - "colorTokens is not defined"

**Step 3: Implement colors.ts**

```typescript
export const colorTokens = {
  semantic: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    primary: 'var(--primary)',
    'primary-foreground': 'var(--primary-foreground)',
    secondary: 'var(--secondary)',
    'secondary-foreground': 'var(--secondary-foreground)',
    muted: 'var(--muted)',
    'muted-foreground': 'var(--muted-foreground)',
    accent: 'var(--accent)',
    'accent-foreground': 'var(--accent-foreground)',
    destructive: 'var(--destructive)',
    'destructive-foreground': 'var(--destructive-foreground)',
    success: 'var(--success)',
    'success-foreground': 'var(--success-foreground)',
    warning: 'var(--warning)',
    'warning-foreground': 'var(--warning-foreground)',
    info: 'var(--info)',
    'info-foreground': 'var(--info-foreground)',
  },
  brand: {
    50: 'var(--color-brand-50)',
    100: 'var(--color-brand-100)',
    200: 'var(--color-brand-200)',
    300: 'var(--color-brand-300)',
    400: 'var(--color-brand-400)',
    500: 'var(--color-brand-500)',
    600: 'var(--color-brand-600)',
    700: 'var(--color-brand-700)',
    800: 'var(--color-brand-800)',
    900: 'var(--color-brand-900)',
    950: 'var(--color-brand-950)',
  },
  state: {
    hover: 'var(--state-hover)',
    active: 'var(--state-active)',
    disabled: 'var(--state-disabled)',
    focus: 'var(--state-focus)',
    error: 'var(--state-error)',
    valid: 'var(--state-valid)',
  },
  elevation: {
    base: 'var(--elevation-base)',
    elevated: 'var(--elevation-elevated)',
    overlay: 'var(--elevation-overlay)',
    modal: 'var(--elevation-modal)',
    popover: 'var(--elevation-popover)',
  },
  border: {
    default: 'var(--border-default)',
    strong: 'var(--border-strong)',
    interactive: 'var(--border-interactive)',
    error: 'var(--border-error)',
  },
} as const

export type ColorTokens = typeof colorTokens
```

**Step 4: Update src/tokens/index.ts**

```typescript
export { colorTokens, type ColorTokens } from './colors'
```

**Step 5: Run test to verify it passes**

```bash
npm test -- src/tokens/colors.test.ts
```

Expected: PASS

**Step 6: Commit**

```bash
git add src/tokens/
git commit -m "feat(tokens): add color tokens"
```

---

### Task 4: Implement Typography Tokens

**Files:**
- Create: `src/tokens/typography.ts`
- Create: `src/tokens/typography.test.ts`
- Modify: `src/tokens/index.ts`

**Step 1: Write test**

```typescript
// src/tokens/typography.test.ts
import { describe, it, expect } from 'vitest'
import { typographyTokens } from './typography'

describe('typographyTokens', () => {
  it('should have font families', () => {
    expect(typographyTokens.fontFamily).toHaveProperty('sans')
    expect(typographyTokens.fontFamily).toHaveProperty('mono')
  })

  it('should have type scale from 2xs to 9xl', () => {
    expect(typographyTokens.typeScale).toHaveProperty('2xs')
    expect(typographyTokens.typeScale).toHaveProperty('base')
    expect(typographyTokens.typeScale).toHaveProperty('9xl')
  })

  it('should have font weights', () => {
    expect(typographyTokens.fontWeight).toHaveProperty('regular')
    expect(typographyTokens.fontWeight).toHaveProperty('bold')
  })
})
```

**Step 2: Run test to verify it fails**

**Step 3: Implement typography.ts**

```typescript
export const typographyTokens = {
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
    display: 'var(--font-display)',
  },
  typeScale: {
    '2xs': '0.625rem',    // 10px
    xs: '0.75rem',        // 12px
    sm: '0.875rem',       // 14px
    base: '1rem',         // 16px
    lg: '1.125rem',       // 18px
    xl: '1.25rem',        // 20px
    '2xl': '1.5rem',      // 24px
    '3xl': '1.875rem',    // 30px
    '4xl': '2.25rem',     // 36px
    '5xl': '3rem',        // 48px
    '6xl': '3.75rem',     // 60px
    '7xl': '4.5rem',      // 72px
    '8xl': '6rem',        // 96px
    '9xl': '8rem',        // 128px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

export type TypographyTokens = typeof typographyTokens
```

**Step 4: Update src/tokens/index.ts**

```typescript
export { colorTokens, type ColorTokens } from './colors'
export { typographyTokens, type TypographyTokens } from './typography'
```

**Step 5: Run test to verify it passes**

**Step 6: Commit**

```bash
git add src/tokens/
git commit -m "feat(tokens): add typography tokens"
```

---

### Task 5: Implement Spacing & Layout Tokens

**Files:**
- Create: `src/tokens/spacing.ts`
- Create: `src/tokens/spacing.test.ts`
- Modify: `src/tokens/index.ts`

**Step 1: Write test**

```typescript
// src/tokens/spacing.test.ts
import { describe, it, expect } from 'vitest'
import { spacingTokens } from './spacing'

describe('spacingTokens', () => {
  it('should have spacing scale 0-96', () => {
    expect(spacingTokens.spacing).toHaveProperty('0')
    expect(spacingTokens.spacing).toHaveProperty('4')
    expect(spacingTokens.spacing).toHaveProperty('96')
  })

  it('should have border radius tokens', () => {
    expect(spacingTokens.borderRadius).toHaveProperty('none')
    expect(spacingTokens.borderRadius).toHaveProperty('full')
  })

  it('should have z-index scale', () => {
    expect(spacingTokens.zIndex).toHaveProperty('base')
    expect(spacingTokens.zIndex).toHaveProperty('modal')
  })
})
```

**Step 2: Implement spacing.ts**

```typescript
export const spacingTokens = {
  spacing: {
    0: '0px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
    36: '9rem',       // 144px
    40: '10rem',      // 160px
    44: '11rem',      // 176px
    48: '12rem',      // 192px
    52: '13rem',      // 208px
    56: '14rem',      // 224px
    60: '15rem',      // 240px
    64: '16rem',      // 256px
    72: '18rem',      // 288px
    80: '20rem',      // 320px
    96: '24rem',      // 384px
  },
  layout: {
    headerHeight: '3.5rem',
    sidebarWidth: '16rem',
    sidebarCollapsedWidth: '4rem',
    containerMaxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  borderRadius: {
    none: '0px',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  zIndex: {
    hide: '-1',
    base: '0',
    docked: '10',
    dropdown: '20',
    sticky: '30',
    banner: '40',
    overlay: '50',
    modal: '60',
    popover: '70',
    toast: '80',
    tooltip: '90',
  },
} as const

export type SpacingTokens = typeof spacingTokens
```

**Step 3: Update src/tokens/index.ts**

```typescript
export { colorTokens, type ColorTokens } from './colors'
export { typographyTokens, type TypographyTokens } from './typography'
export { spacingTokens, type SpacingTokens } from './spacing'
```

**Step 4: Run test**

**Step 5: Commit**

```bash
git add src/tokens/
git commit -m "feat(tokens): add spacing and layout tokens"
```

---

### Task 6: Implement Animation Tokens

**Files:**
- Create: `src/tokens/animation.ts`
- Modify: `src/tokens/index.ts`

**Step 1: Implement animation.ts**

```typescript
export const animationTokens = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  transition: {
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transform: 'transform',
    opacity: 'opacity',
    all: 'all',
  },
} as const

export type AnimationTokens = typeof animationTokens
```

**Step 2: Update src/tokens/index.ts**

```typescript
export { colorTokens, type ColorTokens } from './colors'
export { typographyTokens, type TypographyTokens } from './typography'
export { spacingTokens, type SpacingTokens } from './spacing'
export { animationTokens, type AnimationTokens } from './animation'

// Export all tokens as single object
export const tokens = {
  colors: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  animation: animationTokens,
} as const

export type Tokens = typeof tokens
```

**Step 3: Commit**

```bash
git add src/tokens/
git commit -m "feat(tokens): add animation tokens and consolidate exports"
```

---

## Phase 3: Install All shadcn/ui Components

### Task 7: Initialize shadcn/ui Registry

**Files:**
- Create: `components.json`
- Create: `src/shadcn/README.md`

**Step 1: Create components.json configuration**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**Step 2: Commit**

```bash
git add components.json
git commit -m "chore: add shadcn/ui components.json configuration"
```

---

### Task 8: Install shadcn Components - Layout Group

**Files to create:**
- `src/shadcn/accordion.tsx`
- `src/shadcn/collapsible.tsx`
- `src/shadcn/resizable.tsx`
- `src/shadcn/scroll-area.tsx`
- `src/shadcn/separator.tsx`
- `src/shadcn/tabs.tsx`
- Modify: `src/shadcn/index.ts`

**Step 1: Create accordion.tsx**

```typescript
"use client"

import * as React from "react"
import * as AccordionPrimitive from "radix-ui"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Accordion

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.AccordionItem>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionItem>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.AccordionItem
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.AccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.AccordionTrigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.AccordionTrigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.AccordionTrigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.AccordionContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.AccordionContent
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.AccordionContent>
))

AccordionContent.displayName = AccordionPrimitive.AccordionContent.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

**Step 2: Create collapsible.tsx**

```typescript
"use client"

import * as CollapsiblePrimitive from "radix-ui"

const Collapsible = CollapsiblePrimitive.Collapsible

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

**Step 3: Create resizable.tsx**

```typescript
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
```

**Step 4: Create scroll-area.tsx**

```typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "radix-ui"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollArea>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollArea>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollArea
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.ScrollArea>
))
ScrollArea.displayName = ScrollAreaPrimitive.ScrollArea.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
```

**Step 5: Create separator.tsx**

```typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "radix-ui"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Separator>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Separator
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Separator.displayName

export { Separator }
```

**Step 6: Create tabs.tsx**

```typescript
"use client"

import * as React from "react"
import * as TabsPrimitive from "radix-ui"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Tabs

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.TabsList>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.TabsList>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.TabsList
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.TabsList.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.TabsTrigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.TabsTrigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.TabsTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.TabsTrigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.TabsContent>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.TabsContent>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.TabsContent
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.TabsContent.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

**Step 7: Update src/shadcn/index.ts**

```typescript
// Layout
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion"
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./collapsible"
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable"
export { ScrollArea, ScrollBar } from "./scroll-area"
export { Separator } from "./separator"
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"
```

**Step 8: Commit**

```bash
git add src/shadcn/
git commit -m "feat(shadcn): add layout components (accordion, collapsible, resizable, scroll-area, separator, tabs)"
```

---

### Task 9: Install shadcn Components - Forms Group

**Files to create:**
- `src/shadcn/button.tsx`
- `src/shadcn/checkbox.tsx`
- `src/shadcn/form.tsx`
- `src/shadcn/input.tsx`
- `src/shadcn/input-otp.tsx`
- `src/shadcn/label.tsx`
- `src/shadcn/radio-group.tsx`
- `src/shadcn/select.tsx`
- `src/shadcn/slider.tsx`
- `src/shadcn/switch.tsx`
- `src/shadcn/textarea.tsx`
- `src/shadcn/toggle.tsx`
- `src/shadcn/toggle-group.tsx`
- Modify: `src/shadcn/index.ts`

**Step 1-13: Create each component file**

*[Continue pattern for each form component - button, checkbox, form, input, input-otp, label, radio-group, select, slider, switch, textarea, toggle, toggle-group]*

**Step 14: Update src/shadcn/index.ts**

```typescript
// Previous exports...

// Forms
export { Button, buttonVariants } from "./button"
export { Checkbox } from "./checkbox"
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from "./form"
export { Input } from "./input"
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./input-otp"
export { Label } from "./label"
export { RadioGroup, RadioGroupItem } from "./radio-group"
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./select"
export { Slider } from "./slider"
export { Switch } from "./switch"
export { Textarea } from "./textarea"
export { Toggle, toggleVariants } from "./toggle"
export { ToggleGroup, ToggleGroupItem } from "./toggle-group"
```

**Step 15: Commit**

```bash
git add src/shadcn/
git commit -m "feat(shadcn): add form components (button, checkbox, form, input, label, radio-group, select, slider, switch, textarea, toggle, toggle-group, input-otp)"
```

---

### Task 10: Install shadcn Components - Overlays, Data Display, Feedback, Navigation

**Continue pattern for remaining groups:**

**Overlays (7 components):** alert-dialog, dialog, drawer, dropdown-menu, hover-card, menubar, popover, tooltip

**Data Display (8 components):** avatar, badge, calendar, card, carousel, progress, skeleton, table

**Feedback (3 components):** alert, sonner, toast

**Navigation (6 components):** breadcrumb, command, context-menu, navigation-menu, pagination, sheet

**Step 1-25: Create each component file**

**Step 26: Finalize src/shadcn/index.ts**

```typescript
// Layout
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion"
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./collapsible"
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable"
export { ScrollArea, ScrollBar } from "./scroll-area"
export { Separator } from "./separator"
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

// Forms
export { Button, buttonVariants } from "./button"
export { Checkbox } from "./checkbox"
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from "./form"
export { Input } from "./input"
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./input-otp"
export { Label } from "./label"
export { RadioGroup, RadioGroupItem } from "./radio-group"
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./select"
export { Slider } from "./slider"
export { Switch } from "./switch"
export { Textarea } from "./textarea"
export { Toggle, toggleVariants } from "./toggle"
export { ToggleGroup, ToggleGroupItem } from "./toggle-group"

// Overlays
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog"
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog"
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./drawer"
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./dropdown-menu"
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./hover-card"
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from "./menubar"
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./popover"
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip"

// Data Display
export { Avatar, AvatarImage, AvatarFallback } from "./avatar"
export { Badge, badgeVariants } from "./badge"
export { Calendar } from "./calendar"
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card"
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel"
export { Progress } from "./progress"
export { Skeleton } from "./skeleton"
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table"

// Feedback
export { Alert, AlertTitle, AlertDescription } from "./alert"
export { Toaster } from "./sonner"

// Navigation
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./breadcrumb"
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./command"
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "./context-menu"
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./navigation-menu"
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination"
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./sheet"
```

**Step 27: Commit**

```bash
git add src/shadcn/
git commit -m "feat(shadcn): add all remaining components (overlays, data display, feedback, navigation)"
```

---

## Phase 4: Molecules

### Task 11: Implement FormField Molecule

**Files:**
- Create: `src/molecules/FormField/FormField.tsx`
- Create: `src/molecules/FormField/FormField.test.tsx`
- Create: `src/molecules/FormField/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Write test**

```tsx
// src/molecules/FormField/FormField.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders label and input', () => {
    render(<FormField label="Email" name="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<FormField label="Email" name="email" error="Invalid email" />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('displays helper text when no error', () => {
    render(<FormField label="Email" name="email" helperText="We will never share your email" />)
    expect(screen.getByText('We will never share your email')).toBeInTheDocument()
  })

  it('shows required indicator', () => {
    render(<FormField label="Email" name="email" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('calls onChange when input changes', () => {
    const handleChange = vi.fn()
    render(<FormField label="Email" name="email" onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test@example.com' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test -- src/molecules/FormField/FormField.test.tsx
```

Expected: FAIL

**Step 3: Implement FormField.tsx**

```tsx
"use client"

import * as React from "react"
import { Label } from "@/shadcn/label"
import { Input } from "@/shadcn/input"
import { cn } from "@/lib/utils"

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  error?: string
  required?: boolean
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, helperText, error, required, id, ...props }, ref) => {
    const inputId = id || props.name
    const errorId = error ? `${inputId}-error` : undefined
    const helperId = helperText ? `${inputId}-helper` : undefined
    const describedBy = errorId || helperId

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={inputId} className="flex items-center gap-1">
          {label}
          {required && <span className="text-destructive" aria-hidden="true">*</span>}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          aria-required={required}
          {...props}
        />
        {error ? (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
```

**Step 4: Create index.ts**

```typescript
export { FormField, type FormFieldProps } from "./FormField"
```

**Step 5: Update src/molecules/index.ts**

```typescript
export { FormField, type FormFieldProps } from "./FormField"
```

**Step 6: Run test to verify it passes**

```bash
npm test -- src/molecules/FormField/FormField.test.tsx
```

Expected: PASS

**Step 7: Commit**

```bash
git add src/molecules/FormField/
git commit -m "feat(molecules): add FormField component"
```

---

### Task 12-17: Implement Remaining Molecules

**Continue pattern for:**
- SearchInput
- StatCard
- EmptyState
- AlertMessage
- IconButton
- ActionMenu

Each with:
1. Write test
2. Run test (fail)
3. Implement component
4. Run test (pass)
5. Commit

---

## Phase 5: Storybook Setup

### Task 18: Install and Configure Storybook

**Files:**
- Create: `.storybook/main.ts`
- Create: `.storybook/preview.ts`
- Create: `.storybook/preview-head.html`

**Step 1: Initialize Storybook**

```bash
npx storybook@latest init --skip-install --package-manager npm
```

**Step 2: Create .storybook/main.ts**

```typescript
import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
```

**Step 3: Create .storybook/preview.ts**

```typescript
import type { Preview } from "@storybook/react"
import "../src/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        rules: [],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
```

**Step 4: Create .storybook/preview-head.html**

```html
<script>
  window.global = window;
</script>
```

**Step 5: Create src/globals.css for Tailwind v4**

```css
@import "tailwindcss";

@theme {
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;

  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  --color-primary: hsl(222.2 47.4% 11.2%);
  --color-primary-foreground: hsl(210 40% 98%);
  --color-secondary: hsl(210 40% 96.1%);
  --color-secondary-foreground: hsl(222.2 47.4% 11.2%);
  --color-muted: hsl(210 40% 96.1%);
  --color-muted-foreground: hsl(215.4 16.3% 46.9%);
  --color-accent: hsl(210 40% 96.1%);
  --color-accent-foreground: hsl(222.2 47.4% 11.2%);
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-destructive-foreground: hsl(210 40% 98%);
  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
  --color-ring: hsl(222.2 84% 4.9%);
  --color-success: hsl(142.1 76.2% 36.3%);
  --color-success-foreground: hsl(355.7 100% 97.3%);
  --color-warning: hsl(38 92% 50%);
  --color-warning-foreground: hsl(48 96% 89%);
  --color-info: hsl(221.2 83.2% 53.3%);
  --color-info-foreground: hsl(210 40% 98%);

  --radius-lg: 0.5rem;
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
}
```

**Step 6: Verify Storybook starts**

```bash
npm run storybook
```

Expected: Storybook starts on port 6006 without errors.

**Step 7: Commit**

```bash
git add .storybook/ src/globals.css
git commit -m "chore: setup Storybook with Vite and Tailwind v4"
```

---

### Task 19: Create Component Stories

**Files:**
- Create: `src/shadcn/Button.stories.tsx`
- Create: `src/molecules/FormField/FormField.stories.tsx`
- Create: `src/tokens/Colors.stories.tsx`

**Step 1-3: Create story files**

*[Follow Storybook format for each component]*

**Step 4: Commit**

```bash
git add src/**/*.stories.tsx
git commit -m "docs: add initial Storybook stories"
```

---

## Phase 6: Build & Test

### Task 20: Configure Vitest

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`

**Step 1: Create vitest.config.ts**

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Step 2: Create src/test/setup.ts**

```typescript
import '@testing-library/jest-dom'
```

**Step 3: Run all tests**

```bash
npm test
```

Expected: All tests pass.

**Step 4: Commit**

```bash
git add vitest.config.ts src/test/
git commit -m "chore: setup Vitest for testing"
```

---

### Task 21: Build Package

**Step 1: Run build**

```bash
npm run build
```

Expected: Build completes with dist/ folder containing:
- `index.mjs`, `index.js`, `index.d.ts`
- `shadcn/` with all components
- `tokens/` with token files
- `molecules/` with molecule components
- Source maps

**Step 2: Verify exports work**

```bash
node -e "const pkg = require('./dist/index.js'); console.log('CJS:', Object.keys(pkg));"
node -e "import('./dist/index.mjs').then(m => console.log('ESM:', Object.keys(m)));"
```

Expected: Both should log exported members without errors.

**Step 3: Run typecheck**

```bash
npm run typecheck
```

Expected: No TypeScript errors.

**Step 4: Commit**

```bash
git add dist/ || echo "dist in gitignore"
git commit -m "chore: build package for distribution"
```

---

### Task 22: Finalize and Tag

**Step 1: Create README.md**

```markdown
# @iqbal-codes/atomic-design-system

A comprehensive design system library with bundled shadcn/ui components for React 19 and Next.js App Router.

## Installation

```bash
npm install @iqbal-codes/atomic-design-system
```

## Usage

```tsx
import { Button, FormField } from '@iqbal-codes/atomic-design-system'
import { colorTokens } from '@iqbal-codes/atomic-design-system/tokens'
```

## Requirements

- React ^19.0.0
- React DOM ^19.0.0
- Next.js ^15.0.0
- Tailwind CSS ^4.0.0

## Documentation

See [Storybook](https://your-storybook-url.com) for full component documentation.
```

**Step 2: Commit and tag**

```bash
git add README.md
git commit -m "docs: add README"
git tag v0.1.0
git push origin main --tags
```

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1 | 2 | Package setup with React 19, Tailwind v4 |
| 2 | 4 | Design tokens (colors, typography, spacing, animation) |
| 3 | 4 | All 40+ shadcn/ui components |
| 4 | 7 | Molecules from PRD |
| 5 | 2 | Storybook setup with stories |
| 6 | 3 | Testing, build, publish |

**Total: ~22 tasks**

---

## Post-Implementation

**Next steps after completion:**
1. Publish to npm: `npm publish --access public`
2. Set up CI/CD for automated builds
3. Add visual regression testing (Chromatic)
4. Create documentation site

**Skills used:**
- @shadcn-ui for component patterns
- @tailwind-design-system for token structure
- @ts-library for package configuration
