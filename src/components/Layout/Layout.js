import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


export default function Layout({children}) {
    return (
        <div className='max-w-screen-lg mx-auto '>
            <Head>
                <title>World Ranks App</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
