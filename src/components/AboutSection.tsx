import Image from "next/image";
import React from "react";
import kodecamp from '../../public/ogo1.png'

const AboutSection = () => {
  return (
    <section className="py-10 bg-[#f37a233e] font-jost mt-5" id="about">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 w-full">
            <Image src={kodecamp} alt="ogochuks at kodecamp" className="w-full rounded-lg"/>
          </div>
          <div className="lg:w-1/2 w-full flex items-center">
           <div className="">
           <p>I AM A WEB DEVELOPER</p>
           <h4 className="md:text-5xl text-3xl my-3 font-semibold">About Me</h4>
            <p className="text-lg mb-3">
              I &apos;m a creative Web Developer who is passionate and dedicated
              to my work. I have over 3 years experience as a professional web
              developer and I have acquired the skills and knowledge necessary
              to make your project a success. I enjoy every step of the design
              process, from discussion, ideation and collaboration.
            </p>
            <p className="text-lg mb-3">
              I code and create web applications for amazing people around the
              world. I work with Vue, Nuxt, React, Next, Graphql, Node JS, JavaScript,
              Bootstrap, Tailwind.
            </p>
            <p className="text-lg mb-3">Give a call if you need something done.</p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
