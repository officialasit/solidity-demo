// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;
    address[] public arr; 
    bool flag;


    function wave () public {
        console.log('%s has waived!', msg.sender);

        // Check if caller has already waived
        for(uint i = 0; i < arr.length; i++)
        {
            if(arr[i] == msg.sender){
                console.log("This address already exists");
                flag = true;
                break;
            }
        
        }

        // If Not Already waived: Push into Array
        if(!flag) {
            arr.push(msg.sender);
            totalWaves = totalWaves + 1;
        }
        
    
    }

    function getTotalWaves() public view returns (uint256) {
        console.log('We have %d total waves!', totalWaves);
        //console.log('We have total  %d waives', arr.length);
        return totalWaves;
    }

    function getAllWaivers() public {
        for(uint i = 0; i < arr.length; i++)
        {
            console.log('Address # %d : %s', i, arr[i]);
        }
    }
}