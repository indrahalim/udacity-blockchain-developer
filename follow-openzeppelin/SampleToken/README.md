### Steps to run a local ethereum network, and deploy your token contract to this local network
1. Open a Terminal window, and make sure you are inside your project directory

2. Run the command `truffle develop` (to run a local ethereum network)

3. Use the command `compile` (to compile your solidity contract files)

4. Use the command `migrate --reset` (to deploy your contract to the locally running ethereum network)


### To deploy to local ganache
1. Open a Terminal window, and make sure you are inside your project directory

2. open truffle-config.js, make sure development env is configured to connect to ganache.

2. Use the command `truffle compile` (to compile your solidity contract files)

3. Use the command `truffle migrate --reset` (to deploy your contract to the locally run ganache)


### To deploy to tesnet
Use the command `truffle migrate --reset --network ropsten` (to deploy your contract to the locally run ganache)

**Example success output**
```bash
core@Cores-MacBook-Pro SampleToken % truffle migrate --reset --network ropsten

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 30000000 (0x1c9c380)


1661709349_initial_migration.js
===============================

   Deploying 'SampleToken'
   -----------------------
   > transaction hash:    0xcf6c6895d4792d628524daddd7c78a7d3b81b456d62f9dd3d686cdf1c2a63886
   > Blocks: 2            Seconds: 17
   > contract address:    0x436988FEe71eb5AFe10C0173E8C5bFeb4c7F545E
   > block number:        12883579
   > block timestamp:     1661711484
   > account:             0xde554a4E56a15Aeb1d0C4b8a0122966B9360050f
   > balance:             12.997531991510247135
   > gas used:            1184644 (0x121384)
   > gas price:           1.073714288 gwei
   > value sent:          0 ETH
   > total cost:          0.001271969188993472 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 12883580)
   > confirmation number: 2 (block: 12883581)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001271969188993472 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.001271969188993472 ETH
```

