import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FilterChip } from "./filter-chip";

const meta: Meta<typeof FilterChip> = {
  title: "Blocks/Data Entry/FilterChip",
  component: FilterChip,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  args: {
    label: "Status",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: "Status",
    selected: true,
  },
};

export const WithCount: Story = {
  args: {
    label: "Active",
    count: 12,
  },
};

export const Removable: Story = {
  args: {
    label: "Filter",
    onRemove: () => console.log("removed"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(false);
    return (
      <FilterChip label="Toggle Me" selected={selected} onToggle={() => setSelected(!selected)} />
    );
  },
};
