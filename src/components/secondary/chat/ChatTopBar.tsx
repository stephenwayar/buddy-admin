import React from 'react'
import Image from "next/image";
import avatar from '@/assets/svgs/avatar.svg'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ChatTopBar() {
  return (
    <div className="flex justify-between sticky bg-[#FAFAFA] top-0 py-4 mb-2 border-[#D9D9D9] border-b-2 items-center">
      <div className="flex items-center space-x-3">
        <div className='rounded-full w-[40px] h-[40px] relative'>
          <Image
            priority
            src={avatar}
            alt="user prp"
            className='rounded-full w-[40px] h-[40px]'
          />

          <div className="h-3 w-3 bg-green-500 rounded-full absolute left-1 bottom-[-4px]" />
        </div>

        <p className='font-semibold text-[#2E2E2E]'>
          Alex Pororo
        </p>
      </div>

      <div className="items-center flex space-x-4">
        <div>
          <button>
            <Icon
              width="25"
              height="25"
              color="#8D8D8D"
              icon="lucide:search"
            />
          </button>
        </div>

        <div>
          <button>
            <Icon
              width="25"
              height="25"
              color="#8D8D8D"
              icon="solar:heart-linear"
            />
          </button>
        </div>

        <div className="relative">
          <button>
            <Icon
              width="25"
              height="25"
              color="#8D8D8D"
              icon="line-md:bell"
            />
          </button>

          <div className="h-2 w-2 bg-red-500 rounded-full absolute right-[2px] top-1" />
        </div>
      </div>
    </div>
  )
}