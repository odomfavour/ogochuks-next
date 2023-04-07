import React from "react";
import Image from "next/image";
import ogo from "../../public/ogo-coat-11.png";
const HeroSection = () => {
  return (
    <section className="hero-section font-jost">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
          <div className="md:w-3/5 w-full flex items-center">
            <div className="mb-3">
              <p className="text-base">Hi, my name is</p>
              <h2 className="md:text-7xl text-5xl font-bold mb-4">Ogochukwu Odom</h2>
              <h4 className="text-5xl mb-3">I build things for the web.</h4>
              <p className="text-xl md:w-4/5 w-full">
                I am a professional frontend web developer with years of
                experience in web development, a practical approach to
                problem-solving, and a drive to follow things through to
                completion.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 w-full flex justify-end flex-col">
            <Image src={ogo} alt="ogochuks profile pic" className="w-full mt-20 md:mt-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
