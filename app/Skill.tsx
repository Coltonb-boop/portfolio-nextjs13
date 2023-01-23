'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  url: string;
  even: boolean;
}

function Skill({ url, even }: Props) {
  return (
    <div className={`mx-1 group relative flex origin-center hover:scale-125 transition duration-700`}>
      <motion.img
        initial={{
          y: 100,
          opacity: 0
        }}
        src={url}
        transition={{ 
          delay: 0, 
          duration: .75,
          ease: 0,
        }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className={`w-24 h-24 lg:w-32 lg:h-32 filter hover:grayscale transition duration-300 ease-in-out p-2 hover:translate-y-10`}
      />
    </div>
  )
}

export default Skill