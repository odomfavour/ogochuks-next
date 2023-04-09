import React from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsFillPenFill } from "react-icons/bs";
import robot from "../../public/robot.jpg";
const WhatIDoSection = () => {
  return (
    <div className="py-10 font-jost">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-full flex items-center">
            <div>
              <p className="md:text-5xl text-3xl my-5 font-semibold">What I do</p>
              <Image src={robot} alt="" />
            </div>
          </div>
          <div className="md:w-2/3 w-full flex items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer">
                  <div className="mb-3">
                    <FaLaptopCode className="text-5xl" />
                  </div>
                  <p className="text-2xl font-bold">Web Development</p>
                  <p>
                    Need a website for your company to boost your reputation
                    while creating awareness? How about developing that web
                    project you have in mind?
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div className="mb-3">
                    <GiTeacher className="text-5xl" />
                  </div>
                  <p className="text-2xl font-bold">Training & Mentorship</p>
                  <p>
                    Words... who can really grasp what they can do? Get your
                    emotions awakened and drown your soul with suspense as you
                    read through each book.
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div className="mb-3">
                    <BsFillPenFill className="text-5xl" />
                  </div>
                  <p className="text-2xl font-bold">Story Writing</p>
                  <p>
                    Words... who can really grasp what they can do? Get your
                    emotions awakened and drown your soul with suspense as you
                    read through each book.
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div className="mb-3">
                    <BsFillPenFill className="text-5xl" />
                  </div>
                  <p className="text-2xl font-bold">Web Development</p>
                  <p>
                    Words... who can really grasp what they can do? Get your
                    emotions awakened and drown your soul with suspense as you
                    read through each book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoSection;
