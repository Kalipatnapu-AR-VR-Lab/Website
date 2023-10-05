import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const qoute = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "heading" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 uppercase">
        <motion.h1
          className={`${className} inline-block w-full text-dark font-bold text-8xl`}
          variants={qoute}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block heading first-letter:text-primary py-2 cu"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
    </div>
  );
};

export default AnimatedText;
