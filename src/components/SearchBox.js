import React from 'react'
import { FaSearch } from 'react-icons/fa'
export default function SearchBox() {
    return (
        <div className='input-box p-4 rounded-md flex items-center bg-indigo-100'>
            <FaSearch />
            <input className='ml-2 p-1 w-full outline-none bg-transparent placeholder-gray-500 ' type='text' name='country' placeholder='Filter by Name,Region and Sub-region' />
        </div>
    )
}
