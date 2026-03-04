import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/primitives/card";
import { ResponsiveGrid } from "./responsive-grid";

const meta: Meta<typeof ResponsiveGrid> = {
  title: "Blocks/Layout/ResponsiveGrid",
  component: ResponsiveGrid,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResponsiveGrid>;

const GridItem = ({ title }: { title: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">Content</p>
    </CardContent>
  </Card>
);

export const Default: Story = {
  render: () => (
    <ResponsiveGrid>
      <GridItem title="Item 1" />
      <GridItem title="Item 2" />
      <GridItem title="Item 3" />
      <GridItem title="Item 4" />
      <GridItem title="Item 5" />
      <GridItem title="Item 6" />
    </ResponsiveGrid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 2, wide: 2 }}>
      <GridItem title="Item 1" />
      <GridItem title="Item 2" />
      <GridItem title="Item 3" />
      <GridItem title="Item 4" />
    </ResponsiveGrid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 4, wide: 4 }}>
      <GridItem title="Item 1" />
      <GridItem title="Item 2" />
      <GridItem title="Item 3" />
      <GridItem title="Item 4" />
      <GridItem title="Item 5" />
      <GridItem title="Item 6" />
      <GridItem title="Item 7" />
      <GridItem title="Item 8" />
    </ResponsiveGrid>
  ),
};

export const LargeGap: Story = {
  render: () => (
    <ResponsiveGrid gap={8}>
      <GridItem title="Item 1" />
      <GridItem title="Item 2" />
      <GridItem title="Item 3" />
      <GridItem title="Item 4" />
    </ResponsiveGrid>
  ),
};
