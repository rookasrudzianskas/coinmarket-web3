import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Trending from '../components/Trending'
import SwapCryptoModal from '../components/SwapCryptoModal'
import CMCTable from '../components/cmc-table/CMCTable';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>CoinMarket App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='min-h-screen overflow-x-hidden'>
            <Header />
            <SwapCryptoModal />
            <div className='mt-10' />
            <Trending />
            <div className='mt-20' />
            <CMCTable />
        </div>
    </div>
  )
}

export default Home;
