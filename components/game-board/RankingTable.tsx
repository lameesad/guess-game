import { Trophy } from 'lucide-react';
import { FC } from 'react';

interface RankingInfo {
  position: number;
  name: string;
  score: number | string;
}

interface RankingTableProps {
  rankings: RankingInfo[];
}

const RankingTable: FC<RankingTableProps> = ({ rankings }) => {
  return (
    <div className="bg-gray-80 p-4 rounded-lg w-[70%]">
      <div className="text-white text-lg mb-2 flex items-center">
        {/* Assuming you have a trophy icon from `lucide-react` or similar */}
        <Trophy className="text-red-500 mr-2" />
        <span>Ranking</span>
      </div>
      <table className="w-full text-white">
        <thead>
          <tr className="text-left">
            <th>No.</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((ranking) => (
            <tr key={ranking.position} className="border-b border-gray-700">
              <td className="py-2">{ranking.position}</td>
              <td>{ranking.name}</td>
              <td>{ranking.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
