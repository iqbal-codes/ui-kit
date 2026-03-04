"use client";

import { PanelLeft } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
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

export interface DashboardLayoutProps {
  /** Sidebar navigation items */
  sidebar?: React.ReactNode;
  /** Custom sidebar header content */
  sidebarHeader?: React.ReactNode;
  /** Custom sidebar footer content */
  sidebarFooter?: React.ReactNode;
  /** Header content */
  header?: React.ReactNode;
  /** Main content area */
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
 * Internal sidebar component that uses the useSidebar hook
 */
function DashboardSidebar({
  children,
  header,
  footer,
  variant,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "sidebar" | "floating" | "inset";
}) {
  return (
    <Sidebar collapsible="icon" variant={variant} className="border-r">
      {header && <SidebarHeader>{header}</SidebarHeader>}
      <SidebarContent>{children}</SidebarContent>
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
      <SidebarRail />
    </Sidebar>
  );
}

/**
 * Internal header component with built-in SidebarTrigger
 */
function DashboardHeader({ children }: { children?: React.ReactNode }) {
  const { isMobile } = useSidebar();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 lg:px-6">
      {isMobile && (
        <>
          {/* Mobile: Show SidebarTrigger which opens the mobile sheet */}
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </>
      )}
      <div className="flex flex-1 items-center justify-between gap-4">{children}</div>
    </header>
  );
}

/**
 * DashboardLayout - A complete admin panel layout with collapsible sidebar
 *
 * Features:
 * - Collapsible sidebar (icon-only mode)
 * - Automatic mobile sheet/drawer
 * - Built-in SidebarTrigger button
 * - Cookie-based state persistence
 * - Keyboard shortcut (Cmd/Ctrl + B)
 *
 * @example
 * <DashboardLayout
 *   sidebar={<Nav />}
 *   header={<SearchBar />}
 *   sidebarHeader={<Logo />}
 *   sidebarFooter={<UserMenu />}
 * >
 *   <PageContent />
 * </DashboardLayout>
 */
export function DashboardLayout({
  sidebar,
  sidebarHeader,
  sidebarFooter,
  header,
  children,
  footer,
  defaultOpen = true,
  variant = "sidebar",
  className,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className={cn("flex min-h-screen w-full", className)}>
        {/* Sidebar */}
        {(sidebar || sidebarHeader || sidebarFooter) && (
          <DashboardSidebar variant={variant} header={sidebarHeader} footer={sidebarFooter}>
            {sidebar}
          </DashboardSidebar>
        )}

        {/* Main Content Area */}
        <SidebarInset>
          {/* Header with built-in SidebarTrigger */}
          {(header || footer) && <DashboardHeader>{header}</DashboardHeader>}

          {/* Page Content */}
          <main className="flex-1 flex flex-col p-4 lg:p-6 min-h-0">{children}</main>

          {/* Footer (outside main for sticky behavior) */}
          {footer && (
            <footer className="border-t bg-background py-4 px-6 shrink-0">{footer}</footer>
          )}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;

// Re-export sidebar utilities for advanced usage
export { useSidebar } from "@/primitives/sidebar";
