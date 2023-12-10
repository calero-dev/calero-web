import React, { useState } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";

const ContactForm = () => {
  const emailAddress = "rgomez@calero.dev";
  const linkedinProfile = "https://www.linkedin.com/in/rgomezcalero/";

  return (
    <section class="bg-blue-50 dark:bg-slate-800" id="contact">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
          <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact me
            </p>
            <h2
              class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
          </div>
        </div>
        <div class="flex items-stretch justify-center">
          <div class="grid md:grid-cols-2">
            <div class="h-full w-full">
              <Image
                src="/assets/skillset.svg"
                alt="Skill Set"
                layout="responsive"
                quality={100}
                height={600}
                width={600}
              />
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Connect with Me</h2>
              <p className="mb-4">
                You can reach out to me via email or connect with me on LinkedIn:
              </p>
              <div className="mb-6">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${emailAddress}`} target="_blank" className="text-blue-500 dark:text-blue-300">
                    {emailAddress}
                  </a>
                </p>
                <p>
                  <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">
                    <img src={"/assets/Icon/linkedin.svg"} className="h-10 w-10" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
