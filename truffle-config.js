const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic_rinkeby = fs.existsSync('.secret_rinkeby')
    ? fs.readFileSync('.secret_rinkeby').toString().trim()
    : null;
const mnemonic_ethereum = fs.existsSync('.secret_ethereum')
    ? fs.readFileSync('.secret_ethereum').toString().trim()
    : null;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '1617751988621',
      gas: 10000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic_rinkeby, `https://rinkeby.infura.io/v3/782829b3c36a470fac8ad2da2286d41f`
      ),
      network_id: 4,
      gas: 5500000,
      timeoutBlocks: 200,
      skipDryRun: true    // Skip dry run before migrations? (default: false for public nets )
    },
    ethereum: {
      provider: () => new HDWalletProvider(
        mnemonic_ethereum, `https://mainnet.infura.io/v3/782829b3c36a470fac8ad2da2286d41f`
      ),
      network_id: 1,
      gas: 2500000,
      gasPrice: 6000000000
    }
  },
  compilers: {
    solc: {
      version: '0.5.16',
      optimizer: {
          enabled: true,
          runs: 200,
      }
    }
  }
};
