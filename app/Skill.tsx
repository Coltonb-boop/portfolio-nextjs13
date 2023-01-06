'use client'
import { motion } from 'framer-motion'
import React from 'react'

type IconType = JSX.Element;

type Props = {
  icon: IconType;
}

function Skill({ icon }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div 
        initial={{
          x: true ? -100 : 100,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      >
        {icon}
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill