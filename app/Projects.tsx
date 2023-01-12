'use client'
import { motion } from 'framer-motion';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { projects } from '../data/projectsList';

type Props = {}

function Projects({}: Props) {
  // const projects = [1,2,3,4,5];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen flex relative flex-col text-center justify-center items-center md:text-left xl:flex-row max-w-[800px] min-h-screen mx-auto'
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pb-10">
        Projects
      </h3>

      {/* React Carousel */}
      <div className='w-full'>
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} stopOnHover showStatus={false} showIndicators={false}>
          {projects.map((project, index) => {
            return (
              <div key={index} className='h-[530px]'>
                <img src={project['url']} />
                <p className='text-lg'><b>{project['title']}</b>: {project['synopsis']}</p>
                <p><b>{project['tech']}</b></p>
              </div>
            )
          })}
        </Carousel>
      </div>

      {/* Mapping method */}
      {/* <div className="grid grid-cols-2 gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index} className='bg-green-400 w-48 h-40'>
              {project}
            </div>
          )
        })}
      </div> */}

      {/* This was a fancy background line */}
      {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' /> */}
    </motion.div>
  )
}

export default Projects