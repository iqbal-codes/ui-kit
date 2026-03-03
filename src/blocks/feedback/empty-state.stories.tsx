import type { Meta, StoryObj } from "@storybook/react";
import { FileText, Plus, Search, Users } from "lucide-react";
import { EmptyState } from "./empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Blocks/Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No items found",
    description: "Try adjusting your search or filters to find what you're looking for.",
  },
};

export const WithPrimaryAction: Story = {
  args: {
    title: "No users yet",
    description: "Start by adding your first user to the system.",
    action: {
      label: "Add User",
      onClick: () => console.log("Add user clicked"),
    },
  },
};

export const WithBothActions: Story = {
  args: {
    title: "No documents",
    description: "Upload your first document to get started.",
    action: {
      label: "Upload Document",
      onClick: () => console.log("Upload clicked"),
    },
    secondaryAction: {
      label: "Learn More",
      variant: "outline",
      onClick: () => console.log("Learn more clicked"),
    },
  },
};

export const CustomIcon: Story = {
  args: {
    title: "No search results",
    description: "We couldn't find any matches for your search.",
    icon: Search,
    action: {
      label: "Clear Search",
      onClick: () => console.log("Clear search clicked"),
    },
  },
};

export const Compact: Story = {
  args: {
    title: "No items",
    description: "There are no items to display.",
    compact: true,
  },
};

export const CompactWithAction: Story = {
  args: {
    title: "No results",
    description: "Try a different search term.",
    compact: true,
    action: {
      label: "Clear",
      variant: "ghost",
      onClick: () => console.log("Clear clicked"),
    },
  },
};

export const DifferentIcons: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <EmptyState
        title="No users"
        description="Add users to your organization"
        icon={Users}
        action={{
          label: "Add User",
          onClick: () => {},
        }}
      />
      <EmptyState
        title="No documents"
        description="Upload your first file"
        icon={FileText}
        action={{
          label: "Upload File",
          onClick: () => {},
        }}
      />
      <EmptyState
        title="No results"
        description="Try a different search"
        icon={Search}
        action={{
          label: "Search Again",
          onClick: () => {},
        }}
      />
      <EmptyState
        title="Empty collection"
        description="Create your first item"
        icon={Plus}
        action={{
          label: "Create New",
          onClick: () => {},
        }}
      />
    </div>
  ),
};

export const TitleOnly: Story = {
  args: {
    title: "Nothing here yet",
  },
};
