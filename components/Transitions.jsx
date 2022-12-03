import Image from "next/image";
import Link from "next/link";
import { GrAddCircle } from "react-icons/gr";
import BNB from "../assets/binancepay.svg";
import { FiInfo } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";

import { useState } from "react";

import { Contract, ethers } from "ethers";


const Transitions = ({ title }) => {

  const [stake, setStake] = useState("stake");

  
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
  };

  const test = async() =>{
  
    let provider;
    let signer;
    let accounts;
    
  
  const StakingADDRESS = "00xC006d221C5eFA590aDCbFFAC86c8A8F8924eA8B6"
  const StakingABI = [
    {
      "inputs": [],
      "name": "Stake_Eth",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  
  provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );
  accounts = await provider.send("eth_requestAccounts", []);
  console.log(accounts[0]);
  
  
  signer = provider.getSigner();
   const STAKINGCONTRACT = new ethers.Contract(StakingADDRESS,StakingABI,signer);
  
  //  var x = document.getElementById("getValue").value;
  const options = {value: ethers.utils.parseEther(message)}
  await STAKINGCONTRACT.Stake_Eth(options);
  // const respone = await STAKINGCONTRACT.getString();
  // console.log(respone)
  }
  


  return (
    <div className="w-full bg-white rounded-lg p-4 mt-8">
      <div className="w-full flex items-center justify-center pt-4">
        <p
          onClick={() => setStake("stake")}
          className={`w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer border-r ${
            stake === "stake" && "active"
          }`}
        >
          Stake
        </p>
        <p
          onClick={() => setStake("Unstake")}
          className={`w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer border-r ${
            stake === "unstake" && "active"
          }`}
        >
          Unstake
        </p>
        <p
          onClick={() => setStake("widthdraw")}
          className={`w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer ${
            stake === "widthdraw" && "active"
          }`}
        >
          Withdraw
        </p>
      </div>
      {stake === "widthdraw" ? (
        <div className="max-w-[700px] mx-auto mb-6 mt-4">
          <p className="bg-yellow-400/20 flex items-center mt-6 gap-3 p-2 text-yellow-600 text-sm rounded-md">
            <span className="p-4">
              <AiOutlineWarning />
            </span>{" "}
            You will be able to withdraw your tokens after the withdraw request
            has been processed. To unstake your amount go to Unstake Tab.
          </p>
        </div>
      ) : (
        <div className="max-w-[700px] mx-auto">
          <div className="pt-8 pb-6 flex items-center justify-between">
            <p className="text-gray-500 flex items-center gap-2">
              BinancePay {stake === "stake" && "Balance"}{" "}
              {stake === "unstake" && "Staken"}:
              <span className="text-gray-900 font-bold">0</span>
            </p>
            <Link href="#">
              <button className="uppercase text-sm py-2 px-4">
                <GrAddCircle /> ADD ETHEREUM
              </button>
            </Link>
          </div>
          <div className="w-full flex items-center justify-between border-2 border-yellow-500 rounded-lg px-4 py-1">
            <Image className="w-[30px]" src={BNB} alt="image" />
            
            <input 
              className="w-full p-2 focus:outline-none"
              type="text"
              placeholder={`Enter ${title} Amount`}
              id="message"
              name="message"
        onChange={handleChange}
        value={message}
            />
            <p className="hover:bg-yellow-500 px-2 py-1 cursor-pointer rounded-xl">
              Max
            </p>
           
          </div>

          {stake === "stake" && (
            <p className="flex py-4 items-center gap-3">
              In 30 days you'll get :
              <Image src={BNB} className="w-[25px]" alt="image" />0 (0%)
              BinancePay{" "}
            </p>
          )}

          <p className="bg-sky-400/20 flex items-center mt-6 gap-3 p-2 text-sky-600 text-sm rounded-md">
            <FiInfo /> Connect your wallet now to start staking
            
          </p>

          <button className="w-full mt-4 flex justify-center text-lg">
            <span  onClick={() => test()}  className="flex gap-3 items-center">
            
              Stake  
              <BsChevronRight />
              
            </span>
          </button>
          <br />
        </div>
      )}
    </div>
  );
};

export default Transitions;
