'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, I\'m Colton',
      'And I love to code'
    ],
    loop: true,
    delaySpeed: 2000,
  });
  
  return (
    <div className='relative flex items-center justify-evenly text-center bg-hero-pattern z-10 bg-indigo-50 m-16 mt-0 h-[500px] rounded-md md:max-w-4xl md:mx-auto'>
      <div className='absolute bg-hero-pattern z-20 w-full h-full'>

      </div>
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
      {/* <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>Full Stack Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <a href="#about" >
            <button className='heroButton'>About</button>
          </a>
          <a href='#experience'>
            <button className='heroButton'>Experience</button>
          </a>
          <a href='#skills'>
            <button className='heroButton'>Skills</button>
          </a>
          <a href='#projects'>
            <button className='heroButton'>Projects</button>
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Hero