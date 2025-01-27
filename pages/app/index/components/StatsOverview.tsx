import React from "react";
import TradeOverview from "./TradeOverview";
import WinLossRatio from "./WinLossRatio";

const StatsOverview = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-6">
        <div>
          <p className="font-[Orbitron] font-bold text-2xl pb-2">
            Trade Log Summary
          </p>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <p className="text-[#ADADAD] text-sm">Live wallet</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] p-6 rounded-[36px]">
        <div className="flex gap-[15px]">
          <WinLossRatio />
          <TradeOverview />
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
