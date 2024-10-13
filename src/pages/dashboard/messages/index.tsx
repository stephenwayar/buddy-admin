import React from "react";
import Head from "next/head";
import TopBar from "@/components/secondary/nav/TopBar";
import DashboardLayout from "@/layouts/DashboardLayout";
import DMLayout from "@/components/secondary/chat/DMLayout";
import NewMessage from "@/components/secondary/chat/NewMessage";
import Conversations from "@/components/secondary/chat/Conversations";

export default function Messages() {
  return (
    <DashboardLayout>
      <Head>
        <title>Messages | Buddy</title>
      </Head>

      <TopBar pageTitle='Messages' />

      <DMLayout>
        <div className="lg:w-fit w-full">
          <Conversations />
        </div>

        <div className="hidden lg:block w-full">
          <NewMessage />
        </div>
      </DMLayout>
    </DashboardLayout>
  )
}