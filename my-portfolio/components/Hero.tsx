import React from 'react'
import { Spotlight } from './ui/spotlight'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className="">
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='white'/>
      </div>
      <div className='font-extrabold text-3xl text-blue-800'>Hello</div>
    </div>
  )
}

export default Hero