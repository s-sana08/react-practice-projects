import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div  className='h-full rounded-4xl  flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 '>
        <RightCard/>
        <RightCard/>
        <RightCard/>
       
    </div>
  )
}

export default RightContent