import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { GithubIcon, InstagramIcon, LinkedInIcon } from "../components/Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { fadeAnimation } from "./motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group tracking-[0.075rem] uppercase`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2 tracking-widest uppercase`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setShrunk] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const shrinkNavbar = () => {
    if (window.scrollY > 75) {
      setShrunk(false);
    } else {
      setShrunk(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", shrinkNavbar);
    return () => {
      window.removeEventListener("scroll", shrinkNavbar);
    };
  }, []);

  return (
    <motion.header
      className={`w-full px-32 font-bold flex items-center justify-between z-20 lg:px-16 md:px-12 sm:px-8 border-b-[0.5px] lg:border-none border-dark/80 fixed top-0 duration-300  ${
        isShrunk ? "py-8" : "py-4 glassbg"
      }`}
      {...fadeAnimation}
    >
      <button
        className="flex-col items-center justify-cente hidden lg:flex z-40"
        onClick={handleClick}
      >
        <span
          className={` bg-dark block duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 bg-light" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-dark duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-dark duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1 bg-light" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* desktop */}
      <div className="w-full flex items-center justify-between lg:hidden ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/team" title="Team" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.7 }}
          >
            <GithubIcon />{" "}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.7 }}
          >
            <LinkedInIcon />{" "}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-8 ml-3"
            whileTap={{ scale: 0.7 }}
          >
            {" "}
            <InstagramIcon />{" "}
          </motion.a>
        </nav>
      </div>

      {/* mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[100vw] min-h-screen flex flex-col items-center justify-between fixed  z-90 bg-dark/90 backdrop-blur-md py-32 top-0 left-0"
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Project"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/team"
              title="Team"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 bg-light rounded-full"
              whileTap={{ scale: 0.7 }}
            >
              <GithubIcon />{" "}
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 "
              whileTap={{ scale: 0.7 }}
            >
              <LinkedInIcon />{" "}
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/kalipatnapu-arvr-lab/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-8 mx-3 "
              whileTap={{ scale: 0.7 }}
            >
              {" "}
              <InstagramIcon />{" "}
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
