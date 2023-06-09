import React from 'react';
import NusaDua from '../assets/pulaukomodo.jpg';

const HeroAttractions = () => {
  return (
    <div className="w-full h-screen  relative">
      <img
        className="w-full h-full object-cover"
        src={NusaDua}
        alt="NusaDua"
      />
    </div>
  );
};

export default HeroAttractions;
