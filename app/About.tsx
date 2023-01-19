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
      className='flex flex-col relative h-screen text-center justify-evenly px-20 mx-auto items-center bg-[#0f1221]/90'
    >
      <div className='-mt-10'>
        <h3 className='uppercase font-medium text-gray-500 text-lg'>
          Who is Colton Bitz
        </h3>
        <h2 className='flex flex-row text-white font-semibold text-3xl'>
        <BsFillEmojiLaughingFill />&nbsp;A Bit About Me
        </h2>
      </div>
      
      <div className='flex flex-col md:flex-row items-center -mt-20'>
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
          className='flex-shrink-0 w-56 h-56 rounded-full object-cover mb-20 md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10 text-white'>
          <p className='text-md'>
            I'm a pilot and full-stack web developer with a passion for creating simple and elegant web apps. In my free time, you can find me either wall-climbing or playing games with my friends. 
          </p>
          <p>
            My goal with web app development is to create immersive experiences that allow the user to do exactly what they want with the least amount of effort.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About