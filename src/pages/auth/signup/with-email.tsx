import React, { Suspense, lazy, useState } from "react";
import Head from "next/head";
import { AxiosError } from "axios";
import { useForm } from "@mantine/form";
import AuthLayout from "@/layouts/AuthLayout";
import { register } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { RegistrationData } from "@/services/types/auth.types";
import LoadingState from "@/components/secondary/common/LoadingState";
import RegistrationForm from "@/components/secondary/auth/RegistrationForm";

const OTPForm = lazy(() => import('@/components/secondary/auth/OTPForm'));
const ConfirmEmail = lazy(() => import('@/components/secondary/auth/ConfirmEmail'));
const EmailVerified = lazy(() => import('@/components/secondary/auth/EmailVerified'));

export type Step = 0 | 1 | 2 | 3

export interface InitialValuesType {
  email: string,
  password: string,
  first_name: string,
  last_name: string,
}

export default function SignUpWithEmail() {
  const [step, setStep] = useState<Step>(0)

  const initialValues: InitialValuesType = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  }

  const form = useForm({
    initialValues,

    validate: {
      first_name: (value) => (
        !value ? 'First name is required' : null
      ),
      last_name: (value) => (
        !value ? 'Last name is required' : null
      ),
      email: (value) => (
        !value ? 'Email is required' : null
      ),
      password: (value) => (
        !value ? 'Password is required' : null
      ),
    },
  });

  const mutation = useMutation({
    mutationFn: (data: RegistrationData) => register(data),
    onError: (error: AxiosError) => {
      const errorData = error.response?.data as { message: string };

      form.setErrors({ email: errorData.message, password: true })
    },
    onSuccess: () => setStep(1)
  })

  const handleRegister = (values: InitialValuesType) => {
    const payload: RegistrationData = {
      email: values.email,
      password: values.password,
      last_name: values.last_name,
      first_name: values.first_name,
    }

    mutation.mutate(payload) // Initiate transaction
  }

  return (
    <AuthLayout>
      <Head>
        <title>
          Signup | Buddy
        </title>
      </Head>

      {step === 0 && (
        <RegistrationForm
          form={form}
          mutation={mutation}
          handleRegister={handleRegister}
        />
      )}

      {step === 1 && (
        <Suspense fallback={<LoadingState />}>
          <ConfirmEmail
            form={form}
            setStep={setStep}
          />
        </Suspense>
      )}

      {step === 2 && (
        <Suspense fallback={<LoadingState />}>
          <OTPForm
            form={form}
            setStep={setStep}
          />
        </Suspense>
      )}

      {step === 3 && (
        <Suspense fallback={<LoadingState />}>
          <EmailVerified />
        </Suspense>
      )}
    </AuthLayout>
  )
}