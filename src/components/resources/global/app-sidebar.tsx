"use client";

import * as React from "react";
import {
  Server,
  ExternalLink,
  Github,
  Heart,
  AppWindow,
} from "lucide-react";

import { NavMain } from "@/components/resources/global/nav-main";
import { NavProjects } from "./nav-projects";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Front-End",
      url: "/resources/front-end",
      icon: AppWindow,
      isActive: true,
      items: [
        {
          title: "All",
          url: "/resources/frontend",
        },
        {
          title: "Webs",
          url: "/resources/frontend/web",
        },
        {
          title: "Repositorios",
          url: "/resources/frontend/repositorios",
        },
      ],
    },
    {
      title: "Back-End",
      url: "/resources/backend",
      icon: Server,
      items: [
        {
          title: "All",
          url: "/resources/backend",
        },
        {
          title: "Webs",
          url: "/resources/backend/webs",
        },
        {
          title: "Repositorios",
          url: "/resources/backend/repositorios",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Stack Code",
      url: "#",
      github: "https://github.com/Ander-Labs/stack-code",
      icon: ExternalLink,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      github: "/",
      icon: ExternalLink,
    },
    {
      name: "API-Cloner",
      url: "#",
      github: "/",
      icon: ExternalLink,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="flex justify-end items-center text-white">
        <SidebarMenu className="flex flex-col gap-2">
          <SidebarMenuItem>
            <a
              href="https://github.com/sponsors/Ander-Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SidebarMenuButton className="flex justify-center items-center gap-2">
                <Heart className="text-rose-500" />
                <span>Sponsor</span>
              </SidebarMenuButton>
            </a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a
              href="https://github.com/Ander-Labs/garden-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SidebarMenuButton className="flex justify-center items-center gap-2">
                <Github />
                <span>Contribuir</span>
              </SidebarMenuButton>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
