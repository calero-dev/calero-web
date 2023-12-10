import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonPrimary from "../misc/ButtonPrimary";
import LogoVPN from "../../public/assets/logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-0")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
            >
              <LogoVPN className="h-8 w-auto" />
            </LinkScroll>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "hero"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
              offset={typeof document !== "undefined" ? -document.querySelector("header").offsetHeight : 0}
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
              offset={typeof document !== "undefined" ? -document.querySelector("header").offsetHeight : 0}
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="skills"
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("skills");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "skills"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
              offset={typeof document !== "undefined" ? -document.querySelector("header").offsetHeight : 0}
            >
              Skills
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <LinkScroll
              activeClass="active"
              to="contact"
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
            >
              <ButtonPrimary>Contact me</ButtonPrimary>
            </LinkScroll>
          </div>
        </nav>
      </header>
      
    </>
  );
};

export default Header;
