import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Protein Bind: a leading research platform for drug discovery.",
  description: "This is a description for protein bind",
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Hello dashboard page</p>
      </DefaultLayout>
    </>
  );
}
