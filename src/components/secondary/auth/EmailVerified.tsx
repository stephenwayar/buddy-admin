import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailIcon from '@/assets/svgs/mail-success.svg'

export default function EmailVerified() {
  return (
    <div className="rounded-[8px] space-y-5 bg-white border-[#DDE2E4] shadow-xl shadow-[#DDE2E4] border py-20 px-6 flex items-center">
      <div className="w-full">
        <div className="mx-auto w-fit">
          <Image
            priority
            src={emailIcon}
            alt="email icon"
          />
        </div>

        <div className="space-y-4 text-center w-full max-w-[25rem] mx-auto">
          <h1 className="font-semibold text-[#1D1D18] text-2xl">
            Email verified !
          </h1>

          <h3 className="text-[#5B6871] text-sm">
            The verified email address will be associated with your account. Click on the button below to continue
          </h3>

          <Link href='/auth/login'>
            <button className='px-4 h-12 w-40 !mt-6 transition duration-75 delay-75 ease-linear space-x-2 font-semibold disabled:cursor-not-allowed disabled:bg-[#ECEDED] hover:bg-[#ff8800e1] bg-[#FF8600] disabled:text-[#C3C7CE] text-white rounded-[8px]'>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}