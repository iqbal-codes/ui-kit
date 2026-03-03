import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { KanbanBoard, KanbanColumn, ColumnHeader, BoardToolbar, QuickAddCard } from "../index";
import { KanbanCard } from "../card";

/**
 * KanbanBoard displays columns horizontally with scrollable content.
 * 
 * Supports:
 * - Horizontal scrolling for many columns
 * - Empty state when no cards exist
 * - Loading state
 * - Feature flags for enabling/disabling functionality
 */
const meta = {
  title: "Blocks/Kanban/KanbanBoard",
  component: KanbanBoard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    emptyStateMessage: { control: "text" },
  },
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleCards = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Users can't login with special characters in password",
    priority: "high" as const,
    assignee: { id: "u1", name: "John Doe", avatarUrl: "" },
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString(),
    tags: [
      { id: "t1", label: "Bug", color: "red" },
      { id: "t2", label: "Frontend", color: "blue" },
    ],
    subtasks: [
      { id: "s1", title: "Reproduce bug", completed: true },
      { id: "s2", title: "Fix validation", completed: true },
      { id: "s3", title: "Add tests", completed: false },
    ],
    attachments: [{ id: "a1", name: "screenshot.png", url: "", type: "image/png" }],
  },
  {
    id: "2",
    title: "Add dark mode",
    description: "Implement dark mode theme toggle",
    priority: "medium" as const,
    assignee: { id: "u2", name: "Jane Smith", avatarUrl: "" },
    dueDate: new Date(Date.now() + 86400000 * 5).toISOString(),
    tags: [
      { id: "t3", label: "Feature", color: "green" },
    ],
    subtasks: [],
    attachments: [],
  },
  {
    id: "3",
    title: "Update documentation",
    priority: "low" as const,
    tags: [
      { id: "t4", label: "Docs", color: "purple" },
    ],
  },
];

const sampleColumns = [
  {
    id: "todo",
    title: "To Do",
    cards: [sampleCards[0], sampleCards[1]],
    color: "gray",
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [sampleCards[2]],
    color: "blue",
  },
  {
    id: "review",
    title: "Review",
    cards: [],
    color: "yellow",
  },
  {
    id: "done",
    title: "Done",
    cards: [],
    color: "green",
  },
];

/**
 * Default board with sample data
 */
export const Default: Story = {
  args: {
    columns: sampleColumns,
    features: {
      cardCreation: true,
      columnCollapse: false,
    },
  },
  render: (args) => (
    <div className="h-screen">
      <KanbanBoard {...args} />
    </div>
  ),
};

/**
 * Board with toolbar
 */
export const WithToolbar: Story = {
  args: {
    columns: sampleColumns,
  },
  render: (args) => (
    <div className="h-screen flex flex-col">
      <BoardToolbar
        searchQuery=""
        onSearchChange={(q) => console.log("Search:", q)}
        filtersCount={2}
        onFiltersClick={() => console.log("Filters")}
      />
      <KanbanBoard {...args} />
    </div>
  ),
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    columns: [],
    isLoading: true,
  },
  render: (args) => (
    <div className="h-screen">
      <KanbanBoard {...args} />
    </div>
  ),
};

/**
 * Empty state
 */
export const EmptyState: Story = {
  args: {
    columns: [
      { id: "1", title: "Column 1", cards: [] },
      { id: "2", title: "Column 2", cards: [] },
    ],
    emptyStateMessage: "No cards yet",
  },
  render: (args) => (
    <div className="h-screen">
      <KanbanBoard {...args} />
    </div>
  ),
};

/**
 * Custom card rendering
 */
export const CustomCards: Story = {
  args: {
    columns: sampleColumns,
  },
  render: (args) => (
    <div className="h-screen">
      <KanbanBoard
        {...args}
      />
    </div>
  ),
};
