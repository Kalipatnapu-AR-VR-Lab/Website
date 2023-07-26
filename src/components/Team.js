import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon } from './Icons'
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'


const Team = ({ name, role, linkedIn, link, image }) => {

    return (
        <Tilt>
            <motion.div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-dark/30 glassmorphism h-64 w-48 xs:h-48 xs:w-36'>
                <div class="h-64 w-48 xs:h-48 xs:w-36 p-4">
                    <Image class="h-full w-full object-cover transition-transform duration-500" src={image} alt={name} />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark group-hover:from-dark/90 group-hover:via-dark/80 group-hover:to-dark/70"></div>

                <div class="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0 hover:glassbg">
                    <h1 class=" text-xl font-bold text-light"> {name} </h1>
                    <p class="mb-3 text-lg italic text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100"> {role} </p>
                    <div className='flex gap-4 py-4'>
                        <Link href={linkedIn} target="_blank" className='w-10 rounded-full bg-light xs:w-6' > <GithubIcon /> </Link>
                        <Link href={link} target="_blank" className='w-10 xs:w-6' > <LinkedInIcon /> </Link>
                    </div>

                </div>
            </motion.div>
        </Tilt>
    )
}

export default Team