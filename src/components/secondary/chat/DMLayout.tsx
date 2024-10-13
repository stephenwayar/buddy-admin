import React from "react";

interface Props { children: React.ReactNode }

export default function DMLayout({ children }: Props) {
  return (
    <div className="rounded-[16px] bg-white px-4 w-ful py-6" style={{ height: 'calc(100vh - 120px)' }}>
      <div className="h-full flex lg:space-x-4">
        {children}
      </div>
    </div>
  )
}