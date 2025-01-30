import AddTrade from "./components/AddTrade";
import StatsOverview from "./components/StatsOverview";

export default function () {

  return <div className="space-y-4">
    <div className="space-y-3">
      <p className="font-[Orbitron] font-bold text-xl md:text-2xl">Trade Log Summary</p>
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <p className="text-[#ADADAD] text-sm">Live wallet</p>
      </div>
    </div>
    <StatsOverview />
    <div className="flex flex-col items-end gap-3">
      <AddTrade />
      <div className="bg-secondary p-6 rounded-[36px] w-full h-full overflow-y-scroll space-y-3">
        <div className="flex justify-between items-center sticky top-0">
          <h2 className="text-lg font-bold">Trades</h2>
          <select className="bg-primary p-2 rounded-md text-gray-400 text-xs">
            <option>Jan. 2025</option>
          </select>
        </div>
        <div className="overflow-x-auto bg-primary rounded-xl py-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary">
                <th className="text-left py-2 px-4">Token</th>
                <th className="text-left py-2 px-4">Net Cap</th>
                <th className="text-left py-2 px-4">Strategy</th>
                <th className="text-left py-2 px-4">Profit/Loss</th>
              </tr>
            </thead>
            <tbody className="text-[#ADADAD]">
              <tr>
                <td className="py-2 px-4">BONK</td>
                <td className="py-2 px-4">$500</td>
                <td className="py-2 px-4">News</td>
                <td className="py-2 px-4 text-green-500 text-center">+40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}