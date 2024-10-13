import React, { useRef, useEffect } from "react";
import Head from "next/head";
import DashboardLayout from "@/layouts/DashboardLayout";
import TopBar from "@/components/secondary/nav/TopBar";
import Watchlist from "@/components/secondary/portfolio/Watchlist";
import Revenue from "@/components/secondary/portfolio/Revenue";
import TrendingNews from "@/components/secondary/portfolio/TrendingNews";

export default function MyPortfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      // Scroll to the bottom of the container
      container.scrollTo({ 
        top: container.scrollHeight, 
        behavior: 'smooth' 
      });

      // Smooth scroll to the top after a brief delay
      setTimeout(() => {
        container.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 3000); // Adjust the delay if needed
    }
  }, []);

  return (
    <DashboardLayout>
      <Head>
        <title>My Portfolio | Buddy</title>
      </Head>

      <TopBar pageTitle="My Portfolio" />

      <div className="flex flex-col lg:flex-row lg:items-start space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="w-full">
          <div className="w-full lg:w-[calc(100%-20rem)] 2xl:w-[calc(100%-25rem)]">
            <div className="w-full max-w-[80rem] bg-gray-900 h-[90rem] p-6">

            </div>
          </div>
        </div>

        <div>
          <div ref={scrollContainerRef} className="lg:max-w-[20rem] 2xl:max-w-[25rem] w-full lg:fixed lg:right-8 space-y-4 lg:overflow-y-auto lg:no-scrollbar lg:h-[calc(100vh-120px)]">
            <Watchlist />
            <Revenue />
            <TrendingNews />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}