import defaultTokens from '../config/constants/tokenLists/tidaldex-default.tokenlist.json'

const getTokenLogoURL = (address: string) => {
  const token = defaultTokens.tokens.find((t) => t.address.toLowerCase() === address.toLowerCase())
  if (token?.logoURI) {
    return token.logoURI
  }
  return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
}

export default getTokenLogoURL
