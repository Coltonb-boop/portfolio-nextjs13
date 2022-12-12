import React from 'react';

import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className='flex flex-row items-center'>
        {/* Social icons */}
        <SocialIcon 
          url='https://github.com/Coltonb-boop'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://www.linkedin.com/in/colton-bitz-491aa157/'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>
      <div>
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>
    </header>
  )
}

export default Header