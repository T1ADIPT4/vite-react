import { networks } from './configs/networks'

export const networks = {
  ethereum: { rpc: "...", contract: "...", quests: [...] },
  polygon: { rpc: "...", contract: "...", quests: [...] },
  arbitrum: { rpc: "...", contract: "...", quests: [...] },
};

export const networks = {
  ethereum: {
    chainId: 1,
    rpcUrl: "https://mainnet.infura.io/v3/...",
    quests: ["connect-wallet", "sign-message", "mint-nft"],
  },
  polygon: {
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com",
    quests: ["connect-wallet", "bridge-assets", "stake-token"],
  },
  arbitrum: {
    chainId: 42161,
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    quests: ["connect-wallet", "verify-contract", "claim-reward"],
  },
};
