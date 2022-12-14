import React from 'react'

import '../styles/globals.css';
import About from './About';
import Experience from './Experience';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
        
      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home