/*##########################
CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration
var Web3 = require("web3");
var EthereumTransaction = require("ethereumjs-tx");
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = '0xebDF55adc388eF43722061033122701693844d74';
var receivingAddress = '0x58B5Fb28D3F0d476AcBF4cb185309d1Ee0D76485';

// -- Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*##########################
CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
  nonce: 0,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 1,
  data: ""
};

// // -- Step 5: View the raw transaction
rawTransaction;

// // -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// // Note: They haven't changed because they need to be signed...

// /*##########################
// Sign the Transaction
// ##########################*/

// // -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'ccec139b27c2de317c7d6deed1ca1ec187387b913537874168eb867e16ff5123';
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex)

// /*#########################################
// Send the transaction to the network
// #########################################*/

// // -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);