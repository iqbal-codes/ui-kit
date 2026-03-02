import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/primitives/input'
import { Label } from '@/primitives/label'
import { FormSection } from './form-section'

const meta: Meta<typeof FormSection> = {
  title: 'Blocks/Data Entry/FormSection',
  component: FormSection,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormSection>

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Input placeholder={placeholder} />
  </div>
)

export const Default: Story = {
  args: {
    title: 'Personal Information',
    description: 'Enter your personal details below.',
    children: (
      <div className="grid gap-4">
        <Field label="First Name" placeholder="John" />
        <Field label="Last Name" placeholder="Doe" />
      </div>
    ),
  },
}

export const ValidationValid: Story = {
  args: {
    title: 'Contact Details',
    validationStatus: 'valid',
    children: (
      <div className="space-y-2">
        <Input placeholder="email@example.com" defaultValue="test@example.com" />
      </div>
    ),
  },
}

export const ValidationInvalid: Story = {
  args: {
    title: 'Contact Details',
    validationStatus: 'invalid',
    error: 'Email is required',
    children: (
      <div className="space-y-2">
        <Input placeholder="email@example.com" />
      </div>
    ),
  },
}

export const Collapsible: Story = {
  args: {
    title: 'Advanced Settings',
    description: 'Click to expand',
    collapsible: true,
    children: (
      <div className="space-y-2">
        <Input placeholder="Setting 1" />
        <Input placeholder="Setting 2" />
      </div>
    ),
  },
}

export const WithActions: Story = {
  args: {
    title: 'Section with Actions',
    actions: <button type="button" className="text-sm text-primary hover:underline">Edit</button>,
    children: (
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Some content here</p>
      </div>
    ),
  },
}
