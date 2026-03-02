import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StickyHeader } from './sticky-header'
import { BreadcrumbTrail } from '../navigation/breadcrumb-trail'

const meta: Meta<typeof StickyHeader> = {
  title: 'Blocks/Layout/StickyHeader',
  component: StickyHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StickyHeader>

export const Default: Story = {
  render: () => (
    <div>
      <StickyHeader>
        <div className="p-4 border-b">
          <BreadcrumbTrail
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', isActive: true },
            ]}
          />
        </div>
      </StickyHeader>
      <div className="p-4 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-48 bg-muted rounded-md" />
        ))}
      </div>
    </div>
  ),
  args: {
    offset: 0,
    showBorder: true,
  },
}

export const NoBorder: Story = {
  render: () => (
    <div>
      <StickyHeader showBorder={false}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Section Title</h2>
        </div>
      </StickyHeader>
      <div className="p-4 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-muted rounded-md" />
        ))}
      </div>
    </div>
  ),
  args: {
    showBorder: false,
  },
}
