import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH FRONTENT PROGRAMING</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Javascript</h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font bold py-4'>Fast, flexible coding for</p>
              <ReactTyped
              className='md:text-xl sm:text-4xl text-xl font bold md:pl-4 p-2' 
              strings={[' HTML','CSS', 'JAVASRIPT' ]}  
              typeSpeed={120}
              backSpeed={140}
              loop />
            </div>
            <p className='md:text-2xl text-2xl text-gray-400'>Monitor your progress to increase your skill in HTML, CSS, JAVASCRIPT</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-xl text-black ' >Get Started</button>
        </div>
    </div>
  ) 
}

export default Hero;