/** biome-ignore-all lint/suspicious/noRedeclare: false positive */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/primitives/button";
import { PageHeader } from "./page-header";

const meta: Meta<typeof PageHeader> = {
  title: "Blocks/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Page Title",
    subtitle: "This is an optional subtitle describing the page",
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Page Title",
    subtitle: "With breadcrumb navigation",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Current Page" },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: "Page Title",
    subtitle: "With action buttons",
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </>
    ),
  },
};

export const Full: Story = {
  args: {
    title: "User Management",
    subtitle: "Manage user accounts and permissions",
    breadcrumbs: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings" },
    ],
    actions: (
      <>
        <Button variant="outline">Export</Button>
        <Button>Add User</Button>
      </>
    ),
  },
};

export const Children: Story = {
  args: {
    title: "Page Title",
    children: (
      <p className="text-sm text-muted-foreground">
        Custom content below the title
      </p>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Simple Page Title",
  },
};
