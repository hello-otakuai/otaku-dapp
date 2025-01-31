import AddTrade from "./components/AddTrade";
import StatsOverview from "./components/StatsOverview";

export default function () {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <p className="font-[Orbitron] font-bold text-xl md:text-2xl">
          Trade Log Summary
        </p>
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <p className="text-[#ADADAD] text-sm">Live wallet</p>
        </div>
      </div>
      <StatsOverview />
      <div className="flex flex-col items-end gap-3">
        <div className="bg-secondary p-6 rounded-[36px] w-full h-full overflow-y-scroll space-y-3">
          <div className="flex gap-4 items-center sticky top-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.28979 13.6316L12.279 2.64859C12.5475 2.22657 13.2008 2.4168 13.2008 2.91703V10.7C13.2008 10.7552 13.2456 10.8 13.3008 10.8H18.2405C18.645 10.8 18.882 11.2553 18.6501 11.5867L11.7104 21.5005C11.4301 21.901 10.8008 21.7027 10.8008 21.2138V14.5C10.8008 14.4448 10.756 14.4 10.7008 14.4H5.71162C5.31707 14.4 5.07797 13.9644 5.28979 13.6316Z"
                stroke="#ADADAD"
                strokeWidth="1.5"
              />
            </svg>

            <p className="text-lg font-bold">Quick Insight</p>
          </div>
          <div className="overflow-x-auto bg-primary rounded-xl py-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left py-2 px-4">
                    <div className="flex gap-2 items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.40039 16.8L7.77639 11.6308L12.3844 16.0615L21.6004 7.2M21.6004 7.2H14.6884M21.6004 7.2V13.8461"
                          stroke="#FFFAF2"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p>
                        Top Earners
                      </p>
                    </div>
                  </th>
                  <th className="text-left py-2 px-4">
                    <div className="flex gap-2 items-center">
                      <svg
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 1.2L6.44241 6.36923L11.0504 1.93847L20.2664 10.8M20.2664 10.8H13.3544M20.2664 10.8V4.15385"
                          stroke="#FFFAF2"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p>
                        Top Losers
                      </p>
                    </div>
                  </th>
                  <th className="text-left py-2 px-4">
                    <div className="flex gap-2 items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.734 15V19.2C14.734 19.8627 14.1967 20.4 13.534 20.4H11.134C10.4712 20.4 9.93398 19.8627 9.93398 19.2V15M18.334 9.60001C18.334 12.9137 15.6477 15.6 12.334 15.6C9.02028 15.6 6.33398 12.9137 6.33398 9.60001C6.33398 6.2863 9.02028 3.60001 12.334 3.60001C15.6477 3.60001 18.334 6.2863 18.334 9.60001Z"
                          stroke="#FFFAF2"
                          strokeWidth="1.8"
                        />
                      </svg>

                      <p>
                        Motives
                      </p>
                    </div>
                  </th>
                  <th className="text-left py-2 px-4 flex gap-2">
                    <div className="flex gap-2 items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0004 17V9V3L17.4004 7.2L12.6004 10.8M8.40039 13.2908C4.88219 13.8841 2.40039 15.3213 2.40039 17C2.40039 19.2091 6.69846 21 12.0004 21C17.3023 21 21.6004 19.2091 21.6004 17C21.6004 15.3213 19.1186 13.8841 15.6004 13.2908"
                          stroke="#FFFAF2"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p>
                        Naratives
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ADADAD]">
                <tr>
                  <td className="py-2 px-4">BONK</td>
                  <td className="py-2 px-4">$500</td>
                  <td className="py-2 px-4">News</td>
                  <td className="py-2 px-4">
                    Memes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
  );
}
