import type { LucideIcon } from "lucide-react";
import {
    Activity,
    BarChart3,
    Bot,
    Gauge,
    KeyRound,
    Route,
    ServerCog,
    Settings,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
} from "@/components/ui/sidebar";

interface NavItem {
    href: string;
    icon: LucideIcon;
    title: string;
}

const mainNavItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/",
        icon: Gauge,
    },
    {
        title: "Providers",
        href: "/providers",
        icon: ServerCog,
    },
    {
        title: "Usage",
        href: "/usage",
        icon: BarChart3,
    },
    {
        title: "Routing Rules",
        href: "/routing",
        icon: Route,
    },
    {
        title: "Agent Profiles",
        href: "/agents",
        icon: Bot,
    },
    {
        title: "API Keys",
        href: "/keys",
        icon: KeyRound,
    },
];

const secondaryNavItems: NavItem[] = [
    {
        title: "Status",
        href: "/status",
        icon: Activity,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

const allNavItems = [...mainNavItems, ...secondaryNavItems];

function isActivePath(pathname: string, href: string) {
    if (href === "/") {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppLayout() {
    const location = useLocation();
    const activeItem =
        allNavItems.find((item) => isActivePath(location.pathname, item.href)) ?? mainNavItems[0];

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader className="pt-12">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                size="lg"
                                tooltip="AgentRoute"
                            >
                                <NavLink to="/">
                                    <span className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary font-semibold text-sidebar-primary-foreground">
                                        AR
                                    </span>
                                    <span className="flex min-w-0 flex-col">
                                        <span className="truncate font-semibold">AgentRoute</span>
                                        <span className="truncate text-xs text-sidebar-foreground/70">
                                            Provider Router
                                        </span>
                                    </span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {mainNavItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <SidebarMenuItem key={item.href}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={isActivePath(
                                                    location.pathname,
                                                    item.href
                                                )}
                                                tooltip={item.title}
                                            >
                                                <NavLink to={item.href}>
                                                    <Icon />
                                                    <span>{item.title}</span>
                                                </NavLink>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarSeparator />

                <SidebarFooter>
                    <SidebarMenu>
                        {secondaryNavItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActivePath(location.pathname, item.href)}
                                        tooltip={item.title}
                                    >
                                        <NavLink to={item.href}>
                                            <Icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarFooter>

                <SidebarRail />
            </Sidebar>

            <SidebarInset className="min-h-svh overflow-hidden">
                {/* <header className="flex h-14 shrink-0 items-center gap-3 border-b bg-background px-4">
          <SidebarTrigger />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-sm">
              {activeItem.title}
            </span>
            <span className="truncate text-muted-foreground text-xs">
              AgentRoute Console
            </span>
          </div>
        </header> */}
                <div className="min-h-0 flex-1 overflow-auto">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
