# Atomic Design System Restructure Design

**Date:** 2026-03-02

## Overview

Restructure the atomic design system by moving components that import other atoms from `src/atom/` to appropriate higher-level directories (`src/molecules/` or `src/organisms/`). This ensures proper atomic design methodology where:
- **Atoms** = primitive components (no dependencies on other UI components)
- **Molecules** = simple compositions of atoms
- **Organisms** = complex compositions of molecules/atoms

---

## Components to Move

### Molecules (13 components)

| # | Current Location | New Location | Dependencies |
|---|-----------------|--------------|--------------|
| 1 | `src/atom/dialog.tsx` | `src/molecules/dialog/` | Button |
| 2 | `src/atom/carousel.tsx` | `src/molecules/carousel/` | Button |
| 3 | `src/atom/combobox.tsx` | `src/molecules/combobox/` | Button, InputGroup |
| 4 | `src/atom/command.tsx` | `src/molecules/command/` | Dialog |
| 5 | `src/atom/calendar.tsx` | `src/molecules/calendar/` | Button |
| 6 | `src/atom/alert-dialog.tsx` | `src/molecules/alert-dialog/` | Button |
| 7 | `src/atom/pagination.tsx` | `src/molecules/pagination/` | Button |
| 8 | `src/atom/toggle-group.tsx` | `src/molecules/toggle-group/` | Toggle |
| 9 | `src/atom/button-group.tsx` | `src/molecules/button-group/` | Separator |
| 10 | `src/atom/form.tsx` | `src/molecules/form/` | Label |
| 11 | `src/atom/field.tsx` | `src/molecules/field/` | Label, Separator |
| 12 | `src/atom/item.tsx` | `src/molecules/item/` | Separator |
| 13 | `src/atom/input-group.tsx` | `src/molecules/input-group/` | Button, Input, Textarea |

### Organisms (1 component)

| # | Current Location | New Location | Dependencies |
|---|-----------------|--------------|--------------|
| 1 | `src/atom/sidebar.tsx` | `src/organisms/sidebar/` | Button, Input, Separator, Sheet, Skeleton, Tooltip |

---

## Remaining Atoms (Primitives)

Keep only primitive components in `src/atom/`:

- **Form controls:** button, input, textarea, select, checkbox, radio-group, switch, slider, input-otp, native-select
- **Display:** avatar, badge, skeleton, spinner, progress, kbd, empty
- **Layout:** label, separator, tooltip, popover, scroll-area, resizable
- **Navigation:** accordion, collapsible, tabs, breadcrumb, navigation-menu
- **Overlays:** sheet, drawer, dropdown-menu, context-menu, menubar, hover-card
- **Data display:** chart, table, aspect-ratio
- **Feedback:** alert, sonner
- **Other:** direction, card, item (base)

---

## Implementation

### Migration Steps

1. **Create directories** in `src/molecules/` and `src/organisms/`
2. **Move components** with all related files (`.tsx`, `.stories.tsx`, `.test.tsx`)
3. **Update imports** across entire codebase
4. **Update index files:**
   - `src/atom/index.ts` - remove moved exports
   - `src/molecules/index.ts` - add new exports
   - `src/organisms/index.ts` - add sidebar export

### Breaking Changes

- Import paths will change from `@/atom/*` to `@/molecules/*` or `@/organisms/*`
- Consumers need to update their imports

---

## Notes

- **navigation-cell**: Not found in codebase - not needed since sidebar handles navigation
- **data-table**: Already in molecules - no action needed
- **Phase-1 worktree**: Contains NavigationShell organism (uses atoms, not molecules yet)

---

## Next Steps

After restructure complete:
1. List remaining missing molecules to develop
2. Continue organism development
3. Complete template components per PRD
