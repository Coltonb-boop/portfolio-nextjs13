'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src='profilepic.jpg'
        alt=''
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of Nothing</h4>
        <p className='font-bold text-2xl mt-1'>Colton</p>
        <div className='flex space-x-2 my-2'>
          Tech used
          Tech used
          Tech used
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard