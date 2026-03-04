import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";

export interface ThreeColumnLayoutProps {
  /** Left sidebar content (navigation) */
  sidebar: React.ReactNode;
  /** Main content area */
  children: React.ReactNode;
  /** Right panel content (details) */
  aside?: React.ReactNode;
  /** Sidebar width in pixels (default: 240) */
  sidebarWidth?: number;
  /** Aside panel width in pixels (default: 320) */
  asideWidth?: number;
  /** Whether sidebar can be collapsed */
  sidebarCollapsible?: boolean;
  /** Whether aside can be collapsed */
  asideCollapsible?: boolean;
  /** Initial sidebar collapsed state */
  defaultSidebarCollapsed?: boolean;
  /** Initial aside collapsed state */
  defaultAsideCollapsed?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function ThreeColumnLayout({
  sidebar,
  children,
  aside,
  sidebarWidth = 240,
  asideWidth = 320,
  sidebarCollapsible = true,
  asideCollapsible = true,
  defaultSidebarCollapsed = false,
  defaultAsideCollapsed = false,
  className,
}: ThreeColumnLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(defaultSidebarCollapsed);
  const [asideCollapsed, setAsideCollapsed] = React.useState(defaultAsideCollapsed);

  return (
    <div className={cn("flex min-h-screen bg-background", className)}>
      {/* Left Sidebar */}
      <aside
        className={cn(
          "flex flex-col border-r bg-card transition-all duration-300",
          sidebarCollapsed ? "w-16" : ""
        )}
        style={{ width: sidebarCollapsed ? 64 : sidebarWidth }}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!sidebarCollapsed && <span className="font-semibold">Nav</span>}
          {sidebarCollapsible && sidebarCollapsed && (
            <Button variant="ghost" size="sm" onClick={() => setSidebarCollapsed(false)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto py-4">{sidebar}</div>
        {sidebarCollapsible && !sidebarCollapsed && (
          <div className="border-t p-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={() => setSidebarCollapsed(true)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-auto">
        <div className="min-h-screen p-6">{children}</div>
      </main>

      {/* Right Aside Panel */}
      {aside && (
        <aside
          className={cn(
            "flex flex-col border-l bg-card transition-all duration-300",
            asideCollapsed ? "w-0 overflow-hidden" : ""
          )}
          style={{ width: asideCollapsed ? 0 : asideWidth }}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            <span className="font-semibold">Details</span>
            {asideCollapsible && (
              <Button variant="ghost" size="sm" onClick={() => setAsideCollapsed(true)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto py-4">{aside}</div>
        </aside>
      )}
    </div>
  );
}

export default ThreeColumnLayout;
