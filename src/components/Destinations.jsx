import React from 'react';
import { Link } from 'react-router-dom';

import bali from '../assets/bali.jpg';
import pulaukomodo from '../assets/pulaukomodo.jpg';
import bromo from '../assets/bromo.jpg';
import papua from '../assets/Papua.jpg';
import prambanan from '../assets/prambanan.jpg';

const Destinations = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>Best tourist attractions in Indonesia</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <Link to='CBali'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg' src={bali} alt='Bali' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg'>Bali</p>
            </div>
          </div>
        </Link>
        <Link to='CSulawesi'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg' src={pulaukomodo} alt='Sulawesi' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg'>Pulau Komodo</p>
            </div>
          </div>
        </Link>
        <Link to='CJawa'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg' src={bromo} alt='Bromo' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg'>Bromo</p>
            </div>
          </div>
        </Link>
        <Link to='CPapua'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg' src={papua} alt='Papua' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg'>Papua</p>
            </div>
          </div>
        </Link>
        <Link to='CJawa'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg' src={prambanan} alt='Prambanan' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg'>Prambanan</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
