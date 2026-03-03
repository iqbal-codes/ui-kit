import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/primitives/avatar";
import { Button } from "@/primitives/button";
import { EntityCard } from "./entity-card";

const meta: Meta<typeof EntityCard> = {
  title: "Blocks/Data Display/EntityCard",
  component: EntityCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EntityCard>;

export const Default: Story = {
  args: {
    title: "Project Alpha",
    subtitle: "Active Project",
    description: "A modern web application with advanced features and real-time updates.",
    status: { label: "Active", variant: "default" },
    metadata: [
      { label: "Owner", value: "John Doe" },
      { label: "Due Date", value: "Mar 15, 2026" },
    ],
  },
};

export const WithProgress: Story = {
  args: {
    title: "Task Development",
    subtitle: "In Progress",
    description: "Building the core feature set for the next release.",
    status: { label: "In Progress", variant: "secondary" },
    progress: 65,
    metadata: [
      { label: "Tasks", value: "12/18" },
      { label: "Days Left", value: "5" },
    ],
  },
};

export const WithAvatar: Story = {
  args: {
    title: "User Profile",
    subtitle: "Administrator",
    description: "Managing system configuration and user permissions.",
    status: { label: "Verified", variant: "outline" },
    avatar: (
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    metadata: [
      { label: "Email", value: "user@example.com" },
      { label: "Role", value: "Admin" },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: "Feature Request",
    subtitle: "Open",
    description: "Add dark mode support to the application.",
    status: { label: "Open", variant: "secondary" },
    actions: (
      <>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          Archive
        </Button>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    title: "Click me",
    subtitle: "Interactive card",
    description: "This whole card is clickable.",
    onClick: () => console.log("card clicked"),
  },
};

export const Minimal: Story = {
  args: {
    title: "Simple Item",
  },
};
