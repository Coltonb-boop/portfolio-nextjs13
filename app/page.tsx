import React from 'react'

import '../styles/globals.css';
import Header from './Header';
import Hero from './Hero';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About Me */}

      {/* Experience */}

      {/* Skills */}
        
      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home