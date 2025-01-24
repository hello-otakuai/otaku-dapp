const WinLossRatio = () => {
  return (
    <div className="bg-secondary p-6 rounded-[36px]">
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

const StatsOverview = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-[Orbitron]">Trade Log Summary</p>
        <div className="flex gap-4 items-center">
          <div className="size-3 bg-red-500 rounded-full" />
          <p>
            Live wallet
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default StatsOverview;
