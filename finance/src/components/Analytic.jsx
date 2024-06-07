import React from 'react'
import Laptop from '../assets/laptop.png'
const Analytic = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md: grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>CODING ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Coding Analytic centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro dicta ullam aperiam sint assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore, nulla odio eum maxime dolores culpa amet, similique iusto sed dicta quas consequuntur aut veniam libero quam incidunt recusandae! Error.</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytic