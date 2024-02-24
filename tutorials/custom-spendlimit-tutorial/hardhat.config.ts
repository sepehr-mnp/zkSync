// import { HardhatUserConfig } from "hardhat/config";

// import "@matterlabs/hardhat-zksync-node";
// import "@matterlabs/hardhat-zksync-deploy";
// import "@matterlabs/hardhat-zksync-solc";
// import "@matterlabs/hardhat-zksync-verify";

// const config: HardhatUserConfig = {
//   defaultNetwork: "zkSyncTestnet",
//   networks: {
//     zkSyncTestnet: {
//       url: "https://sepolia.era.zksync.dev",
//       ethNetwork: "sepolia", // Can also be the RPC URL of the network (e.g. `https://sepolia.infura.io/v3/<API_KEY>`)
//       zksync: true,
//     },
//     zkSyncSepoliaTestnet: {
//       url: "https://sepolia.era.zksync.dev",
//       ethNetwork: "sepolia",
//       zksync: true,
//       verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
//     },
//     zkSyncMainnet: {
//       url: "https://mainnet.era.zksync.io",
//       ethNetwork: "mainnet",
//       zksync: true,
//       verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
//     },
//     zkSyncGoerliTestnet: { // deprecated network
//       url: "https://testnet.era.zksync.dev",
//       ethNetwork: "goerli",
//       zksync: true,
//       verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
//     },
//     dockerizedNode: {
//       url: "http://localhost:3050",
//       ethNetwork: "http://localhost:8545",
//       zksync: true,
//     },
//     inMemoryNode: {
//       url: "http://127.0.0.1:8011",
//       ethNetwork: "localhost", // in-memory node doesn't support eth node; removing this line will cause an error
//       zksync: true,
//     },
//     hardhat: {
//       zksync: true,
//     },
//   },
//   zksolc: {
//     version: "1.3.23",
//     settings: {
//       // find all available options in the official documentation
//       // https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-solc.html#configuration
//     },
//   },
//   solidity: {
//     version: "0.8.20",
//   },
// };

// export default config;
import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

import "@matterlabs/hardhat-zksync-verify";

const config: HardhatUserConfig = {
  zksolc: {
    version: "latest", // Uses latest available in https://github.com/matter-labs/zksolc-bin/
    settings: {
      isSystem: true, // make sure to include this line
    },
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    zkSyncTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia", // Can also be the RPC URL of the network (e.g. `https://sepolia.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.20",
  },
};

export default config;
