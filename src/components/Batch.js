import React from 'react'
import { CircularText } from './Icons'

import Logo from './Logo'

const Batch = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center md:right-8 md:fixed md:left-auto md:!top-0 md:bottom-auto sm:right-0 z-10'>
                <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
                    <CircularText className="text-dark animate-spin-slow dark:fill-light" />
                    <div className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-light shadow-md border-solid border border-dark w-20 h-20 rounded-full hover:bg-light md:w-12 md:h-12 md:text-[10px] heading tracking-widest duration-700'><Logo /></div>
                </div>
            </div>
  )
}

export default Batch