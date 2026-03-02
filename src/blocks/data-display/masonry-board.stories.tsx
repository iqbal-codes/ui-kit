import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent } from "@/primitives/card";
import { MasonryBoard } from "./masonry-board";

const meta: Meta<typeof MasonryBoard> = {
  title: "Blocks/Data Display/MasonryBoard",
  component: MasonryBoard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MasonryBoard>;

const heights = [150, 200, 120, 180, 220, 140];

export const Default: Story = {
  render: () => (
    <MasonryBoard
      items={heights.map((h, i) => ({
        id: String(i),
        heightHint: h,
        content: (
          <Card>
            <CardContent className="pt-6" style={{ height: h }}>
              Item {i + 1}
            </CardContent>
          </Card>
        ),
      }))}
    />
  ),
  args: {
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};
