import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart3,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";
import {
  DashboardLayout,
  type NavGroup,
  type SidebarTeam,
  type SidebarUser,
} from "./dashboard-layout";

const meta: Meta<typeof DashboardLayout> = {
  title: "Blocks/Layout/DashboardLayout",
  component: DashboardLayout,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

// Sample navigation groups
const mainNavGroups: NavGroup[] = [
  {
    id: "main",
    title: "Main",
    items: [
      {
        id: "dashboard",
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      { id: "analytics", title: "Analytics", url: "/analytics", icon: BarChart3 },
      { id: "projects", title: "Projects", url: "/projects", icon: Package },
    ],
  },
  {
    id: "management",
    title: "Management",
    items: [
      { id: "customers", title: "Customers", url: "/customers", icon: Users },
      { id: "orders", title: "Orders", url: "/orders", icon: ShoppingCart, badge: 12 },
      { id: "invoices", title: "Invoices", url: "/invoices", icon: FileText },
    ],
  },
  {
    id: "system",
    title: "System",
    items: [
      { id: "settings", title: "Settings", url: "/settings", icon: Settings },
      { id: "help", title: "Help & Support", url: "/help", icon: HelpCircle },
    ],
  },
];

// Sample user
const sampleUser: SidebarUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatars/user.jpg",
  fallback: "JD",
};

// Sample teams
const sampleTeams: SidebarTeam[] = [
  { name: "Acme Corp", plan: "Enterprise", icon: LayoutDashboard },
  { name: "Acme Inc", plan: "Startup", icon: Users },
  { name: "Evil Corp", plan: "Free", icon: Settings },
];

export const Default: Story = {
  render: () => (
    <DashboardLayout
      navGroups={mainNavGroups}
      user={sampleUser}
      header={<div className="text-sm font-medium">Page Title</div>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="text-muted-foreground">This is your main content area.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">Stat 1</div>
          <div className="rounded-lg border p-4">Stat 2</div>
          <div className="rounded-lg border p-4">Stat 3</div>
        </div>
      </div>
    </DashboardLayout>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <DashboardLayout
      navGroups={mainNavGroups}
      user={sampleUser}
      header={<div className="text-sm font-medium">Page Title</div>}
      defaultOpen={false}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Collapsed Sidebar</h2>
        <p className="text-muted-foreground">Sidebar is collapsed by default.</p>
      </div>
    </DashboardLayout>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <DashboardLayout
      navGroups={mainNavGroups}
      user={sampleUser}
      header={<div className="text-sm font-medium">Page Title</div>}
      footer={<p className="text-sm text-muted-foreground">© 2024 Company</p>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Footer</h2>
        <p className="text-muted-foreground">This layout has a page footer.</p>
      </div>
    </DashboardLayout>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <DashboardLayout navGroups={mainNavGroups} user={sampleUser}>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">No Header</h2>
        <p className="text-muted-foreground">This layout has no header.</p>
      </div>
    </DashboardLayout>
  ),
};

export const WithTeams: Story = {
  render: () => (
    <DashboardLayout
      navGroups={mainNavGroups}
      user={sampleUser}
      teams={sampleTeams}
      header={<div className="text-sm font-medium">Page Title</div>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Team Switcher</h2>
        <p className="text-muted-foreground">Sidebar header shows team switcher.</p>
      </div>
    </DashboardLayout>
  ),
};

export const WithCustomHeader: Story = {
  render: () => (
    <DashboardLayout
      navGroups={mainNavGroups}
      user={sampleUser}
      sidebarHeader={
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="font-semibold">My App</span>
        </div>
      }
      header={<div className="text-sm font-medium">Page Title</div>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Sidebar Header</h2>
        <p className="text-muted-foreground">Logo in sidebar header.</p>
      </div>
    </DashboardLayout>
  ),
};
