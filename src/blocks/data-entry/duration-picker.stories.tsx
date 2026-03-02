import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DurationPicker } from './duration-picker'

const meta: Meta<typeof DurationPicker> = {
  title: 'Blocks/Data Entry/DurationPicker',
  component: DurationPicker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DurationPicker>

export const Default: Story = {
  args: {
    value: 90,
    onChange: (mins) => console.log('duration:', mins),
  },
}

export const Zero: Story = {
  args: {
    value: 0,
  },
}

export const NoPresets: Story = {
  args: {
    showPresets: false,
  },
}
