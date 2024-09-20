'use client'; // to indicate that this code will run on the client side or browser

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Atom, Network, Microscope, Settings, MessageSquareText, ChevronLeftIcon } from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

// components
import SidebarItem from "./SidebarItem";

const index = () => {
  return (
    <div>index</div>
  )
}

export default index