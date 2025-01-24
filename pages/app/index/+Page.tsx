import { Fragment } from "react/jsx-runtime";
import StatsOverview from "./components/StatsOverview";

export default function () {
  return <Fragment>
    <StatsOverview />
    <div className="bg-[#1E1E1E] p-6 mt-8 rounded-[36px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Trades</h2>
        <select className="bg-[#1E1E1E] p-2 rounded-md text-gray-400">
          <option>Jan. 2025</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1E1E1E]">
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
            {/* ... other table rows ... */}
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
}