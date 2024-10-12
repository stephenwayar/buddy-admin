import React from "react";
import Link from "next/link";
import Logo from "../common/Logo";
import NavLink from "./NavLink";
import LogoutBar from "./LogoutBar";

type INavLink = {
  text: string;
  linkTarget: string;
  icon: string;
}

export default function SideNav() {
  const navLinks: INavLink[] = [
    {
      text: 'My Portfolio',
      linkTarget: '/dashboard/my-portfolio',
      icon: 'ri:user-line'
    },
    {
      text: 'My Group',
      linkTarget: '/dashboard/my-portfolio/#my-group',
      icon: 'ri:group-line'
    },
    {
      text: 'Messages',
      linkTarget: '/dashboard/messages',
      icon: 'clarity:email-line'
    },
    {
      text: 'Analytics',
      linkTarget: '/dashboard/my-portfolio/#analytics',
      icon: 'mynaui:chart-line'
    },
    {
      text: 'Pack',
      linkTarget: '/dashboard/my-portfolio/#pack',
      icon: 'solar:dollar-linear'
    },
    {
      text: 'Settings',
      linkTarget: '/dashboard/my-portfolio/#settings',
      icon: 'solar:settings-outline'
    },
  ]

  return (
    <div className="w-[14rem] h-[100vh] fixed overflow-y-scroll bg-white flex flex-col justify-between">
      <div>
        <div className="flex justify-center py-4 w-full">
          <Link href='/dashboard'>
            <Logo />
          </Link>
        </div>

        <div className="mt-12">
          <div className="space-y-4">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                icon={link.icon}
                text={link.text}
                linkTarget={link.linkTarget}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-20 mb-10">
        <LogoutBar />
      </div>
    </div>
  )
}