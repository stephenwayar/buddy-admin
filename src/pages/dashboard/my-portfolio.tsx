import React, { useRef, useEffect } from "react";
import Head from "next/head";
import allIcon from '@/assets/svgs/allIcon.svg'
import TopBar from "@/components/secondary/nav/TopBar";
import membersIcon from '@/assets/svgs/membersIcon.svg'
import DashboardLayout from "@/layouts/DashboardLayout";
import channelsIcon from '@/assets/svgs/channelsIcon.svg'
import Revenue from "@/components/secondary/portfolio/Revenue";
import Watchlist from "@/components/secondary/portfolio/Watchlist";
import TrendingNews from "@/components/secondary/portfolio/TrendingNews";
import TrendingPosts from "@/components/secondary/portfolio/TrendingPosts";
import ImpressionCard from "@/components/secondary/portfolio/ImpressionCard";
import PotentialMembers from "@/components/secondary/portfolio/PotentialMembers";
import PortfolioOverview from "@/components/secondary/portfolio/PortfolioOverview";

const impressions = [
  {
    title: '51',
    subtitle: 'Total Channels',
    icon: channelsIcon
  },
  {
    title: '125',
    subtitle: 'New Members',
    icon: membersIcon
  },
  {
    title: '789',
    subtitle: 'All Impressions',
    icon: allIcon
  },
]

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
          <div className="w-full lg:w-[calc(100%-340px)] 2xl:w-[calc(100%-25rem)]">
            <div className="w-full max-w-[80rem] space-y-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {impressions.map((impression, i) => (
                  <ImpressionCard 
                    key={i}
                    icon={impression.icon}
                    title={impression.title}
                    subtitle={impression.subtitle}
                  />
                ))}
              </div>

              <PortfolioOverview />
              <TrendingPosts />
              <PotentialMembers />
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