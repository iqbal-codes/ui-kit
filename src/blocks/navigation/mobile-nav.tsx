import { BellIcon, HomeIcon, MenuIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";

export interface MobileNavItem {
  /** Unique identifier */
  id: string;
  /** Label */
  label: string;
  /** Icon */
  icon: React.ReactNode;
  /** Badge count (optional) */
  badge?: number;
  /** Handler */
  onClick?: () => void;
}

export interface MobileNavProps {
  /** Navigation items */
  items: MobileNavItem[];
  /** Currently active item */
  activeItem?: string;
  /** Show search button */
  showSearch?: boolean;
  /** Search handler */
  onSearch?: () => void;
  /** Menu handler */
  onMenu?: () => void;
  className?: string;
}

const _defaultIcons = {
  home: <HomeIcon className="h-5 w-5" />,
  user: <UserIcon className="h-5 w-5" />,
  settings: <SettingsIcon className="h-5 w-5" />,
  bell: <BellIcon className="h-5 w-5" />,
};

export function MobileNav({
  items,
  activeItem,
  showSearch = false,
  onSearch,
  onMenu,
  className,
}: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t bg-background px-4 py-2 safe-area-inset-bottom",
        className
      )}
    >
      <div className="flex items-center justify-around">
        {/* Menu button */}
        {onMenu && (
          <button
            onClick={onMenu}
            className="flex flex-col items-center gap-1 p-2 text-muted-foreground"
          >
            <MenuIcon className="h-5 w-5" />
            <span className="text-xs">Menu</span>
          </button>
        )}

        {/* Search button */}
        {showSearch && (
          <button
            onClick={onSearch}
            className="flex flex-col items-center gap-1 p-2 text-muted-foreground"
          >
            <SearchIcon className="h-5 w-5" />
            <span className="text-xs">Search</span>
          </button>
        )}

        {/* Nav items */}
        {items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              className={cn(
                "relative flex flex-col items-center gap-1 p-2",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className="relative">
                {item.icon}
                {item.badge !== undefined && item.badge > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-4 w-4 p-0 text-[10px]"
                  >
                    {item.badge > 9 ? "9+" : item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNav;
