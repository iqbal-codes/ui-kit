# Atomic Design System Restructure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move 14 atom components that import other atoms to molecules/organisms directories, ensuring proper atomic design methodology.

**Architecture:** Each component moved with its files, imports updated across codebase, index files modified to reflect new structure.

**Tech Stack:** React, TypeScript, Vitest, shadcn/ui components

---

## Task 1: Prepare - Create Directories

**Files:**
- Create: `src/molecules/dialog/`
- Create: `src/molecules/carousel/`
- Create: `src/molecules/combobox/`
- Create: `src/molecules/command/`
- Create: `src/molecules/calendar/`
- Create: `src/molecules/alert-dialog/`
- Create: `src/molecules/pagination/`
- Create: `src/molecules/toggle-group/`
- Create: `src/molecules/button-group/`
- Create: `src/molecules/form/`
- Create: `src/molecules/field/`
- Create: `src/molecules/item/`
- Create: `src/molecules/input-group/`
- Create: `src/organisms/sidebar/`

**Step 1: Create directories**

```bash
mkdir -p src/molecules/dialog src/molecules/carousel src/molecules/combobox src/molecules/command src/molecules/calendar src/molecules/alert-dialog src/molecules/pagination src/molecules/toggle-group src/molecules/button-group src/molecules/form src/molecules/field src/molecules/item src/molecules/input-group src/organisms/sidebar
```

**Step 2: Commit**

```bash
git add src/molecules src/organisms
git commit -m "chore: create molecule and organism directories for restructure"
```

---

## Task 2: Move dialog.tsx to Molecules

**Files:**
- Move: `src/atom/dialog.tsx` → `src/molecules/dialog/dialog.tsx`
- Modify: `src/atom/index.ts` - remove dialog exports
- Modify: `src/molecules/index.ts` - add dialog exports

**Step 1: Move the file**

```bash
mv src/atom/dialog.tsx src/molecules/dialog/dialog.tsx
```

**Step 2: Update internal imports in dialog.tsx**

Verify imports point to correct paths after move (Button should remain @/atom/button)

**Step 3: Update src/atom/index.ts**

Remove dialog exports from atom index

**Step 4: Update src/molecules/index.ts**

Add dialog exports:
```typescript
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './dialog/dialog'
```

**Step 5: Find and update all imports of @/atom/dialog**

```bash
grep -r "from \"@/atom/dialog\"" --include="*.tsx" src/
```

Update each file to use `@/molecules/dialog` instead

**Step 6: Commit**

```bash
git add src/molecules/dialog src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move dialog to molecules"
```

---

## Task 3: Move carousel.tsx to Molecules

**Files:**
- Move: `src/atom/carousel.tsx` → `src/molecules/carousel/carousel.tsx`
- Modify: `src/atom/index.ts` - remove carousel exports
- Modify: `src/molecules/index.ts` - add carousel exports

**Step 1: Move the file**

```bash
mv src/atom/carousel.tsx src/molecules/carousel/carousel.tsx
```

**Step 2: Update src/atom/index.ts** - remove carousel exports

**Step 3: Update src/molecules/index.ts** - add carousel exports

**Step 4: Find and update all imports**

```bash
grep -r "from \"@/atom/carousel\"" --include="*.tsx" src/
```

Update each file to use `@/molecules/carousel`

**Step 5: Commit**

```bash
git add src/molecules/carousel src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move carousel to molecules"
```

---

## Task 4: Move combobox.tsx to Molecules

**Files:**
- Move: `src/atom/combobox.tsx` → `src/molecules/combobox/combobox.tsx`
- Modify: `src/atom/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Move file**

```bash
mv src/atom/combobox.tsx src/molecules/combobox/combobox.tsx
```

**Step 2: Update imports** - verify Button and InputGroup paths are correct

**Step 3: Update index files**

**Step 4: Update all imports**

```bash
grep -r "from \"@/atom/combobox\"" --include="*.tsx" src/
```

**Step 5: Commit**

```bash
git add src/molecules/combobox src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move combobox to molecules"
```

---

## Task 5: Move command.tsx to Molecules

**Files:**
- Move: `src/atom/command.tsx` → `src/molecules/command/command.tsx`
- Modify: `src/atom/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Move file**

```bash
mv src/atom/command.tsx src/molecules/command/command.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/command\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/command src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move command to molecules"
```

---

## Task 6: Move calendar.tsx to Molecules

**Files:**
- Move: `src/atom/calendar.tsx` → `src/molecules/calendar/calendar.tsx`
- Modify: `src/atom/index.ts`
- Modify: `src/molecules/index.ts`

**Step 1: Move file**

```bash
mv src/atom/calendar.tsx src/molecules/calendar/calendar.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/calendar\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/calendar src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move calendar to molecules"
```

