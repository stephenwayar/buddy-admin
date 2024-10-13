import React from "react";
import Image from "next/image";
import avatar from '@/assets/svgs/avatar.svg'

interface Props {
  data: {
    author: string;
    message: string
  }
}

export default function Inbox({ data }: Props) {
  return (
    <div className="flex justify-start items-center">
      <div className="flex items-end space-x-2">
        <div>
          <div className='rounded-full w-[25px] h-[25px]'>
            <Image
              priority
              src={avatar}
              alt="user prp"
              className='rounded-full w-[25px] h-[25px]'
            />
          </div>
        </div>

        <div className="px-3 py-2 bg-[#F1F1F1] max-w-[40rem] rounded-t-[10px] rounded-r-[10px]">
          <p className="text-[#2E2E2E]">
            {data.message} 
          </p>
        </div>
      </div>
    </div>
  )
}