import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0,1,2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CZB',
    lpAddresses: {
      97: '0xd963b2236d227a0302e19f2f9595f424950dc186',
      56: '0xd963b2236d227a0302e19f2f9595f424950dc186',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
 
 
  {
    pid: 1,
    lpSymbol: 'CZB-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    token: tokens.czb,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
  
    

]

export default farms
