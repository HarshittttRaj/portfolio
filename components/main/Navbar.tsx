import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-l  z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://www.linkedin.com/in/harshit-raj-079177200" target="_blank" rel="noreferrer"
          className="h-auto w-auto flex flex-row items-center"
        >
          

          <Image
          
            src="/inlogo.png"
            
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Harshit Raj
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#f2f1f761] bg-[#fa1e6879] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className="cursor-pointer hover:animate-slowspin"
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
             
              
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
