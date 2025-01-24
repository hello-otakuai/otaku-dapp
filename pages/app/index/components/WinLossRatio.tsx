import React from "react";

const WinLossRatio = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-[36px]">
      <h2 className="text-lg font-bold mb-4">Win/loss ratio</h2>
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20">
          <svg className="absolute inset-0" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#EF4444"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="100"
              strokeDashoffset="42"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#10B981"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="100"
              strokeDashoffset="58"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
            58%
          </div>
        </div>
        <div>
          <p className="text-gray-400">
            You&apos;re doing well, you&apos;ve made gains in 58.02% of your
            recent trades.
          </p>
          <div className="text-sm mt-4">
            <p className="text-green-500">WINS: $3,062 = 58.02%</p>
            <p className="text-red-500">LOSS: $2,216.14 = 41.98%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinLossRatio;
