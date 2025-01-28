
import { useEffect, useState } from "react";
const CircleChart = ({ percentage = 58, }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (percentage <= 0) return;
    const i = setInterval(() => {
      setPercent(v => {

        let val = v + 1;
        if (val === percentage) {
          clearInterval(i);
        }
        return val;
      });
    }, 20);
    return () => clearInterval(i)
  }, [percentage]);

  const circleStyle = {
    strokeDasharray: "100 100",
    strokeDashoffset: 100 - percent,
    transform: "rotate(90deg) scale(-1, 1)",

    transformOrigin: "center",
    stroke: "#FF0000",
  };

  return (
    <div className="flex items-center justify-center relative">
      <svg viewBox="0 0 36 36" className="w-full h-full scale-75 md:scale-100">
        <circle
          className="text-gray-500"
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
          r="16"
          cx="18"
          cy="18"
        />
        <circle
          className="text-red-500"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          r="16"
          cx="18"
          cy="18"
          style={circleStyle}
        />
      </svg>
      <div className="absolute text-white text-xl font-semibold">
        {percent}%
      </div>
    </div>
  );
};

const WinLossRatio = ({ wins, loss }: { wins: number, loss: number }) => {
  const winPercent = (wins / (wins + loss)) * 100;
  const lossPercent = (loss / (wins + loss)) * 100;
  return (
    <div className="bg-secondary p-6 md:p-8 rounded-3xl grid md:grid-cols-2 place-items-center gap-4 md:gap-8">
      <div className="flex flex-col gap-5">
        <p className="text-lg md:text-xl">
          {"Win/Loss ratio"}
        </p>
        <p className="text-[#FFFFFF80]">
          {"You’re doing well, you’ve made gains in 58.02% of your recent trades."}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center">
            <span className="size-3 rounded bg-red-600" />
            <p>
              <span className="font-bold">
                WINS ${Intl.NumberFormat().format(wins)}
              </span>
              <span className="text-zinc-500">
                ≅ ${winPercent}
              </span>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="size-3 rounded bg-gray-500" />
            <p>
              <span className="font-bold">
                LOSS ${Intl.NumberFormat().format(loss)}
              </span>
              <span className="text-zinc-500">
                ≅ ${lossPercent}
              </span>
            </p>
          </div>
        </div>
      </div>
      <CircleChart />
    </div>
  );
};

const TradeOverview = () => {
  return <div className="bg-secondary p-6 md:p-8 rounded-3xl flex flex-col justify-between">
    <div className="flex gap-4 items-center text-xl">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9435 21.088V3.912C14.9435 3.35972 14.4958 2.912 13.9435 2.912H9.88528C9.333 2.912 8.88528 3.35972 8.88528 3.912V21.088M14.9435 21.088L14.9419 10.7682C14.9418 10.2158 15.3896 9.768 15.9419 9.768H20C20.5523 9.768 21 10.2157 21 10.768V20.088C21 20.6403 20.5523 21.088 20 21.088H14.9435ZM14.9435 21.088H8.88528M8.88528 21.088V16.088C8.88528 15.5357 8.43757 15.088 7.88528 15.088H4C3.44771 15.088 3 15.5357 3 16.088V20.088C3 20.6403 3.44771 21.088 4 21.088H8.88528Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="text-lg md:text-xl">
        Trade Overview
      </p>
    </div>
    <div className="flex gap-4">

    </div>
  </div>
}

const StatsOverview = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <WinLossRatio wins={3561} loss={1821} />
      <TradeOverview />
    </div>
  );
};

export default StatsOverview;
