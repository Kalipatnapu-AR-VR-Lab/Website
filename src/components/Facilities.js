import React from 'react'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'


const Facilities = () => {
  return (
    <main className='pt-16'>
      <AnimatedText text="Facilities" className='my-16 !text-7xl sm:!text-6xl xs:!text-4xl sm:my-8 ' />

      <div className='flex w-full items-center justify-between py-4 md:flex-col gap-4'>

        <div className='py-8 w-[48%] h-auto glassmorphism aspect-video flex flex-col items-center justify-center md:w-full '>
          <AnimatedText text="STATE-OF-THE-ART SETUP" className='mb-16 !text-5xl xs:!text-4xl sm:mb-8' />
          <p className='text-2xl md:text-xl font-medium mb-16 text-center w-[95%]'>Elevate your AR/VR encounters to new heights, amplifying every moment with technological marvels.</p>
        </div>

        <div className='pt-8 w-[48%] h-auto glassmorphism aspect-video flex flex-col items-center justify-center md:w-full '>
          <AnimatedText text="IMMERSIVE GEAR HAVEN" className='mb-16 !text-5xl xs:!text-4xl sm:mb-8 ' />
          <p className='text-2xl md:text-xl font-medium mb-16 text-center w-[95%]'> Explore a vast array of advanced equipment and innovative gadgets, designed to elevate your AR/VR journey. Unleash limitless possibilities and experience the extraordinary with us. </p>
        </div>
        
      </div>
    </main>
  )
}

export default Facilities