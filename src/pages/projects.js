import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

import measuring from "../../public/images/projects/AR-tape-measurement.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Events from "@/components/Events";
import Publications from "@/components/Publications";
import ParticleContainer from "@/components/ParticleContainer";

import projects from "../../public/images/backgrounds/projects.jpg";
import event1 from "../../public/images/projects/event1.jpeg";
import smithy from "../../public/images/projects/Smithy.jpg";
import drone from "../../public/images/projects/Drone.png";
import { slideAnimation, HeadAnimation } from "@/components/motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  sourceLink,
  button,
  source,
}) => {
  return (
    <motion.article className="w-full flex justify-between items-center glassmorphism shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:ronded-2xl xs:p-4 xs:w-[90%] m-0">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden  lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          {...slideAnimation("left", 0.5)}
        />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <motion.span
          className="font-medium text-xl text-primaryDark xs:text-base"
          {...slideAnimation("right", 0.5)}
        >
          {type}
        </motion.span>
        <Link href={link} target="_blank">
          <motion.h2
            className="my-2 w-full text-left text-4xl font-bold hover:underline hover:underline-offset-2"
            {...slideAnimation("right", 0.5)}
          >
            {title}
          </motion.h2>
        </Link>
        <motion.p
          className="my-2 font-medium text-dark sm:text-sm"
          {...slideAnimation("right", 0.5)}
        >
          {summary}
        </motion.p>
        <motion.div
          className="mt-2 flex items-center"
          {...HeadAnimation("right", 0)}
        >
          {sourceLink ? <Link href={sourceLink} target="_blank" className="w-10">
            {" "}
            {source ? <LinkedInIcon /> : <GithubIcon />}{" "}
          </Link> : <div></div>}
          {button ? <Link
            href={link}
            target="_blank"
            className=" mx-4 flex items-center rounded-md bg-primary text-light hover:bg-transparent p-2 px-6 text-lg border-2 border-primary border-solid  hover:text-primary md:p-2 md:px-4 md:text-base duration-500 font-[50] tracking-[0.075rem]"
          >
            {" "}
            {button}{" "}
          </Link> : <div></div>}
        </motion.div>
      </div>
    </motion.article>
  );
};

// const Projects = ({ title, type, summary, img, link, github }) => {

//     return (
//         <motion.article className='w-full flex justify-center items-center border border-solid border-dark glassmorphism bg-light shadow-2xl p-6 relative flex-col xs:p-4 xs:w-[90%]' {...fadeAnimation}>
//             <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden' >
//                 <FramerImage src={img} alt={title} className="w-full h-auto"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.9 }}
//                     transition={{ duration: 0.2 }}
//                     {...slideAnimation('left', 1)} />
//             </Link>
//             <div className='w-full flex flex-col items-start justify-between mt-4'>
//                 <motion.span className='font-medium text-xl text-primaryDark lg:text-lg md:text-base' {...slideAnimation('right', 1)}>
//                     {type}
//                 </motion.span>
//                 <Link href={link} target="_blank"  >
//                     <motion.h2 className='my-2 w-full text-left text-3xl font-bold hover:underline hover:underline-offset-2 lg:text-2xl' {...slideAnimation('right', 1.04)}>{title}</motion.h2>
//                 </Link>
//                 <motion.div className='w-full mt-2 flex items-center justify-between' {...HeadAnimation("right", 1.06)}>
//                     <Link href={link} target="_blank" className='flex items-center rounded-md bg-primary text-light hover:bg-transparent p-1 px-6 text-sm  hover:bg-primary border-2 border-solid border-primary hover:text-primary md:p-2 md:px-4 md:text-base duration-700 font-[10] tracking-[0.075rem]' > Visit </Link>
//                     <Link href={github} target="_blank" className='w-8 md:w-6' > <GithubIcon /> </Link>
//                 </motion.div>
//             </div>
//         </motion.article>
//     )
// }

