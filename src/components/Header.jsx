import React from 'react';
import {LOGO} from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-4 py-4 left-0 top-0 right-0  bg-gradient-to-b from-black'>
      <img src={LOGO} className='w-44' alt="" />
    </div>
  )
}

export default Header