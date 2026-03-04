import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { HStack, Stack, VStack } from "./stack";

const meta: Meta<typeof Stack> = {
  title: "Blocks/Layout/Stack",
  component: Stack,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack gap={4}>
      <div className="rounded border p-4">Item 1</div>
      <div className="rounded border p-4">Item 2</div>
      <div className="rounded border p-4">Item 3</div>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap={4}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  ),
};

export const VerticalStack: Story = {
  render: () => (
    <VStack gap={6}>
      <div className="rounded border p-4">Item 1</div>
      <div className="rounded border p-4">Item 2</div>
      <div className="rounded border p-4">Item 3</div>
    </VStack>
  ),
};

export const HorizontalStack: Story = {
  render: () => (
    <HStack gap={4}>
      <Button variant="default">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Delete</Button>
    </HStack>
  ),
};

export const CenterAligned: Story = {
  render: () => (
    <Stack align="center" gap={4}>
      <div className="rounded border p-4 w-32">Centered</div>
      <div className="rounded border p-4 w-48">Also Centered</div>
    </Stack>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Stack justify="between" gap={4}>
      <div className="rounded border p-4">Left</div>
      <div className="rounded border p-4">Right</div>
    </Stack>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Stack direction="horizontal" wrap gap={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="rounded border p-2">
          Item {i}
        </div>
      ))}
    </Stack>
  ),
};
