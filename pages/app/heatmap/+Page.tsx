import WeeksGrid from "./components/WeeksGrid";
import BestDay from "./components/BestDay";

export default function HeatmapComponent() {
  return (
    <div className="flex flex-col text-white gap-4">
      <div className="space-y-3">
        <p className="font-[Orbitron] font-bold text-xl md:text-2xl">Heatmap</p>
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <p className="text-[#ADADAD] text-sm">Live wallet</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#1A1A1A] rounded-2xl p-4 md:p-8 gap-8">
        <div>
          <div className="flex flex-row gap-x-1 py-2 md:py-5">
            <svg
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1"
            >
              <path
                d="M10.9296 5.99996C10.9296 8.36926 9.00891 10.29 6.63961 10.29V11.79C9.83734 11.79 12.4296 9.19769 12.4296 5.99996H10.9296ZM6.63961 10.29C4.27031 10.29 2.34961 8.36926 2.34961 5.99996H0.849609C0.849609 9.19769 3.44188 11.79 6.63961 11.79V10.29ZM2.34961 5.99996C2.34961 3.63066 4.27031 1.70996 6.63961 1.70996V0.209961C3.44188 0.209961 0.849609 2.80223 0.849609 5.99996H2.34961ZM6.63961 1.70996C9.00891 1.70996 10.9296 3.63066 10.9296 5.99996H12.4296C12.4296 2.80223 9.83734 0.209961 6.63961 0.209961V1.70996ZM12.2831 5.29551C13.026 4.01127 14.4127 3.14996 15.9996 3.14996V1.64996C13.8556 1.64996 11.9847 2.81574 10.9847 4.54442L12.2831 5.29551ZM15.9996 3.14996C17.5866 3.14996 18.9733 4.01127 19.7162 5.29551L21.0146 4.54442C20.0146 2.81574 18.1437 1.64996 15.9996 1.64996V3.14996ZM29.6496 5.99996C29.6496 8.36926 27.7289 10.29 25.3596 10.29V11.79C28.5573 11.79 31.1496 9.19769 31.1496 5.99996H29.6496ZM25.3596 10.29C22.9903 10.29 21.0696 8.36926 21.0696 5.99996H19.5696C19.5696 9.19769 22.1619 11.79 25.3596 11.79V10.29ZM21.0696 5.99996C21.0696 3.63066 22.9903 1.70996 25.3596 1.70996V0.209961C22.1619 0.209961 19.5696 2.80223 19.5696 5.99996H21.0696ZM25.3596 1.70996C27.7289 1.70996 29.6496 3.63066 29.6496 5.99996H31.1496C31.1496 2.80223 28.5573 0.209961 25.3596 0.209961V1.70996Z"
                fill="#ADADAD"
              />
            </svg>

            <p className="text-center text-sm text-white font-semibold">
              see your trading frequency for the past 52 weeks (1 year)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <WeeksGrid />
          <BestDay />
        </div>
      </div>
    </div>
  );
}
