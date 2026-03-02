import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TabsPanel } from './tabs-panel'

const meta: Meta<typeof TabsPanel> = {
  title: 'Blocks/Navigation/TabsPanel',
  component: TabsPanel,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TabsPanel>

const items = [
  { id: 'account', label: 'Account', content: <div className="p-4">Account settings content</div> },
  { id: 'password', label: 'Password', content: <div className="p-4">Password settings content</div> },
  { id: 'notifications', label: 'Notifications', content: <div className="p-4">Notification preferences</div> },
]

export const Default: Story = {
  args: {
    items,
  },
}

export const Pills: Story = {
  args: {
    items,
    variant: 'pills',
  },
}

export const Outline: Story = {
  args: {
    items,
    variant: 'outline',
  },
}

export const WithDisabled: Story = {
  args: {
    items: [
      { id: 'tab1', label: 'Active', content: <div className="p-4">Content 1</div> },
      { id: 'tab2', label: 'Disabled', content: <div className="p-4">Content 2</div>, disabled: true },
      { id: 'tab3', label: 'Another', content: <div className="p-4">Content 3</div> },
    ],
  },
}

export const Controlled: Story = {
  render: () => {
    const [tab, setTab] = React.useState('account')
    return (
      <TabsPanel
        items={items}
        value={tab}
        onValueChange={setTab}
      />
    )
  },
}
