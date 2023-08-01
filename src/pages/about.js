import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import ck2 from "../../public/images/ck2.jpeg";
import Education from "@/components/Education";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import aboutUs from "../../public/images/backgrounds/about.jpg";
import overview from "../../public/images/backgrounds/overview.jpeg";
import { HeadAnimation, slideAnimation } from "@/components/motion";

const about = () => {
  return (
    <>
      <Head>
        <title>KXR | About</title>
        <meta name="description" content="later" />
      </Head>
      <TransitionEffect />

      <div className="w-screen h-screen -z-50 fixed overflow-hidden">
        <Image
          src={aboutUs}
          className="object-cover h-full w-full object-bottom bottom-0 self-center fixed"
        />
      </div>

      <main className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-32 glassbg">
          <Image
            src={overview}
            className="absolute top-0 left-0 object-cover h-full w-full -z-40"
          />
          <div className="absolute top-0 left-0 object-cover h-full w-full -z-30 glassbg"></div>
          <AnimatedText
            text="OVERVIEW !"
            className="my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className=" col-span-5 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-8">
              <motion.h2
                className="mb-4 text-2xl font-bold uppercase text-primary heading tracking-widest"
                {...slideAnimation("left", 1.1)}
              >
                ABOUT US
              </motion.h2>
              <motion.p
                className="font-medium first-letter:float-left first-letter:mr-2  first-letter:text-5xl first-letter:text-light first-letter:bg-dark first-letter:px-2 first-letter:font-bold"
                {...slideAnimation("left", 1.13)}
              >
                At Kalipatnapu AR/VR Lab, we are a dynamic and forward-thinking
                research lab dedicated to pushing the boundaries of AR/VR
                technology. Our team of talented researchers, developers, and
                designers collaborates to create transformative AR/VR
                experiences and shape the future of this rapidly evolving field.
              </motion.p>
              <motion.p
                className="font-medium mt-4"
                {...slideAnimation("left", 1.15)}
              >
                {" "}
                As a member of our lab, you'll have the opportunity to work on
                cutting-edge projects, conduct innovative research, and
                contribute to the development of next-generation AR/VR
                applications. From designing immersive experiences to developing
                interactive simulations, you'll be at the forefront of creating
                impactful solutions that transcend reality.{" "}
              </motion.p>
              <motion.p
                className="font-medium my-4"
                {...slideAnimation("left", 1.17)}
              >
                Our lab fosters a supportive and collaborative environment,
                where ideas flourish and creativity thrives. With access to
                state-of-the-art equipment and resources, you'll have the tools
                you need to turn your visions into reality. Moreover, you'll be
                mentored by industry professionals and work alongside a team of
                like-minded individuals who share your passion for AR/VR.{" "}
              </motion.p>
              <motion.p
                className="font-medium "
                {...slideAnimation("left", 1.19)}
              >
                Join us, and unlock a world of possibilities. As a member of the
                Kalipatnapu AR/VR Lab, you'll gain invaluable experience, expand
                your skill set, and make meaningful contributions to the
                advancement of AR/VR technology. Together, let's redefine the
                boundaries of human perception and transform the way we interact
                with the digital world.
              </motion.p>
            </div>

            <motion.div
              className="col-span-3 relative h-max border-2 border-solid p-8 xl:col-span-3 md:order-1 md:col-span-8 glassmorphism"
              {...slideAnimation("right", 1.1)}
            >
              <Tilt>
                <Image
                  src={ck2}
                  alt="Chaitanya Kalipatnapu"
                  className="w-full h-auto "
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Tilt>
              <motion.h2
                className="mt-4 w-full text-left text-3xl font-bold hover:underline hover:underline-offset-2 lg:text-2xl"
                {...HeadAnimation("right", 1.1)}
              >
                Chaitanya Kalipatnapu
              </motion.h2>
            </motion.div>
          </div>
        </Layout>
      </main>
      <Layout className=" overflow-hidden">
        <Education />
        <Facilities />
        <Gallery />
      </Layout>
    </>
  );
};

export default about;
