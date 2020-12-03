import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='pt-4'>
            <Link href='/'>
                <a><h2 className='text-center text-2xl hover:underline'>World <span className='font-bold text-indigo-600'>Ranks</span></h2></a>
            </Link>
        </div>
    )
}
