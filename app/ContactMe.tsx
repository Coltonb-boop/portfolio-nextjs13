import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto justify-evenly items-center px-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Sentence goes here. {' '}
          <span className='decoration-[#F7AB0A]/50 underline'>There it is.</span>
        </h4>
      </div>
    </div>
  )
}

export default ContactMe