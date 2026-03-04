import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Blocks/Layout/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <AspectRatio>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio="square">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">1:1 Square</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Photo: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio="photo">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">4:3 Photo</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Wide: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <AspectRatio ratio="wide">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">21:9 Ultrawide</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Golden: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio="golden">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">1.618:1 Golden</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const CustomRatio: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio={2 / 1}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">2:1 Custom</span>
        </div>
      </AspectRatio>
    </div>
  ),
};
