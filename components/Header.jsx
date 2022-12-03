import Image from "next/image";

const Header = ({ title, imageSrc }) => {
  return (
    <div className="flex gap-4 mt-6">
      <div>
        <Image src={imageSrc} className="w-[60px]" alt="Image" />
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <h3 className="text-[24px]">{title}</h3>
          <p className="bg-white w-fit px-2 py-1 text-sm rounded-lg shadow-sm">
            🔒 Safe & Secured
          </p>
        </div>
        <p className="mt-2 text-gray-700">
         Stake Ethereum & Get Rewarded For Staking
        </p>
      </div>
    </div>
  );
};

export default Header;
