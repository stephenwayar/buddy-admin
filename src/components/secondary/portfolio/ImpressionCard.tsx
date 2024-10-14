import React from "react"
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  subtitle: string;
  icon: StaticImageData
}

export default function ImpressionCard({ title, subtitle, icon }: Props) {
  return (
    <div className="bg-white rounded-[12px] flex justify-between items-center p-5">
      <div className="overflow-hidden space-y-1">
        <h1 className="text-[#3B3B45] truncate font-bold text-2xl">
          {title}
        </h1>

        <p className="text-[#A3A3A6] font-semibold truncate">
          {subtitle}
        </p>
      </div>

      <div>
        <div className='rounded-full w-[48px] h-[48px]'>
          <Image
            priority
            src={icon}
            alt="icon"
            className='rounded-full w-[48px] h-[48px]'
          />
        </div>
      </div>
    </div>
  )
}