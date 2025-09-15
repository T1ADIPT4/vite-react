import meechainConfig from './meechain.json'

type MeechainConfig = {
  network: string
  chainId: number
  rpcUrl: string
  explorerUrl: string
  contract: {
    name: string
    address: string
    abiPath: string
  }
}

export const getMeechainConfig = (): MeechainConfig => {
  return meechainConfig
}
