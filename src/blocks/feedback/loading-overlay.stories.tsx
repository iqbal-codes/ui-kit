import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitives/button'
import { Card, CardContent } from '@/primitives/card'
import { LoadingOverlay } from './loading-overlay'

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Blocks/Feedback/LoadingOverlay',
  component: LoadingOverlay,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadingOverlay>

const LoadingContent = () => (
  <Card>
    <CardContent className="pt-6">
      <p>This content is behind the loading overlay.</p>
      <p className="text-sm text-muted-foreground mt-2">
        The overlay dims this content when loading.
      </p>
    </CardContent>
  </Card>
)

export const Default: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(true)
    return (
      <div className="space-y-4">
        <LoadingOverlay {...args} isLoading={loading}>
          <LoadingContent />
        </LoadingOverlay>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? 'Hide Loading' : 'Show Loading'}
        </Button>
      </div>
    )
  },
  args: {
    isLoading: true,
    message: 'Loading...',
    description: 'Fetching your data',
  },
}

export const FullScreen: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(true)
    return (
      <div>
        <Button onClick={() => setLoading(!loading)} className="mb-4">
          {loading ? 'Hide Full Screen' : 'Show Full Screen'}
        </Button>
        <LoadingOverlay {...args} isLoading={loading} fullScreen>
          <p>Full screen overlay content</p>
        </LoadingOverlay>
      </div>
    )
  },
  args: {
    isLoading: true,
    fullScreen: true,
    message: 'Loading...',
  },
}

export const Inline: Story = {
  args: {
    isLoading: true,
    message: 'Processing',
  },
}

export const NoMessage: Story = {
  args: {
    isLoading: true,
  },
}
