import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/primitives/button";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Blocks/Layout/Footer",
  component: Footer,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Footer>
      <p className="text-sm text-muted-foreground">© 2024 Company Name. All rights reserved.</p>
    </Footer>
  ),
};

export const Centered: Story = {
  render: () => (
    <Footer center>
      <div className="space-y-2">
        <p className="text-sm font-medium">Company Name</p>
        <p className="text-xs text-muted-foreground">© 2024 All rights reserved</p>
      </div>
    </Footer>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Footer>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm text-muted-foreground">© 2024 Company Name</p>
        <div className="flex gap-4">
          <Button variant="link" size="sm">
            Privacy
          </Button>
          <Button variant="link" size="sm">
            Terms
          </Button>
          <Button variant="link" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </Footer>
  ),
};

export const Sticky: Story = {
  render: () => (
    <div className="h-96">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Page Content</h2>
        <p className="text-muted-foreground mt-2">Scroll down to see the sticky footer</p>
        <div className="mt-32 space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <p key={i} className="text-sm">
              Content line {i}...
            </p>
          ))}
        </div>
      </div>
      <Footer variant="sticky">
        <p className="text-sm text-muted-foreground text-center">
          Sticky Footer - stays at bottom when content is short
        </p>
      </Footer>
    </div>
  ),
};
