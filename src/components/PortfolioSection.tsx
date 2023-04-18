import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { projects } from "@/utils/data";

const PortfolioSection = () => {
  return (
    <section className="font-jost py-10">
      <div className="w-11/12 mx-auto">
        <h3 className="md:text-5xl text-3xl font-semibold mb-4">
          Projects I’ve Built
        </h3>
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5">
            {projects.map((project) => (
              <div
                className="cursor-pointer text-right shadow-2xl rounded-md"
                key={project.id}
              >
                <div
                  className="project-content flex items-center  bg-cover bg-top min-h-[400px] rounded-md"
                  style={{ backgroundImage: `url(${project.background.src})` }}
                >
                  <div className="opacity-0 hover:opacity-100 p-[25px] w-full h-full bg-[#000000e0] text-white transition-all ease-in delay-300 duration-500 flex flex-col justify-between rounded-md">
                    <p className="project-overline mb-4 text-right ">
                      Featured Project
                    </p>
                    <div className="text-right">
                      <h3 className="project-title text-xl font-semibold mb-4">
                        <a
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {project.name}
                        </a>
                      </h3>
                      <div className="project-description ">
                        <p className="whitespace-break-spaces">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <ul className="project-tech-list flex gap-3 mt-2 justify-end">
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="project-links mt-2 flex gap-3 justify-end">
                        <a
                          href="https://github.com/bchiang7/halcyon-site"
                          aria-label="GitHub Link"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <BsGithub className="text-2xl" />
                        </a>
                        <a
                          href={project.link}
                          aria-label="External Link"
                          className="external"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <BiLinkExternal className="text-2xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 justify-center flex">
            <Link
              href="/portfolio"
              className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f37a23da] duration-300"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
