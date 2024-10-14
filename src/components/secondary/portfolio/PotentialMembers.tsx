import React, { useEffect, useRef } from "react";
import Image from "next/image";
import avatar from '@/assets/svgs/avatar.svg'
import prodIcon from '@/assets/svgs/productivity.svg'

const members = [
  {
    name: 'Wanda Parker',
    username: '@ashking1234',
    productivity: '10.3%'
  },
  {
    name: 'Terry Brown',
    username: '@king1234',
    productivity: '54.3%'
  },
  {
    name: 'Jake Paul',
    username: '@zero242',
    productivity: '8%'
  },
  {
    name: 'Kate Doe',
    username: '@jackMa',
    productivity: '0.3%'
  },
  {
    name: 'Ice Prince',
    username: '@brymo',
    productivity: '98.3%'
  },
]

export default function PotentialMembers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait 2 seconds before starting the initial scroll
    const initialScrollTimeout = setTimeout(() => {
      if (scrollContainerRef.current) {
        // Scroll to the end
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollWidth,
          behavior: "smooth",
        });

        // After 3 seconds, scroll back to the beginning
        const scrollBackTimeout = setTimeout(() => {
          scrollContainerRef.current?.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }, 3000); // 3 seconds after reaching the end

        return () => clearTimeout(scrollBackTimeout);
      }
    }, 2000); // Wait for 2 seconds before scrolling

    return () => clearTimeout(initialScrollTimeout);
  }, []);

  return (
    <div className="bg-white rounded-[12px] space-y-4 p-5">
      <h1 className="text-[#3B3B45] truncate font-bold text-xl">
        Potential Members
      </h1>

      <div
        ref={scrollContainerRef}
        className="flex w-full scroll-smooth overflow-x-auto space-x-4 items-center no-scrollbar"
      >
        {members.map((member, i) => (
          <Member
            key={i}
            name={member.name}
            username={member.username}
            productivity={member.productivity}
          />
        ))}
      </div>
    </div>
  );
}

interface MemberProps {
  name: string,
  username: string
  productivity: string
}

const Member = ({ name, username, productivity }: MemberProps) => (
  <div className="border-[#F1F1F1] flex flex-col justify-between border-2 h-[10rem] text-center p-4 rounded-[16px] min-w-[12.5rem] w-full max-w-[20rem]">
    <div className="w-fit mx-auto">
      <div className='rounded-full w-[40px] h-[40px]'>
        <Image
          priority
          src={avatar}
          alt="user prp"
          className='rounded-full w-[40px] h-[40px]'
        />
      </div>
    </div>

    <div>
      <h1 className="text-[#3B3B45] truncate font-bold text-lg">
        {name}
      </h1>

      <h3 className="text-[#3B3B45] text-sm truncate">
        {username}
      </h3>
    </div>

    <div className="items-center flex space-x-2 w-fit mx-auto">
      <div>
        <Image
          priority
          src={prodIcon}
          alt="user prp"
          className='rounded-full w-[22px]'
        />
      </div>

      <div className="text-sm text-[#3B3B45]">
        <p>{productivity}</p>
      </div>
    </div>
  </div>
)