import React from "react";
import ReactECharts from 'echarts-for-react';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Watchlist() {
  return (
    <div className="bg-white rounded-[16px] space-y-3 p-5">
      <div className="flex justify-between items-center">
        <p className="text-[#3B3B45] font-bold text-lg">
          Watchlist
        </p>

        <button className="text-[#FF8600] font-semibold text-xs">
          VIEW ALL
        </button>
      </div>

      <Stat 
        title="AAPL"
        amount="$142.90"
        rate="decline"
        percentage="-0.47%"
        series={[134, 700, 250, 300, 450, 530, 220]}
      />

      <Stat
        title="BPL"
        amount="$102.90"
        rate="incline"
        percentage="+0.78%"
        series={[134, 200, 250, 300, 650, 330, 420]}
      />
    </div>
  )
}

interface StatProps {
  rate: 'incline' | 'decline',
  title: string;
  amount: string;
  percentage: string;
  series: Number[]
}

const Stat = ({ rate, title, amount, percentage, series }: StatProps) => {
  const color = {
    incline: '#00A441',
    decline: '#FF5252'
  }[rate]

  const options = {
    color: [ '#FFB800'],
    yAxis: [{ show: false }],
    xAxis: [
      {
        show: false ,
        type: 'category',
        data: ['', '', '', '', '', '', '']
      }
    ],
    series: [
      {
        data: series,
        type: 'line',
        smooth: true,
        symbol: 'none',
      }
    ]
  };

  return (
    <div className="flex p-4 bg-[#F6F6F6] items-center rounded-[16px]">
      <div className="w-[35%]">
        <div className="w-full flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-[#3B3B45] truncate font-bold">
              {title}
            </p>

            <div className="space-y-1">
              <p className="text-[#A3A3A6] truncate font-bold text-sm">
                {amount}
              </p>

              <p style={{ color }} className="font-bold truncate text-xs">
                {percentage}
              </p>
            </div>
          </div>

          <div className="mt-1">
            <Icon
              width="18" 
              height="18"
              color={color}
              icon={rate === 'incline' ? 'heroicons:arrow-up-16-solid' : 'heroicons:arrow-down-16-solid'}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <ReactECharts
          option={options}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  )
}