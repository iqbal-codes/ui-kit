import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MetricCard } from './metric-card'

const meta: Meta<typeof MetricCard> = {
  title: 'Blocks/Data Display/MetricCard',
  component: MetricCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MetricCard>

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$124,563',
    trend: 'up',
    trendValue: '12.5%',
    description: 'Compared to last month',
  },
}

export const TrendDown: Story = {
  args: {
    label: 'Bounce Rate',
    value: '42.3%',
    trend: 'down',
    trendValue: '5.2%',
    description: 'Higher is worse',
  },
}

export const Neutral: Story = {
  args: {
    label: 'Active Users',
    value: '1,234',
    trend: 'neutral',
    trendValue: '0%',
  },
}

export const Compact: Story = {
  args: {
    label: 'Orders',
    value: '567',
    trend: 'up',
    trendValue: '8%',
    compact: true,
  },
}

export const WithPreviousValue: Story = {
  args: {
    label: 'Page Views',
    value: 45230,
    previousValue: 40000,
    trend: 'up',
    description: 'Auto-calculated from values',
  },
}

export const Clickable: Story = {
  args: {
    label: 'Click me',
    value: '1,234',
    onClick: () => console.log('card clicked'),
  },
}
