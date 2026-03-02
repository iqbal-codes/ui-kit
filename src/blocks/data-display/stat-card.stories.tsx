import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "Blocks/DataDisplay/StatCard",
  component: StatCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: "Total Users",
    value: "1,234",
  },
};

export const WithDescription: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,678",
    description: "Last 30 days",
  },
};

export const WithPositiveTrend: Story = {
  args: {
    title: "New Signups",
    value: "567",
    description: "This month",
    trend: {
      direction: "up",
      value: "12%",
      label: "vs last month",
    },
  },
};

export const WithNegativeTrend: Story = {
  args: {
    title: "Bounce Rate",
    value: "42%",
    description: "This week",
    trend: {
      direction: "down",
      value: "5%",
      label: "vs last week",
    },
  },
};

export const WithNeutralTrend: Story = {
  args: {
    title: "Active Users",
    value: "890",
    description: "Today",
    trend: {
      direction: "neutral",
      value: "0%",
      label: "no change",
    },
  },
};

export const Clickable: Story = {
  args: {
    title: "Total Orders",
    value: "2,345",
    description: "Click to view details",
    onClick: () => console.log("StatCard clicked"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Revenue"
        value="$12,345"
        trend={{ direction: "up", value: "8%", label: "vs last month" }}
      />
      <StatCard
        title="Expenses"
        value="$8,901"
        trend={{ direction: "down", value: "3%", label: "vs last month" }}
      />
      <StatCard
        title="Net Profit"
        value="$3,444"
        trend={{ direction: "neutral", value: "0%", label: "vs last month" }}
      />
    </div>
  ),
};
