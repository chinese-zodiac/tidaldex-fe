import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70', 18, 'CZUSD', 'CZUSD'),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}
export const WBNB = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },

  czb: {
    symbol: 'CZB',
    address: {
      56: '0xd963b2236d227a0302e19f2f9595f424950dc186',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://tidaldex.com/',
  },

  // ***************************************** default token   **********************************

  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      97: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },

  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },

  sol: {
    symbol: 'SOL',
    address: {
      56: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://solana.com/',
  },

  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      97: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  busd: {
    symbol: 'CZUSD',
    address: {
      56: '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://czodiac.com/',
  },

  syrup: {
    symbol: 'SYRUP',
    address: {
      56: '0x89b51a235fe6439cec719e8b12e69f8cf368a249',
      97: '0x89b51a235fe6439cec719e8b12e69f8cf368a249',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },

  kalm: {
    symbol: 'KALM',
    address: {
      56: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://kalmar.io/',
  },

  hotcross: {
    symbol: 'HOTCROSS',
    address: {
      56: '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.hotcross.com/',
  },

  hzn: {
    symbol: 'HZN',
    address: {
      56: '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://horizonprotocol.com/',
  },

  belt: {
    symbol: 'BELT',
    address: {
      56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://beta.belt.fi/',
  },

  watch: {
    symbol: 'WATCH',
    address: {
      56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://yieldwatch.net/',
  },

  bry: {
    symbol: 'BRY',
    address: {
      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://berrydata.co/',
  },

  wsote: {
    symbol: 'wSOTE',
    address: {
      56: '0x541E619858737031A1244A5d0Cd47E5ef480342c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://soteria.finance/#/',
  },

  helmet: {
    symbol: 'Helmet',
    address: {
      56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.helmet.insure/',
  },

  ten: {
    symbol: 'TEN',
    address: {
      56: '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.tenet.farm/',
  },

  ditto: {
    symbol: 'DITTO',
    address: {
      56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },

  blink: {
    symbol: 'BLINK',
    address: {
      56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },

  qsd: {
    symbol: 'QSD',
    address: {
      56: '0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chemix.io/home',
  },

  bondly: {
    symbol: 'BONDLY',
    address: {
      56: '0x96058f8C3e16576D9BD68766f3836d9A33158f89',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bondly.finance/',
  },

  safemoon: {
    symbol: 'SAFEMOON',
    address: {
      56: '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://safemoon.net/',
  },
}

export default tokens
