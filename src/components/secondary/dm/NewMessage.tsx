import React from "react";
import Image from "next/image";
import newMessageIcon from '@/assets/svgs/undraw-dms.svg'

export default function NewMessage() {
  return (
    <div className="w-full bg-[#FAFAFA] p-4 h-full rounded-[12px] hidden lg:block">
      <div className="h-full flex justify-center items-center px-4 sm:px-6">
        <div className="space-y-4 text-center mx-auto max-w-[30rem]">
          <div className='w-[140px] mx-auto'>
            <Image
              priority
              alt="user prp"
              src={newMessageIcon}
              className='w-[140px]'
            />
          </div>

          <h1 className="text-[#090A04] !mt-8 text-center text-3xl font-semibold">
            Select a message
          </h1>

          <h3 className="text-[#818187] text-center">
            Choose from your existing conversations, start a new one, or just keep swimming.
          </h3>

          <button className="bg-[#FF8600] text-sm hover:bg-[#ff8800e1] text-white h-[45px] rounded-full text-center w-36">
            New Message
          </button>
        </div>
      </div>
    </div>
  )
}