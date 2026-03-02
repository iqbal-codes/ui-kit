import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ConnectionStatus } from './connection-status'

const meta: Meta<typeof ConnectionStatus> = {
  title: 'Blocks/Feedback/ConnectionStatus',
  component: ConnectionStatus,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ConnectionStatus>

export const Connected: Story = {
  args: {
    status: 'connected',
  },
}

export const Disconnected: Story = {
  args: {
    status: 'disconnected',
  },
}

export const Connecting: Story = {
  args: {
    status: 'connecting',
  },
}

export const NoIcon: Story = {
  args: {
    status: 'connected',
    showIcon: false,
  },
}

export const CustomLabels: Story = {
  args: {
    status: 'connected',
    labels: {
      connected: 'Online',
      disconnected: 'Offline',
      connecting: 'Reconnecting...',
    },
  },
}
