import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { DashboardLayout } from "./dashboard-layout";

const meta: Meta<typeof DashboardLayout> = {
  title: "Blocks/Layout/DashboardLayout",
  component: DashboardLayout,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

const SidebarContent = () => (
  <nav className="space-y-1 px-2">
    <Button variant="ghost" className="w-full justify-start">
      Dashboard
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      Projects
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      Tasks
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      Settings
    </Button>
  </nav>
);

export const Default: Story = {
  render: () => (
    <DashboardLayout
      sidebar={<SidebarContent />}
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
      sidebar={<SidebarContent />}
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
      sidebar={<SidebarContent />}
      header={<div className="text-sm font-medium">Page Title</div>}
      footer={<p className="text-sm text-muted-foreground">© 2024 Company</p>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Footer</h2>
        <p className="text-muted-foreground">This layout has a footer.</p>
      </div>
    </DashboardLayout>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <DashboardLayout sidebar={<SidebarContent />}>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">No Header</h2>
        <p className="text-muted-foreground">This layout has no header.</p>
      </div>
    </DashboardLayout>
  ),
};

export const WithSidebarHeader: Story = {
  render: () => (
    <DashboardLayout
      sidebar={<SidebarContent />}
      sidebarHeader={
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="font-semibold">My App</span>
        </div>
      }
      header={<div className="text-sm font-medium">Page Title</div>}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Sidebar Header</h2>
        <p className="text-muted-foreground">Logo in sidebar header.</p>
      </div>
    </DashboardLayout>
  ),
};
