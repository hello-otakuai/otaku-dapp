import React from "react";
import WinLossRatio from "./WinLossRatio";
import Title from "./Title";

const StatsOverview = () => {
  return (
    <>
      <Title>Trade Log Summary</Title>
      <div className="grid grid-cols-3 gap-8">
        <WinLossRatio />

        {/* Trade Overview */}
        <div className="bg-[#1E1E1E] p-6 rounded-[36px]">
          <h2 className="text-lg font-bold mb-4">Trade Overview</h2>
          <div className="text-sm space-y-2">
            <p>
              TRADE VOL: <span className="text-green-500">$10,360.2</span>{" "}
              <span className="text-green-500">+2.8%</span>
            </p>
            <p>
              NET CAPITAL: <span className="text-green-500">$9,514.34</span>{" "}
              <span className="text-green-500">+7.6%</span>
            </p>
            <p>
              GROSS PROFIT: <span className="text-green-500">$845.86</span>{" "}
              <span className="text-gray-400">-20%</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsOverview;
