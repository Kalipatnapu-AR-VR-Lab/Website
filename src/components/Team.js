import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./Icons";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { HeadAnimation } from "./motion";

const Team = ({ name, role, linkedIn, link, image }) => {
  return (
      <motion.div
        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-dark/30 glassmorphism h-64 w-48 xs:h-48 xs:w-36"
        {...HeadAnimation("up", 0.1)}
      >
        <div class="h-64 w-48 xs:h-48 xs:w-36 p-4">
          <Image
            class="h-full w-full object-cover transition-transform duration-500"
            src={image}
            alt={name}
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark group-hover:bg-dark/80 group-hover:glassbg duration-500"></div>

        <div class="absolute inset-0 flex translate-y-[53%] md:translate-y-[52%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class=" text-xl md:text-[1rem] font-bold text-light"> {name} </h1>
          <p class="mb-3 text-[1rem] md:text-[0.75rem] italic text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-2">
            {" "}
            {role}{" "}
          </p>
          <div className="flex gap-4 py-0">
            {link ? <Link
              href={link}
              target="_blank"
              className="w-8 rounded-full bg-light xs:w-6"
            >
              {" "}
              <GithubIcon />{" "}
            </Link> : <></>}
            <Link href={linkedIn} target="_blank" className="w-8 xs:w-6">
              {" "}
              <LinkedInIcon />{" "}
            </Link>
          </div>
        </div>
      </motion.div>
  );
};

export default Team;
