import type { Meta, StoryObj } from "@storybook/react";
import { ErrorFallback } from "./error-fallback";

const meta: Meta<typeof ErrorFallback> = {
  title: "Blocks/Feedback/ErrorFallback",
  component: ErrorFallback,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {
    title: "Something went wrong",
    description: "An unexpected error occurred while loading the data.",
    resetError: () => console.log("retry clicked"),
  },
};

export const WithErrorId: Story = {
  args: {
    title: "Failed to load",
    description: "Could not retrieve the requested information.",
    errorId: "ERR-2026-03-02-001",
    resetError: () => console.log("retry clicked"),
  },
};

export const WithErrorDetails: Story = {
  args: {
    title: "Error occurred",
    description: "The operation could not be completed.",
    error: new Error("NetworkError: Failed to fetch /api/data - 500 Internal Server Error"),
    showDetails: true,
    resetError: () => console.log("retry clicked"),
  },
};

export const NoRetry: Story = {
  args: {
    title: "Unable to connect",
    description: "Please check your internet connection and try again.",
  },
};
