import { Button } from '../ui/button';

export default function Welcome() {
  return (
    <div className="bg-gray-80 rounded-lg pt-12 px-5 pb-32 flex flex-col gap-2 justify-center items-center border-2 border-gray-50 w-1/2 ">
      <h1 className="text-gray-50 text-4xl font-bold mb-12">Welcome</h1>
      <p className="capitalize text-sm text-gray-50 pb-2">
        please Insert your name
      </p>
      <input
        type="text"
        className="bg-gray-90 w-full border-2 border-gray-50 rounded-lg h-12"
      />
      <Button variant={'default'} className="bg-gray-50 w-full h-12 rounded-lg">
        Accept
      </Button>
    </div>
  );
}
