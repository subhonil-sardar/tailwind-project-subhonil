import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <nav className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-[#2B2B2B] text-white">
          {/* Logo */}
          <div>
            <span className="font-bold text-2xl">Logo</span>
          </div>

          {/* Menu Toggle Button for Mobile */}
          <div
            onClick={toogleMenu}
            className="absolute right-8 top-6 md:hidden"
          >
            {isMenuOpen ? (
              <IoMdClose className="text-3xl cursor-pointer" />
            ) : (
              <IoMenu className="text-3xl cursor-pointer" />
            )}
          </div>

          {/* Navigation Menu */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full transition-all bg-[#2B2B2B] duration-500 ease-in md:ml-auto md:flex-grow md:justify-end ${
              isMenuOpen ? "top-12 md:static" : "top-[-490px] md:static"
            }`}
          >
            <li className="my-5 md:my-0 md:ml-8 ml-4 font-semibold">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-300"
                offset={-65}
                className="cursor-pointer hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li className="my-5 md:my-0 md:ml-8 ml-4 font-semibold">
              <Link
                to="contant"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-300"
                offset={-65}
                className="cursor-pointer hover:text-blue-300"
              >
                Services
              </Link>
            </li>
            <li className="my-5 md:my-0 md:ml-8 ml-4 font-semibold">
            <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-300"
                offset={-65}
                className="cursor-pointer hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li className="my-5 md:my-0 md:ml-8 ml-4 font-semibold">
            <Link
                to="news"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-300"
                offset={-65}
                className="cursor-pointer hover:text-blue-300"
              >
                News & Updates
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
