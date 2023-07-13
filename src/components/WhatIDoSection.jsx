"use client"

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
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 w-full flex items-center">
            <div>
              <p className="md:text-5xl text-3xl my-5 font-semibold">
                What I do
              </p>
              <Image src={robot} alt="" />
            </div>
          </div>
          <div className="lg:w-2/3 w-full flex items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-full">
                  <div className="mb-3">
                    <FaLaptopCode className="text-5xl" />
                  </div>
                  <p className="md:text-2xl text-xl font-bold">
                    Web Development
                  </p>
                  <p>
                    Looking to expand your online presence and reach more
                    customers? A professional website is the perfect way to
                    showcase your business and attract new clients. You can have
                    a custom website that reflects your brand, communicates your
                    message effectively, and engages your audience.
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-full">
                  <div className="mb-3">
                    <GiTeacher className="text-5xl" />
                  </div>
                  <p className="md:text-2xl text-xl font-bold">
                    Training & Mentorship
                  </p>
                  <p>
                    If you&apos;re passionate about technology and want to break
                    into the industry, I can help you get started. With so many
                    resources available online, it can be overwhelming to know
                    where to begin. That&apos;s where I come in. From HTML and
                    CSS to JavaScript and more, I&apos;ll guide you step by step
                    and help you achieve your goals.
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-full">
                  <div className="mb-3">
                    <BsFillPenFill className="text-5xl" />
                  </div>
                  <p className="md:text-2xl text-xl font-bold">
                    Web Consulting
                  </p>
                  <p>
                    Are you trying to figure out the best tools to use for your
                    website or web app? Do you want to optimize your application
                    but aren&apos;t sure how? Look no further - I&apos;m here to
                    help. As an experienced web developer, I can provide
                    guidance and advice on the most effective tools and
                    technologies to meet your specific needs.
                  </p>
                </div>
              </div>
              <div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer h-full">
                  <div className="mb-3">
                    <BsFillPenFill className="text-5xl" />
                  </div>
                  <p className="md:text-2xl text-xl font-bold">Story Writing</p>
                  <p>
                    Words have the power to move us in ways we never thought
                    possible. When you read a great book, you can feel your
                    emotions awaken and your soul stir with excitement. Do you
                    love fiction, non-fiction, or something in between?. Start
                    your reading journey today and experience the magic of words
                    for yourself!
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
