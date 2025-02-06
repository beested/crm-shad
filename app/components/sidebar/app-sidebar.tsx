'use client';

import {
  Bot,
  CloudDownload,
  Command,
  FolderKanban,
  HelpCircle,
  Newspaper,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Suporte',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Atendimentos / Visitas',
          url: '#',
        },
        {
          title: 'Pendencias',
          url: '/pendings',
        },
      ],
    },
    {
      title: 'Desenvolvimento',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Pendencias por local',
          url: '/pendings',
        },
      ],
    },

    {
      title: 'Controle',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Status de funcionários',
          url: '#',
        },
        {
          title: 'Usuários',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Ajuda',
      url: '#',
      icon: HelpCircle,
    },
  ],
  projects: [
    {
      name: 'Novidades',
      url: '#',
      icon: Newspaper,
    },
    {
      name: 'Pendências',
      url: '/pendings',
      icon: FolderKanban,
    },
    {
      name: 'Downloads',
      url: '#',
      icon: CloudDownload,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Windel CRM</span>
                  <span className="truncate text-xs">Enterprise</span>
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
