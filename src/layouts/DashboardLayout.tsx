import React, { useEffect, useState } from "react";
import Burger from "@/components/lib/custom/Burger";
import Drawer from "@/components/lib/custom/Drawer";
import SideNav from "@/components/secondary/nav/SideNav";

interface Props { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <SideNav />
      </Drawer>

      <div className="md:ml-[14rem]">
        <div className="pt-4 pb-20 px-4 sm:px-8">
          <div className="md:hidden mb-4">
            <Burger
              isOpen={isDrawerOpen}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </div>

          {children}
        </div>
      </div>
    </React.Fragment>
  )
}