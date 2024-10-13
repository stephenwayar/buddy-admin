import React, { useEffect } from "react";
import SideNav from "@/components/secondary/nav/SideNav";

interface Props { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  useEffect(() => {
    // Change the body's background color
    const body = document.querySelector('body');
    body!.style.backgroundColor = '#f5f5f5';

    // Reset the background color on cleanup
    return () => {
      body!.style.backgroundColor = '#ffffff';
    };
  }, []);

  return (
    <React.Fragment>
      <div className="hidden md:block">
        <SideNav />
      </div>

      <div className="md:ml-[14rem]">
        <div className="pb-10 px-4 sm:px-8">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}