import React from "react";
import { CircularProgressBar } from "./progress-bar";

const WinLossRatio = () => {
  return (
    <div className="bg-secondary p-6 rounded-[36px] h-[160px] w-[50%]">
      <div className="flex items-center justify-between">
        <div className="w-[50%]">
          <h2 className="text-lg font-bold mb-4">Win/loss ratio</h2>
          <p className="text-gray-400">
            You&apos;re doing well, you&apos;ve made gains in 58.02% of your
            recent trades.
          </p>
          <div className="text-sm mt-4">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#F0272D] " />
              <p className="text-[#ADADAD] text-sm">
                <span className="text-white">WINS: $3,062</span> ≈ 58.02%
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-[#636363]" />
              <p className="text-[#ADADAD] text-sm">
                <span className="text-white">LOSS: $2,216.14</span> ≈ 41.98%
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <CircularProgressBar value={58} size={150} strokeWidth={10} />
        </div>
      </div>
    </div>
  );
};

export default WinLossRatio;
