"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Ahmed Rafi
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="w-[500px] h-full mx-auto flex flex-row items-center justify-between md:flex hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contactme" className="cursor-pointer">
              Contact me
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-row items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#03001417] backdrop-blur-md w-full fixed top-[65px] left-0 z-50"
          >
            <div className="flex flex-col py-4">
              <a
                href="#about-me"
                className="text-gray-300 py-2 px-4 hover:bg-[#0300145e]"
              >
                About me
              </a>
              <a
                href="#skills"
                className="text-gray-300 py-2 px-4 hover:bg-[#0300145e]"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-300 py-2 px-4 hover:bg-[#0300145e]"
              >
                Projects
              </a>
              <a
                href="#contactme"
                className="text-gray-300 py-2 px-4 hover:bg-[#0300145e]"
              >
                Contact me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;