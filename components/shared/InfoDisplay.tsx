'use client';
import { FC, ReactNode } from 'react';

interface InfoDisplayProps {
  icon: ReactNode;
  label: string;
  value: string;
  backgroundClass?: string;
  textColorClass?: string;
}

const InfoDisplay: FC<InfoDisplayProps> = ({
  icon,
  label,
  value,
  backgroundClass = 'bg-gray-80', // Replace with your actual Tailwind CSS class for the dark background
  textColorClass = 'text-white', // Replace with your actual Tailwind CSS class for the text color
}) => {
  return (
    <div
      className={`flex items-center ${backgroundClass} px-4 py-2 rounded-md w-full`}
    >
      <span className={`mr-2 ${textColorClass}`}>{icon}</span>
      <div className="flex flex-col">
        {/* <span className={`text-xs ${textColorClass}`}>{label}</span> */}
        <span
          className={`text-lg font-medium ${textColorClass}`}
          suppressHydrationWarning
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default InfoDisplay;
