import React from "react";
import Head from "next/head";
import TopBar from "@/components/secondary/nav/TopBar";
import DashboardLayout from "@/layouts/DashboardLayout";
import DMLayout from "@/components/secondary/dm/DMLayout";
import NewMessage from "@/components/secondary/dm/NewMessage";
import Conversations from "@/components/secondary/dm/Conversations";

export default function Messages() {
  return (
    <DashboardLayout>
      <Head>
        <title>Messages | Buddy</title>
      </Head>

      <TopBar pageTitle='Messages' />

      <DMLayout>
        <Conversations />

        <NewMessage />
      </DMLayout>
    </DashboardLayout>
  )
}