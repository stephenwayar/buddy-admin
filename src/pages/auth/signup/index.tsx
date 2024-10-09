import React from "react";
import Head from "next/head";
import AuthLayout from "@/layouts/AuthLayout";
import RegistrationMode from "@/components/secondary/auth/RegistrationMode";

export default function SignUp() {
  return (
    <AuthLayout>
      <Head>
        <title>
          Signup | Buddy
        </title>
      </Head>

      <RegistrationMode />
    </AuthLayout>
  )
}