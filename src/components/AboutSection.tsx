"use client"

import Image from "next/image";
import React from "react";
import kodecamp from "../../public/ogo1.png";

const AboutSection = () => {
  return (
    <section className="py-10 bg-[#f37a233e] font-jost mt-5" id="about">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 w-full">
            <Image
              src={kodecamp}
              alt="ogochuks at kodecamp"
              className="w-full rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 w-full flex items-center">
            <div className="">
              <p>I AM A WEB DEVELOPER</p>
              <h4 className="md:text-5xl text-3xl my-3 font-semibold">
                About Me
              </h4>
              <p className="text-lg mb-3">
                As a passionate and dedicated web developer with over 3 years of
                professional experience, I take pride in my ability to turn your
                project into a success. I enjoy every aspect of the design
                process, from discussing ideas to collaborating on the final
                product.
              </p>
              <p className="text-lg mb-3">
                My expertise in Vue, Nuxt, React, Next, Graphql, Node JS,
                JavaScript, Bootstrap, and Tailwind allows me to create stunning
                web applications for clients across the globe.
              </p>
              <p className="text-lg mb-3">
                If you&apos;re in need of top-notch web development services, don&apos;t hesitate to reach out and give me a call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
