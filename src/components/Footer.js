import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-[0.5px] border-solid border-dark font-medium text-lg glassbg'>
            <Layout className='py-6 flex items-center justify-center sm:text-base md:flex-col lg:py-6 '>
                <span className='border-r border-r-dark pr-3 md:border-none'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='ml-3 flex items-center lg:py-2 '>created by&nbsp;<Link href="https://github.com/Surajpverma" className='underline underline-offset-2 heading font-bold tracking-wide'>KXL</Link></div>
            </Layout>
        </footer>
    )
}

export default Footer