require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts: [process.env.ACCOUNT],
    },
  },
}

// https://speedy-nodes-nyc.moralis.io/2c01be313292f180378552283/eth/rinkeby
