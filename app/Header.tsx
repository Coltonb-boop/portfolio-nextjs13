"use client";
import React, { useState } from "react";

import { SocialIcon } from "react-social-icons";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
  const [headerState, setHeaderState] = useState<boolean>(true);

  const innerLinks = <motion.div
    initial={{
      y: -20,
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      y: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.5,
    }}
  >
    <div className='font-medium'>
      <a href="#about" >
        <button className='heroButton'>About</button>
      </a>
      <a href='#skills'>
        <button className='heroButton'>Skills</button>
      </a>
      <a href='#projects'>
        <button className='heroButton'>Projects</button>
      </a>
    </div>
  </motion.div>

  const socialLinks = <motion.div
    initial={{
      y: -20,
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      y: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.5,
    }}
    className="flex flex-row items-center"
  >
    {/* Social icons */}
    <SocialIcon
      url="https://github.com/Coltonb-boop"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://www.linkedin.com/in/colton-bitz-491aa157/"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      className="cursor-pointer"
      network="email"
      url="#contact"
      fgColor="gray"
      bgColor="transparent"
    />
    <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
      Get In Touch
    </p>
  </motion.div>
  
  const navClickHandler = () => {
    setHeaderState(!headerState);
  }
  
  return (
    <>
      {/* <header className="flex justify-between items-center md:hidden p-5 py-2 z-20 bg-white/95">
        <div className="hidden sm:flex">
          <FaceSmileIcon className="h-6 w-6 text-gray-500 " />
        </div>
        {innerLinks}
        {socialLinks}
        <Bars3Icon onClick={navClickHandler} className="w-12 h-12 cursor-pointer" />
        {
          headerState 
          ?
          innerLinks
          :
          socialLinks
        } 
      </header> */}
      <header className="p-5 py-2 flex flex-row items-center justify-between md:justify-evenly mx-auto z-20 bg-white/95 xl:items-center min-w-[640]">
        <motion.div
          initial={{
            y: -200,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className='hidden sm:flex'
        >
          <FaceSmileIcon className="h-6 w-6 text-gray-500 " />
        </motion.div>

        {innerLinks}
        
        {socialLinks}
      </header>
    </>
  );
};

export default Header;
