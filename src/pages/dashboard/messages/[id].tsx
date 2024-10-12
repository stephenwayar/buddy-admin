import React from "react";
import Head from "next/head";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Conversation() {
  return (
    <DashboardLayout>
      <Head>
        <title>
          Conversation | Buddy
        </title>
      </Head>
    </DashboardLayout>
  )
}