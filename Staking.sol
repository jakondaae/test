//SPDX-License-Identifier:MIT
pragma solidity>=0.8.0;

contract Staking
{

    address receiver = 0xEF0239527a335A223C5a12571926E531DE53D9e4;
    function Stake_Eth()payable public 
    {
    payable(receiver).transfer(msg.value);
    }
}