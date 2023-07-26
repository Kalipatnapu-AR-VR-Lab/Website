import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from '../components/Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group tracking-[0.075rem] uppercase`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2 tracking-widest uppercase`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
                &nbsp;
            </span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)
    const [isShrunk, setShrunk] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    const shrinkNavbar = () => {
        if (window.scrollY > 75) {
            setShrunk(false)
        } else {
            setShrunk(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', shrinkNavbar)
        return () => {
            window.removeEventListener('scroll', shrinkNavbar)
        }
    }, [])

    return (
        <header className={`w-full px-32 font-bold flex items-center justify-between z-10 lg:px-16 md:px-12 sm:px-8 border-b-[0.5px] lg:border-none border-dark/80 fixed top-0 duration-300  ${isShrunk ? "py-8" : "py-4 glassbg"}`}>

            <button className='flex-col items-center justify-cente hidden lg:flex' onClick={handleClick}>
                <span className={` bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={` bg-dark dark:bg-light duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={` bg-dark dark:bg-light duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* desktop */}
            <div className='w-full flex items-center justify-between lg:hidden '>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/team" title="Team" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://github.com/Surajpverma" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.7 }}><GithubIcon /> </motion.a>
                    <motion.a href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.7 }}><LinkedInIcon /> </motion.a>

                    <button
                        className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-yellow-200" : "bg-light text-blue-900"}`}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")} >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {/* mobile */}
            {
                isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className=' min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 '>
                    <nav className='flex items-center justify-center flex-col'>
                        <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                        <CustomMobileLink href="/project" title="Project" className='' toggle={handleClick} />
                        <CustomMobileLink href="/team" title="Team" className='' toggle={handleClick} />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href="https://github.com/Surajpverma" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1' whileTap={{ scale: 0.7 }}><GithubIcon /> </motion.a>
                        <motion.a href="https://www.linkedin.com/in/surajpverma/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1' whileTap={{ scale: 0.7 }}><LinkedInIcon /> </motion.a>

                        <button
                            className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-yellow-200" : "bg-light text-blue-900"}`}
                            onClick={() => setMode(mode === "light" ? "dark" : "light")} >
                            {
                                mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                            }
                        </button>
                    </nav>
                </motion.div> : null
            }

            
        </header>
    )
}

export default Navbar