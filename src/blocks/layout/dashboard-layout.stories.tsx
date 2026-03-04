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
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Dashboard
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Projects
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Tasks
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Settings
    </a>
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
      defaultSidebarOpen={false}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Collapsed Sidebar</h2>
        <p className="text-muted-foreground">Sidebar is collapsed by default.</p>
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
