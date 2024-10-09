import React from "react";
import Link from "next/link";
import Image from "next/image";
import mailIcon from '@/assets/svgs/Mail.svg'
import googleIcon from '@/assets/svgs/Google.svg'

export default function RegistrationMode() {
  return (
    <div className="rounded-[8px] space-y-5 bg-white border-[#DDE2E4] shadow-xl shadow-[#DDE2E4] border p-10">
      <h1 className="font-semibold text-[#1D1D18] text-2xl">
        Register your account
      </h1>

      <div className="!mt-10 space-y-3">
        <Link href='/auth/signup/with-email'>
          <button className="flex border-[#DDE2E4] border-2 w-full rounded-[6px] justify-center py-2 items-center space-x-2 text-[#5B6871]">
            <Image
              src={mailIcon}
              alt="check icon"
              className='w-[24px]'
            />

            <p>
              Sign up with email
            </p>
          </button>
        </Link>

        <div className="flex items-center space-x-2">
          <hr className="border w-full border-[#DDE2E4]" />

          <span className="mx-2 text-[#5B6871] text-sm">or</span>

          <hr className="border w-full border-[#DDE2E4]" />
        </div>

        <button className="flex border-[#DDE2E4] border-2 w-full rounded-[6px] justify-center py-2 items-center space-x-2 text-[#5B6871]">
          <Image
            src={googleIcon}
            alt="check icon"
            className='w-[24px]'
          />

          <p>
            Sign up with Google
          </p>
        </button>
      </div>

      <div className="space-y-16 !mt-10">
        <p className="text-[#84919A] text-sm">
          By clicking the button above, you agree to our <Link className="text-[#FF8600]" href='#terms'>Terms of Service</Link> and <Link className="text-[#FF8600]" href='#policy'>Privacy Policy.</Link>
        </p>

        <p className="text-[#84919A] text-sm">
          Already have an account? <Link className="text-[#FF8600]" href='/auth/login/'>Login</Link>
        </p>
      </div>
    </div>
  )
}