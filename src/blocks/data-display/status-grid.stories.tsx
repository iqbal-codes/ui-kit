import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatusGrid } from './status-grid'

const meta: Meta<typeof StatusGrid> = {
  title: 'Blocks/Data Display/StatusGrid',
  component: StatusGrid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatusGrid>

const sampleItems = [
  { id: '1', label: 'Active', count: 45, variant: 'success' as const },
  { id: '2', label: 'Pending', count: 23, variant: 'warning' as const },
  { id: '3', label: 'Inactive', count: 12, variant: 'error' as const },
  { id: '4', label: 'Draft', count: 8, variant: 'default' as const },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    total: 88,
  },
}

export const NoProgress: Story = {
  args: {
    items: sampleItems,
    showProgress: false,
  },
}

export const SmallRings: Story = {
  args: {
    items: sampleItems,
    ringSize: 'sm',
  },
}

export const LargeRings: Story = {
  args: {
    items: sampleItems,
    ringSize: 'lg',
  },
}
