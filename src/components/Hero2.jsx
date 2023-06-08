import React from 'react';
import Prambanan from '../assets/prambanan.jpg';

const Hero2 = () => {
  return (
    <div className="w-full h-screen  relative">
      <img
        className="w-full h-full object-cover"
        src={Prambanan}
        alt="Prambanan"
      />
    </div>
  );
};

export default Hero2;
