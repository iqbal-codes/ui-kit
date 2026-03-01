import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./search-input";

const meta: Meta<typeof SearchInput> = {
  title: "Molecules/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const WithDebounce: Story = {
  args: {
    placeholder: "Search with debounce...",
    debounceMs: 500,
  },
};
