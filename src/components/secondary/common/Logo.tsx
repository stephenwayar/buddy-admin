import React from "react";
import Image from "next/image";
import img from '@/assets/svgs/logo.svg'

type Props = { className?: string }

export default function Logo({ className }: Props) {
  return (
    <div>
      <Image
        priority
        src={img}
        alt="logo icon"
        className={className}
      />
    </div>
  )
}