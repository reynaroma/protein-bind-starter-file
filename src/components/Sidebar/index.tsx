'use client'; // to indicate that this code will run on the client side or browser

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Atom, Network, Microscope, Settings, MessageSquareText, ChevronLeftIcon, SidebarOpen } from 'lucide-react';

// components
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import useLocalStorage from "@/hook/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

const menuGroups = [
  {
    name: "",
    menuItems: [
      {
        icon: <LayoutGrid size={25} />,
        label: "Dashboard",
        route: "/",
      },
      {
        icon: <Atom size={25} />,
        label: "Molecules Bank",
        route: "/molecule-bank",
      },
      {
        icon: <Network size={25} />,
        label: "Model",
        route: "/model",
      },
      {
        icon: <Microscope size={25} />,
        label: "Research",
        route: "/research",
      },
      {
        icon: <MessageSquareText size={25} />,
        label: "Messages",
        route: "/message",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <Settings size={25} />,
        label: "Seetings",
        route: "/settings",
      }
    ]
  }
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", 'dashboard');

  return (
    <aside className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-hidden bg-black duration-300 ease-linear dark:bg-[#000000] lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

    </aside>
  )

};

const index = () => {
  return (
    <div>index</div>
  )
}

export default index