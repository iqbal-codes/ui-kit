import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { RightDrawer } from "./right-drawer";

const meta: Meta<typeof RightDrawer> = {
  title: "Blocks/Layout/RightDrawer",
  component: RightDrawer,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RightDrawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <RightDrawer
          open={open}
          onOpenChange={setOpen}
          title="Drawer Title"
          description="This is a description of the drawer content."
        >
          <div className="space-y-4">
            <p>Drawer content goes here.</p>
            <p>More content...</p>
          </div>
        </RightDrawer>
      </div>
    );
  },
  args: {
    title: "Drawer Title",
    description: "This is a description.",
  },
};

export const Wide: Story = {
  args: {
    title: "Wide Drawer",
    width: "xl",
  },
};
