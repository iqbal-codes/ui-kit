import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/primitives/card'
import { CardGrid } from './card-grid'

const meta: Meta<typeof CardGrid> = {
  title: 'Blocks/Data Display/CardGrid',
  component: CardGrid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardGrid>

const SampleCard = ({ index }: { index: number }) => (
  <Card>
    <CardContent className="pt-6">
      <p>Card {index}</p>
    </CardContent>
  </Card>
)

export const Default: Story = {
  render: () => (
    <CardGrid columns={3}>
      {[1, 2, 3, 4, 5, 6].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
  args: {
    columns: 3,
    gap: 'md',
  },
}

export const TwoColumns: Story = {
  render: () => (
    <CardGrid columns={2} gap="md">
      {[1, 2, 3, 4].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
  args: {
    columns: 2,
    gap: 'md',
  },
}

export const FourColumns: Story = {
  render: () => (
    <CardGrid columns={4} gap="sm">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
  args: {
    columns: 4,
    gap: 'sm',
  },
}

export const LargeGap: Story = {
  render: () => (
    <CardGrid columns={3} gap="lg">
      {[1, 2, 3].map((i) => <SampleCard key={i} index={i} />)}
    </CardGrid>
  ),
  args: {
    columns: 3,
    gap: 'lg',
  },
}
