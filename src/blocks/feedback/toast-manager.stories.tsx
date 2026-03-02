import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitives/button'
import { toast } from 'sonner'
import { ToastManager } from './toast-manager'

const meta: Meta<typeof ToastManager> = {
  title: 'Blocks/Feedback/ToastManager',
  component: ToastManager,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ToastManager>

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <ToastManager />
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="default"
          onClick={() => toast.success('Successfully saved!')}
        >
          Success
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error('Failed to save')}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning('Please review your input')}
        >
          Warning
        </Button>
        <Button
          variant="secondary"
          onClick={() => toast.info('New updates available')}
        >
          Info
        </Button>
      </div>
    </div>
  ),
}

export const TopCenter: Story = {
  render: () => (
    <div className="space-y-4">
      <ToastManager position="top-center" />
      <Button
        variant="default"
        onClick={() => toast.success('Successfully saved!')}
      >
        Show Toast
      </Button>
    </div>
  ),
  args: {
    position: 'top-center',
  },
}

export const DarkTheme: Story = {
  render: () => (
    <div className="space-y-4">
      <ToastManager theme="dark" />
      <Button
        variant="default"
        onClick={() => toast.success('Dark theme toast')}
      >
        Show Toast
      </Button>
    </div>
  ),
  args: {
    theme: 'dark',
  },
}
