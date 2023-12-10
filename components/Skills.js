import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Skills = ({
  expertiseItems = [
    {
      title: "Analyzing and designing solutions for complex use cases.",
      icon: "/assets/Icon/analyze.svg",
    },
    {
      title: "Detecting the main requirements in a platform and searching for solutions.",
      icon: "/assets/Icon/detect.svg",
    },
    {
      title: "Developing admin panels to manage internal company workflows.",
      icon: "/assets/Icon/develop.svg",
    },
    {
      title: "Enhance legacy software by proposing new approaches.",
      icon: "/assets/Icon/enhance.svg",
    },
  ],
}) => {

  return (
    <div id="skills" className="w-full py-24 px-4 xl:px-16 mx-auto bg-white-300">
      <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 text-center">
        My Expertise Area
      </h3>
      <div className="max-w-screen-md grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto text-center mt-8">
        {expertiseItems.map((item, index) => (
          <div key={index} className="rounded-lg bg-white-500 p-6">
            <div className="flex text-center items-center justify-center bg-orange-100 w-12 h-12 rounded-lg m-auto">
              <img src={item.icon} className="h-10 w-10" />
            </div>
            <p className="text-black-600 mt-4">
              <strong>{item.title}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
