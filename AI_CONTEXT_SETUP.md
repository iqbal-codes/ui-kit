# AI Context Setup Guide

This guide explains how to configure AI assistants to always use `@iqbal-codes/ui-kit` components.

---

## Files Created

| File | Purpose | Distribution |
|------|---------|--------------|
| `AI_CONTEXT.md` | Usage guide with examples | Included in npm package |
| `COMPONENT_REGISTRY.md` | Complete component catalog | Included in npm package |
| `ui-kit-instructions.md` | AI instructions for consuming projects | Included in npm package |
| `.mdc` | Cursor IDE rules | Included in npm package |

---

## For UI Kit Repository (This Repo)

### Files Location
```
ui-kit/
├── AI_CONTEXT.md              # Usage guide
├── COMPONENT_REGISTRY.md      # Component catalog
├── ui-kit-instructions.md     # For consuming projects
├── .mdc                       # Cursor IDE rules
└── docs/
    └── SPECS.md              # Architecture spec
```

---

## For Consuming Projects

### Step 1: Install UI Kit

```bash
npm install @iqbal-codes/ui-kit
# or
bun add @iqbal-codes/ui-kit
```

### Step 2: Copy AI Instructions

Copy `ui-kit-instructions.md` from the UI kit to your project:

```bash
# Option A: Copy from node_modules
cp node_modules/@iqbal-codes/ui-kit/ui-kit-instructions.md .claude/

# Option B: Download from GitHub
curl -O https://raw.githubusercontent.com/iqbal-codes/ui-kit/main/ui-kit-instructions.md
mv ui-kit-instructions.md .claude/
```

### Step 3: Configure AI Context

**For Claude Desktop:**

Edit `.claude/settings.json`:
```json
{
  "context": ["ui-kit-instructions.md"]
}
```

**For Cursor IDE:**

The `.mdc` file is automatically picked up. No configuration needed.

**For other AI editors:**

Add this to your project's AI instructions file:

```markdown
## UI Components

Always use @iqbal-codes/ui-kit for all UI components:

- Import from `@iqbal-codes/ui-kit/primitives` for base components
- Import from `@iqbal-codes/ui-kit/blocks` for composite components
- Never use shadcn/ui or @/components/ui directly

See full documentation in COMPONENT_REGISTRY.md
```

---

## How AI Learns the Components

### 1. Context Files
The AI reads the context files to understand:
- Available components and their imports
- When to use each component
- Composition patterns and anti-patterns
- Code examples

### 2. Component Registry
`COMPONENT_REGISTRY.md` provides:
- Complete list of all components
- Import paths for each
- Use cases and examples
- Decision tree for selection

### 3. Usage Examples
`ui-kit-instructions.md` shows:
- Real-world code examples
- Common patterns (list pages, forms, dashboards)
- Anti-patterns to avoid
- Quick reference table

---

## Testing AI Knowledge

Ask the AI to build something and verify it:

### Test Prompt
```
Create a orders list page with search, filters, and pagination
```

### Expected Response
```tsx
import { PageHeader, SearchBar, FilterChip, SmartDataTable, Pagination } from "@iqbal-codes/ui-kit/blocks";
import { Button } from "@iqbal-codes/ui-kit/primitives";

export default function OrdersPage() {
  // ... uses UI kit components
}
```

### Red Flags ❌
- Imports from `@/components/ui/*`
- Imports from `shadcn-ui`
- Building tables/forms from scratch when Blocks exist

---

## Troubleshooting

### AI Not Using UI Kit?

1. **Check context file is loaded**
   - Verify `.claude/settings.json` includes the instructions file
   - Ensure file path is correct

2. **Verify file content**
   - Make sure `ui-kit-instructions.md` has the correct import paths
   - Check that examples match your UI kit version

3. **Reinforce in conversation**
   - Remind AI: "Always use @iqbal-codes/ui-kit components"
   - Provide the import path in your prompt

### AI Using Wrong Imports?

Correct immediately:
```
❌ import { Button } from "@/components/ui/button"
✅ import { Button } from "@iqbal-codes/ui-kit/primitives"
```

The AI will learn from corrections.

---

## Best Practices

### 1. Keep Context Files Updated
When adding new components:
- Update `COMPONENT_REGISTRY.md`
- Add examples to `ui-kit-instructions.md`
- Rebuild and republish the package

### 2. Provide Examples
When asking AI to build something:
```
Create a dashboard with StatCards and a SmartDataTable
Like the example in ui-kit-instructions.md
```

### 3. Correct Mistakes
When AI uses wrong imports:
- Point out the error
- Show the correct import
- AI will remember for future

---

## Quick Reference

### Minimal Setup (Copy to Project)

```bash
# 1. Install
npm install @iqbal-codes/ui-kit

# 2. Create .claude directory
mkdir -p .claude

# 3. Copy instructions
cp node_modules/@iqbal-codes/ui-kit/ui-kit-instructions.md .claude/

# 4. Update settings
echo '{"context": ["ui-kit-instructions.md"]}' > .claude/settings.json
```

### Verify Setup

Ask AI: "What UI components should I use?"

Expected answer should mention:
- `@iqbal-codes/ui-kit/primitives`
- `@iqbal-codes/ui-kit/blocks`
- Specific component names from the registry

---

## Additional Resources

- **Full Spec**: `docs/SPECS.md` - Architecture details
- **Usage Guide**: `AI_CONTEXT.md` - How to use components
- **Component Catalog**: `COMPONENT_REGISTRY.md` - All available components
- **Storybook**: Run `bun run storybook` for interactive demos
