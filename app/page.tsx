import '../styles/globals.css';
import About from './About';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[#fff] text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 min-w-[640]'>
      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='experience'>
        <Experience />
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
      
      <a href="#hero">
        <footer className='sticky bottom-5 cursor-pointer'>
          <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            
          </div>
        </footer>
      </a>
    </div>
  )
}

export default Home