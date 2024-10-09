import React from "react";
import Head from "next/head";
import AuthLayout from "@/layouts/AuthLayout";

export default function SignUp() {
  return (
    <AuthLayout>
      <Head>
        <title>
          Signup | Buddy
        </title>
      </Head>
    </AuthLayout>
  )
}