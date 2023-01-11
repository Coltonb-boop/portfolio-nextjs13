'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  url: string;
  even: boolean;
}

function Skill({ url, even }: Props) {
  return (
    <div className={`group relative flex cursor-pointer origin-center hover:rotate-[360deg] transition duration-700`}>
      <motion.img 
        initial={{
          x: true ? -100 : 100,
          opacity: 0
        }}
        src={url}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        className={`w-24 h-24 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-2 hover:translate-y-10`}
      />
      {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div> */}
    </div>
  )
}

export default Skill