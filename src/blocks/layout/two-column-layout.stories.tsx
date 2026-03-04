import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TwoColumnLayout } from "./two-column-layout";

const meta: Meta<typeof TwoColumnLayout> = {
  title: "Blocks/Layout/TwoColumnLayout",
  component: TwoColumnLayout,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TwoColumnLayout>;

const SidebarContent = () => (
  <nav className="space-y-1 px-2">
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Overview
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Profile
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Account
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Notifications
    </a>
  </nav>
);

export const Default: Story = {
  render: () => (
    <TwoColumnLayout sidebar={<SidebarContent />}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
    </TwoColumnLayout>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <TwoColumnLayout sidebar={<SidebarContent />} defaultCollapsed>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Collapsed Sidebar</h1>
        <p className="text-muted-foreground">Sidebar is collapsed by default.</p>
      </div>
    </TwoColumnLayout>
  ),
};

export const RightSidebar: Story = {
  render: () => (
    <TwoColumnLayout sidebar={<SidebarContent />} sidebarPosition="right">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Right Sidebar</h1>
        <p className="text-muted-foreground">Sidebar is on the right side.</p>
      </div>
    </TwoColumnLayout>
  ),
};
