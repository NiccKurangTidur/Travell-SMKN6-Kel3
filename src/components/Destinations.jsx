import React from 'react'
import { Link } from 'react-router-dom'; 

import bali from '../assets/bali.jpg';
import sulawesi from '../assets/sulawesi.jpg'
import bromo from '../assets/bromo.jpg';
import papua from '../assets/Papua.jpg';
import prambanan from '../assets/prambanan.jpg';


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>Best tourist attractions in Indonesia</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <Link to="CBali">
                <img className='w-full h-full object-cover' src={bali} alt="Bali" />
            </Link>
            <Link to="CSulawesi">
                <img className='w-full h-full object-cover' src={sulawesi} alt="Sulawesi" />
            </Link>
            <Link to="CJawa">
                <img className='w-full h-full object-cover' src={bromo} alt="Bromo" />
            </Link>
            <Link to="CPapua">
                <img className='w-full h-full object-cover' src={papua} alt="Papua" />
            </Link>
            <Link to="CJawa">
                <img className='w-full h-full object-cover' src={prambanan} alt="Prambanan" />
            </Link>
        </div>
    </div>
  )
} 

export default Destinations
