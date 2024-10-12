import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";

type Props = {
  text: string,
  icon: string,
  linkTarget: string
}

const NavLink: React.FC<Props> = ({
  linkTarget,
  text,
  icon
}) => {
  const { asPath } = useRouter();

  return (
    <div className="w-full flex group items-center">
      <div className={`w-[6px] transition duration-75 delay-50 ease-linear h-8 group-hover:bg-[#FF8600] rounded-r-[4px] ${asPath.startsWith(linkTarget) ? 'bg-[#FF8600]' : 'bg-transparent'}`} />

      <div className="w-full flex justify-center items-center">
        <Link href={linkTarget}>
          <button className={`w-[185px] text-left rounded-[16px] text-sm transition duration-75 delay-50 ease-linear px-[20px] py-[15px] ${asPath.startsWith(linkTarget) ? 'shadow-md shadow-[#DDE2E4] text-[#FF8600]' : 'text-[#818187] hover:shadow-md hover:shadow-[#DDE2E4] hover:text-[#FF8600]'}`}>
            <div className="flex items-center space-x-[8px]">
              <div className="w-[18px] h-[18px]">
                <Icon
                  icon={icon}
                  className={`transition-colors duration-75 ${asPath.startsWith(linkTarget) ? 'text-[#FF8600]' : 'text-[#818187] group-hover:text-[#FF8600]'}`}
                  width="18"
                  height="18"
                />
              </div>

              <p>{text}</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavLink;