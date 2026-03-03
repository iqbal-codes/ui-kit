import type { Meta, StoryObj } from "@storybook/react";
import { ProgressTracker } from "./progress-tracker";

const meta: Meta<typeof ProgressTracker> = {
  title: "Blocks/Feedback/ProgressTracker",
  component: ProgressTracker,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressTracker>;

const steps = [
  { id: "1", title: "Step 1", description: "Initial setup" },
  { id: "2", title: "Step 2", description: "Configuration" },
  { id: "3", title: "Step 3", description: "Review" },
  { id: "4", title: "Step 4", description: "Complete" },
];

export const Default: Story = {
  args: {
    steps,
    currentStep: 1,
  },
};

export const FirstStep: Story = {
  args: {
    steps,
    currentStep: 0,
  },
};

export const LastStep: Story = {
  args: {
    steps,
    currentStep: 3,
  },
};

export const NoDescriptions: Story = {
  args: {
    steps,
    currentStep: 1,
    showDescriptions: false,
  },
};

export const Vertical: Story = {
  args: {
    steps,
    currentStep: 2,
    orientation: "vertical",
  },
};

export const Clickable: Story = {
  args: {
    steps: [
      { id: "1", title: "Step 1", description: "Initial setup" },
      {
        id: "2",
        title: "Step 2",
        description: "Configuration",
        onClick: () => console.log("step 2 clicked"),
      },
      { id: "3", title: "Step 3", description: "Review" },
    ],
    currentStep: 0,
    clickable: true,
  },
};
