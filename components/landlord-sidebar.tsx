"use client";

import * as React from "react";
import {
  Home,
  Building2,
  Users,
  CreditCard,
  MessageSquare,
  Settings,
  BarChart3,
  Calendar,
  AlertCircle,
  LifeBuoy,
  Send,
  FileText,
  Wrench,
  TrendingUp,
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
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "/avatars/landlord.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/landlord/dashboard",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/landlord/dashboard",
        },
        {
          title: "Analytics",
          url: "/landlord/dashboard/analytics",
        },
        {
          title: "Quick Actions",
          url: "/landlord/dashboard/quick-actions",
        },
      ],
    },
    {
      title: "Properties",
      url: "/landlord/properties",
      icon: Building2,
      items: [
        {
          title: "All Properties",
          url: "/landlord/properties",
        },
        {
          title: "Add Property",
          url: "/landlord/properties/add",
        },
        {
          title: "Property Details",
          url: "/landlord/properties/details",
        },
        {
          title: "Vacant Units",
          url: "/landlord/properties/vacant",
        },
      ],
    },
    {
      title: "Tenants",
      url: "/landlord/tenants",
      icon: Users,
      items: [
        {
          title: "All Tenants",
          url: "/landlord/tenants",
        },
        {
          title: "Tenant Applications",
          url: "/landlord/tenants/applications",
        },
        {
          title: "Tenant Screening",
          url: "/landlord/tenants/screening",
        },
        {
          title: "Lease Management",
          url: "/landlord/tenants/leases",
        },
      ],
    },
    {
      title: "Rent & Payments",
      url: "/landlord/payments",
      icon: CreditCard,
      items: [
        {
          title: "Rent Collection",
          url: "/landlord/payments/rent",
        },
        {
          title: "Payment History",
          url: "/landlord/payments/history",
        },
        {
          title: "Late Payments",
          url: "/landlord/payments/late",
        },
        {
          title: "Financial Reports",
          url: "/landlord/payments/reports",
        },
      ],
    },
    {
      title: "Maintenance",
      url: "/landlord/maintenance",
      icon: Wrench,
      items: [
        {
          title: "All Requests",
          url: "/landlord/maintenance/requests",
        },
        {
          title: "Assign Contractors",
          url: "/landlord/maintenance/contractors",
        },
        {
          title: "Maintenance Schedule",
          url: "/landlord/maintenance/schedule",
        },
        {
          title: "Maintenance History",
          url: "/landlord/maintenance/history",
        },
      ],
    },
    {
      title: "Communications",
      url: "/landlord/messages",
      icon: MessageSquare,
      items: [
        {
          title: "Messages",
          url: "/landlord/messages/inbox",
        },
        {
          title: "Send Announcement",
          url: "/landlord/messages/announce",
        },
        {
          title: "Notice Templates",
          url: "/landlord/messages/templates",
        },
      ],
    },
    {
      title: "Reports & Analytics",
      url: "/landlord/reports",
      icon: TrendingUp,
      items: [
        {
          title: "Financial Reports",
          url: "/landlord/reports/financial",
        },
        {
          title: "Occupancy Reports",
          url: "/landlord/reports/occupancy",
        },
        {
          title: "Maintenance Reports",
          url: "/landlord/reports/maintenance",
        },
        {
          title: "Custom Reports",
          url: "/landlord/reports/custom",
        },
      ],
    },
    {
      title: "Documents",
      url: "/landlord/documents",
      icon: FileText,
      items: [
        {
          title: "Lease Templates",
          url: "/landlord/documents/templates",
        },
        {
          title: "Legal Documents",
          url: "/landlord/documents/legal",
        },
        {
          title: "Property Documents",
          url: "/landlord/documents/property",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/landlord/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/landlord/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Sunset Apartments",
      url: "/landlord/properties/1",
      icon: Building2,
    },
    {
      name: "Downtown Condos",
      url: "/landlord/properties/2",
      icon: Building2,
    },
    {
      name: "Riverside Complex",
      url: "/landlord/properties/3",
      icon: Building2,
    },
  ],
};

export function LandlordSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/landlord/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Building2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SewaLah</span>
                  <span className="truncate text-xs">Landlord Portal</span>
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
