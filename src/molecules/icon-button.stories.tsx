import type { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "./icon-button"
import { Plus, Trash2, Settings, Bell } from "lucide-react"

const meta: Meta<typeof IconButton> = {
  title: "Molecules/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Plus,
    label: "Add item",
  },
}

export const WithTooltip: Story = {
  args: {
    icon: Settings,
    label: "Settings",
    tooltip: "Open settings",
  },
}

export const Destructive: Story = {
  args: {
    icon: Trash2,
    label: "Delete",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    icon: Bell,
    label: "Notifications",
    variant: "outline",
  },
}

export const Small: Story = {
  args: {
    icon: Plus,
    label: "Add",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    icon: Plus,
    label: "Add",
    size: "lg",
  },
}

export const Ghost: Story = {
  args: {
    icon: Settings,
    label: "Settings",
    variant: "ghost",
  },
}
