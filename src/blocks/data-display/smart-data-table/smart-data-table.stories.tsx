import type { Meta, StoryObj } from "@storybook/react";
import { PackageOpen, Plus } from "lucide-react";
import * as React from "react";
import { EmptyState } from "@/blocks/feedback/empty-state";
import { SmartDataTable } from "./smart-data-table";
import type { ColumnDef } from "./types";

const meta = {
  title: "Blocks/Data Display/SmartDataTable",
  component: SmartDataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Full-featured data table with integrated search and filters.

**Features:**
- Inline search with debounce (uses SearchBar component)
- Filter dialog (desktop) / sheet (mobile)
- Filter chips display below search bar
- Configurable filter fields (text, select, combobox, date)
- Optional URL state persistence with nuqs

**Layout:**
- Top wrapper: Search input + Add Filter button + Clear button
- Bottom wrapper: Active filter chips (when filters applied)
- Table: DataGrid component with sorting, pagination options

**Usage:**
\`\`\`tsx
<SmartDataTable
  data={workOrders}
  columns={columns}
  filterFields={[
    { name: 'status', label: 'Status', type: 'select', options: [...] },
    { name: 'priority', label: 'Priority', type: 'combobox', options: [...] },
    { name: 'dueDate', label: 'Due Date', type: 'date' },
  ]}
  onFiltersChange={(filters) => api.getData(filters)}
  onSearchChange={(query) => api.search(query)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSearchChange: { action: "search" },
    onFiltersChange: { action: "filter" },
  },
} satisfies Meta<typeof SmartDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data
const mockWorkOrders = [
  {
    id: "WO-001",
    title: "Machine Calibration - Line A",
    status: "active",
    priority: "high",
    assignee: "John Doe",
    dueDate: "2024-03-15",
  },
  {
    id: "WO-002",
    title: "Conveyor Belt Repair",
    status: "pending",
    priority: "urgent",
    assignee: "Jane Smith",
    dueDate: "2024-03-10",
  },
  {
    id: "WO-003",
    title: "Preventive Maintenance - Motor M1",
    status: "completed",
    priority: "low",
    assignee: "Bob Wilson",
    dueDate: "2024-03-01",
  },
  {
    id: "WO-004",
    title: "Safety Inspection - Zone B",
    status: "active",
    priority: "medium",
    assignee: "Alice Brown",
    dueDate: "2024-03-20",
  },
];

const columns: ColumnDef<(typeof mockWorkOrders)[0]>[] = [
  { id: "id", header: "ID", accessorKey: "id", width: "100px" },
  { id: "title", header: "Title", accessorKey: "title" },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: (item) => (
      <span
        className={`capitalize ${
          item.status === "active"
            ? "text-blue-600"
            : item.status === "pending"
              ? "text-amber-600"
              : item.status === "completed"
                ? "text-green-600"
                : "text-red-600"
        }`}
      >
        {item.status}
      </span>
    ),
  },
  {
    id: "priority",
    header: "Priority",
    accessorKey: "priority",
    cell: (item) => (
      <span
        className={`capitalize ${
          item.priority === "urgent"
            ? "text-red-600 font-bold"
            : item.priority === "high"
              ? "text-orange-600"
              : item.priority === "medium"
                ? "text-blue-600"
                : "text-gray-600"
        }`}
      >
        {item.priority}
      </span>
    ),
  },
  { id: "assignee", header: "Assignee", accessorKey: "assignee" },
  {
    id: "dueDate",
    header: "Due Date",
    accessorKey: "dueDate",
    cell: (item) => new Date(item.dueDate).toLocaleDateString(),
  },
];

const filterFields = [
  {
    name: "status",
    label: "Status",
    type: "select" as const,
    placeholder: "Select status",
    options: [
      { value: "active", label: "Active" },
      { value: "pending", label: "Pending" },
      { value: "completed", label: "Completed" },
      { value: "cancelled", label: "Cancelled" },
    ],
  },
  {
    name: "priority",
    label: "Priority",
    type: "combobox" as const,
    placeholder: "Select priority",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
      { value: "urgent", label: "Urgent" },
    ],
  },
  {
    name: "assignee",
    label: "Assignee",
    type: "combobox" as const,
    placeholder: "Select assignee",
    options: [
      { value: "John Doe", label: "John Doe" },
      { value: "Jane Smith", label: "Jane Smith" },
      { value: "Bob Wilson", label: "Bob Wilson" },
      { value: "Alice Brown", label: "Alice Brown" },
    ],
  },
  {
    name: "dueDate",
    label: "Due Date",
    type: "date" as const,
    placeholder: "Select date",
  },
];

// ============================================================================
// Basic Example
// ============================================================================

export const Basic: Story = {
  args: {
    data: mockWorkOrders,
    columns: columns as ColumnDef<any>[],
    filterFields,
    searchPlaceholder: "Search work orders...",
    onSearchChange: (query) => console.log("Search:", query),
    onFiltersChange: (filters) => console.log("Filters:", filters),
  },
};

// ============================================================================
// With Initial Filters
// ============================================================================

export const WithInitialFilters: Story = {
  args: {
    ...Basic.args,
    filters: {
      status: "active",
      priority: "high",
    },
  },
};

// ============================================================================
// Loading State
// ============================================================================

export const Loading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    data: [],
  },
};

// ============================================================================
// Empty State
// ============================================================================

export const EmptyStateStory: Story = {
  args: {
    ...Basic.args,
    data: [],
    emptyMessage: "No work orders found",
  },
};

// ============================================================================
// Empty State with Custom Component
// ============================================================================

export const EmptyStateWithAction: Story = {
  args: {
    ...Basic.args,
    data: [],
    emptyState: (
      <EmptyState
        title="No Work Orders"
        description="Get started by creating a new work order for your team."
        icon={PackageOpen}
        action={{
          label: "Create Work Order",
          onClick: () => console.log("Create clicked"),
          icon: <Plus className="h-4 w-4" />,
        }}
      />
    ),
  },
};

// ============================================================================
// Empty State Compact
// ============================================================================

export const EmptyStateCompact: Story = {
  args: {
    ...Basic.args,
    data: [],
    emptyState: (
      <EmptyState
        title="No Results Found"
        description="Try adjusting your search or filters"
        compact
      />
    ),
  },
};

// ============================================================================
// Custom Search Placeholder
// ============================================================================

export const CustomSearch: Story = {
  args: {
    ...Basic.args,
    searchPlaceholder: "Search by title, ID, or assignee...",
  },
};

// ============================================================================
// Usage Example with Real Handlers
// ============================================================================

export const UsageExample: Story = {
  render: (args) => {
    const [filters, setFilters] = React.useState({});
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = React.useCallback((query: string) => {
      setSearchQuery(query);
      console.log("Searching for:", query);
      // In real app: API call with search query
    }, []);

    const handleFiltersChange = React.useCallback((newFilters: any) => {
      setFilters(newFilters);
      console.log("Filtering by:", newFilters);
      // In real app: API call with filters
    }, []);

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Current search: {searchQuery || "none"}</p>
          <p>Current filters: {JSON.stringify(filters, null, 2)}</p>
        </div>
        <SmartDataTable
          {...args}
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />
      </div>
    );
  },
  args: {
    data: mockWorkOrders,
    columns: columns as ColumnDef<any>[],
    filterFields,
    searchPlaceholder: "Search work orders...",
  },
};
