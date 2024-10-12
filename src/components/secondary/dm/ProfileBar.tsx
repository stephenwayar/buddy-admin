import React from "react";
import Link from "next/link";
import Image from "next/image";
import avatar from '@/assets/svgs/avatar.svg'
import { useAppSelector } from "@/redux/hooks";
import editIcon from '@/assets/svgs/edit.svg'

export default function ProfileBar() {
  const user = useAppSelector((state) => state.user.value)

  return (
    <div className="flex items-start space-x-3 justify-between w-full">
      <div className="flex items-center space-x-3 w-full">
        <div>
          <div className='rounded-full w-[45px] h-[45px]'>
            <Image
              priority
              src={avatar}
              alt="user prp"
              className='rounded-full w-[45px] h-[45px]'
            />
          </div>
        </div>

        <div className="w-32">
          <h1 className="text-[#FF8600] font-semibold text-sm truncate">
            {user ? `${user?.first_name} ${user?.last_name}` : 'User'}
          </h1>

          <h3 className="text-[#2E2E2E] font-bold truncate text-xs">
            {user?.email}
          </h3>
        </div>
      </div>

      <div>
        <Link href='/dashboard/messages/#account'>
          <div className="w-[24px] h-[24px]">
            <Image
              priority
              src={editIcon}
              alt="edit icon"
              className='w-[16px] h-[20px]'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}