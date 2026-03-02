import type { Meta, StoryObj } from "@storybook/react"
import { StatsCard } from "./stats-card"
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react"

const meta: Meta<typeof StatsCard> = {
  title: "Molecules/StatsCard",
  component: StatsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Total Users",
    value: "2,543",
    icon: Users,
  },
}

export const WithTrend: Story = {
  args: {
    title: "Revenue",
    value: "$45,231",
    icon: DollarSign,
    trend: { value: 12.5, isPositive: true },
  },
}

export const NegativeTrend: Story = {
  args: {
    title: "Orders",
    value: "324",
    icon: ShoppingCart,
    trend: { value: 5.2, isPositive: false },
  },
}

export const WithDescription: Story = {
  args: {
    title: "Active Sessions",
    value: "1,234",
    icon: Activity,
    description: "Current active users on the platform",
  },
}

export const AllFeatures: Story = {
  args: {
    title: "Revenue",
    value: "$124,500",
    icon: DollarSign,
    trend: { value: 8.4, isPositive: true },
    description: "Total revenue this month",
  },
}
