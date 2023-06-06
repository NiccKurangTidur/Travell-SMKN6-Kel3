import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Nico from '../assets/nico.jpg';

const TeamMember = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-36 h-36 m-20 rounded-full mb-2" />
      <p className="text-center">{name}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: 'Deshea Nico', image: Nico },
    { name: 'Dewi Septiani', image: Nico },
    { name: 'Mustofa Ali', image: Nico },
    { name: 'Runa Aulia', image: Nico },
    { name: 'Aira Desta', image: Nico },
    { name: 'Raditya Abdee', image: Nico },
    { name: 'Shoffiyah A', image: Nico },
  ];

  const topThreeMembers = teamMembers.slice(0, 3);
  const bottomFourMembers = teamMembers.slice(3);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="flex flex-wrap justify-center">
        {topThreeMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} image={member.image} />
        ))}
      </div>
      <hr className="my-8" />
      <div className="flex flex-wrap justify-center">
        {bottomFourMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} image={member.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
