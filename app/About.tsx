'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { BsFillEmojiLaughingFill } from 'react-icons/bs';

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 mx-auto items-center bg-[#0f1221]/90'>
      <h3 className='mt-10 uppercase font-medium text-gray-500 text-lg'>
        Who is Colton Bitz
      </h3>
      <h2 className='text-white font-semibold text-3xl'>
        <BsFillEmojiLaughingFill /> {" "} <span>A Bit About Me</span>
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='profilepic.jpg'
        className='mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10 text-white'>
        <h4 className='text-4xl semi-bold'>
          A Bit About Me
        </h4>
        <p className='text-sm'>
          Paragraph
        </p>
      </div>
    </motion.div>
  )
}

export default About