import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import event1 from "../../public/images/projects/event1.jpeg";
import { fadeAnimation, slideAnimation } from "./motion";

const FramerImage = motion(Image);

const Featured = ({ type, title, summary, img, link }) => {
  return (
    <motion.article
      className="w-full flex justify-between items-center border border-solid border-dark glassmorphism shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:ronded-2xl xs:p-2 m-0"
      {...fadeAnimation}
    >
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
            {...slideAnimation("right", 0.54)}
          >
            {title}
          </motion.h2>
        </Link>
        <motion.p
          className="my-2 font-medium text-dark sm:text-sm"
          {...slideAnimation("right", 0.58)}
        >
          {summary}
        </motion.p>
      </div>
    </motion.article>
  );
};

const Education = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="pt-16">
        <AnimatedText
          text="Education"
          className="mb-16 !text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
        />
        <motion.p
          className="text-2xl md:text-xl font-medium mb-16 text-center"
          {...slideAnimation("up", 0)}
        >
          {" "}
          Embark on an awe-inspiring voyage through the veil of reality with our
          team of tech sorcerers and art visionaries, where imagination and
          innovation converge to craft immersive worlds beyond imagination.
          🚀🎨🌌{" "}
        </motion.p>

        <Featured
          type="Talk Session"
          title="Extended Reality"
          summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
          img={event1}
          link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
          sourceLink="https://www.linkedin.com/feed/update/urn:li:activity:7071875912685821952?utm_source=share&utm_medium=member_desktop"
        />
      </div>
    </main>
  );
};

export default Education;
