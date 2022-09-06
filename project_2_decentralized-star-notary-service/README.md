# Udacity Star Notary Token Project
---

###  Requirements
| Dependency      | Version |
| --------------- | ------- |
| Truffle Version | v5.5.28 |
| Open Zeppelin   | 2.5.1   |

---

### Contract / Token Info

Contract Address: https://rinkeby.etherscan.io/address/0x9d7db2c58c0c874ac9d411705d8596a355c55d3c
Token Name: Udacity Star Token
Token Symbol: UDCS
Sample Token: https://rinkeby.etherscan.io/token/0x9d7db2c58c0c874ac9d411705d8596a355c55d3c

---

### Log
#### Test Run
```bash
truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  ✔ can Create a Star (48ms)
  ✔ lets user1 put up their star for sale (59ms)
  ✔ lets user1 get the funds after the sale (101ms)
  ✔ lets user2 buy a star, if it is put up for sale (97ms)
  ✔ lets user2 buy a star and decreases its balance in ether (89ms)
  ✔ can add the star name and star symbol properly (47ms)
  ✔ lets 2 users exchange stars (136ms)
  ✔ lets a user transfer a star (190ms)
  ✔ lookUptokenIdToStarInfo test (45ms)

  9 passing (814ms)
```

#### Deployment

Deployment log to rinkeby network
```bash
truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        11335074
   > block timestamp:     1662498325
   > account:             0xde554a4E56a15Aeb1d0C4b8a0122966B9360050f
   > balance:             0.09834525
   > gas used:            165475 (0x28663)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00165475 ETH

   -------------------------------------
   > Total cost:          0.00165475 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > block number:        11335076
   > block timestamp:     1662498335
   > account:             0xde554a4E56a15Aeb1d0C4b8a0122966B9360050f
   > balance:             0.06771577
   > gas used:            3017207 (0x2e09f7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03017207 ETH

   -------------------------------------
   > Total cost:          0.03017207 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.03182682 ETH




Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x1f1c1197eb93e5f546a9ae33ecc29bd0bed5e88e496bb92a9dec805e851b4110
   > Blocks: 1            Seconds: 9
   > contract address:    0x9aef6b9f000c1A19fD7F321042D9C8c01247fA7E
   > block number:        11335080
   > block timestamp:     1662498354
   > account:             0xde554a4E56a15Aeb1d0C4b8a0122966B9360050f
   > balance:             0.09834525
   > gas used:            165475 (0x28663)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00165475 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00165475 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0x37acc81822d7dcc002e1d12708b830dc9fbc56d0e6310287220917a047ee43e7
   > Blocks: 1            Seconds: 5
   > contract address:    0x9D7db2c58c0C874ac9d411705D8596a355c55d3c
   > block number:        11335082
   > block timestamp:     1662498385
   > account:             0xde554a4E56a15Aeb1d0C4b8a0122966B9360050f
   > balance:             0.06771577
   > gas used:            3017207 (0x2e09f7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03017207 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03017207 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.03182682 ETH


```
