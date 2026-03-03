import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Pagination } from "./pagination";

const meta = {
  title: "Blocks/Navigation/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    onPageChange: { action: "pageChanged" },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default pagination with standard settings
 */
export const Default: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(args.page || 1);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 1,
    totalPages: 10,
    siblingCount: 1,
  },
};

/**
 * With first/last page buttons
 */
export const WithFirstLast: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(5);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 5,
    totalPages: 20,
    showFirstLast: true,
  },
};

/**
 * Many pages with ellipsis
 */
export const ManyPages: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(15);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 15,
    totalPages: 100,
    showFirstLast: true,
    siblingCount: 2,
  },
};

/**
 * Few pages (no ellipsis needed)
 */
export const FewPages: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(1);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 1,
    totalPages: 3,
  },
};

/**
 * Compact mode - only prev/next with page indicator
 */
export const Compact: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(5);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 5,
    totalPages: 50,
    compact: true,
  },
};

/**
 * First page boundary
 */
export const FirstPage: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(1);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 1,
    totalPages: 10,
    showFirstLast: true,
  },
};

/**
 * Last page boundary
 */
export const LastPage: Story = {
  render: (args) => {
    const [page, setPage] = React.useState(10);
    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          args.onPageChange?.(p);
        }}
      />
    );
  },
  args: {
    page: 10,
    totalPages: 10,
    showFirstLast: true,
  },
};
