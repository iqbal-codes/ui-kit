import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { Center } from "./center";

const meta: Meta<typeof Center> = {
  title: "Blocks/Layout/Center",
  component: Center,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: () => (
    <Center>
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Centered Content</h2>
        <p className="text-muted-foreground mt-2">Both horizontally and vertically</p>
      </div>
    </Center>
  ),
};

export const HorizontalOnly: Story = {
  render: () => (
    <div className="h-40">
      <Center horizontal vertical={false}>
        <div className="rounded-lg border p-4">Centered Horizontally</div>
      </Center>
    </div>
  ),
};

export const VerticalOnly: Story = {
  render: () => (
    <Center vertical horizontal={false}>
      <div className="rounded-lg border p-4">Centered Vertically</div>
    </Center>
  ),
};

export const FullHeight: Story = {
  render: () => (
    <Center fullHeight>
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Full Screen Center</h2>
        <p className="text-muted-foreground mt-2">Uses min-h-screen</p>
        <Button className="mt-4">Get Started</Button>
      </div>
    </Center>
  ),
};
