"use client";
import React, { useState } from "react";

import { SocialIcon } from "react-social-icons";
import { FaceSmileIcon, Bars3Icon } from "@heroicons/react/24/solid";
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
    <div className=''>
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
      <header className="flex justify-between md:hidden p-5 z-20 bg-white/95">
        <Bars3Icon onClick={navClickHandler} className="w-12 h-12 cursor-pointer" />
        {
          headerState 
          ?
          innerLinks
          :
          socialLinks
        }
      </header>
      <header className="hidden p-5 py-2 md:flex md:flex-row items-center justify-between md:justify-evenly mx-auto z-20 bg-white/95 xl:items-center min-w-[640]">
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
          className=''
        >
          <FaceSmileIcon className="h-6 w-6 text-gray-500 " />
        </motion.div>

        {innerLinks}
        
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
            duration: 1.5,
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
      </header>
    </>
  );
};

export default Header;
