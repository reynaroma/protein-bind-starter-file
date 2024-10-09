import { Metadata } from "next";

// components
import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Protein Bind: a leading research platform for drug discovery.",
  description: "This is a description for protein bind",
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
