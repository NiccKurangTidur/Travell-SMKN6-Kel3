import React from 'react'

import Kalimantan from '../assets/kalimantan.jpg';
import Sulawesi from '../assets/sulawesi.jpg';
import Bali from '../assets/bali.jpg';
import Jawa from '../assets/prambanan.jpg';
import Papua from '../assets/Papua.jpg';
import Sumatra from '../assets/sumatra.jpg';
import SelectsCard from './SelectCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        

    <SelectsCard bg={Kalimantan} text='Kalimantan' />
    <SelectsCard bg={Sulawesi} text='Sulawesi' />
    <SelectsCard bg={Bali} text='Bali' />
    <SelectsCard bg={Jawa} text='Jawa' />
    <SelectsCard bg={Papua} text='Papua' />
    <SelectsCard bg={Sumatra} text='Sumatra' />
    
        
    </div>
  )
}

export default Selects