import { Menu, X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Separator } from "@/primitives/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/primitives/sheet";

export interface AppShellProps {
  /** Sidebar/navigation content */
  sidebar?: React.ReactNode;
  /** Header content */
  header?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Sidebar width in pixels (default: 280) */
  sidebarWidth?: number;
  /** Whether sidebar is collapsible */
  collapsible?: boolean;
  /** Initial sidebar state */
  defaultSidebarOpen?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function AppShell({
  sidebar,
  header,
  children,
  footer,
  sidebarWidth = 280,
  collapsible = true,
  defaultSidebarOpen = true,
  className,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(defaultSidebarOpen);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className={cn("flex min-h-screen flex-col bg-background", className)}>
      {/* Desktop Sidebar */}
      {collapsible && sidebar && (
        <aside
          className={cn(
            "hidden lg:flex lg:flex-col lg:border-r lg:bg-card transition-all duration-300",
            sidebarOpen ? "" : "lg:w-16"
          )}
          style={{ width: sidebarOpen ? sidebarWidth : 64 }}
        >
          <div className="flex h-16 items-center justify-center border-b px-4">
            {sidebarOpen ? (
              <span className="font-semibold text-lg">Logo</span>
            ) : (
              <span className="font-semibold text-lg">L</span>
            )}
          </div>
          <div className="flex-1 overflow-y-auto py-4">{sidebar}</div>
          <Separator />
          <div className="p-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </aside>
      )}

      {/* Mobile Sidebar (Sheet) */}
      {sidebar && (
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <div className="flex h-16 items-center border-b px-6">
              <span className="font-semibold text-lg">Logo</span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">{sidebar}</div>
          </SheetContent>
        </Sheet>
      )}

      {/* Main Column */}
      <div className="flex flex-1 flex-col lg:ml-0">
        {/* Header */}
        {header && (
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1">{header}</div>
          </header>
        )}

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>

        {/* Footer */}
        {footer && <footer className="border-t bg-background py-4 px-6">{footer}</footer>}
      </div>
    </div>
  );
}

export default AppShell;
