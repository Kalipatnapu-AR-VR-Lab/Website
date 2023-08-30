import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex item-center justify-center ">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl md:w-10 md:h-10 md:text-[10px] font-bold border border-solid border-transparent heading tracking-widest"
        whileHover={{
          backgroundColor: [
            "#18191A",
            "#f72585",
            "#7209b7",
            "#3a0ca3",
            "#4361ee",
            "#18191A",
          ],
          transition: {
            duration: 1.5,
            repeat: Infinity,
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        KXR
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
