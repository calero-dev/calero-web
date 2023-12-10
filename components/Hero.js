import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import WavingHand from "../public/assets/waving-hand.svg";


const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 pt-6 sm:pt-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              I'm Raúl Gómez Calero, your <strong>PHP and Python expert</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Since 2015, I help companies to design new solutions from scratch and enhance their legacy software.
            </p>
            <ButtonPrimary>Contact me</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/profile.jpg"
                alt="Raúl Gómez Calero, Full Stack Developer"
                quality={100}
                width={300}
                height={300}
                layout="responsive"
                className="rounded-full p-8"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full">
        <ScrollAnimationWrapper id="about"
          className="rounded-lg w-full pt-12 xl:pt-24 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 text-center">
              Hello there!
            </h3>
            <p className="text-black-500 mt-4 mb-6 max-w-3xl m-auto text-justify">
             I'm Raúl Gómez, a seasoned freelance full-stack software developer with over 7 years of hands-on experience. My passion lies in crafting robust solutions using PHP and Python, specializing in Laravel and Flask frameworks.
            </p>
            <p className="text-black-500 mt-4 mb-6 max-w-3xl m-auto text-justify">
            Throughout my journey, I've been dedicated to assisting companies in creating innovative solutions and revitalizing their existing software landscapes. I firmly believe in the power of reusing proven services, adopting a design-first, code-later approach, and meticulously documenting every step of the development process.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Hero;
