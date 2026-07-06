import React from 'react'

import HeroText from './HeroText';
import ArrowText from './ArrowText';
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/4' >
        <HeroText/>
        <ArrowText/>
        
    </div>
  )
}

export default LeftContent