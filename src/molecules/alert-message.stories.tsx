import type { Meta, StoryObj } from "@storybook/react"
import { AlertMessage } from "./alert-message"

const meta: Meta<typeof AlertMessage> = {
  title: "Molecules/AlertMessage",
  component: AlertMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning", "info"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Note",
    description: "This is a default alert message.",
    variant: "default",
  },
}

export const Destructive: Story = {
  args: {
    title: "Error",
    description: "Something went wrong. Please try again.",
    variant: "destructive",
  },
}

export const Success: Story = {
  args: {
    title: "Success",
    description: "Your changes have been saved successfully.",
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    title: "Warning",
    description: "Please review your settings before continuing.",
    variant: "warning",
  },
}

export const Info: Story = {
  args: {
    title: "Information",
    description: "Here is some useful information for you.",
    variant: "info",
  },
}

export const WithChildren: Story = {
  args: {
    title: "Custom Content",
    variant: "info",
    children: "This alert uses children instead of description prop.",
  },
}
