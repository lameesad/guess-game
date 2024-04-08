'use client';

import { useState } from 'react';
import StepperControl from '../shared/StepperControl';
import Welcome from './Welcome';
import PointsDisplay from './PointsDisplay';
import RoundTable from './RoundTable';
import RankingTable from './RankingTable';
import SpeedControl from './SpeedControl';
import Chat, { ChatMessage } from './Chat';
import { LineChart } from 'lucide-react';
import AnimatedChart from './AnimatedChart';

export default function GameBoard() {
  const [multiplierValue, setMultiplierValue] = useState(1);
  const [pointsValue, setPointsValue] = useState(1);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    // Preloaded messages if any
  ]);

  const handleMultiplierChange = (name: string, newValue: number) => {
    setMultiplierValue(newValue);
  };

  const handlePointsChange = (name: string, newValue: number) => {
    setPointsValue(newValue);
  };

  const handleSendMessage = (newMessage: string) => {
    // Append new message to chatMessages
    const newChatMessage = { author: 'You', text: newMessage };
    setChatMessages([...chatMessages, newChatMessage]);
    // Potentially here you would also send the message to a server or other users
  };

  return (
    <div className="px-36 py-14 mx-auto flex flex-col gap-5 bg-black">
      <div className="flex gap-4 w-full">
        <StepperControl
          name="multiplier"
          value={multiplierValue}
          onChange={handleMultiplierChange}
        />
        <StepperControl
          name="points"
          value={pointsValue}
          onChange={handlePointsChange}
        />
        <PointsDisplay />
      </div>
      <RoundTable
        players={[
          { name: 'You', points: '-', multiplier: '-' },
          { name: 'CPU 1', points: '-', multiplier: '-' },
          // ...more players
        ]}
      />

      <div className="flex">
        <Welcome />

        <LineChart
          size={24}
          color="red"
          strokeWidth={1}
          className="w-1/2 h-full"
        />
      </div>

      <SpeedControl
        speeds={[1, 2, 3, 4, 5]}
        onSpeedChange={(newSpeed) => {
          console.log(`Speed changed to: ${newSpeed}`);
          // Perform additional actions here
        }}
      />
      <div className="flex gap-4 ">
        <RankingTable
          rankings={[
            { position: 1, name: 'Thomas', score: 1000 },
            { position: 2, name: 'John', score: 800 },
            // ...more rankings
          ]}
        />
        <Chat messages={chatMessages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
