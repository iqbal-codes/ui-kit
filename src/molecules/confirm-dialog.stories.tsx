import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { ConfirmDialog } from "./confirm-dialog"
import { Button } from "@/atom/button"

const meta: Meta<typeof ConfirmDialog> = {
  title: "Molecules/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DefaultTemplate = (args: React.ComponentProps<typeof ConfirmDialog>) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <ConfirmDialog {...args} open={open} onOpenChange={setOpen} />
    </>
  )
}

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    title: "Are you sure?",
    description: "This action cannot be undone.",
    onConfirm: () => console.log("Confirmed"),
    confirmLabel: "Continue",
    cancelLabel: "Cancel",
    variant: "default",
  },
}

export const Destructive: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    title: "Delete Item",
    description: "This will permanently delete the item. This action cannot be undone.",
    onConfirm: () => console.log("Deleted"),
    confirmLabel: "Delete",
    cancelLabel: "Cancel",
    variant: "destructive",
  },
}
