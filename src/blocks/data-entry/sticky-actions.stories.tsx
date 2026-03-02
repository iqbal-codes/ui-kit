import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitives/button'
import { StickyActions } from './sticky-actions'

const meta: Meta<typeof StickyActions> = {
  title: 'Blocks/Data Entry/StickyActions',
  component: StickyActions,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StickyActions>

export const Default: Story = {
  render: () => (
    <div className="min-h-[400px] flex flex-col">
      <div className="flex-1 p-4 space-y-4">
        <h2 className="text-lg font-semibold">Form Content</h2>
        <p className="text-muted-foreground">Scroll down to see the sticky actions bar.</p>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-32 bg-muted rounded-md" />
        ))}
      </div>
      <StickyActions>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </StickyActions>
    </div>
  ),
}

export const WithDirtyWarning: Story = {
  render: () => {
    const [isDirty, setIsDirty] = useState(false)
    return (
      <div className="min-h-[400px] flex flex-col">
        <div className="flex-1 p-4 space-y-4">
          <h2 className="text-lg font-semibold">Form with Dirty State</h2>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={isDirty}
              onChange={(e) => setIsDirty(e.target.checked)}
            />
            Mark as dirty
          </label>
          <p className="text-muted-foreground">Toggle to see unsaved changes warning.</p>
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-muted rounded-md" />
          ))}
        </div>
        <StickyActions showDirtyWarning isDirty={isDirty}>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </StickyActions>
      </div>
    )
  },
  args: {
    showDirtyWarning: true,
    isDirty: false,
  },
}

export const Top: Story = {
  render: () => (
    <div className="min-h-[400px] flex flex-col">
      <StickyActions position="top">
        <span className="text-sm text-muted-foreground">Editing: Product Details</span>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </StickyActions>
      <div className="flex-1 p-4 space-y-4">
        <h2 className="text-lg font-semibold">Form Content</h2>
        <p className="text-muted-foreground">Sticky actions at the top.</p>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-32 bg-muted rounded-md" />
        ))}
      </div>
    </div>
  ),
  args: {
    position: 'top',
  },
}
