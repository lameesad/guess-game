import { FC, useState } from 'react';

interface SpeedControlProps {
  speeds: number[];
  onSpeedChange: (speed: number) => void;
}

const SpeedControl: FC<SpeedControlProps> = ({ speeds, onSpeedChange }) => {
  const [selectedSpeed, setSelectedSpeed] = useState(speeds[0]);

  const handleSpeedClick = (speed: number) => {
    setSelectedSpeed(speed);
    onSpeedChange(speed);
  };

  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-2 rounded-lg">
      <div className="rounded-full bg-red-500 w-6 h-6 flex items-center justify-center text-white">
        {/* Simple circle as a slider handle */}
      </div>
      <div className="flex-1 grid grid-cols-5 gap-1">
        {speeds.map((speed) => (
          <button
            key={speed}
            onClick={() => handleSpeedClick(speed)}
            className={`text-white text-sm font-medium px-2 py-1 rounded transition duration-150 ease-in-out ${
              selectedSpeed === speed
                ? 'bg-red-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedControl;
