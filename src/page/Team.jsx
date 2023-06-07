import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import Nico from '../assets/nico.jpg';

const TeamMember = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-36 h-36 m-4 md:w-48 md:h-48 rounded-full mb-2" />
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero2 />

      <nav className="mx-14 mb-4">
          <ol className="flex items-center text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/team" className="hover:text-gray-700">Team</Link>
            </li>
          </ol>
        </nav>


      <div className="flex-grow">
        <div className="container mx-auto py-8">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
