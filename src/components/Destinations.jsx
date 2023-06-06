import React from 'react';
import { Link } from 'react-router-dom';
import bali from '../assets/bali.jpg';
import borobudur from '../assets/borobudur.jpg';
import bromo from '../assets/bromo.jpg';
import labuanbajo from '../assets/labuanbajo.jpg';
import prambanan from '../assets/prambanan.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>Best tourist attractions in Indonesia</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <Link to=''>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bali} alt='Bali' />
        </Link>
        <Link to=''>
          <img className='w-full h-full object-cover' src={borobudur} alt='Borobudur' />
        </Link>
        <Link to=''>
          <img className='w-full h-full object-cover' src={bromo} alt='Bromo' />
        </Link>
        <Link to=''>
          <img className='w-full h-full object-cover' src={labuanbajo} alt='Labuan Bajo' />
        </Link>
        <Link to=''>
          <img className='w-full h-full object-cover' src={prambanan} alt='Prambanan' />
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
