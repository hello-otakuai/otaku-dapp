import React from "react";

const TradeOverview = () => {
  return (
    <div className="bg-[#191919] p-6 rounded-[36px] h-[160px] w-[50%]">
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
  );
};

export default TradeOverview;
