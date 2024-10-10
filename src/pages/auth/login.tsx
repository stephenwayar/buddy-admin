import React from "react";
import Head from "next/head";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { login } from "@/services/api/auth";
import AuthLayout from "@/layouts/AuthLayout";
import { setUser } from "@/redux/slices/user";
import { useAppDispatch } from "@/redux/hooks";
import { User } from "@/redux/types/user.types";
import { useMutation } from "@tanstack/react-query";
import { LoginData, LoginResponse } from "@/services/types/auth.types";
import LoginForm from "@/components/secondary/auth/LoginForm";

export interface InitialValuesType {
  email: string;
  password: string
}

export default function Login() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const initialValues: InitialValuesType = {
    email: '',
    password: ''
  }

  const form = useForm({
    initialValues,

    validate: {
      email: (value) => (
        !value ? 'Email is required' : null
      ),
      password: (value) => (
        !value ? 'Password is required' : null
      )
    },
  });

  const mutation = useMutation({
    mutationFn: (data: LoginData) => login(data),
    onError: (error: AxiosError) => {
      const errorData = error.response?.data as { message: string };

      form.setErrors({
        email: errorData.message || 'An error occurred',
        password: true
      })
    },
    onSuccess: (res: LoginResponse) => {
      const user: User = {
        ...res.data.user,
        token: res.data.token
      }

      // Dispatch the user data to the store
      dispatch(setUser(user));

      // Reset the form fields
      form.reset();

      // Show a success message
      toast.success('Login successful');

      // Get URL search parameters
      const params = new URLSearchParams(window.location.search);

      // Check if a redirect parameter exists
      if (params.has("redirect")) {
        const redirectUrl = params.get("redirect");

        // Redirect to the specified URL after 1.5 seconds if it exists
        if (redirectUrl) {
          setTimeout(() => {
            router.push(redirectUrl);
          }, 1500);
        } else {
          // Default redirect to the dashboard if no URL is found
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        }
      } else {
        // Redirect to the dashboard if no redirect parameter is present
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      }
    }
  })

  const handleLogin = (values: InitialValuesType) => {
    const payload: LoginData = {
      email: values.email,
      password: values.password,
    }

    mutation.mutate(payload) // Initiate transaction
  }

  return (
    <AuthLayout>
      <Head>
        <title>
          Login | Buddy
        </title>
      </Head>

      <LoginForm
        form={form}
        mutation={mutation}
        handleLogin={handleLogin}
      />
    </AuthLayout>
  )
}