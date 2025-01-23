import React from "react";

const TradeLogSummary = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-1/5 bg-gray-900 p-6">
          <div className="text-red-500 font-bold text-xl mb-8">OTAKU</div>
          <nav>
            <ul className="space-y-6">
              <li className="text-gray-400 hover:text-white">Logbook</li>
              <li className="text-gray-400 hover:text-white">Heatmap</li>
              <li className="text-gray-400 hover:text-white">Apps</li>
              <li className="text-gray-400 hover:text-white">Sensei</li>
              <li className="text-gray-400 hover:text-white">Developers</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-4/5 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Trade Log Summary</h1>
            <div className="bg-gray-800 px-4 py-2 rounded-md text-gray-400">
              Ghnd3GHjbsZ....f3D
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-3 gap-8">
            {/* Win/Loss Ratio */}
            <div className="bg-gray-800 p-6 rounded-md">
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
                  <p className="text-gray-400">You’re doing well, you’ve made gains in 58.02% of your recent trades.</p>
                  <div className="text-sm mt-4">
                    <p className="text-green-500">WINS: $3,062 = 58.02%</p>
                    <p className="text-red-500">LOSS: $2,216.14 = 41.98%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Overview */}
            <div className="bg-gray-800 p-6 rounded-md">
              <h2 className="text-lg font-bold mb-4">Trade Overview</h2>
              <div className="text-sm space-y-2">
                <p>TRADE VOL: <span className="text-green-500">$10,360.2</span> <span className="text-green-500">+2.8%</span></p>
                <p>NET CAPITAL: <span className="text-green-500">$9,514.34</span> <span className="text-green-500">+7.6%</span></p>
                <p>GROSS PROFIT: <span className="text-green-500">$845.86</span> <span className="text-gray-400">-20%</span></p>
              </div>
            </div>
          </div>

          {/* Trades Table */}
          <div className="bg-gray-800 p-6 mt-8 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Trades</h2>
              <select className="bg-gray-900 p-2 rounded-md text-gray-400">
                <option>Jan. 2025</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="text-left py-2 px-4">Token</th>
                    <th className="text-left py-2 px-4">Net Cap</th>
                    <th className="text-left py-2 px-4">Profit/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">BONK</td>
                    <td className="py-2 px-4">$500</td>
                    <td className="py-2 px-4 text-green-500">+40</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">TRUMP</td>
                    <td className="py-2 px-4">$200</td>
                    <td className="py-2 px-4 text-red-500">-23.5</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">SOL</td>
                    <td className="py-2 px-4">$1,600</td>
                    <td className="py-2 px-4 text-green-500">+82</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">SUI</td>
                    <td className="py-2 px-4">$50</td>
                    <td className="py-2 px-4 text-green-500">+40</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">FCP</td>
                    <td className="py-2 px-4">$602</td>
                    <td className="py-2 px-4 text-red-500">-23.5</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">LUCKY</td>
                    <td className="py-2 px-4">$521</td>
                    <td className="py-2 px-4 text-green-500">+40</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">DOGE</td>
                    <td className="py-2 px-4">$152</td>
                    <td className="py-2 px-4 text-red-500">-23.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TradeLogSummary;
