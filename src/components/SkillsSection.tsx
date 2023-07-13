"use client"

import Image from "next/image";
import React from "react";
import astro from "../../public/skill-1.png";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaReact,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiJavascript } from "react-icons/si";
// SiNextdotjs
const SkillsSection = () => {
  return (
    <div className="font-jost py-10 bg-[#f37a233e]">
      <div className="w-11/12 mx-auto">
        <h3 className="md:text-5xl text-3xl font-semibold mb-4">Skills</h3>
        <section className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 w-full">
            <div className="grid md:grid-cols-4 grid-cols-2  gap-5">
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaReact className="text-4xl text-blue-400 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    ReactJs
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaVuejs className="text-4xl text-green-700 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    VueJs
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <SiNuxtdotjs className="text-4xl text-green-700 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    Nuxt
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <SiNextdotjs className="text-4xl mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    NextJs
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaNodeJs className="text-4xl text-green-700 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    NodeJs
                  </p>
                </div>
              </div>
              <div className=" bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaGithub className="text-4xl mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    Github
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaHtml5 className="text-4xl text-orange-400 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    HTML
                  </p>
                </div>
              </div>
              <div className=" bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center">
                  <FaCss3 className="text-4xl text-blue-600 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    CSS
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-[120px] flex items-center justify-center">
                <div className="text-center ">
                  <SiJavascript className="text-4xl text-yellow-400 mx-auto" />
                  <p className="text-lg text-center mt-2 font-semibold italic">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <Image src={astro} alt="space" className="animate-bounce" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsSection;
