import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Tilt from 'react-parallax-tilt'

import ck from '../../public/images/ck.png'
import Education from '@/components/Education'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'


const AnimatedNum = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [inView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}>

    </span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>KXR | About</title>
                <meta name="description" content="later" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center  bgOverview bg-fixed'>
                <Layout className='pt-32 glassbg'>
                    <AnimatedText text="OVERVIEW !" className='my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className=' col-span-5 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-8'> <h2 className='mb-4 text-2xl font-bold uppercase dark:text-primaryDark text-primary heading tracking-widest'>ABOUT US</h2>
                            <p className='font-medium first-letter:float-left 
                                first-letter:mr-2
                                first-letter:text-5xl 
                              first-letter:text-light dark:first-letter:text-dark first-letter:bg-dark dark:first-letter:bg-light first-letter:px-2 first-letter:font-bold'>At Kalipatnapu AR/VR Lab, we are a dynamic and forward-thinking research lab dedicated to pushing the boundaries of AR/VR technology. Our team of talented researchers, developers, and designers collaborates to create transformative AR/VR experiences and shape the future of this rapidly evolving field.</p>
                            <p className='font-medium mt-4'> As a member of our lab, you'll have the opportunity to work on cutting-edge projects, conduct innovative research, and contribute to the development of next-generation AR/VR applications. From designing immersive experiences to developing interactive simulations, you'll be at the forefront of creating impactful solutions that transcend reality. </p>
                            <p className='font-medium my-4'>Our lab fosters a supportive and collaborative environment, where ideas flourish and creativity thrives. With access to state-of-the-art equipment and resources, you'll have the tools you need to turn your visions into reality. Moreover, you'll be mentored by industry professionals and work alongside a team of like-minded individuals who share your passion for AR/VR. </p>
                            <p className='font-medium '>Join us, and unlock a world of possibilities. As a member of the Kalipatnapu AR/VR Lab, you'll gain invaluable experience, expand your skill set, and make meaningful contributions to the advancement of AR/VR technology. Together, let's redefine the boundaries of human perception and transform the way we interact with the digital world.</p>
                        </div>

                        <div className='col-span-3 relative h-max border-2 border-solid p-8 xl:col-span-3 md:order-1 md:col-span-8 glassmorphism'>
                            <Tilt>
                                <Image src={ck} alt='meri photu' className='w-full h-auto ' priority sizes='(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw'/>
                            </Tilt>
                            <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline hover:underline-offset-2 lg:text-2xl'>Chaitanya Kalipatnapu</h2>

                        </div>

                    </div>
                </Layout>
            </main>
            <Layout className='bgAbout bg-fixed'>
                <Education />
                <Facilities />
                <Gallery />
            </Layout>
        </>
    )
}

export default about