import { FiInfo } from "react-icons/fi";

const Scores = ({ title }) => {
  return (
    <div className="w-full bg-white rounded-lg p-4 mt-8">
      <div className="flex items-center justify-around">
        <div className="text-gray-400 flex flex-col w-full border-r items-center">
          <p className="flex gap-2 items-center">
            TVL
            <FiInfo />
          </p>
          <p className="mt-3 text-gray-900 font-bold">$375,021.90</p>
        </div>
        <div className="text-gray-400 flex flex-col  w-full border-r items-center">
          <p className="flex gap-2 items-center">
            APY
            <FiInfo />
          </p>
          <p className="mt-3 text-gray-900 font-bold">24.3 %</p>
        </div>
        <div className="text-gray-400 flex flex-col  w-full items-center">
          <p className="flex gap-2 items-center">
            Network
            <FiInfo />
          </p>
          <div className="flex items-center gap-1 mt-3">
            <p className=" text-gray-900 font-bold">Ethereum</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
