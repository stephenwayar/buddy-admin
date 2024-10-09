import React from "react";
import Link from "next/link";
import { AxiosError } from "axios";
import { User } from "@/redux/types/user.types";
import Input from "@/components/lib/custom/Input";
import { UseFormReturnType } from "@mantine/form";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InitialValuesType } from "@/pages/auth/login";
import { LoginData } from "@/services/types/auth.types";
import { UseMutationResult } from "@tanstack/react-query";

interface Props {
  handleLogin: (values: InitialValuesType) => void;
  mutation: UseMutationResult<User, AxiosError<unknown, any>, LoginData, unknown>;
  form: UseFormReturnType<InitialValuesType, (values: InitialValuesType) => InitialValuesType>
}

export default function LoginForm({
  form,
  mutation,
  handleLogin
}: Props) {
  return (
    <form onSubmit={form.onSubmit((values) => handleLogin(values))} className="rounded-[8px] space-y-5 bg-white border-[#DDE2E4] shadow-xl shadow-[#DDE2E4] border p-10">
      <div className="space-y-3">
        <h1 className="font-semibold text-[#1D1D18] text-2xl">
          Log in to your account
        </h1>

        <h3 className="text-[#5B6871] text-sm">
          Proceed to create account and setup your organization
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <Input
            type='text'
            placeholder="Email"
            icon="ic:baseline-email"
            {...form.getInputProps('email')}
            className={`w-full ${form.errors.email ? 'border-red-500 focus:outline-red-500' : 'border-[#DDE2E4] focus:outline-[#FF8600]'} px-10 py-3 rounded-[6px] text-[#5B6871] border-2 placeholder:text-sm placeholder:text-[#B0BABF]`}
          />
        </div>

        <div>
          <Input
            type='password'
            icon="si:unlock-fill"
            placeholder="Password"
            {...form.getInputProps('password')}
            className={`w-full ${form.errors.password ? 'border-red-500 focus:outline-red-500' : 'border-[#DDE2E4] focus:outline-[#FF8600]'} px-10 py-3 rounded-[6px] border-2 text-[#5B6871] placeholder:text-sm placeholder:text-[#B0BABF]`}
          />
        </div>
      </div>

      <div className="!mt-10">
        <button
          disabled={mutation.isPending || !form.isTouched() || !form.isValid()}
          className='px-4 h-12 w-full transition duration-75 delay-75 ease-linear space-x-2 font-semibold disabled:cursor-not-allowed disabled:bg-[#ECEDED] hover:bg-[#ff8800e1] bg-[#FF8600] disabled:text-[#C3C7CE] text-white rounded-[8px]'
        >
          {mutation.isPending ?
            <Icon
              width="20"
              height="20"
              color="#C3C7CE"
              icon="icomoon-free:spinner2"
              className={`animate-spin mx-auto`}
            /> :
            'Login'
          }
        </button>
      </div>

      <div className="space-y-16 !mt-10">
        <p className="text-[#84919A] text-sm">
          By clicking the button above, you agree to our <Link className="text-[#FF8600]" href='#terms'>Terms of Service</Link> and <Link className="text-[#FF8600]" href='#policy'>Privacy Policy.</Link>
        </p>

        <p className="text-[#84919A] text-sm">
          Don’t have an account? <Link className="text-[#FF8600]" href='/auth/signup/with-email'>Register</Link>
        </p>
      </div>
    </form>
  )
}