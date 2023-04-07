import Link from "next/link";
import React, {useState} from "react";
import { FaHamburger } from "react-icons/fa";
import { navLinks } from "@/utils/data";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="w-full  top-0 z-40 left-0 fixed bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)] font-jost">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-5 ">
          <Link href="/">Ogo</Link>
          <ul className="md:flex items-center gap-12 hidden">
            {navLinks.map((itemLink) => (
              <li key={itemLink.id}>
                <Link
                  href={itemLink.url}
                  className={`text-base font-normal pb-2 ${
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
            <Link
              href="#"
              className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white"
            >
              Hire Me
            </Link>
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
    </div>
  );
};

export default Header;
