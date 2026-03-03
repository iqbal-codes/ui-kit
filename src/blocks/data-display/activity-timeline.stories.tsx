import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "lucide-react";
import { ActivityTimeline } from "./activity-timeline";

const meta: Meta<typeof ActivityTimeline> = {
  title: "Blocks/Data Display/ActivityTimeline",
  component: ActivityTimeline,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ActivityTimeline>;

const sampleItems = [
  {
    id: "1",
    title: "Task completed",
    description: "The project was marked as complete",
    timestamp: "2 hours ago",
    variant: "success" as const,
  },
  {
    id: "2",
    title: "Comment added",
    description: "John commented on the task",
    timestamp: "5 hours ago",
    variant: "info" as const,
  },
  {
    id: "3",
    title: "Status changed",
    description: "Moved to In Progress",
    timestamp: "1 day ago",
    variant: "warning" as const,
  },
  {
    id: "4",
    title: "Task created",
    description: "New task was assigned",
    timestamp: "2 days ago",
    variant: "default" as const,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Compact: Story = {
  args: {
    items: sampleItems,
    compact: true,
  },
};

export const NoTimestamp: Story = {
  args: {
    items: sampleItems,
    showTimestamp: false,
  },
};

export const CustomIcons: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Payment successful",
        description: "Order #12345 has been paid",
        timestamp: "Just now",
        icon: <CheckCircleIcon className="h-3 w-3" />,
        variant: "success" as const,
      },
      {
        id: "2",
        title: "Payment failed",
        description: "Insufficient funds",
        timestamp: "1 hour ago",
        icon: <XCircleIcon className="h-3 w-3" />,
        variant: "error" as const,
      },
      {
        id: "3",
        title: "Pending review",
        description: "Awaiting payment confirmation",
        timestamp: "3 hours ago",
        icon: <ClockIcon className="h-3 w-3" />,
        variant: "warning" as const,
      },
    ],
  },
};
