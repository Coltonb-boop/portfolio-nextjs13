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
      className='flex flex-col relative h-screen text-center justify-evenly md:text-left md:flex-row px-10 mx-auto items-center bg-[#0f1221]/90'
    >
      <div>
        <h3 className='uppercase font-medium text-gray-500 text-lg'>
          Who is Colton Bitz
        </h3>
        <h2 className='flex flex-row text-white font-semibold text-3xl'>
        <BsFillEmojiLaughingFill />&nbsp;A Bit About Me
        </h2>
      </div>
      
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
        className='flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10 text-white'>
        <p className='text-md'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
        <p>
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </motion.div>
  )
}

export default About