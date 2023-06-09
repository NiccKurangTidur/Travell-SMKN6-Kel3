import React from 'react';
import NusaDua from '../assets/sumatra.jpg';

const HeroEvent = () => {
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

export default HeroEvent;
