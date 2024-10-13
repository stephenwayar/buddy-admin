import React from "react";
import Image, { StaticImageData } from "next/image";
import linkedinIcon from '@/assets/svgs/linkedinIcon.svg'
import facebookIcon from '@/assets/svgs/facebookIcon.svg'
import instagramIcon from '@/assets/svgs/instagramIcon.svg'

export default function Revenue() {
  return (
    <div className="bg-white rounded-[16px] space-y-3 p-5">
      <h1 className="text-[#3B3B45] font-bold text-xl">
        Revenue
      </h1>

      <Stat
        title="$4,000"
        subtitle="Recently Added Pages"
        icon={facebookIcon}
      />

      <Stat
        title="$2,120"
        subtitle="Video Monetization"
        icon={instagramIcon}
      />

      <Stat
        title="$1,752"
        subtitle="Community Buildup"
        icon={linkedinIcon}
      />
    </div>
  )
}

interface StatProps {
  title: string;
  subtitle: string;
  icon: StaticImageData
}

const Stat = ({ icon, title, subtitle }: StatProps) => {
  return (
    <div className="border-[#F1F1F1] border-2 flex justify-between items-center rounded-[16px] p-4">
      <div className="overflow-hidden space-x-2">
        <h1 className="text-[#3B3B45] truncate font-bold text-xl">
          {title}
        </h1>

        <p className="text-[#A3A3A6] truncate">
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