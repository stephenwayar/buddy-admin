import React, { useState } from "react"
import ReactECharts from 'echarts-for-react';

type ActiveTab = "robbin-hood" | "amreitrade" | "fidelity" | "charles"
type Tab = { btnText: string; value: ActiveTab }
type ClickedSeriesState = { [key: string]: boolean }

export default function PortfolioOverview() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('robbin-hood')
  const [clickedSeries, setClickedSeries] = useState<ClickedSeriesState>({
    '0-5': true, // Initially Mark June
    '1-5': true, // Initially Mark June
  });

  const handleChartClick = (params: any) => {
    // Extracts the series and data index from the click event
    const { seriesIndex, dataIndex } = params;

    // Updates the clicked series state, marking the clicked bar as true
    setClickedSeries((prev) => ({
      ...prev,
      [`${seriesIndex}-${dataIndex}`]: true,
    }));
  };

  const getBarColor = (seriesIndex: number, dataIndex: number) => {
    const initialColor = seriesIndex === 0 ? '#F1F1F2' : '#E6E6E7'; // Lighter gray for A, darker for B

    return clickedSeries[`${seriesIndex}-${dataIndex}`]
      ? seriesIndex === 0
        ? '#FFB800' // Color for series A after click
        : '#FF8600' // Color for series B after click
      : initialColor; // Initial gray color before click
  };

  const options = {
    xAxis: [
      {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: '#A3A3A6', 
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#A3A3A6',
        },
      }
    ],
    series: [
      {
        name: 'A',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          color: '#FF8600', // Color for series A
        },
        data: [
          600, 350, 575, 275, 350, 600, 350, 575, 275, 350, 70, 300
        ].map((value, dataIndex) => ({
          value,
          itemStyle: {
            color: getBarColor(0, dataIndex),
          }
        })),
      },
      {
        name: 'B',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          color: '#FF8600', // Color for series A
        },
        data: [
          700, 425, 550, 350, 425, 700, 425, 550, 350, 425, 200, 350, 150
        ].map((value, dataIndex) => ({
          value,
          itemStyle: {
            color: getBarColor(1, dataIndex),
          }
        })),
      }
    ]
  };

  const tabs: Tab[] = [
    {
      btnText: 'Robbin hood',
      value: 'robbin-hood'
    },
    {
      btnText: 'Amreitrade',
      value: 'amreitrade'
    },
    {
      btnText: 'Fidelity',
      value: 'fidelity'
    },
    {
      btnText: 'Charles',
      value: 'charles'
    }
  ]

  return (
    <div className="bg-white rounded-[12px] space-y-4 p-5">
      <div className="space-y-2 xl:flex xl:space-y-0 xl:items-center xl:justify-between w-full">
        <div className="overflow-hidden">
          <h1 className="text-[#3B3B45] truncate font-bold text-xl">
            Overview
          </h1>
        </div>

        <div className="flex flex-wrap items-center xl:gap-0 gap-2 xl:space-x-2">
          {tabs.map((tab, i) => (
            <div key={i} className="w-fit">
              <button
                onClick={() => setActiveTab(tab.value)}
                className={`w-full px-3 py-1 md:px-4 rounded-full text-xs font-semibold ${activeTab === tab.value ? 'bg-[#FF8600] text-white' : 'bg-[#F6F6F6] text-[#818187]'}`}
              >
                {tab.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-80">
        <ReactECharts
          option={{
            ...options,
            grid: {
              left: '0%',
              right: '0%',
              top: '10px',
              bottom: '0%',
              containLabel: true // Ensure labels are contained within the grid
            }
          }}
          onEvents={{ click: handleChartClick }}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  )
}