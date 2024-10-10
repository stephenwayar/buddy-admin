import React from "react";
import Link from "next/link";

export default function ServerDown() {
  return (
    <div className="h-screen flex justify-center items-center px-4 sm:px-6">
      <div className="space-y-4">
        <h1 className="text-[#090A04] text-center text-4xl font-semibold">
          Oops!
        </h1>

        <h3 className="text-[#090A04] text-center text-lg">
          There was a server side error somewhere
        </h3>

        <div className="text-center">
          <Link href='/'>
            <button className="bg-[#FF8600] hover:bg-[#ff8800e1] text-white h-[45px] rounded-lg text-center w-36">
              Go home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}