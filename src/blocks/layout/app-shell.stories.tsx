import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { AppShell } from "./app-shell";

const meta: Meta<typeof AppShell> = {
  title: "Blocks/Layout/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppShell>;

const SidebarContent = () => (
  <nav className="space-y-1 px-2">
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Dashboard
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Analytics
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Customers
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Products
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Settings
    </a>
  </nav>
);

export const Default: Story = {
  render: () => (
    <AppShell
      sidebar={<SidebarContent />}
      header={<div className="text-sm font-medium">My Application</div>}
      footer={<p className="text-sm text-muted-foreground text-center">© 2024 Company</p>}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your application.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">Stat Card 1</div>
          <div className="rounded-lg border p-4">Stat Card 2</div>
          <div className="rounded-lg border p-4">Stat Card 3</div>
        </div>
      </div>
    </AppShell>
  ),
};

export const NoFooter: Story = {
  render: () => (
    <AppShell
      sidebar={<SidebarContent />}
      header={<div className="text-sm font-medium">No Footer</div>}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Content</h1>
        <p className="text-muted-foreground">This app shell has no footer.</p>
      </div>
    </AppShell>
  ),
};

export const CollapsedSidebar: Story = {
  render: () => (
    <AppShell
      sidebar={<SidebarContent />}
      header={<div className="text-sm font-medium">Collapsed</div>}
      defaultSidebarOpen={false}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Sidebar Collapsed</h1>
        <p className="text-muted-foreground">Sidebar starts collapsed on desktop.</p>
      </div>
    </AppShell>
  ),
};
