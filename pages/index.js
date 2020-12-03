import Head from 'next/head'
import SearchBox from '../src/components/SearchBox'
import CountriesTable from '../src/components/CountriesTable'
// import styles from '../styles/Home.module.css'

export default function Home({countries}) {
  return (
    <div className=''>
      <Head>
        <title>World Ranks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='found-search-box mt-8 flex justify-between items-center '>
          <div>
              <p>Found {countries.length} countries</p>
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
        <div className='countries-table mt-8'>
            <CountriesTable countries={countries}/>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
