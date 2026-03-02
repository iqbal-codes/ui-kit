import type { Meta, StoryObj } from "@storybook/react"
import { ActionMenu } from "./action-menu"

const meta: Meta<typeof ActionMenu> = {
  title: "Molecules/ActionMenu",
  component: ActionMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultActions = [
  { label: "Edit", onClick: () => console.log("Edit") },
  { label: "Duplicate", onClick: () => console.log("Duplicate") },
  { label: "Delete", onClick: () => console.log("Delete"), destructive: true },
]

export const Default: Story = {
  args: {
    actions: defaultActions,
    label: "Actions",
  },
}

export const WithDisabled: Story = {
  args: {
    actions: [
      { label: "Edit", onClick: () => console.log("Edit") },
      { label: "Share", onClick: () => console.log("Share"), disabled: true },
      { label: "Delete", onClick: () => console.log("Delete"), destructive: true },
    ],
    label: "Actions",
  },
}

export const AlignedStart: Story = {
  args: {
    actions: defaultActions,
    align: "start",
    label: "Actions",
  },
}
