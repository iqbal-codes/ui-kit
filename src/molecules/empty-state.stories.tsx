import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./empty-state";
import { FolderOpen } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "No items found",
    description: "Get started by creating a new item.",
    icon: FolderOpen,
  },
};

export const WithAction: Story = {
  args: {
    title: "No projects",
    description: "You haven't created any projects yet.",
    icon: FolderOpen,
    action: {
      label: "Create Project",
      onClick: () => {},
    },
  },
};

export const Minimal: Story = {
  args: {
    title: "Nothing here",
  },
};
