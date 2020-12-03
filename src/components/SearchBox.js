import React from 'react'
import { FaSearch } from 'react-icons/fa'
export default function SearchBox() {
    return (
        <div>
            <div className='input-box p-4 flex items-center bg-indigo-200'>
                <FaSearch />
                <input className='ml-2 p-2 w-64 outline-none bg-indigo-200' type='text' name='country' placeholder='Filter by Name, Region or Sub-region' />
            </div>
        </div>
    )
}
