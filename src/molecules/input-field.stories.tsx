import type { Meta, StoryObj } from "@storybook/react"
import { InputField } from "./input-field"

const meta: Meta<typeof InputField> = {
  title: "Molecules/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
}

export const WithHelper: Story = {
  args: {
    label: "Username",
    name: "username",
    placeholder: "Enter username",
    helperText: "This will be your public display name.",
  },
}

export const Required: Story = {
  args: {
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your full name",
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: "Password",
    name: "password",
    type: "password",
    error: "Password must be at least 8 characters.",
  },
}

export const Disabled: Story = {
  args: {
    label: "Company",
    name: "company",
    value: "Acme Inc.",
    disabled: true,
  },
}
