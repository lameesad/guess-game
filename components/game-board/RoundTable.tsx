import { Bomb } from 'lucide-react';
import { FC } from 'react';

interface PlayerInfo {
  name: string;
  points: number | string; // Can be a number or "-" as per the image
  multiplier: number | string; // Can be a number or "-" as per the image
}

interface RoundTableProps {
  players: PlayerInfo[];
}

const RoundTable: FC<RoundTableProps> = ({ players }) => {
  return (
    <div className="bg-gray-80 p-4 rounded-lg">
      <div className="text-white text-lg mb-2 flex justify-between items-center">
        <span>Current Round</span>
        {/* Assuming you have a bomb icon from `lucide-react` or similar */}
        <Bomb className="text-red-500" />
      </div>
      <table className="w-full text-white">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Point</th>
            <th>Multiplier</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name} className="border-b border-gray-700">
              <td className="py-2">{player.name}</td>
              <td>{player.points}</td>
              <td>{player.multiplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundTable;
