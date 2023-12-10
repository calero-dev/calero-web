import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "./misc/ButtonOutline.";

const Hero2 = ({}) => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-white-300">
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
        <ScrollAnimationWrapper className="h-full">
          <motion.div className="max-w-2xl text-center m-auto pt-6 sm:pt-16">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              I'm Raúl Gómez Calero, your <br /><strong>PHP and Python expert</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Since 2015, I help companies to design new solutions from scratch and enhance their legacy software.
            </p>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={typeof document !== "undefined" ? -document.querySelector("header").offsetHeight : 0}
            >
              <ButtonPrimary>About me</ButtonPrimary>
            </LinkScroll>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero2;
