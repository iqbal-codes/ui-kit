import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { DraggableKanbanBoard } from "./draggable-kanban-board";
import type { KanbanColumn, BaseCardMetadata } from "./types";

/**
 * DraggableKanbanBoard with full drag-and-drop support using dnd-kit.
 */
const meta = {
  title: "Blocks/Kanban/DraggableKanbanBoard",
  component: DraggableKanbanBoard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DraggableKanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleCards: BaseCardMetadata[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Users can't login with special characters",
    priority: "high",
    assignee: { id: "u1", name: "John Doe" },
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString(),
    tags: [
      { id: "t1", label: "Bug", color: "red" },
      { id: "t2", label: "Frontend", color: "blue" },
    ],
    subtasks: [
      { id: "s1", title: "Reproduce bug", completed: true },
      { id: "s2", title: "Fix validation", completed: true },
    ],
  },
  {
    id: "2",
    title: "Add dark mode",
    priority: "medium",
    tags: [{ id: "t3", label: "Feature", color: "green" }],
  },
];

const sampleColumns: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    cards: sampleCards,
    color: "gray",
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [],
    color: "blue",
  },
  {
    id: "done",
    title: "Done",
    cards: [],
    color: "green",
  },
];

/**
 * Default draggable board
 */
export const Default: Story = {
  args: {
    columns: sampleColumns,
    enableColumnDrag: true,
    enableCardDrag: true,
    onCardMove: async (
      cardId: string,
      fromColumnId: string,
      toColumnId: string,
      newIndex: number
    ) => {
      console.log("Move card", cardId, "from", fromColumnId, "to", toColumnId);
    },
  },
};

/**
 * Custom card rendering
 */
export const CustomCards: Story = {
  args: {
    columns: sampleColumns,
    enableColumnDrag: false,
    enableCardDrag: true,
  },
};
