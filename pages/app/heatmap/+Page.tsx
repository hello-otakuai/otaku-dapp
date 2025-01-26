import React from "react";
import WeeksGrid from './visual';
export default function HeatmapComponent() {
  return (
    <div className="flex flex-col  text-white p-4">
      {/* Header Section */}
      <div className="p-6">
        <div>
          <p className="font-[Orbitron] font-bold text-2xl pb-2">Heatmap</p>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <p className="text-[#ADADAD] text-sm">Live wallet</p>
          </div>
        </div>
      </div>

      {/*heatmap frequency*/}
      <div className="flex flex-row bg-[#1A1A1A]  rounded-2xl p-10 ">
      <div>
      <div className="flex flex-row gap-x-1">
      <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
      <path d="M10.9296 5.99996C10.9296 8.36926 9.00891 10.29 6.63961 10.29V11.79C9.83734 11.79 12.4296 9.19769 12.4296 5.99996H10.9296ZM6.63961 10.29C4.27031 10.29 2.34961 8.36926 2.34961 5.99996H0.849609C0.849609 9.19769 3.44188 11.79 6.63961 11.79V10.29ZM2.34961 5.99996C2.34961 3.63066 4.27031 1.70996 6.63961 1.70996V0.209961C3.44188 0.209961 0.849609 2.80223 0.849609 5.99996H2.34961ZM6.63961 1.70996C9.00891 1.70996 10.9296 3.63066 10.9296 5.99996H12.4296C12.4296 2.80223 9.83734 0.209961 6.63961 0.209961V1.70996ZM12.2831 5.29551C13.026 4.01127 14.4127 3.14996 15.9996 3.14996V1.64996C13.8556 1.64996 11.9847 2.81574 10.9847 4.54442L12.2831 5.29551ZM15.9996 3.14996C17.5866 3.14996 18.9733 4.01127 19.7162 5.29551L21.0146 4.54442C20.0146 2.81574 18.1437 1.64996 15.9996 1.64996V3.14996ZM29.6496 5.99996C29.6496 8.36926 27.7289 10.29 25.3596 10.29V11.79C28.5573 11.79 31.1496 9.19769 31.1496 5.99996H29.6496ZM25.3596 10.29C22.9903 10.29 21.0696 8.36926 21.0696 5.99996H19.5696C19.5696 9.19769 22.1619 11.79 25.3596 11.79V10.29ZM21.0696 5.99996C21.0696 3.63066 22.9903 1.70996 25.3596 1.70996V0.209961C22.1619 0.209961 19.5696 2.80223 19.5696 5.99996H21.0696ZM25.3596 1.70996C27.7289 1.70996 29.6496 3.63066 29.6496 5.99996H31.1496C31.1496 2.80223 28.5573 0.209961 25.3596 0.209961V1.70996Z" fill="#ADADAD"/>
      </svg>

        <p className="text-center text-sm text-white font-semibold">
          see your trading frequency for the past 52 weeks (1 year)
        </p>
      </div>
      <div>
        <WeeksGrid/>
        </div>
        </div>

      
      

      
    <div className="bg-[#1E1E1E] justify-between w-96 rounded-2xl p-10 h-auto flex flex-col gap-4 text-white">
      {/* Header Section */}
      <div className="flex items-center gap-2 pb-32">
        <span>
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4946 1.71393C11.7012 1.29539 12.298 1.29539 12.5046 1.71393L15.1786 7.13206C15.2606 7.29826 15.4192 7.41346 15.6026 7.44012L21.5818 8.30895C22.0437 8.37607 22.2282 8.94369 21.8939 9.26948L17.5673 13.4869C17.4346 13.6163 17.374 13.8027 17.4053 13.9854L18.4267 19.9404C18.5056 20.4005 18.0228 20.7513 17.6096 20.5341L12.2616 17.7225C12.0976 17.6362 11.9016 17.6362 11.7375 17.7225L6.38953 20.5341C5.9764 20.7513 5.49355 20.4005 5.57245 19.9404L6.59383 13.9854C6.62516 13.8027 6.5646 13.6163 6.43187 13.4869L2.10525 9.26948C1.77102 8.94369 1.95545 8.37607 2.41734 8.30895L8.3966 7.44012C8.58001 7.41346 8.73857 7.29826 8.8206 7.13206L11.4946 1.71393Z" stroke="#ADADAD" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
          </span>
        <span className="text-xl font-bold">BestDay</span>
        </div>

     
      <div className="text-[#ADADAD]">
        <p className="text-sm">
          <span className="text-white font-semibold">DATE</span>: 20-TUE/FEB/2024
        </p>
      </div>

    
      <div className=" text-[#ADADAD] flex flex-row gap-x-1">
        <div className="text-sm flex flex-col w-3/6">
          <h1 className="text-white font-semibold">GROSS PROFIT</h1> $2,045.52
          <span className="text-green-500">(+3,811.13%)</span>
        </div>
        <div className="text-sm flex flex-col w-2/6">
          <div className="text-white font-semibold">NET CAP</div>
          <span>$52.3</span>
        </div>
        <div className="text-sm flex flex-col w-2/6">
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
        </div>
  );
}
