'use client'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  
  return (
    <div className='hero-background relative flex items-center justify-evenly text-center bg-hero-pattern z-10 bg-indigo-50 m-16 mt-0 h-[500px] md:rounded-md w-full md:max-w-5xl mx-auto'>
      <div className='flex flex-col items-center justify-center space-y-8 pl-10 max-w-md text-left'>
        <div className='text-4xl font-bold'>
          <p>Building digital </p>
          <p className=''>products, brands </p>
          <p className='text-purple-700'>experience</p>
        </div>
        <div className='max-w-[280px]'>
          <p>Full-stack Web Developer and Experience Curator</p>
          <p>I favor using NextJS and React to create a modern look and feel.</p>
        </div>
        <button className='bg-purple-700 hover:bg-purple-500 w-40 h-14 text-white'>
          Contact Me
        </button>
      </div>

      <img 
        className='rounded-full h-32 w-32 mx-auto object-cover mx-8'
        src='profilepic.jpg' 
        alt='' 
      />
    </div>
  )
}

export default Hero