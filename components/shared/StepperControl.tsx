import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface StepperControlProps {
  name: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (name: string, newValue: number) => void;
}

const StepperControl: FC<StepperControlProps> = ({
  name,
  value,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
}) => {
  const increment = () => {
    if (value < max) {
      onChange(name, value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(name, value - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-80 px-4 py-2 rounded-md">
      <div className="text-white text-sm font-medium mb-2">{name}</div>
      <div className="flex items-center gap-2 justify-center">
        <Button
          onClick={decrement}
          variant="outline"
          aria-label={`Decrease ${name}`}
          className="h-8 p-2 w-8 bg-gray-80  border-2 border-gray-50"
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </Button>
        <div className="text-white text-lg font-medium w-16 rounded-lg items-center justify-center px-4 flex h-8 bg-black">
          {value}
        </div>
        <Button
          onClick={increment}
          variant="outline"
          aria-label={`Increase ${name}`}
          className=" h-8 p-2 w-8 bg-gray-80  border-2 border-gray-50"
        >
          <ChevronUp className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default StepperControl;
