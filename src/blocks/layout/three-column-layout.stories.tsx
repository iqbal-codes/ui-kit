import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ThreeColumnLayout } from "./three-column-layout";

const meta: Meta<typeof ThreeColumnLayout> = {
  title: "Blocks/Layout/ThreeColumnLayout",
  component: ThreeColumnLayout,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThreeColumnLayout>;

const SidebarContent = () => (
  <nav className="space-y-1 px-2">
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Inbox
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Sent
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Drafts
    </a>
    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
      Trash
    </a>
  </nav>
);

const AsideContent = () => (
  <div className="space-y-4 px-4">
    <div className="rounded-lg border p-4">
      <h3 className="font-medium">Message Details</h3>
      <p className="text-sm text-muted-foreground mt-2">Select a message to view details.</p>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <ThreeColumnLayout sidebar={<SidebarContent />} aside={<AsideContent />}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <h3 className="font-medium">Message {i}</h3>
              <p className="text-sm text-muted-foreground">This is the preview of message {i}...</p>
            </div>
          ))}
        </div>
      </div>
    </ThreeColumnLayout>
  ),
};

export const CollapsedAside: Story = {
  render: () => (
    <ThreeColumnLayout sidebar={<SidebarContent />} aside={<AsideContent />} defaultAsideCollapsed>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-muted-foreground">Aside panel is collapsed.</p>
      </div>
    </ThreeColumnLayout>
  ),
};

export const WithoutAside: Story = {
  render: () => (
    <ThreeColumnLayout sidebar={<SidebarContent />}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-muted-foreground">No aside panel in this example.</p>
      </div>
    </ThreeColumnLayout>
  ),
};
