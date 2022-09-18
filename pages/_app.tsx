import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
// import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
      <MoralisProvider
          serverUrl='https://xejph0i1acc1.usemoralis.com:2053/server'
          appId='OI3LmwSCOST3AwZnKfz7D56bQ2c3r6CTuyFRrdUD'
      >
        {/*<GunProvider>*/}
          <CoinMarketProvider>
            <Component {...pageProps} />
          </CoinMarketProvider>
        {/*</GunProvider>*/}
      </MoralisProvider>
  )
}

export default MyApp
