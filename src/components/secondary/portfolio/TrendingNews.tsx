import React from "react";
import Link from "next/link";
import muskIcon from '@/assets/svgs/musk.svg'
import fuelIcon from '@/assets/svgs/fuel.svg'
import Image, { StaticImageData } from "next/image";

export default function TrendingNews() {
  return (
    <div className="bg-white rounded-[16px] space-y-3 p-5">
      <h1 className="text-[#3B3B45] font-bold text-lg">
        Trending News
      </h1>

      <div className="space-y-3">
        <NewsLink
          title="Russia & Ukraine War"
          subtitle="Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts."
          icon={fuelIcon}
        />

        <NewsLink
          title="Elon Musk bought Twitter"
          subtitle="Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts."
          icon={muskIcon}
        />

        <NewsLink
          title="Fuel Crisis Everywhere"
          subtitle="Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts."
          icon={fuelIcon}
        />
      </div>
    </div>
  )
}

interface NewsLinkProps {
  title: string;
  subtitle: string;
  icon: StaticImageData
}

const NewsLink = ({ icon, title, subtitle }: NewsLinkProps) => {
  return (
    <div>
      <Link href={`/dashboard/my-portfolio/#${title.split(' ').join('-').toLowerCase()}`}>
        <div className="border-[#F1F1F1] border-2 flex space-x-3 justify-between items-center rounded-[16px] p-4">
          <div>
            <div className='rounded-[8px] w-[48px] h-[48px]'>
              <Image
                priority
                src={icon}
                alt="icon"
                className='rounded-[8px] w-[48px] h-[48px]'
              />
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <h1 className="text-[#3B3B45] truncate font-bold">
              {title}
            </h1>

            <p className="text-[#A3A3A6] text-sm truncate">
              {subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}