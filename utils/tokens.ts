import {StargateBlockchainType} from "./providers";

export enum TokenType {
    USDC = 'USDC',
    USDT = 'USDT',
}

export const BlockchainToToken: any = {
    [StargateBlockchainType.Ethereum]: {
        [TokenType.USDC]: {
           address: '0xDf0360Ad8C5ccf25095Aa97ee5F2785c8d848620',
            poolId: 1,
            decimals: 6
        },
        [TokenType.USDT]: {
            address: '0x5BCc22abEC37337630C0E0dd41D64fd86CaeE951',
             poolId: 1,
             decimals: 6
         }
    },
    [StargateBlockchainType.Optimism]: {
        [TokenType.USDC]: {
            address: '0x0CEDBAF2D0bFF895C861c5422544090EEdC653Bf',
            poolId: 1,
            decimals: 6
        }
    },
    [StargateBlockchainType.Avalanche]: {
        [TokenType.USDC]: {
            address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
            poolId: 1,
            decimals: 6
        }
    },
    [StargateBlockchainType.BnbChain]: {
        [TokenType.USDT]: {
            address: '0xF49E250aEB5abDf660d643583AdFd0be41464EfD',
            poolId: 2,
            decimals: 18
        }
    }
};
         