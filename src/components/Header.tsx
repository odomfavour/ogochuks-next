import Link from "next/link";
import React, { useState } from "react";
import { FaHamburger, FaFirstOrderAlt } from "react-icons/fa";
import { navLinks } from "@/utils/data";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Header = () => {
  const router = useRouter();
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="w-full  top-0 z-40 left-0 fixed bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)] font-jost">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-5 ">
          <Link href="/" className="flex items-center text-2xl gap-0.5">
            <FaFirstOrderAlt />G<FaFirstOrderAlt />
          </Link>
          <ul className="md:flex items-center gap-12 hidden">
            {navLinks.map((itemLink) => (
              <li key={itemLink.id}>
                <Link
                  href={itemLink.url}
                  className={`text-lg font-medium pb-2 ${
                    router.pathname === itemLink.url
                      ? "border-b-4 border-[#F37B23]"
                      : ""
                  }`}
                >
                  {itemLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:flex gap-4 hidden">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              activeClass="font-bold text-[#F37B23]"
              className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white cursor-pointer"
            >
              Hire Me
            </ScrollLink>
          </div>
          <div className="hamburger cursor-pointer md:hidden block">
            <FaHamburger
              role="button"
              className="text-[#F37B23] text-3xl"
              onClick={() => setOpenMobile(true)}
            />
          </div>
        </div>
      </div>
      {openMobile && <MobileNav handleClose={() => setOpenMobile(false)} />}
    </div>
  );
};

export default Header;
