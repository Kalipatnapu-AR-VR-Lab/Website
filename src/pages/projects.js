import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, LinkedInIcon } from '@/components/Icons'
import netflix from '../../public/images/projects/netflix.png'
import pf from '../../public/images/projects/pf.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Events from '@/components/Events'
import Publications from '@/components/Publications'
import ParticleContainer from '@/components/ParticleContainer'

import projects from '../../public/images/backgrounds/projects.jpg'
import event1 from '../../public/images/projects/event1.jpeg'

const FramerImage = motion(Image)


const FeaturedProject = ({ type, title, summary, img, link, sourceLink, button, source }) => {

    return (
        <article className='w-full flex justify-between items-center border border-solid border-dark glassmorphism shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:ronded-2xl xs:p-4 xs:w-[90%] m-0'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden  lg:w-full' >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    priority sizes='(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw' />
            </Link>
            <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='font-medium text-xl text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank"  >
                    <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline hover:underline-offset-2'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={sourceLink} target="_blank" className='w-10' > {source ? <LinkedInIcon /> : <GithubIcon />} </Link>
                    <Link href={link} target="_blank" className=' mx-4 flex items-center rounded-md bg-primary text-light hover:bg-transparent p-2 px-6 text-lg border-2 border-primary border-solid  hover:text-primary md:p-2 md:px-4 md:text-base duration-500 font-[50] tracking-[0.075rem]' > {button} </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex justify-center items-center border border-solid border-dark glassmorphism bg-light shadow-2xl p-6 relative flex-col xs:p-4 xs:w-[90%]'>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden' >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='font-medium text-xl text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank"  >
                    <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline hover:underline-offset-2 lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='flex items-center rounded-md bg-primary text-light hover:bg-transparent p-1 px-6 text-sm  hover:bg-primary border-2 border-solid border-primary hover:text-primary md:p-2 md:px-4 md:text-base duration-700 font-[10] tracking-[0.075rem]' > Visit </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6' > <GithubIcon /> </Link>
                </div>
            </div>
        </article>
    )
}

const project = () => {
    return (
        <div className=''>
            <Head>
                <title>KXR | Projects</title>
                <meta name="description" content="later" />
            </Head>

            <TransitionEffect />

            <div className='w-screen h-screen -z-50 fixed overflow-hidden'>
                <Image src={projects} className='object-cover object-top h-full w-full' />
            </div>

            <ParticleContainer />
            <main className='w-full flex flex-col items-center justify-center bg-projects bg-top bg-cover bg-fixed'>
                <Layout className='pt-32 '>
                    <AnimatedText text="Exploring AR/VR Horizons!" className='my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Talk Session"
                                title="Extended Reality"
                                summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
                                img={event1}
                                link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                                sourceLink="https://www.linkedin.com/feed/update/urn:li:activity:7071875912685821952?utm_source=share&utm_medium=member_desktop"
                                button="Recording"
                                source="linkedin" />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Projects type="Clone" title="Netflix Clone with Firebase Authentication" img={netflix} github="https://github.com/Surajpverma/netflix-clone.git" link="https://netflix-clone-spv.netlify.app" />
                        </div>
                        <div className=' col-span-6 sm:col-span-12'>
                            <Projects type="Frotend" title="Fully Responsive Portfolio" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency." img={pf} link="/" github="https://github.com/Surajpverma/Portfolio" />
                        </div>
                        {/* <div className='col-span-12'>
                        <FeaturedProject type="Frotend" title="--Will be revealed soon--" summary="I am working on this project for Coding Club." img={electives} link="/" github="www.github.com" />
                        </div> */}
                    </div>
                </Layout>
                <Layout>
                    <Events />
                    <Publications />
                </Layout>
            </main>
        </div>
    )
}

export default project