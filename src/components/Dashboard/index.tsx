"use client";
import dynamic from "next/dynamic";
import React from 'react';
import { AtomIcon, MessageCircle, Network, SearchIcon } from "lucide-react";

// components
import CTACard from "./Components/CTACard";

const DashboardCardMap = dynamic(
  () => import("@/components/Dashboard/Components/DashboardCardMap"),
  {
    ssr: false,
  },
);

const DashboardCardChat = dynamic(
  () => import("@/components/Dashboard/Components/DashboardCardChat"),
  {
    ssr: false,
  },
);

const Index = () => {
  return (
    <div>Index</div>
  )
}

export default Index;