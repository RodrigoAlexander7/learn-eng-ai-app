"use client";

import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem, } from "flowbite-react";
import { HiChatAlt2, HiAcademicCap, HiClipboardList, HiChartBar, HiClock, HiUserCircle, } from "react-icons/hi";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Sidebar de aprendizaje de idiomas" className="w-64">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            as={Link}
            href="/chat"
            icon={HiChatAlt2}
          >
            Chat
          </SidebarItem>

          <SidebarItem
            as={Link}
            href="/roadmap"
            icon={HiAcademicCap}
          >
            Roadmap
          </SidebarItem>

          <SidebarItem
            as={Link}
            href="/practice"
            icon={HiClipboardList}
          >
            Practice
          </SidebarItem>

          <SidebarItem
            as={Link}
            href="/stats"
            icon={HiChartBar}
          >
            Stadistics
          </SidebarItem>

          <SidebarItem
            as={Link}
            href="/history"
            icon={HiClock}
          >
            History
          </SidebarItem>

          <SidebarItem
            as={Link}
            href="/profile"
            icon={HiUserCircle}
          >
            User
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
