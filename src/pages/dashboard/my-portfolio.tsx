import React from "react";
import Head from "next/head";
import DashboardLayout from "@/layouts/DashboardLayout";
import TopBar from "@/components/secondary/nav/TopBar";

export default function MyPortfolio() {
  return (
    <DashboardLayout>
      <Head>
        <title>
          My Portfolio | Buddy
        </title>
      </Head>

      <TopBar pageTitle='My Portfolio' />
    </DashboardLayout>
  )
}