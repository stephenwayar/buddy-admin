import React, { useState } from "react";
import Image from "next/image";
import SideNav from "./SideNav";
import bellIcon from '@/assets/svgs/Bell.svg'
import plusIcon from '@/assets/svgs/bx-plus.svg'
import Drawer from "@/components/lib/custom/Drawer";
import Burger from "@/components/lib/custom/Burger";
import Input from "@/components/lib/custom/Input";

interface Props { pageTitle: string }

export default function TopBar({ pageTitle }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="w-full flex space-x-5 md:space-x-0 items-center mb-5">
        <div className="md:hidden">
          <Burger
            isOpen={isDrawerOpen}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="w-1/3">
            <h1 className="text-2xl text-[#3B3B45] font-bold">
              {pageTitle}
            </h1>
          </div>

          <div className="space-x-3 flex justify-end items-center w-2/3">
            <div className="hidden lg:block w-full max-w-[30rem]">
              <Input
                type="text"
                icon="lucide:search"
                placeholder="Search"
                className="bg-white outline-none py-2 rounded-[16px] placeholder:text-[#B0BABF] text-[#818187] w-full max-w-[30rem] pl-9 pr-4"
              />
            </div>

            <div>
              <button className="bg-white p-2 rounded-full">
                <Image
                  priority
                  alt="plus"
                  src={plusIcon}
                  className='w-[24px] h-[24px]'
                />
              </button>
            </div>

            <div>
              <button className="bg-white p-2 rounded-full">
                <Image
                  priority
                  alt="bell"
                  src={bellIcon}
                  className='w-[24px] h-[24px]'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <SideNav />
      </Drawer>
    </React.Fragment>
  )
}