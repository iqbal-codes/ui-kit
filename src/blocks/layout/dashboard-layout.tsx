"use client";

import type { LucideIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/primitives/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/primitives/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/primitives/dropdown-menu";
import { Separator } from "@/primitives/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/primitives/sidebar";

// =============================================================================
// Types
// =============================================================================

/**
 * Navigation item for sidebar
 */
export interface NavItem {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** URL or href */
  url?: string;
  /** Icon component */
  icon?: LucideIcon;
  /** Badge count */
  badge?: number;
  /** Sub-items for collapsible menu */
  items?: NavItem[];
  /** Whether this item is active */
  isActive?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Navigation group configuration
 */
export interface NavGroup {
  /** Unique identifier */
  id: string;
  /** Group title (shown in sidebar) */
  title: string;
  /** Navigation items in this group */
  items: NavItem[];
  /** Icon for the group (optional) */
  icon?: LucideIcon;
}

/**
 * User information for sidebar footer
 */
export interface SidebarUser {
  /** User name */
  name: string;
  /** User email */
  email: string;
  /** Avatar image URL */
  avatar?: string;
  /** Avatar fallback text */
  fallback?: string;
}

/**
 * Team information for sidebar header
 */
export interface SidebarTeam {
  /** Team name */
  name: string;
  /** Team plan */
  plan: string;
  /** Team logo icon */
  icon: LucideIcon;
}

/**
 * Dashboard layout props
 */
export interface DashboardLayoutProps {
  /** Navigation groups */
  navGroups?: NavGroup[];
  /** Current active URL (for highlighting) */
  activeUrl?: string;
  /** User information for sidebar footer */
  user?: SidebarUser;
  /** Teams for team switcher in header */
  teams?: SidebarTeam[];
  /** Currently active team */
  activeTeam?: SidebarTeam;
  /** Callback when team changes */
  onTeamChange?: (team: SidebarTeam) => void;
  /** Custom sidebar header content (overrides default) */
  sidebarHeader?: React.ReactNode;
  /** Custom sidebar footer content (overrides default) */
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

// =============================================================================
// Internal Components
// =============================================================================

/**
 * Team Switcher Component
 */
function TeamSwitcher({
  teams,
  activeTeam,
  onTeamChange,
}: {
  teams?: SidebarTeam[];
  activeTeam?: SidebarTeam;
  onTeamChange?: (team: SidebarTeam) => void;
}) {
  const { isMobile } = useSidebar();
  const [active, setActive] = React.useState(activeTeam || teams?.[0]);

  if (!teams || teams.length === 0) return null;

  const handleTeamChange = (team: SidebarTeam) => {
    setActive(team);
    onTeamChange?.(team);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {active?.icon && <active.icon className="size-4" />}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{active?.name}</span>
                <span className="truncate text-xs">{active?.plan}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => handleTeamChange(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  {team.icon && <team.icon className="size-3.5 shrink-0" />}
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/**
 * Navigation Item Component
 */
function NavItemComponent({ item, isActive }: { item: NavItem; isActive?: boolean }) {
  const hasSubItems = item.items && item.items.length > 0;

  if (hasSubItems) {
    return (
      <Collapsible defaultOpen={item.isActive} className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            {item.badge !== undefined && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.id}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url} className={cn(subItem.disabled && "opacity-50")}>
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip={item.title}
      className={cn(item.disabled && "opacity-50")}
    >
      <a href={item.url}>
        {item.icon && <item.icon />}
        <span>{item.title}</span>
        {item.badge !== undefined && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
      </a>
    </SidebarMenuButton>
  );
}

/**
 * Navigation Group Component
 */
function NavGroupComponent({ group, activeUrl }: { group: NavGroup; activeUrl?: string }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
      <SidebarMenu>
        {group.items.map((item) => (
          <SidebarMenuItem key={item.id}>
            <NavItemComponent item={item} isActive={item.url === activeUrl || item.isActive} />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

/**
 * User Menu Component
 */
function NavUser({ user }: { user?: SidebarUser }) {
  const { isMobile } = useSidebar();

  if (!user) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.fallback || user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.fallback || user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/**
 * Default Sidebar Header
 */
function DefaultSidebarHeader({
  teams,
  activeTeam,
  onTeamChange,
}: {
  teams?: SidebarTeam[];
  activeTeam?: SidebarTeam;
  onTeamChange?: (team: SidebarTeam) => void;
}) {
  return (
    <SidebarHeader>
      <TeamSwitcher teams={teams} activeTeam={activeTeam} onTeamChange={onTeamChange} />
    </SidebarHeader>
  );
}

/**
 * Default Sidebar Footer
 */
function DefaultSidebarFooter({ user }: { user?: SidebarUser }) {
  return (
    <SidebarFooter>
      <NavUser user={user} />
    </SidebarFooter>
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
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </>
      )}
      <div className="flex flex-1 items-center justify-between gap-4">{children}</div>
    </header>
  );
}

// =============================================================================
// Main Component
// =============================================================================

/**
 * DashboardLayout - A complete admin panel layout with collapsible sidebar
 *
 * Features:
 * - Built-in navigation support with icons, groups, and badges
 * - Collapsible sidebar (icon-only mode)
 * - Automatic mobile sheet/drawer
 * - Built-in SidebarTrigger button
 * - Team switcher in sidebar header
 * - User menu in sidebar footer
 * - Cookie-based state persistence
 * - Keyboard shortcut (Cmd/Ctrl + B)
 *
 * @example
 * <DashboardLayout
 *   navGroups={[
 *     { id: "main", title: "Main", items: [
 *       { id: "dashboard", title: "Dashboard", url: "/", icon: LayoutDashboard }
 *     ]}
 *   ]}
 *   user={{ name: "John", email: "john@example.com" }}
 *   header={<SearchBar />}
 * >
 *   <PageContent />
 * </DashboardLayout>
 */
export function DashboardLayout({
  navGroups,
  activeUrl,
  user,
  teams,
  activeTeam,
  onTeamChange,
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
        <Sidebar collapsible="icon" variant={variant} className="border-r">
          {/* Custom header or default with team switcher */}
          {sidebarHeader ? (
            <SidebarHeader>{sidebarHeader}</SidebarHeader>
          ) : (
            <DefaultSidebarHeader
              teams={teams}
              activeTeam={activeTeam}
              onTeamChange={onTeamChange}
            />
          )}

          {/* Navigation Groups */}
          <SidebarContent>
            {navGroups?.map((group) => (
              <NavGroupComponent key={group.id} group={group} activeUrl={activeUrl} />
            ))}
          </SidebarContent>

          {/* Custom footer or default with user menu */}
          {sidebarFooter ? (
            <SidebarFooter>{sidebarFooter}</SidebarFooter>
          ) : (
            <DefaultSidebarFooter user={user} />
          )}

          <SidebarRail />
        </Sidebar>

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
