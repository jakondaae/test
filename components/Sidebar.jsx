import Image from "next/image";
import Logo from "../assets/logo.webp";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";

import { useContext } from "react";
import Change from "../Context";

const Sidebar = () => {
  const { setSidebarc, sidebarc } = useContext(Change);

  const handleChanges = (id) => {
    setSidebarc(id);
  };
  return (
    <div className="w-[300px] min-h-screen p-4 flex flex-col justify-between bg-white">
      <div>
        <div className="flex gap-1 items-center">
          <Image
            src={Logo}
            className="w-[30px] h-[30px]"
            width="30px"
            height="30px"
            alt="Image"
          />
          <h3 className="text-xl">ETHERVOX</h3>
        </div>
        <div className="pt-10">
          <p className="pb-4">🟡 Liquid Staking</p>
          <ul className="p-6">
            <li
              onClick={() => handleChanges(1)}
              className={`pb-3 font-semibold text-gray-400 ${
                sidebarc === 1 && "active"
              }`}
            >
              <p>Ethereum</p>
            </li>
            <li
              onClick={() => handleChanges(2)}
              className={`pb-3 font-semibold text-gray-400 ${
                sidebarc === 2 && "active"
              }`}
            >
              <p>USDT</p>
            </li>
            <li
              onClick={() => handleChanges(3)}
              className={`pb-3 font-semibold text-gray-400 ${
                sidebarc === 3 && "active"
              }`}
            >
              <p>BNB</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-gray-500 mb-2">Join our Community</p>
        <div className="text-gray-400  flex gap-4 text-lg">
          <Link href="#" className="hover:text-gray-700">
            <BsTwitter />
          </Link>
          <Link href="#" className="hover:text-gray-700">
            <FaDiscord />
          </Link>
        </div>
        <br />
        <div className="w-full bg-gray-500 h-[1px]"></div>
        <br />
        <Link
          href="#"
          className="text-gray-400 flex items-center gap-2 mt-2 hover:text-gray-900"
        >
          <RiQuestionnaireFill /> <span>FAQs</span>
        </Link>
        <Link
          href="#"
          className="text-gray-400 flex items-center gap-2 mt-2 hover:text-gray-900"
        >
          <FaQuestionCircle /> <span>Support</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
