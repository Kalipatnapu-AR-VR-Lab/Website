import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Layout from './Layout'

const Member = ({ name, x, y, w, h }) => {

  return (
    <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold`}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.1
        }
      }}
      whileTap={{ scale: 0.9 }}>
        {name}
      {/* <p className='hover:visible'></p> */}
      {/* <img src={profile} alt="" className='w-full h-full' /> */}
    </motion.div>
  )
}

const Members = () => {
  return (
    <>
      <AnimatedText text="Team Members" className='my-16 mt-48 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
      <div className=' w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full' >
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          Web
        </motion.div>

        <Member name="CSS" x="-5vw" y="-10vw" w="90px" h="90px" />
        <Member name="HTML" x="-20vw" y="2vw" w="90px" h="90px" />
        <Member name="Javascript" x="20vw" y="6vw" w="90px" h="90px" />
        <Member name="NextJS" x="0vw" y="12vw" w="90px" h="90px" />
        <Member name="ReactJS" x="-20vw" y="-15vw" w="90px" h="90px" />
        <Member name="Web Design" x="15vw" y="-12vw" w="90px" h="90px" />
        <Member name="ThreeJS" x="32vw" y="-5vw" w="90px" h="90px" />
        <Member name="Figma" x="2vw" y="-20vw" w="90px" h="90px" />
        <Member name="Firebase" x="-25vw" y="18vw" w="90px" h="90px" />
        <Member name="Tailwind CSS" x="18vw" y="18vw" w="90px" h="90px" />
        <Member name="GitHub" x="-30vw" y="-4vw" w="90px" h="90px" />

      </div>

    </>
  )
}

export default Members