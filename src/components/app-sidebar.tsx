"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Map,
  LayoutDashboard,
  SquareTerminal,
  Shirt,
  ScrollText,
  ListOrdered,
  Receipt,
  Settings,
  User,
  // ArchiveRestore,
  // File,
} from "lucide-react"

import {
  Sidebar,  
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./ui/team-switcher"
import { NavMain } from "./ui/nav-main"
import { NavProjects } from "./ui/nav-projects"
import { NavUser } from "./ui/nav-user"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
        title: 'Dashboard',
        url: '/',
        icon: LayoutDashboard,
        items: [
        
          {
            title: "HOME",
            url: "/",
          }
        ]
    },
    // Products
    { 
      title: "Products",
      url: "#",
      icon: Shirt,
      isActive: false,
      items: [
        
        {
          title: "Grid",
          url: "/products",
        },
        {
          title: "Edit",
          url: "/product-edit",
        },
        {
            title: "Create",
            url: "/product-create",
          },
      ],
    },
    // Category
    {
      title: "Category",
      url: "#",
      icon: ScrollText,
      items: [
        {
          title: "List",
          url: "/category",
        },
        {
          title: "Edit",
          url: "/edit",
        },
        {
          title: "Create",
          url: "/createcategory",
        },
      ],
    },
    // Inventory
    // Orders
    { 
        title: "Orders",
        url: "#",
        icon: ListOrdered,
        isActive: false,
        items: [
          {
            title: "List",
            url: "/orders",
          }
        ],
      },
    //   Purchases
    //   { 
    //     title: "Purchases",
    //     url: "#",
    //     icon: ArchiveRestore,
    //     isActive: false,
       
    //   },
    // //   Invoices
    //   { 
    //     title: "Invoices",
    //     url: "#",
    //     icon: File,
    //     isActive: false,
       
    //   },
  
    //   Sellers
    { 
        title: "Sellers",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "List",
            url: "/sellers/list",
          }
        ],
       
      },
    //   Coupons
      { 
        title: "Coupons",
        url: "#",
        icon: Receipt,
        isActive: true,
        items: [
          {
            title: "List",
            url: "/coupons/list",
          },
          {
            title: "Add",
            url: "/coupons/add",
          }
        ],
      },
  ],
  projects: [
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      name: "Profile",
      url: "#",
      icon: User,
    },
    {
      name: "Permisions",
      url: "#",
      icon: Map,
    },
    {
        name: "Rewiews",
        url: "#",
        icon: Map,
      },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>  
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