---

## Task 7: Move alert-dialog.tsx to Molecules

**Files:**
- Move: `src/atom/alert-dialog.tsx` → `src/molecules/alert-dialog/alert-dialog.tsx`

**Step 1: Move file**

```bash
mv src/atom/alert-dialog.tsx src/molecules/alert-dialog/alert-dialog.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/alert-dialog\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/alert-dialog src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move alert-dialog to molecules"
```

---

## Task 8: Move pagination.tsx to Molecules

**Files:**
- Move: `src/atom/pagination.tsx` → `src/molecules/pagination/pagination.tsx`

**Step 1: Move file**

```bash
mv src/atom/pagination.tsx src/molecules/pagination/pagination.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/pagination\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/pagination src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move pagination to molecules"
```

---

## Task 9: Move toggle-group.tsx to Molecules

**Files:**
- Move: `src/atom/toggle-group.tsx` → `src/molecules/toggle-group/toggle-group.tsx`

**Step 1: Move file**

```bash
mv src/atom/toggle-group.tsx src/molecules/toggle-group/toggle-group.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/toggle-group\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/toggle-group src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move toggle-group to molecules"
```

---

## Task 10: Move button-group.tsx to Molecules

**Files:**
- Move: `src/atom/button-group.tsx` → `src/molecules/button-group/button-group.tsx`

**Step 1: Move file**

```bash
mv src/atom/button-group.tsx src/molecules/button-group/button-group.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/button-group\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/button-group src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move button-group to molecules"
```

---

## Task 11: Move form.tsx to Molecules

**Files:**
- Move: `src/atom/form.tsx` → `src/molecules/form/form.tsx`

**Step 1: Move file**

```bash
mv src/atom/form.tsx src/molecules/form/form.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/form\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/form src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move form to molecules"
```

---

## Task 12: Move field.tsx to Molecules

**Files:**
- Move: `src/atom/field.tsx` → `src/molecules/field/field.tsx`

**Step 1: Move file**

```bash
mv src/atom/field.tsx src/molecules/field/field.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/field\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/field src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move field to molecules"
```

---

## Task 13: Move item.tsx to Molecules

**Files:**
- Move: `src/atom/item.tsx` → `src/molecules/item/item.tsx`

**Step 1: Move file**

```bash
mv src/atom/item.tsx src/molecules/item/item.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/item\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/item src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move item to molecules"
```

---

## Task 14: Move input-group.tsx to Molecules

**Files:**
- Move: `src/atom/input-group.tsx` → `src/molecules/input-group/input-group.tsx`

**Step 1: Move file**

```bash
mv src/atom/input-group.tsx src/molecules/input-group/input-group.tsx
```

**Step 2: Update index files**

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/input-group\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/molecules/input-group src/atom/index.ts src/molecules/index.ts
git commit -m "refactor(atom→molecule): move input-group to molecules"
```

---

## Task 15: Move sidebar.tsx to Organisms

**Files:**
- Move: `src/atom/sidebar.tsx` → `src/organisms/sidebar/sidebar.tsx`
- Modify: `src/atom/index.ts`
- Modify: `src/organisms/index.ts`

**Step 1: Move file**

```bash
mv src/atom/sidebar.tsx src/organisms/sidebar/sidebar.tsx
```

**Step 2: Update index files** - remove from atom index, add to organisms index

**Step 3: Update imports**

```bash
grep -r "from \"@/atom/sidebar\"" --include="*.tsx" src/
```

**Step 4: Commit**

```bash
git add src/organisms/sidebar src/atom/index.ts src/organisms/index.ts
git commit -m "refactor(atom→organism): move sidebar to organisms"
```

---

## Task 16: Verify and Test

**Step 1: Run TypeScript check**

```bash
npm run typecheck
```

Fix any import path errors

**Step 2: Run tests**

```bash
npm test
```

Fix any broken tests

**Step 3: Run lint**

```bash
npm run lint
```

Fix any lint errors

**Step 4: Final commit**

```bash
git add . && git commit -m "fix: resolve any remaining issues"
```

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | Create directories | Pending |
| 2 | dialog.tsx | Pending |
| 3 | carousel.tsx | Pending |
| 4 | combobox.tsx | Pending |
| 5 | command.tsx | Pending |
| 6 | calendar.tsx | Pending |
| 7 | alert-dialog.tsx | Pending |
| 8 | pagination.tsx | Pending |
| 9 | toggle-group.tsx | Pending |
| 10 | button-group.tsx | Pending |
| 11 | form.tsx | Pending |
| 12 | field.tsx | Pending |
| 13 | item.tsx | Pending |
| 14 | input-group.tsx | Pending |
| 15 | sidebar.tsx → organisms | Pending |
| 16 | Verify and test | Pending |

**Total:** 16 tasks
