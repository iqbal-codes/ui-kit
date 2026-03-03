import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/primitives/card";
import { SplitPane } from "./split-pane";

const meta: Meta<typeof SplitPane> = {
  title: "Blocks/Layout/SplitPane",
  component: SplitPane,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Default: Story = {
  render: () => (
    <div className="h-[400px]">
      <SplitPane
        primary={
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Primary Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Drag the divider to resize.</p>
            </CardContent>
          </Card>
        }
        secondary={
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Secondary Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content on the right.</p>
            </CardContent>
          </Card>
        }
      />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px]">
      <SplitPane
        orientation="vertical"
        primary={
          <Card className="h-full">
            <CardContent className="pt-6">Top Panel</CardContent>
          </Card>
        }
        secondary={
          <Card className="h-full">
            <CardContent className="pt-6">Bottom Panel</CardContent>
          </Card>
        }
      />
    </div>
  ),
  args: {
    orientation: "vertical",
  },
};
