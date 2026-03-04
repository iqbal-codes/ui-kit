# PageHeader

> Page-level header with breadcrumbs, title, subtitle, and actions.

## Import

```typescript
import { PageHeader } from '@iqbal-codes/ui-kit/blocks';
```

## Overview

PageHeader provides a complete page header with:
- **Breadcrumbs** - Navigation trail
- **Title** - Page title
- **Subtitle** - Optional description
- **Actions** - Buttons and controls

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Page title |
| `subtitle` | `string` | - | Page subtitle |
| `breadcrumbs` | `Array<{ label: string; href?: string }>` | - | Breadcrumb items |
| `actions` | `ReactNode` | - | Action buttons |
| `children` | `ReactNode` | - | Custom content |
| `className` | `string` | - | Additional CSS classes |

---

## Basic Usage

```tsx
import { PageHeader } from '@iqbal-codes/ui-kit/blocks';

<PageHeader
  title="Dashboard"
  subtitle="Welcome back"
/>
```

---

## With Breadcrumbs

```tsx
<PageHeader
  title="User Profile"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
  ]}
/>
```

---

## With Actions

```tsx
<PageHeader
  title="Products"
  subtitle="Manage your catalog"
  actions={
    <Button>Add Product</Button>
  }
/>
```

---

## Full Example

```tsx
<PageHeader
  title="Edit Profile"
  subtitle="Update your personal information"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
  ]}
  actions={
    <div className="flex gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  }
/>
```

---

## Related Components

- [SectionHeader](../data-display/section-header.md) - Section header
- [BreadcrumbTrail](../navigation/breadcrumb-trail.md) - Breadcrumb navigation
