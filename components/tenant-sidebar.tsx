"use client";

import * as React from "react";
import {
  Home,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  User,
  Calendar,
  AlertCircle,
  LifeBuoy,
  Send,
  Building,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/tenant.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/tenant/dashboard",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/tenant/dashboard",
        },
        {
          title: "Quick Actions",
          url: "/tenant/dashboard/quick-actions",
        },
      ],
    },
    {
      title: "My Rental",
      url: "/tenant/rental",
      icon: Building,
      items: [
        {
          title: "Property Details",
          url: "/tenant/rental/details",
        },
        {
          title: "Lease Agreement",
          url: "/tenant/rental/lease",
        },
        {
          title: "Photos & Documents",
          url: "/tenant/rental/documents",
        },
      ],
    },
    {
      title: "Payments",
      url: "/tenant/payments",
      icon: CreditCard,
      items: [
        {
          title: "Payment History",
          url: "/tenant/payments/history",
        },
        {
          title: "Upcoming Payments",
          url: "/tenant/payments/upcoming",
        },
        {
          title: "Payment Methods",
          url: "/tenant/payments/methods",
        },
      ],
    },
    {
      title: "Maintenance",
      url: "/tenant/maintenance",
      icon: AlertCircle,
      items: [
        {
          title: "Submit Request",
          url: "/tenant/maintenance/submit",
        },
        {
          title: "My Requests",
          url: "/tenant/maintenance/requests",
        },
        {
          title: "Request History",
          url: "/tenant/maintenance/history",
        },
      ],
    },
    {
      title: "Groups",
      url: "/tenant/groups",
      icon: Users,
      items: [
        {
          title: "My Group",
          url: "/tenant/groups/my-group",
        },
        {
          title: "Split Payments",
          url: "/tenant/groups/payments",
        },
        {
          title: "Group Messages",
          url: "/tenant/groups/messages",
        },
        {
          title: "Group Settings",
          url: "/tenant/groups/settings",
        },
      ],
    },
    {
      title: "Messages",
      url: "/tenant/messages",
      icon: MessageSquare,
      items: [
        {
          title: "Inbox",
          url: "/tenant/messages/inbox",
        },
        {
          title: "Sent",
          url: "/tenant/messages/sent",
        },
        {
          title: "Announcements",
          url: "/tenant/messages/announcements",
        },
      ],
    },
    {
      title: "Documents",
      url: "/tenant/documents",
      icon: FileText,
      items: [
        {
          title: "Lease Documents",
          url: "/tenant/documents/lease",
        },
        {
          title: "Receipts",
          url: "/tenant/documents/receipts",
        },
        {
          title: "Other Documents",
          url: "/tenant/documents/other",
        },
      ],
    },
    {
      title: "Profile",
      url: "/tenant/profile",
      icon: User,
      items: [
        {
          title: "Personal Info",
          url: "/tenant/profile/personal",
        },
        {
          title: "Emergency Contacts",
          url: "/tenant/profile/emergency",
        },
        {
          title: "Settings",
          url: "/tenant/profile/settings",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/tenant/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/tenant/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "My Current Lease",
      url: "/tenant/rental/details",
      icon: Building,
    },
  ],
};

export function TenantSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/tenant/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Home className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SewaLah</span>
                  <span className="truncate text-xs">Tenant Portal</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
