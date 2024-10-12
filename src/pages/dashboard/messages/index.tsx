import React from "react";
import Head from "next/head";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Messages() {
  return (
    <DashboardLayout>
      <Head>
        <title>
          Messages | Buddy
        </title>
      </Head>
    </DashboardLayout>
  )
}