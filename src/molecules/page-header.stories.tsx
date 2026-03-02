import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./page-header";
import { Button } from "@/atom/button";
import { Plus } from "lucide-react";

const meta: Meta<typeof PageHeader> = {
  title: "Molecules/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    description: "Welcome back! Here's what's happening.",
  },
};

export const WithActions: Story = {
  args: {
    title: "Projects",
    description: "Manage your projects and tasks.",
    actions: (
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        New Project
      </Button>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Settings",
  },
};
