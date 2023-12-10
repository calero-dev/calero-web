import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Skills = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const skills = [
    "Analyzing and designing solutions for complex use cases.",
    "Detecting the main requirements in a platform and searching for solutions.",
    "Developing admin panels to manage internal company workflows.",
    "Enhance legacy software by proposing new approaches."
  ]
  return (
    <div
      className="w-full mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto bg-black"
      id="skills"
    >
      <div className="max-w-screen-xl m-auto grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 pt-12 xl:pt-24">
        <ScrollAnimationWrapper
          className="rounded-lg w-full pt-12 xl:pt-24 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Expertise area
            </h3>
            <ul className="text-black-500 self-start list-inside ml-8 pt-8">
              {skills.map((skill, index) => (
                <motion.li
                  className="relative circle-check custom-list mt-5"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={skill}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {skill}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/skillset.svg"
              alt="Skill Set"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Skills;

