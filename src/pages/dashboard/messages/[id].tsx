import React from "react";
import Head from "next/head";
import Chat from "@/components/secondary/chat/Chat";
import TopBar from "@/components/secondary/nav/TopBar";
import DashboardLayout from "@/layouts/DashboardLayout";
import DMLayout from "@/components/secondary/chat/DMLayout";
import Conversations from "@/components/secondary/chat/Conversations";

export default function Conversation() {
  return (
    <DashboardLayout>
      <Head>
        <title>Conversation | Buddy</title>
      </Head>

      <TopBar pageTitle='Messages' />

      <DMLayout>
        <div className="hidden lg:block w-fit">
          <Conversations />
        </div>

        <div className="w-full">
          <Chat />
        </div>
      </DMLayout>
    </DashboardLayout>
  )
}