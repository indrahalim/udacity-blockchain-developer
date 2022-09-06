var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545');

web3.eth.getTransactionCount('0xf78D5b3216B19C3EEc66491634fF353B573Bb9c8').then(console.log);