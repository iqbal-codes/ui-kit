import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./search-bar";

const meta: Meta<typeof SearchBar> = {
  title: "Blocks/DataEntry/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "Search users...",
    onSearch: (value: string) => console.log("search:", value),
  },
};

export const WithValue: Story = {
  args: {
    value: "existing search",
    placeholder: "Search...",
  },
};

export const NoDebounce: Story = {
  args: {
    placeholder: "Search...",
    debounce: 0,
    onSearch: (value: string) => console.log("search:", value),
  },
};

export const WithLoading: Story = {
  args: {
    placeholder: "Search...",
    isLoading: true,
  },
};
