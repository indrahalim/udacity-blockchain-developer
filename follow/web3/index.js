var url = 'http://127.0.0.1:7545';
var Web3 = require('web3');

var web3 = new Web3(url);

web3.eth.getAccounts().then(accounts => console.log(accounts));