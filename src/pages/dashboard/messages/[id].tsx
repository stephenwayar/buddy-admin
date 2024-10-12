import React from "react";
import Head from "next/head";
import Chat from "@/components/secondary/dm/CHat";
import TopBar from "@/components/secondary/nav/TopBar";
import DashboardLayout from "@/layouts/DashboardLayout";
import DMLayout from "@/components/secondary/dm/DMLayout";
import Conversations from "@/components/secondary/dm/Conversations";

export default function Conversation() {
  return (
    <DashboardLayout>
      <Head>
        <title>Conversation | Buddy</title>
      </Head>

      <TopBar pageTitle='Messages' />

      <DMLayout>
        <Conversations />

        <Chat />
      </DMLayout>
    </DashboardLayout>
  )
}