import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonGenerator } from './skeleton-generator'

const meta: Meta<typeof SkeletonGenerator> = {
  title: 'Blocks/Feedback/SkeletonGenerator',
  component: SkeletonGenerator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkeletonGenerator>

export const Card: Story = {
  args: {
    variant: 'card',
    count: 3,
  },
}

export const List: Story = {
  args: {
    variant: 'list',
    count: 5,
  },
}

export const Table: Story = {
  args: {
    variant: 'table',
    count: 5,
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    count: 4,
  },
}
