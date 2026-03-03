import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbTrail } from "./breadcrumb-trail";

const meta: Meta<typeof BreadcrumbTrail> = {
  title: "Blocks/Navigation/BreadcrumbTrail",
  component: BreadcrumbTrail,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BreadcrumbTrail>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Smartphones", isActive: true },
    ],
  },
};

export const Simple: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Dashboard", isActive: true },
    ],
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Admin", href: "/admin" },
      { label: "Users", href: "/admin/users" },
      { label: "Settings", href: "/admin/users/settings" },
      { label: "Profile", href: "/admin/users/settings/profile" },
      { label: "Account", isActive: true },
    ],
    collapsible: true,
    maxItems: 3,
  },
};

export const NoLinks: Story = {
  args: {
    items: [
      { label: "Section 1" },
      { label: "Section 2" },
      { label: "Current Page", isActive: true },
    ],
  },
};
