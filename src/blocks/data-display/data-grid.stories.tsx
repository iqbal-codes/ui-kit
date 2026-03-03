import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/primitives/badge";
import { DataGrid } from "./data-grid";

const meta: Meta<typeof DataGrid> = {
  title: "Blocks/Data Display/DataGrid",
  component: DataGrid,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

const columns = [
  { id: "name", label: "Name", width: "30%" },
  { id: "email", label: "Email", width: "40%" },
  { id: "status", label: "Status", width: "30%", align: "center" as const },
];

const rows = [
  {
    id: "1",
    cells: {
      name: "John Doe",
      email: "john@example.com",
      status: <Badge variant="default">Active</Badge>,
    },
  },
  {
    id: "2",
    cells: {
      name: "Jane Smith",
      email: "jane@example.com",
      status: <Badge variant="secondary">Pending</Badge>,
    },
  },
  {
    id: "3",
    cells: {
      name: "Bob Wilson",
      email: "bob@example.com",
      status: <Badge variant="destructive">Inactive</Badge>,
    },
  },
];

export const Default: Story = {
  args: {
    columns,
    rows,
  },
};

export const Striped: Story = {
  args: {
    columns,
    rows,
    striped: true,
  },
};

export const NoHover: Story = {
  args: {
    columns,
    rows,
    hoverable: false,
  },
};

export const ClickableRows: Story = {
  args: {
    columns,
    rows,
    onRowClick: (row) => console.log("clicked:", row.id),
  },
};

export const Empty: Story = {
  args: {
    columns,
    rows: [],
  },
};
