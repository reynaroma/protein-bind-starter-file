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

const Index: React.FC = () => {
  return (
    <>
      <div>
        <CTACard subtitle="get access to more molecules" title="Molecule Bank">
          <AtomIcon />
        </CTACard>
        <CTACard subtitle="get access to more molecules" title="Generate Molecules">
          <Network />
        </CTACard>
        <CTACard subtitle="get access to more molecules" title="Search Compounds">
          <SearchIcon />
        </CTACard>
        <CTACard subtitle="get access to more molecules" title="Collaborative Research">
          <MessageCircle />
        </CTACard>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DashboardCardChat />
        <DashboardCardMap />
      </div>
    </>
  )
}

export default Index;