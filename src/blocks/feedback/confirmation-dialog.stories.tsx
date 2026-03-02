import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitives/button'
import { ConfirmationDialog } from './confirmation-dialog'

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'Blocks/Feedback/ConfirmationDialog',
  component: ConfirmationDialog,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ConfirmationDialog>

export const Danger: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <ConfirmationDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete item?"
          description="This action cannot be undone. The item will be permanently removed."
          variant="danger"
          confirmText="Delete"
          onConfirm={() => console.log('confirmed')}
        />
      </div>
    )
  },
  args: {
    title: 'Delete item?',
    description: 'This action cannot be undone.',
    variant: 'danger',
    confirmText: 'Delete',
  },
}

export const Warning: Story = {
  args: {
    title: 'Leave without saving?',
    description: 'You have unsaved changes that will be lost.',
    variant: 'warning',
    confirmText: 'Leave',
  },
}

export const Info: Story = {
  args: {
    title: 'Continue processing?',
    description: 'This may take a few minutes to complete.',
    variant: 'info',
    confirmText: 'Continue',
  },
}

export const Question: Story = {
  args: {
    title: 'Are you sure?',
    description: 'Please confirm your action.',
    variant: 'question',
    confirmText: 'Yes',
    cancelText: 'No',
  },
}
