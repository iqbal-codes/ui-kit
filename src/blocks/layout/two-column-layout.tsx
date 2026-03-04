import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Separator } from "@/primitives/separator";

export interface TwoColumnLayoutProps {
  /** Sidebar content */
  sidebar: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Sidebar width in pixels (default: 280) */
  sidebarWidth?: number;
  /** Whether sidebar can be collapsed */
  collapsible?: boolean;
  /** Initial collapsed state */
  defaultCollapsed?: boolean;
  /** Sidebar position */
  sidebarPosition?: "left" | "right";
  /** Additional CSS classes */
  className?: string;
}

export function TwoColumnLayout({
  sidebar,
  children,
  sidebarWidth = 280,
  collapsible = true,
  defaultCollapsed = false,
  sidebarPosition = "left",
  className,
}: TwoColumnLayoutProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <div className={cn("flex min-h-screen bg-background", className)}>
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col border-r bg-card transition-all duration-300",
          collapsed ? "w-16" : ""
        )}
        style={{ width: collapsed ? 64 : sidebarWidth }}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!collapsed && <span className="font-semibold">Sidebar</span>}
          {collapsible && (
            <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto py-4">{sidebar}</div>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 min-w-0", sidebarPosition === "right" && "order-first")}>
        <main className="min-h-screen p-6">{children}</main>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
