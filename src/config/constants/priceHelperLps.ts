import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'CZUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x43f8250b66427fa439760ade4c65bb35228790e5',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
