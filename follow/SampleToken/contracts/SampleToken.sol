// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {

    constructor(string memory _name, string memory _symbol, uint _initialSupply) ERC20(_name, _symbol) {
        require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than 0");
        _mint(msg.sender, _initialSupply);
    }
}