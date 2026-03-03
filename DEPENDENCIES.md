# Dependency Structure

This document explains what gets installed when consumers install `@iqbal-codes/ui-kit`.

---

## Package Dependencies Breakdown

### ✅ Consumers WILL Install (dependencies)

These are required for the UI kit to function:

| Package | Purpose |
|---------|---------|
| `@hookform/resolvers` | Form validation (FormBuilder) |
| `class-variance-authority` | Variant management (Button, Badge) |
| `clsx` + `tailwind-merge` | Class name utilities |
| `cmdk` | Command palette component |
| `date-fns` | Date utilities (Calendar, DateField) |
| `embla-carousel-react` | Carousel component |
| `input-otp` | OTP input component |
| `lucide-react` | Icon library |
| `next-themes` | Theme switching |
| `radix-ui` | Primitive components (Dialog, Select, etc.) |
| `react-day-picker` | Date picker component |
| `react-hook-form` | Form management |
| `react-resizable-panels` | Resizable panels (SplitPane) |
| `recharts` | Charts (StatCard, MetricCard) |
| `sonner` | Toast notifications |
| `vaul` | Drawer component |
| `zod` | Schema validation |

### ✅ Consumers MUST Have (peerDependencies)

These are provided by the consumer's project:

| Package | Required Version | Purpose |
|---------|------------------|---------|
| `react` | `^19.0.0` | Framework |
| `react-dom` | `^19.0.0` | React DOM |
| `next` | `^15.0.0` | Next.js framework |
| `tailwindcss` | `^4.0.0` | Styling |

### ❌ Consumers WILL NOT Install (devDependencies)

These are **only for UI kit development**:

| Package | Purpose |
|---------|---------|
| `nextra` + `nextra-theme-docs` | Documentation website |
| `storybook` + addons | Component playground |
| `vitest` + `@testing-library/*` | Testing |
| `tsup` | Build tool |
| `typescript` | Type checking |
| `@biomejs/biome` | Linting |
| `vite` | Dev server for Storybook |
| `eslint` + config | Linting |

---

## Installation Size

### Package Contents

When consumers install:
```bash
npm install @iqbal-codes/ui-kit
```

They get:
```
node_modules/@iqbal-codes/ui-kit/
├── dist/                    # Built components (~500KB gzipped)
│   ├── index.js
│   ├── index.mjs
│   ├── primitives/
│   ├── blocks/
│   └── tokens/
├── AI_CONTEXT.md            # AI usage guide
├── COMPONENT_REGISTRY.md    # Component catalog
├── ui-kit-instructions.md   # AI instructions
├── .mdc                     # Cursor IDE rules
└── README.md                # Documentation
```

**NOT included:**
- ❌ `src/` directory (source code)
- ❌ `app/` directory (documentation site)
- ❌ `storybook/` configuration
- ❌ `vitest/` configuration
- ❌ `nextra` documentation dependencies

---

## Why This Structure?

### 1. Runtime Dependencies (dependencies)

These are bundled with your components and required at runtime:
- `radix-ui` - Underlying primitives for all components
- `react-hook-form` + `zod` - FormBuilder validation
- `recharts` - Chart components
- `sonner` - Toast notifications
- `lucide-react` - Icons throughout components

### 2. Peer Dependencies (peerDependencies)

These are provided by the consumer's project:
- `react` + `react-dom` - Avoid duplicate React instances
- `next` - Framework integration
- `tailwindcss` - Styling engine

### 3. Dev Dependencies (devDependencies)

These are only for developing the UI kit:
- `nextra` - Documentation website (not needed by consumers)
- `storybook` - Component playground (not needed by consumers)
- `vitest` - Testing framework (not needed by consumers)
- Build tools (`tsup`, `typescript`, `biome`) - Only for building

---

## Consumer's package.json

After installing the UI kit, a consumer's project looks like:

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^15.0.0",
    "tailwindcss": "^4.0.0",
    "@iqbal-codes/ui-kit": "^0.1.0",
    
    // Transitive dependencies (auto-installed)
    "@hookform/resolvers": "^5.2.2",
    "class-variance-authority": "^0.7.1",
    "lucide-react": "^0.575.0",
    "radix-ui": "^1.4.3",
    "react-hook-form": "^7.71.2",
    "sonner": "^2.0.7",
    "zod": "^4.3.6",
    // ... etc (all runtime dependencies)
  },
  "devDependencies": {
    // Their own dev deps
    "@types/react": "^19.0.0",
    "typescript": "^5.7.0",
    // ... etc
    
    // NOT included: nextra, storybook, vitest, etc.
  }
}
```

---

## Verifying Dependencies

To check what's being installed:

```bash
# See all dependencies
npm ls @iqbal-codes/ui-kit

# See why a package was installed
npm why radix-ui

# Check bundle size
npm install -g bundlephobia
bundlephobia @iqbal-codes/ui-kit
```

---

## Future Optimizations

### Tree Shaking

Components are exported as separate entry points for better tree shaking:

```tsx
// ✅ Only imports Button
import { Button } from "@iqbal-codes/ui-kit/primitives";

// ✅ Only imports SmartDataTable
import { SmartDataTable } from "@iqbal-codes/ui-kit/blocks";
```

### Code Splitting

Each component can be imported individually for smaller bundles:

```tsx
// Future: Import single component
import Button from "@iqbal-codes/ui-kit/primitives/button";
```

---

## Questions?

- **Why is `recharts` so large?** - It's a comprehensive charting library. Consider lazy-loading chart components.
- **Do I need all these dependencies?** - Only the components you use will be in your bundle (tree shaking).
- **Can I use my own icons?** - Yes! Lucide is used internally, but you can customize icons via props.
