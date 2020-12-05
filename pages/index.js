import Head from 'next/head'
import {useState} from 'react'
import SearchBox from '../src/components/SearchBox'
import CountriesTable from '../src/components/CountriesTable'

export default function Home({countries}) {

  const [searchInput, setSearchInput] = useState('')
  
  const handleInputChange = (evt) => {
      evt.preventDefault();
      setSearchInput(evt.target.value)
  }

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(searchInput.toLowerCase()) || country.region.toLowerCase().includes(searchInput.toLowerCase()) || country.subregion.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div className=''>
      <Head>
        <title>World Ranks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='found-search-box mt-8 flex justify-between items-center '>
            <h4 className='text-base font-semibold w-1/4'>Found {countries.length} countries</h4>
          <div className='w-2/4'>
            <SearchBox value={searchInput} onChange={handleInputChange} />
          </div>
        </div>

        <div className='countries-table mt-8'>
            <CountriesTable countries={filteredCountries}/>
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
