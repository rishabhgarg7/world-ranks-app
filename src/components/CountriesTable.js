import React from 'react'
import Link from 'next/link'

export default function CountriesTable({countries}) {
    return (
        <div>
            <div className='table w-full'>
                <div className='top-label-row flex justify-between items-center text-xl font-semibold '>
                    <div className=' '>Name</div>
                    <div className=' '>Population</div>
                    <div className=' '>Area</div>
                    <div className=' '>Gini</div>
                </div>
                <div className='table-data-rows mt-4'>
                    {countries.map(country =>
                        <Link href='/country'><a>
                            <div className='table-data-row flex justify-between items-center mt-4 bg-white p-4 border-2 border-black shadow-sm hover:bg-gray-200 hover:shadow-lg'>
                                <div className='country-flag-name flex items-center '> 
                                    <img src={country.flag} alt={country.name} className='h-8 w-12' />
                                    <div className='ml-4'>{country.name}</div>
                                </div>
                                <div className=''>{country.population}</div>
                                <div className=''>{country.area}</div>
                                <div className=''>{country.gini || 0}</div>
                            </div>
                        </a></Link>
                    )}
                </div>
            </div>
        </div>
    )
}
