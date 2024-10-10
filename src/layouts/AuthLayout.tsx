import React, { useEffect } from 'react';
import Image from 'next/image';
import chatIcon from '@/assets/svgs/bi_chat.svg'
import checkIcon from '@/assets/svgs/Checkbox.svg'
import Logo from '@/components/secondary/common/Logo';

interface Props { children: React.ReactNode }

export default function AuthLayout({ children }: Props) {
  const features = [
    {
      content: 'Track real-time overview of company’s financial performance.'
    },
    {
      content: 'Track created projects budget against actual revenue and expenses.'
    },
    {
      content: 'Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.'
    }
  ]

  useEffect(() => {
    // Change the body's background color
    const body = document.querySelector('body');
    body!.style.backgroundColor = '#F8FAFC';

    // Reset the background color on cleanup
    return () => {
      body!.style.backgroundColor = '#ffffff';
    };
  }, []);

  return (
    <React.Fragment>
      <div className="hidden lg:block">
        <div className="w-[50%] h-[100vh] py-12 px-4 fixed bg-white">
          <div className='mx-auto max-w-[30rem] space-y-32'>
            <Logo />

            <div className='space-y-20'>
              <div className='space-y-8'>
                {features.map((f, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <Image
                      src={checkIcon}
                      alt="check icon"
                      className='w-[24px]'
                    />

                    <p className='text-[#5B6871]'>
                      {f.content}
                    </p>
                  </div>
                ))}
              </div>

              <p className='text-[#84919A] font-light text-sm'>
                © {new Date().getFullYear()} Revvex. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-[50%]">
        <div className='flex flex-col space-y-10 justify-between min-h-screen px-4 sm:px-10 lg:px-4 pb-20 pt-12 lg:pt-24'>
          <div className='mx-auto w-full max-w-[30rem] space-y-4 lg:space-y-0 xl:max-w-[35rem]'>
            <div className='lg:hidden'>
              <Logo className='mx-auto' />
            </div>

            {children}
          </div>

          <div className='mt-auto flex justify-end mx-auto w-full xl:max-w-[35rem] max-w-[30rem]'>
            <button className='px-4 py-3 animate-bounce space-x-2 shadow-xl shadow-[#DDE2E4] flex items-center bg-[#FF8600] hover:bg-[#ff8800e1] text-white rounded-full transition duration-75 delay-75 ease-linear'>
              <p>
                Get Help
              </p>

              <Image
                src={chatIcon}
                alt="check icon"
                className='w-[20px]'
              />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}