import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="w-full mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="max-w-screen-xl m-auto grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/profile.jpg"
              alt="Profile image"
              layout="responsive"
              quality={100}
              height={300}
              width={300}
              className="rounded-full"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          className="rounded-lg w-full divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <motion.div className="h-full w-full flex flex-col justify-center" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 text-center">
              About me
            </h3>
            <p className="text-black-500 mt-8 mb-6 max-w-3xl m-auto text-justify">
             I'm Raúl Gómez, a seasoned freelance full-stack software developer with over 7 years of hands-on experience. My passion lies in crafting robust solutions using PHP and Python, specializing in Laravel and Flask frameworks.
            </p>
            <p className="text-black-500 mt-4 mb-6 max-w-3xl m-auto text-justify">
            Throughout my journey, I've been dedicated to assisting companies in creating innovative solutions and revitalizing their existing software landscapes. I firmly believe in the power of reusing proven services, adopting a design-first, code-later approach, and meticulously documenting every step of the development process.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default About;
