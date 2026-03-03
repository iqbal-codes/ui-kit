import type { Meta, StoryObj } from "@storybook/react";
import { BellIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-react";
import { MobileNav } from "./mobile-nav";

const meta: Meta<typeof MobileNav> = {
  title: "Blocks/Navigation/MobileNav",
  component: MobileNav,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MobileNav>;

export const Default: Story = {
  render: () => (
    <div className="min-h-[200px]">
      <MobileNav
        items={[
          { id: "home", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
          { id: "profile", label: "Profile", icon: <UserIcon className="h-5 w-5" /> },
          {
            id: "notifications",
            label: "Alerts",
            icon: <BellIcon className="h-5 w-5" />,
            badge: 3,
          },
          { id: "settings", label: "Settings", icon: <SettingsIcon className="h-5 w-5" /> },
        ]}
        activeItem="home"
      />
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <div className="min-h-[200px]">
      <MobileNav
        showSearch
        items={[
          { id: "home", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
          { id: "profile", label: "Profile", icon: <UserIcon className="h-5 w-5" /> },
        ]}
        activeItem="home"
      />
    </div>
  ),
  args: {
    showSearch: true,
  },
};
