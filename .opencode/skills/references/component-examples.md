# Component Examples

Complete examples of AI-optimized components following the architecture.

## Smart Block: FormBuilder

A comprehensive, declarative form builder Smart Block for manufacturing applications.

**Location**: `src/blocks/data-entry/form-builder/`

### Architecture

```
src/blocks/data-entry/form-builder/
├── index.ts                          # Main export & types
├── form-builder.tsx                  # Main container with FormProvider
├── form-field-renderer.tsx           # Field rendering switch
├── types.ts                          # Shared type definitions
├── fields/
│   ├── index.ts                      # Field exports
│   ├── text-field.tsx                # Text, email, password, number
│   ├── textarea-field.tsx            # Textarea
│   ├── select-field.tsx              # Select dropdown
│   ├── combobox-field.tsx            # Combobox search
│   ├── checkbox-field.tsx            # Checkbox
│   ├── switch-field.tsx              # Switch toggle
│   ├── radio-group-field.tsx         # Radio group
│   ├── date-field.tsx                # Date picker with Calendar
│   └── file-upload-field.tsx         # File upload with dropzone
```

### Key Features

- **FormProvider Pattern**: Uses `useFormContext()` in child components - no control prop passing
- **Controller Wrapper**: Each field uses `Controller` for react-hook-form integration
- **shadcn Primitives**: All fields use proper shadcn/ui components
- **Field-level Validation**: Errors displayed per-field using `FormMessage`
- **Conditional Rendering**: Fields/sections show based on `when` predicate

### Usage Example

```tsx
<FormBuilder
  defaultValues={{ 
    username: "", 
    email: "", 
    password: "",
    agreeToTerms: false,
    country: "",
  }}
  sections={[{
    id: "credentials",
    title: "Account Credentials",
    fields: [
      { name: "username", type: "text", label: "Username", rules: { required: true } },
      { name: "email", type: "email", label: "Email", rules: { required: true } },
      { name: "password", type: "password", label: "Password", rules: { required: true, minLength: { value: 8, message: "Min 8 chars" } } },
      { name: "country", type: "combobox", label: "Country", options: countries },
      { name: "agreeToTerms", type: "checkbox", label: "I agree to Terms" },
    ],
  }]}
  onSubmit={(data) => console.log(data)}
  showDirtyWarning
  showCancel
/>
```

### Field Types

| Type | Component | Props |
|------|-----------|-------|
| text, email, password, number | TextField | placeholder, readOnly |
| textarea | TextareaField | rows, placeholder |
| select | SelectField | options, placeholder |
| combobox, multi-select | ComboboxField | options, searchable |
| checkbox | CheckboxField | - |
| switch | SwitchField | - |
| radio | RadioGroupField | options, orientation |
| date, datetime | DateField | dateFormat, showTime |
| file | FileUploadField | accept, maxSize, maxFiles, onUpload |

See `src/blocks/data-entry/form-builder/form-builder.stories.tsx` for complete Storybook examples.

## Smart Block: SmartDataTable

A full-featured data table with integrated search and filters.

**Location**: `src/blocks/data-display/smart-data-table/`

### Architecture

```
src/blocks/data-display/smart-data-table/
├── index.ts                      # Exports
├── types.ts                      # TypeScript types
├── smart-data-table.tsx          # Main container
├── filter-bar.tsx                # Top wrapper (search + buttons)
├── filter-chips.tsx              # Bottom filter chips
├── filter-dialog.tsx             # Dialog/Sheet for filters
└── smart-data-table.stories.tsx  # Storybook stories
```

### Layout Pattern

```
┌─────────────────────────────────────────────────────────────┐
│  [🔍 Search]                    [+ Add Filter] [Clear]       │  ← FilterBar
├─────────────────────────────────────────────────────────────┤
│  [Status = Active ✕] [Priority ✕]                           │  ← FilterChips
├─────────────────────────────────────────────────────────────┤
│  [Table Content...]                                         │  ← DataGrid
└─────────────────────────────────────────────────────────────┘
```

### Usage Example

```tsx
<SmartDataTable
  data={workOrders}
  columns={[
    { id: 'id', header: 'ID', accessorKey: 'id' },
    { id: 'title', header: 'Title', accessorKey: 'title' },
    { id: 'status', header: 'Status', accessorKey: 'status' },
  ]}
  filterFields={[
    { name: 'status', label: 'Status', type: 'select', options: [...] },
    { name: 'priority', label: 'Priority', type: 'combobox', options: [...] },
    { name: 'dueDate', label: 'Due Date', type: 'date' },
  ]}
  onSearchChange={(query) => api.search(query)}
  onFiltersChange={(filters) => api.getData(filters)}
  searchPlaceholder="Search work orders..."
/>
```

### Features

- **Search**: Inline with debounce (uses SearchBar component)
- **Filters**: Dialog on desktop, Sheet on mobile
- **Filter Chips**: Display active filters with remove buttons
- **Field Types**: text, select, combobox, date
- **Responsive**: Auto-detects mobile viewport
- **Configurable**: Optional URL state persistence

See `src/blocks/data-display/smart-data-table/smart-data-table.stories.tsx` for complete examples.
