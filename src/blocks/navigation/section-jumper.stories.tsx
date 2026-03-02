import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileIcon, ImageIcon, CodeIcon } from 'lucide-react'
import { SectionJumper } from './section-jumper'

const meta: Meta<typeof SectionJumper> = {
  title: 'Blocks/Navigation/SectionJumper',
  component: SectionJumper,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SectionJumper>

export const Default: Story = {
  args: {
    sections: [
      { id: 'intro', label: 'Introduction', icon: <FileIcon className="h-4 w-4" /> },
      { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="h-4 w-4" /> },
      { id: 'code', label: 'Code', icon: <CodeIcon className="h-4 w-4" /> },
    ],
    activeSection: 'intro',
  },
}

export const NoIcons: Story = {
  args: {
    sections: [
      { id: 'section1', label: 'Section 1' },
      { id: 'section2', label: 'Section 2' },
      { id: 'section3', label: 'Section 3' },
    ],
    showIcons: false,
  },
}