const project = () => {
  return (
    <div className="">
      <Head>
        <title>KXR | Projects</title>
        <meta name="description" content="later" />
      </Head>

      <TransitionEffect />

      <div className="w-screen h-screen -z-50 top-0 fixed overflow-hidden">
        <Image
          src={projects}
          className="object-cover object-top fixed top-0 h-full w-full"
        />
      </div>

      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-32 ">
          <AnimatedText
            text="Exploring AR/VR Horizons!"
            className="my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8">
            <div className="col-span-12">
              <FeaturedProject
                type="Android and iOS smartphones/tablets"
                title="AR Measuring Tape using Unity AR Foundation and Basic Ray Tracing"
                summary="The AR Measuring Tape project aims to provide a convenient and accurate way for users to measure distances in the real world using Augmented Reality (AR) technology. This application will be developed using Unity AR Foundation and will employ basic ray tracing techniques to enable precise measurements."
                img={measuring}
                link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                sourceLink="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                button="Visit"
                source={false}
              />
              <div
                className="w-full glassmorphism px-12 py-4 lg:px-8 xs:px-4 xs:ronded-2xl xs:w-[90%] m-0"
                {...slideAnimation("up", 0.5)}
              >
                <motion.h2
                  className="mb-4 text-2xl font-bold uppercase text-primary heading tracking-widest"
                  {...slideAnimation("left", 0.2)}
                >
                  Key Features
                </motion.h2>
                <motion.p
                  className="font-medium"
                  {...slideAnimation("left", 0.2)}
                >
                  {" "}
                  <b>Real-Time AR Visualization:</b> The AR Measuring Tape will
                  leverage the power of Unity AR Foundation to provide a
                  seamless AR experience. Users will be able to view the
                  physical world through their device's camera while virtual
                  measuring lines and points are superimposed onto objects in
                  real-time.
                </motion.p>
                <motion.p
                  className="font-medium mt-4"
                  {...slideAnimation("left", 0.22)}
                >
                  {" "}
                  <b>Distance Measurement:</b> The primary functionality of the
                  app will be to measure distances between two points in the
                  real world. By tapping on the screen, users can place anchor
                  points on objects they wish to measure, and the app will
                  display the distance between these points.{" "}
                </motion.p>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.24)}
                >
                  {" "}
                  <b>Basic Ray Tracing:</b> To ensure accurate measurements, the
                  app will utilize basic ray tracing techniques. When a user
                  places an anchor point on an object, a virtual ray will be
                  cast from the camera's position towards the object, and the
                  app will calculate the distance based on the intersection
                  point of the ray and the object's surface.{" "}
                </motion.p>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.24)}
                >
                  {" "}
                  <b>Unit Conversion:</b> The app will support various units of
                  measurement, such as centimeters, inches, feet, and meters.
                  Users can easily switch between units according to their
                  preferences or project requirements.{" "}
                </motion.p>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.28)}
                >
                  {" "}
                  <b>Visual Feedback and Guidance:</b> The application will
                  provide visual feedback to assist users in accurately placing
                  anchor points. For instance, the app might display a subtle
                  grid or color-coded indicators to highlight the points of
                  interest on the object.{" "}
                </motion.p>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.28)}
                >
                  {" "}
                  <b>Save and Share Measurements:</b> Users will have the option
                  to save their measurements for future reference or share them
                  with others. This feature will enhance the utility of the app
                  for both personal and professional use.{" "}
                </motion.p>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.32)}
                >
                  {" "}
                  <b>User-Friendly Interface:</b> The app will have an intuitive
                  and user-friendly interface, making it accessible to a wide
                  range of users, including DIY enthusiasts, architects,
                  engineers, and students.{" "}
                </motion.p>

                <motion.h2
                  className="mb-4 text-2xl font-bold uppercase text-primary heading tracking-widest"
                  {...slideAnimation("left", 0.2)}
                >
                  Conclusion
                </motion.h2>
                <motion.p
                  className="font-medium my-4"
                  {...slideAnimation("left", 0.32)}
                >
                  {" "}
                  The AR Measuring Tape project combines the power of Unity AR
                  Foundation and basic ray tracing techniques to create an
                  efficient and accurate tool for measuring distances in the
                  real world. Whether for home improvement projects, interior
                  design, or construction tasks, this application will empower
                  users with the ability to make precise measurements using
                  their mobile devices, making it an invaluable tool in various
                  fields.{" "}
                </motion.p>
              </div>
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="VR headset simulation"
                title="To create a VR simulation of Smithy Shop"
                summary="The KXR Smithy Project aims to create a virtual reality (VR) simulation of a smithy shop. The project outlines the equipment required, including tools such as tongs, hammers, and an anvil. The main operations involve heating, squaring, marking, drawing out, bending, and quenching a metal workpiece. Ultimately, the project aims to provide a comprehensive VR experience for learning and evaluating blacksmithing skills, offering modes for training, evaluation, and free play within different VR settings."
                img={smithy}
                link=""
                sourceLink=""
                source="linkedin"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Gesture Control"
                title="Gesture Controlled Drone Project"
                summary="The Gesture Controlled Drone Project is aimed at developing a prototype of a drone that can be controlled through human gestures, including head movements and hand gestures. The project's primary objective is to create a versatile drone with applications in fields requiring active human maintenance or inspection in challenging or hazardous environments, such as nuclear reactors or industrial settings."
                img={drone}
                link=""
                sourceLink=""
                source="linkedin"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="AR Navigation App"
                title="KXR Campus Navigation Project"
                summary="The KXR Campus Navigation Project aims to develop an Augmented Reality (AR) navigation app for campus users. This app will guide users through the campus using geolocation data on a 2D map, providing information about various locations. Its benefits extend to newcomers, enhancing their navigation experience and offering historical insights. Progress includes the integration of GeoSpatial Creator and ongoing testing, with a prototype in development."
                img={drone}
                link=""
                sourceLink=""
                source="linkedin"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Talk Session"
                title="Extended Reality"
                summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
                img={event1}
                link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                sourceLink="https://www.linkedin.com/feed/update/urn:li:activity:7071875912685821952?utm_source=share&utm_medium=member_desktop"
                button="Recording"
                source="linkedin"
              />
            </div>
          </div>
        </Layout>
        {/* <Layout>
          <Events />
          <Publications />
        </Layout> */}
      </main>
    </div>
  );
};

export default project;
