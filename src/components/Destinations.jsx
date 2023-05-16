import React from 'react'

import bali from '../assets/bali.jpg';
import borobudur from '../assets/borobudur.jpg';
import bromo from '../assets/bromo.jpg';
import labuanbajo from '../assets/labuanbajo.jpg';
import prambanan from '../assets/prambanan.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1><br/>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          More Info</button>
        <p className='py-4'>Best tourist attractions in Indonesia</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bali} alt="/" />
            <img className='w-full h-full object-cover' src={borobudur} alt="/" />
            <img className='w-full h-full object-cover' src={bromo} alt="/" />
            <img className='w-full h-full object-cover' src={labuanbajo} alt="/" />
            <img className='w-full h-full object-cover' src={prambanan} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations