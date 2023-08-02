import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "./motion";

const Facilities = () => {
  return (
    <main className="pt-16">
      <AnimatedText
        text="Facilities"
        className="my-16 !text-7xl sm:!text-6xl xs:!text-4xl sm:my-8 "
      />

      <div className="flex w-full items-center justify-between py-4 md:flex-col gap-4">
        <motion.div
          className="py-8 w-[48%] h-auto glassmorphism aspect-video flex flex-col items-center justify-center md:w-full"
          {...slideAnimation("left", 0.2)}
        >
          <AnimatedText
            text="STATE-OF-THE-ART SETUP"
            className="mb-16 !text-5xl xs:!text-4xl sm:mb-8"
          />
          <motion.p
            className="text-2xl md:text-xl font-medium mb-16 text-center w-[95%]"
            {...slideAnimation("left", 0.4)}
          >
            Elevate your AR/VR encounters to new heights, amplifying every
            moment with technological marvels.
          </motion.p>
        </motion.div>

        <motion.div
          className="pt-8 w-[48%] h-auto glassmorphism aspect-video flex flex-col items-center justify-center md:w-full"
          {...slideAnimation("right", 0.2)}
        >
          <AnimatedText
            text="IMMERSIVE GEAR HAVEN"
            className="mb-16 !text-5xl xs:!text-4xl sm:mb-8 "
          />
          <motion.p
            className="text-2xl md:text-xl font-medium mb-16 text-center w-[95%]"
            {...slideAnimation("right", 0.4)}
          >
            {" "}
            Explore a vast array of advanced equipment and innovative gadgets,
            designed to elevate your AR/VR journey. Unleash limitless
            possibilities and experience the extraordinary with us.{" "}
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
};

export default Facilities;
