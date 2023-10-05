import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-h-[5%] border-t-[0.5px] border-solid font-medium text-lg glassbg">
      <div className="flex items-center justify-center sm:text-base md:flex-col p-6">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        {/* <div className="ml-3 flex items-center lg:py-2 ">
          created by&nbsp;
          <Link
            href="https://github.com/Surajpverma"
            className="underline underline-offset-2 heading font-bold tracking-wide"
          >
            KXR
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
