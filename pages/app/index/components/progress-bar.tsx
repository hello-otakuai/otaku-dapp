import type React from "react";

interface CircularProgressBarProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  size = 150,
  strokeWidth = 10,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressOffset = (value / 100) * circumference;
  const remainingOffset = circumference - progressOffset;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full transform rotate-90">
        <circle
          className="text-[#636363]"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-[#F0272D]"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={remainingOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-3xl font-bold text-white"
          aria-live="polite"
          aria-atomic="true"
        >
          {value}%
        </span>
        <span className="text-sm font-medium text-gray-600">win rate</span>
      </div>
    </div>
  );
};
