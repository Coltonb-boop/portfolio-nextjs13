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
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <span>{text}</span>
      <Cursor cursorColor='#F7AB0A' />
      <BackgroundCircles />
    </div>
  )
}

export default Hero