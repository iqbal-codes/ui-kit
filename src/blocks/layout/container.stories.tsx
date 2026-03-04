import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Blocks/Layout/Container",
  component: Container,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Default Container</h2>
        <p className="text-muted-foreground mt-2">max-w-7xl with responsive padding</p>
      </div>
    </Container>
  ),
};

export const Small: Story = {
  render: () => (
    <Container size="sm">
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Small Container</h2>
        <p className="text-muted-foreground mt-2">max-w-3xl</p>
      </div>
    </Container>
  ),
};

export const Large: Story = {
  render: () => (
    <Container size="lg">
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Large Container</h2>
        <p className="text-muted-foreground mt-2">max-w-6xl</p>
      </div>
    </Container>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Container size="full">
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">Full Width Container</h2>
        <p className="text-muted-foreground mt-2">max-w-full</p>
      </div>
    </Container>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Container padding="none">
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">No Padding</h2>
      </div>
    </Container>
  ),
};
