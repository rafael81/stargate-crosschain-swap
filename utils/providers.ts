import {ethers} from 'ethers';

export enum StargateBlockchainType {
    Ethereum = 'Ethereum',
    BnbChain = 'BnbChain',
    Avalanche = 'Avalanche',
    Polygon = 'Polygon',
    Arbitrum = 'Arbitrum',
    Optimism = 'Optimism',
    Fantom = 'Fantom'
}
export const BlockchainToChainId = {
    [StargateBlockchainType.Ethereum]: 10121,
    [StargateBlockchainType.BnbChain]: 10102,
    [StargateBlockchainType.Avalanche]: 106,
    [StargateBlockchainType.Polygon]: 109,
    [StargateBlockchainType.Arbitrum]: 10143,
    [StargateBlockchainType.Optimism]: 10132,
    [StargateBlockchainType.Fantom]: 112,
}

/**
 * Router addresses
 */
export const BlockchainToRouterAddress = {
    [StargateBlockchainType.Ethereum]: '0x7612aE2a34E5A363E137De748801FB4c86499152',
    [StargateBlockchainType.BnbChain]: '0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176',
    [StargateBlockchainType.Avalanche]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    [StargateBlockchainType.Polygon]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    [StargateBlockchainType.Arbitrum]: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
    [StargateBlockchainType.Optimism]: '0x95461eF0e0ecabC049a5c4a6B98Ca7B335FAF068',
    [StargateBlockchainType.Fantom]: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
}

/**
 * URLs for RPC providers for every network
 */
export const BlockchainToRpcProvider = {
    [StargateBlockchainType.Ethereum]: 'https://rpc.ankr.com/eth_goerli',
    [StargateBlockchainType.BnbChain]: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
    [StargateBlockchainType.Avalanche]: 'https://avalanche.public-rpc.com',
    [StargateBlockchainType.Polygon]: 'https://polygon-rpc.com/',
    [StargateBlockchainType.Arbitrum]: 'https://arbitrum-one.public.blastapi.io',
    [StargateBlockchainType.Optimism]: 'https://rpc.goerli.optimism.gateway.fm',
    [StargateBlockchainType.Fantom]: 'https://rpc.ftm.tools',
}

export const BlockchainToScannerUrl = {
    [StargateBlockchainType.Ethereum]: 'https://goerli.etherscan.io',
    [StargateBlockchainType.BnbChain]: 'https://testnet.bscscan.com/',
    [StargateBlockchainType.Avalanche]: 'https://avascan.info',
    [StargateBlockchainType.Polygon]: 'https://polygonscan.com',
    [StargateBlockchainType.Arbitrum]: 'https://arbiscan.io',
    [StargateBlockchainType.Optimism]: 'https://goerli-optimism.etherscan.io',
    [StargateBlockchainType.Fantom]: 'https://ftmscan.com',
}

export function initProvider(blockchain: StargateBlockchainType) {
    return new ethers.providers.JsonRpcProvider(BlockchainToRpcProvider[blockchain])
}

export function initAll() {
    const keys = Object.keys(StargateBlockchainType).filter((v) => isNaN(Number(v)));
    let result: { [key in StargateBlockchainType]?: any } = {};

    keys.forEach((blockchain, index) => {
        const enumValue = StargateBlockchainType[blockchain as keyof typeof StargateBlockchainType];
        result[enumValue] = initProvider(enumValue)
    })

    return result;
}