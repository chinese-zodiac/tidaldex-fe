import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap/sdk'
import { BUSD, USDT, WBNB, CZB, CZUSD, CL8Y } from './tokens'

export const ROUTER_ADDRESS = '0x71ab950a0c349103967e711b931c460e9580c631'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD, CL8Y, USDT, WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD, CL8Y, USDT, WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD, CL8Y, USDT, WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [CZB, CZUSD],
    [CZB, WBNB],
    [CZB, USDT],
    [CZB, BUSD[ChainId.MAINNET]],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(3500), BIPS_BASE) // 35%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses LAST UPDATE: May 28, 2025
// https://github.com/ultrasoundmoney/ofac-ethereum-addresses/raw/refs/heads/main/data.csv
// OFAC is run by retards who dont understand EVM addresses.
// But we block the addresses OFAC asks us to block anyway,
// not because OFAC is effective or legal but just because we cant afford to sue them.
export const BLOCKED_ADDRESSES: string[] = [
  '0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c',
  '0x901bb9583b24d97e995513c6778dc6888ab6870e',
  '0xa7e5d5a720f06526557c513402f2e6b5fa20b008',
  '0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b',
  '0x7f367cc41522ce07553e823bf3be79a889debe1b',
  '0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a',
  '0x7db418b5d567a4e0e8c59ad71be1fce48f3e6107',
  '0x72a5843cc08275c8171e582972aa4fda8c397b2a',
  '0x7f19720a857f834887fc9a7bc0a0fbe7fc7f8102',
  '0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9',
  '0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535',
  '0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff',
  '0xe7aa314c77f4233c18c6cc84384a9247c0cf367b',
  '0x308ed4b7b49797e1a98d3818bff6fe5385410370',
  '0xfec8a60023265364d066a1212fde3930f6ae8da7',
  '0x67d40EE1A85bf4a4Bb7Ffae16De985e8427B6b45',
  '0x6f1ca141a28907f78ebaa64fb83a9088b02a8352',
  '0x6acdfba02d390b97ac2b2d42a63e85293bcc160e',
  '0x48549a34ae37b12f6a30566245176994e17c6b4a',
  '0x5512d943ed1f7c8a43f3435c85f7ab68b30121b0',
  '0xc455f7fd3e0e12afd51fba5c106909934d8a0e4a',
  '0x3cbded43efdaf0fc77b9c55f6fc9988fcc9b757d',
  '0x7ff9cfad3877f21d41da833e2f775db0569ee3d9',
  '0x098b716b8aaf21512996dc57eb0615e2383e2f96',
  '0xa0e1c89ef1a489c9c7de96311ed5ce5d32c20e4b',
  '0x3cffd56b47b7b41c56258d9c7731abadc360e073',
  '0x53b6936513e738f44fb50d2b9476730c0ab3bfc1',
  '0x35fb6f6db4fb05e6a4ce86f2c93691425626d4b1',
  '0xf7b31119c2682c88d88d455dbb9d5932c65cf1be',
  '0x3e37627deaa754090fbfbb8bd226c1ce66d255e9',
  '0x08723392ed15743cc38513c4925f5e6be5c17243',
  '0xc2a3829f459b3edd87791c74cd45402ba0a20be3',
  '0x3ad9db589d201a710ed237c829c7860ba86510fc',
  '0xd0975b32cea532eadddfc9c60481976e39db3472',
  '0x1967d8af5bd86a497fb3dd7899a020e47560daaf',
  '0x83e5bc4ffa856bb84bb88581f5dd62a433a25e0d',
  '0x08b2eFdcdB8822EfE5ad0Eae55517cf5DC544251',
  '0x04DBA1194ee10112fE6C3207C0687DEf0e78baCf',
  '0x0Ee5067b06776A89CcC7dC8Ee369984AD7Db5e06',
  '0x502371699497d08D5339c870851898D6D72521Dd',
  '0x5A14E72060c11313E38738009254a90968F58f51',
  '0xEFE301d259F525cA1ba74A7977b80D5b060B3ccA',
  '0x39d908dac893cbcb53cc86e0ecc369aa4def1a29',
  '0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c',
  '0x38735f03b30FbC022DdD06ABED01F0Ca823C6a94',
  '0x97b1043abd9e6fc31681635166d430a458d14f9c',
  '0xb6f5ec1a0a9cd1526536d3f0426c429529471f40',
  '0xdcbEfFBECcE100cCE9E4b153C4e15cB885643193',
  '0x5f48c2a71b2cc96e3f0ccae4e39318ff0dc375b2',
  '0x5a7a51bfb49f190e5a6060a5bc6052ac14a3b59f',
  '0xed6e0a7e4ac94d976eebfb82ccf777a3c6bad921',
  '0x797d7ae72ebddcdea2a346c1834e04d1f8df102b',
  '0x931546D9e66836AbF687d2bc64B30407bAc8C568',
  '0x43fa21d92141BA9db43052492E0DeEE5aa5f0A93',
  '0x6be0ae71e6c41f2f9d0d1a3b8d0f75e6f6a0b46e',
  '0x9c2bc757b66f24d60f016b6237f8cdd414a879fa',
  '0x530a64c0ce595026a4a556b703644228179e2d57',
  '0xfac583c0cf07ea434052c49115a4682172ab6b4f',
  '0x961c5be54a2ffc17cf4cb021d863c42dacd47fc1',
  '0x983a81ca6fb1e441266d2fbcb7d8e530ac2e05a2',
  '0xf3701f445b6bdafedbca97d1e477357839e4120d',
  '0xe950dc316b836e4eefb8308bf32bf7c72a1358ff',
  '0x21b8d56bda776bbe68655a16895afd96f5534fed',
  '0x175d44451403edf28469df03a9280c1197adb92c',
  '0x19f8f2b0915daa12a3f5c9cf01df9e24d53794f7',
  '0xe1d865c3d669dcc8c57c8d023140cb204e672ee4',
]

export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
