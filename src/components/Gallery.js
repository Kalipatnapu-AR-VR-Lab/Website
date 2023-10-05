import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import netflix from "../../public/images/projects/netflix.png";

import event1 from "../../public/images/projects/event1.jpeg";
import { HeadAnimation, slideAnimation } from "./motion";

const gallery = [event1, netflix, event1, event1, event1];

const Gallery = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center py-16">
      <div className="py-16">
        <AnimatedText
          text="Journey Captured"
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

        <div className="grid grid-cols-3 items-center gap-4 gap-y-10 justify-center 2xl:grid-cols-2 xs:grid-cols-1 ">
          {gallery.map((photo, index) => {
            return (
              <div key={index}>
                  <motion.div
                    className="elative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-dark/30 glassmorphism"
                    {...HeadAnimation("up", 0.01 * index)}
                  >
                    <div class="h-full w-full aspect-video">
                      <Image
                        class="h-full w-full object-cover saturate-0 hover:saturate-100 duration-500 hover:scale-110 p-2"
                        src={photo}
                        alt={photo}
                      />
                    </div>
                  </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
