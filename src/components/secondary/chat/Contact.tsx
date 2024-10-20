import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IContact } from "./Conversations";
import { useParams } from "next/navigation";
import avatar from '@/assets/svgs/avatar.svg'
import tickIcon from '@/assets/svgs/tick-dm.svg'

interface Props { data: IContact }

export default function Contact({ data }: Props) {
  const params = useParams()

  return (
    <div>
      <Link href={`/dashboard/messages/${data.id}`}>
        <div className={`flex items-center p-2 hover:shadow-md rounded-[10px] transition delay-75 duration-75 ease-linea shadow-[#DDE2E4] ${params?.id === data.id && 'shadow-md'}`}>
          <div className="flex items-center space-x-3 w-full">
            <div>
              <div className='rounded-full w-[40px] h-[40px]'>
                <Image
                  priority
                  src={avatar}
                  alt="user prp"
                  className='rounded-full w-[40px] h-[40px]'
                />
              </div>
            </div>

            <div className="w-28">
              <h1 className="text-[#FF8600] font-semibold text-sm truncate">
                {data.name}
              </h1>

              <h3 className="text-[#959595] font-light truncate text-xs">
                {data.lastMessage}
              </h3>
            </div>
          </div>

          <div className="w-full space-y-1">
            <h3 className="text-[#959595] text-right font-light truncate text-xs">
              {data.timeStamp}
            </h3>

            <div className="flex justify-end">
              {data.unreadMessages === 0 ? (
                <div className="h-4 w-4">
                  <Image
                    priority
                    alt="icon"
                    src={tickIcon}
                    className='rounded-full h-4 w-4'
                  />
                </div>
              ) : (
                <div className="h-4 px-[5px] text-[9px] flex items-center justify-center bg-[#FF8600] text-white rounded-full">
                  <p>{data.unreadMessages}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}