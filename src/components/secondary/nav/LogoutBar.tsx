import React from "react";
import Image from "next/image";
import cookie from "cookiejs";
import { useRouter } from "next/router";
import avatar from '@/assets/svgs/avatar.svg'
import { setUser } from "@/redux/slices/user";
import { Key } from "@/redux/types/user.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function LogoutBar() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.value)

  const handleLogout = () => {
    dispatch(setUser(null))
    cookie.remove(Key.BUDDY_USER)
    router.push('/auth/login')
  }

  return (
    <div className="bg-white shadow-md shadow-[#DDE2E4] p-3 w-[185px] mx-auto rounded-[16px] text-center">
      <div className='rounded-full w-[60px] h-[60px] mt-[-3rem] mx-auto'>
        <Image
          priority
          src={avatar}
          alt="user prp"
          className='rounded-full w-[60px] h-[60px]'
        />
      </div>

      <h1 className="text-[#3B3B45] font-semibold text-lg truncate">
        {user ? `${user?.first_name} ${user?.last_name}` : 'User'}
      </h1>

      <h3 className="text-[#818187] truncate text-sm">
        {user?.email}
      </h3>

      <button onClick={handleLogout} className='w-full rounded-[16px] mt-2 text-sm bg-[#ffecd6] px-[20px] py-[14px]'>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-[18px] h-[18px]">
            <Icon
              icon='carbon:logout'
              width="18"
              height="18"
              color="#FF8600"
            />
          </div>

          <p className="text-[#FF8600]">
            Logout  
          </p>
        </div>
      </button>
    </div>
  )
}