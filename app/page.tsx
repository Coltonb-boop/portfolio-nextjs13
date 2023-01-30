'use client'
import { useState } from 'react';
import '../styles/globals.css';
import About from './About';
import ContactMe from './ContactMe';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

type Props = {}

const Home = (props: Props) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShowButton(true);
    }
    else if (scrolled <= 300) {
      setShowButton(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
      <div className='bg-[#fff]/95 text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 min-w-[640]'>
        <div id='top'></div>
        <Header />
        
        <a href='#top' className='scroll-smooth'>
          <footer className='absolute right-10 bottom-5 cursor-pointer z-30 motion-safe:animate-bounce'>
            <div className='flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 bg-white/95 rounded-full hover:text-purple-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </footer>
        </a>

        <section id='hero'>
          <Hero />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='skills'>
          <Skills />
        </section>
          
        <section id='projects'>
          <Projects />
        </section>

        <section id='contact'>
          <ContactMe />
        </section>
      </div>
    </>
  )
}

export default Home