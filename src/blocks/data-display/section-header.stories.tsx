import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "lucide-react";
import { SectionHeader } from "./section-header";

const meta: Meta<typeof SectionHeader> = {
  title: "Blocks/Data Display/SectionHeader",
  component: SectionHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: "Section Title",
    description: "This is an optional description for the section",
  },
};

export const WithAction: Story = {
  args: {
    title: "Users",
    description: "Manage user accounts and permissions",
    action: {
      label: "Add User",
      onClick: () => console.log("add user clicked"),
      variant: "default",
    },
  },
};

export const WithIcon: Story = {
  args: {
    title: "Analytics",
    description: "View your performance metrics",
    icon: <span className="text-2xl">📊</span>,
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Simple Section",
  },
};

export const WithIconAndAction: Story = {
  args: {
    title: "Products",
    description: "Manage your product inventory",
    icon: <span className="text-2xl">📦</span>,
    action: {
      label: "Add Product",
      onClick: () => console.log("add product"),
      variant: "outline",
      icon: <PlusIcon className="h-4 w-4" />,
    },
  },
};
