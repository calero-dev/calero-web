import React from "react";
import LogoVPN from "../../public/assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-8 pb-8">
      <div className="max-w-screen-2xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        {/* Logo */}
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-center sm:items-start">
          <LogoVPN className="h-10 w-auto mb-6" />
        </div>
        {/* Copyright text */}
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-13 flex flex-col items-center sm:items-end">
          <p className="text-gray-400">©{new Date().getFullYear()} - Calero.dev</p>
          <p className="text-gray-400 mb-4 font-medium text-lg">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
