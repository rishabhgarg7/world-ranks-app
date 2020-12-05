import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  
    const country = await res.json();
  
    return country;
  };

export default function CountryPage({country}) {
    const router = useRouter()
    const { countryCode }= router.query

    return (
        <div className='country-page flex mt-8'>
            <div className='country-flag-lhs h-full w-1/3 bg-white rounded-lg shadow-lg p-4'>
                <div className='flex justify-center items-center'>
                    <img className='h-48 w-full' src={country.flag} alt="country flag" />
                </div>
                <div className='country-continent-name mt-6 text-center'>
                    <h2 className='country-name text-4xl'>{country.name}</h2>
                    <h4 className='continent-name text-base '>{country.region}</h4>
                </div>
                <div className='population-area flex justify-between mt-4 px-4'>
                    <div className='population'>
                        <p className='population-number font-medium'>{country.population}</p>
                        <p className='text-center text-gray-500'>Population</p>
                    </div>
                    <div className='area'>
                        <p className='area-number font-medium'>{country.area}</p>
                        <p className='text-center text-gray-500'>Area</p>
                    </div>

                </div>
            </div>
            <div className='country-details-neighbour-rhs w-2/3 ml-8 bg-white rounded-lg shadow-lg p-4 '>
                <div className='country-details'>
                    <h3 className='text-lg font-medium'>Details</h3>
                    <div className='details-rows mt-1'>
                        <div className='detail-row flex justify-between py-4 border-b-2 border-gray-200 '>
                            <h4 className='text-base font-semibold text-gray-300'>Capital</h4>
                            <h4 className='text-base font-semibold'>{country.capital}</h4>
                        </div>
                        <div className='detail-row flex justify-between py-4 border-b-2 border-gray-200 '>
                            <h4 className='text-base font-semibold text-gray-300'>Languages</h4>
                            <h4 className='text-base font-semibold'>{country.languages.map(({ name }) => name).join(", ")}</h4>
                        </div>
                        <div className='detail-row flex justify-between py-4 border-b-2 border-gray-200 '>
                            <h4 className='text-base font-semibold text-gray-300'>Currencies</h4>
                            <h4 className='text-base font-semibold'>{country.currencies.map(({ name }) => name).join(", ")}</h4>
                        </div>
                        <div className='detail-row flex justify-between py-4 border-b-2 border-gray-200 '>
                            <h4 className='text-base font-semibold text-gray-300'>Native name</h4>
                            <h4 className='text-base font-semibold'>{country.nativeName}</h4>
                        </div>
                        <div className='detail-row flex justify-between py-4 border-b-2 border-gray-200 '>
                            <h4 className='text-base font-semibold text-gray-300'>Gini</h4>
                            <h4 className='text-base font-semibold'>{country.gini}%</h4>
                        </div>
                    </div>

                </div>
                {/* <div className='neighbor-countries mt-4'>
                    <h4 className='text-base font-semibold text-gray-300'>Neighboring Countries</h4>
                    <div className='neighbor-countries-grid mt-4 grid grid-cols-4 gap-x-3 gap-y-3'>
                        {borders.map(border_country => 
                            // <Link href={`/country/${border_country.alpha3Code}`} key={border_country.name}>
                            <Link href={`/country/${border_country}`} key={border_country}>
                                <a>
                                    <div className='neighbor-country flex flex-col justify-center items-center '>
                                        <img className='object-contain' src={`https://restcountries.eu/data/${border_country.toLowerCase()}.svg`} alt={`flag of ${border_country.toLowerCase()}`} />
                                        <p className='mt-2'>{border_country}</p>
                                    </div>
                                </a>
                            </Link>

                        )}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export const getStaticPaths = async() => {

    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();

    const paths = countries.map(country=> {
        console.log(typeof(country.alpha3Code),country.alpha3Code,country.name)
        return {params: {countryCode:country.alpha3Code.toString()}}
     } )

    return {
        paths: paths,
        fallback:false
    }
}

export const getStaticProps = async ({ params }) => {
    const country = await getCountry(params.countryCode);
  
    return {
      props: {
        country,
      },
    };
  };