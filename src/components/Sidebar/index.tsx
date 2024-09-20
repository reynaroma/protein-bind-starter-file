'use client'; // to indicate that this code will run on the client side or browser

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Atom, Network, Microscope, Settings, MessageSquareText, ChevronLeftIcon } from 'lucide-react';

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
    menuItems:[
      {
        icon: <Settings size={25} />,
        label: "Seetings",
        route: "/settings",
      }
    ]
  }
];

// components
import SidebarItem from "./SidebarItem";

const index = () => {
  return (
    <div>index</div>
  )
}

export default index