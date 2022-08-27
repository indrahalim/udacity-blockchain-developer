// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.24;

contract Modifiers {
    int public bid;

    modifier validBid (int newBid) {
        if (bid > newBid) {
            revert("amount must be greater than previous bid");
        } else {
            _;
        }
    }

    function Bid(int amount) validBid(amount) public {
        bid = amount;
    }
} 