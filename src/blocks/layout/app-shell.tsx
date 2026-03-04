"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/primitives/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/primitives/sidebar";

export interface AppShellProps {
  /** Sidebar navigation items */
  sidebar?: React.ReactNode;
  /** Custom sidebar header content */
  sidebarHeader?: React.ReactNode;
  /** Custom sidebar footer content */
  sidebarFooter?: React.ReactNode;
  /** Header content */
  header?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Initial sidebar state */
  defaultOpen?: boolean;
  /** Sidebar variant */
  variant?: "sidebar" | "floating" | "inset";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Internal header component with built-in SidebarTrigger
 */
function AppShellHeader({ children }: { children?: React.ReactNode }) {
  const { isMobile } = useSidebar();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 lg:px-6">
      {isMobile && (
        <>
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </>
      )}
      <div className="flex flex-1 items-center justify-between gap-4">{children}</div>
    </header>
  );
}

/**
 * AppShell - A complete application shell with sidebar, header, content, and footer
 *
 * Uses the shadcn/ui Sidebar primitive for:
 * - Collapsible sidebar (icon-only mode)
 * - Automatic mobile sheet/drawer
 * - Built-in SidebarTrigger button
 * - Cookie-based state persistence
 * - Keyboard shortcut (Cmd/Ctrl + B)
 *
 * @example
 * <AppShell
 *   sidebar={<Nav />}
 *   header={<Header />}
 *   footer={<Footer />}
 *   sidebarHeader={<Logo />}
 *   sidebarFooter={<UserMenu />}
 * >
 *   <PageContent />
 * </AppShell>
 */
export function AppShell({
  sidebar,
  sidebarHeader,
  sidebarFooter,
  header,
  children,
  footer,
  defaultOpen = true,
  variant = "sidebar",
  className,
}: AppShellProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className={cn("flex min-h-screen w-full", className)}>
        {/* Sidebar */}
        {(sidebar || sidebarHeader || sidebarFooter) && (
          <Sidebar variant={variant} className="border-r">
            {sidebarHeader && <SidebarHeader>{sidebarHeader}</SidebarHeader>}
            <SidebarContent>{sidebar}</SidebarContent>
            {sidebarFooter && <SidebarFooter>{sidebarFooter}</SidebarFooter>}
            <SidebarRail />
          </Sidebar>
        )}

        {/* Main Content Area */}
        <SidebarInset>
          {/* Header */}
          {(header || footer) && <AppShellHeader>{header}</AppShellHeader>}

          {/* Page Content */}
          <main className="flex-1 flex flex-col p-4 lg:p-6 min-h-0">{children}</main>

          {/* Footer */}
          {footer && (
            <footer className="border-t bg-background py-4 px-6 shrink-0">{footer}</footer>
          )}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default AppShell;

// Re-export sidebar utilities for advanced usage
export { useSidebar } from "@/primitives/sidebar";
