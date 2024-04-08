'use client';

import { FC } from 'react';

import { User, Clock, Award } from 'lucide-react';
import InfoDisplay from '../shared/InfoDisplay';

const PointsDisplay: FC = () => {
  const pointsIcon = <Award className="text-purple-500" />; // Use your desired color class
  const userIcon = <User className="text-orange-500" />;
  const clockIcon = <Clock className="text-yellow-500" />;

  const currentDateTime = new Date().toLocaleTimeString(); // This will give you the current time

  return (
    <div className="flex space-x-4 w-[70%]">
      {/* Points Display */}
      <InfoDisplay icon={pointsIcon} label="Points" value="1,000" />

      {/* Name Display */}
      <InfoDisplay icon={userIcon} label="Username" value="Thomas" />

      {/* Time Display */}
      <InfoDisplay
        icon={clockIcon}
        label="Current Time"
        value={currentDateTime}
      />
    </div>
  );
};

export default PointsDisplay;
