import React from "react";
import { CircularText } from "./Icons";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { fadeAnimation } from "./motion";

const Batch = () => {
  return (
    <motion.div
      className="fixed left-4 bottom-4 flex items-center justify-center md:right-8 md:left-auto md:!top-0 md:bottom-auto sm:right-0 z-30"
      {...fadeAnimation}
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className="text-dark animate-spin-slow" />
        <div className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-light shadow-md border-solid border border-dark w-20 h-20 rounded-full hover:bg-light md:w-12 md:h-12 md:text-[10px] heading tracking-widest duration-700">
          <Logo />
        </div>
      </div>
    </motion.div>
  );
};

export default Batch;
