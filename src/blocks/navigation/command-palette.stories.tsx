import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitives/button'
import { SearchIcon, FileIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { CommandPalette } from './command-palette'

const meta: Meta<typeof CommandPalette> = {
  title: 'Blocks/Navigation/CommandPalette',
  component: CommandPalette,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CommandPalette>

const items = [
  { id: '1', label: 'Search', icon: <SearchIcon className="h-4 w-4" />, onSelect: () => console.log('search') },
  { id: '2', label: 'Files', icon: <FileIcon className="h-4 w-4" />, onSelect: () => console.log('files') },
  { id: '3', label: 'Settings', icon: <SettingsIcon className="h-4 w-4" />, onSelect: () => console.log('settings') },
  { id: '4', label: 'Profile', icon: <UserIcon className="h-4 w-4" />, onSelect: () => console.log('profile') },
]

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <p className="mt-2 text-sm text-muted-foreground">Press Cmd+K to open</p>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          items={items}
        />
      </div>
    )
  },
}

export const PredefinedItems: Story = {
  args: {
    items,
  },
}
