import type { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "./loading-overlay";
import { Card, CardContent } from "@/atom/card";

const meta: Meta<typeof LoadingOverlay> = {
  title: "Molecules/LoadingOverlay",
  component: LoadingOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="relative h-48 w-80">
      <LoadingOverlay loading>
        <Card>
          <CardContent className="p-6">
            <p>Content is loading...</p>
          </CardContent>
        </Card>
      </LoadingOverlay>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="relative h-48 w-80">
      <LoadingOverlay loading>
        <Card>
          <CardContent className="p-6">
            <p>Saving your changes...</p>
          </CardContent>
        </Card>
      </LoadingOverlay>
    </div>
  ),
};

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
    label: "Loading application...",
  },
  parameters: {
    layout: "fullscreen",
  },
};
