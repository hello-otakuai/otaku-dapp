import { useState } from "react"
interface BestDay {
    date: Date,
    profit: number
    cap: number
    vol: number
    token: {
        name: string
        cap: number
        profit: number
    }
}

export default function () {
    const [bestDay, setBestDay] = useState<BestDay>({
        date: new Date(),
        profit: -300,
        cap: 1000,
        vol: 1879,
        token: {
            name: "Bonk",
            cap: 400,
            profit: 350
        }

    })
    const grossProfitnLoss = bestDay.profit / bestDay.cap;
    console.log(grossProfitnLoss)
    return <div className="bg-[#1E1E1E] rounded-2xl p-8 h-auto text-white flex flex-col justify-between">
        <div className="flex items-center gap-2">
            <span>
                <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.4946 1.71393C11.7012 1.29539 12.298 1.29539 12.5046 1.71393L15.1786 7.13206C15.2606 7.29826 15.4192 7.41346 15.6026 7.44012L21.5818 8.30895C22.0437 8.37607 22.2282 8.94369 21.8939 9.26948L17.5673 13.4869C17.4346 13.6163 17.374 13.8027 17.4053 13.9854L18.4267 19.9404C18.5056 20.4005 18.0228 20.7513 17.6096 20.5341L12.2616 17.7225C12.0976 17.6362 11.9016 17.6362 11.7375 17.7225L6.38953 20.5341C5.9764 20.7513 5.49355 20.4005 5.57245 19.9404L6.59383 13.9854C6.62516 13.8027 6.5646 13.6163 6.43187 13.4869L2.10525 9.26948C1.77102 8.94369 1.95545 8.37607 2.41734 8.30895L8.3966 7.44012C8.58001 7.41346 8.73857 7.29826 8.8206 7.13206L11.4946 1.71393Z"
                        stroke="#ADADAD"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            <span className="text-xl font-bold">{"BestDay"}</span>
        </div>

        <div className="flex flex-col gap-3">
            <div className="text-[#ADADAD]">
                <p className="text-sm space-x-3">
                    <span className="text-white font-semibold">DATE</span>:
                    <span className="uppercase">
                        {`${bestDay.date.getDate()}-${bestDay.date.getDayString()} / ${bestDay.date.getMonthString()} / ${bestDay.date.getFullYear()}`}
                    </span>
                </p>
            </div>

            <div className=" text-[#ADADAD] grid grid-cols-3 gap-4">
                <div className="text-sm flex flex-col gap-1">
                    <div className="text-white font-semibold whitespace-nowrap uppercase">
                        {`Gross ${bestDay.profit >= 0 ? 'Profit' : 'loss'}`}
                    </div>
                    <div>
                        {`$${Intl.NumberFormat().format(Math.abs(bestDay.profit))}`}
                    </div>
                    <div className="text-green-500">
                        {`(${bestDay.profit >= 0 ? '+' : '-'}${Intl.NumberFormat().format(Math.abs(bestDay.profit) / bestDay.cap)})`}
                    </div>
                </div>
                <div className="text-sm flex flex-col gap-1">
                    <div className="text-white font-semibold">NET CAP</div>
                    <span>$52.3</span>
                </div>
                <div className="text-sm flex flex-col gap-1">
                    <span className="text-white font-semibold">TRADE VOL</span>
                    <span>$2,362.65</span>
                </div>
            </div>

            <div className="space-y-2 text-[#ADADAD] flex flex-col gap-x-1">
                <div className="text-sm flex flex-row gap-3">
                    <h1 className="text-white font-semibold">STAR TOKEN</h1>
                    <span>$BONK</span>
                </div>
                <div className="flex flex-row">
                    <div className="text-sm flex flex-col ">
                        <h1 className="text-white font-semibold">PROFIT</h1>
                        <span>$1,996.43</span>
                        <span className="text-green-500">(+16,536.92%)</span>
                    </div>

                    <p className="text-sm flex flex-col w-2/6">
                        <span className="text-white font-semibold">INITIAL CAP</span>
                        <span>$12</span>
                    </p>

                    <p className="text-xs flex flex-col w-2/6">
                        <span className="text-white font-semibold">PROFIT %</span>
                        <span>99.56%</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}