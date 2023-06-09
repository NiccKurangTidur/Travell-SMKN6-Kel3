import React from 'react';
import { Link } from 'react-router-dom';

import bali from '../assets/bali.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroEvent from '../components/HeroEvent';

import Prambanan from '../assets/prambanan.jpg';
import Sumatra from '../assets/sumatra.jpg';
import Sulawesi from '../assets/sulawesi.jpg';
import Kalimantan from '../assets/kalimantan.jpg';
import Papua from '../assets/Papua.jpg';

const Event = () => {
  const destinations = [
    {
      name: 'Bali',
      image: bali,
      description: 'Explore the beautiful beaches and vibrant culture of Bali.',
      path: 'Cbali'
    },
    {
      name: 'Jawa',
      image: Prambanan,
      description: 'Visit and explore the beauty of Java island.',
      path: 'CJawa'
    },
    {
      name: 'Sulawesi',
      image: Sulawesi,
      description: 'Visit the iconic Komodo Island and witness the Komodo dragons.',
      path: 'CSulawesi'
    },
    {
      name: 'Sumatra',
      image: Sumatra,
      description: 'Discover the breathtaking beauty of Labuan Bajo and its surrounding islands.',
      path: 'CSumatra'
    },
    {
      name: 'Maluku & Papua',
      image: Papua,
      description: 'Explore the ancient Borobudur temple and its historical significance.',
      path: 'CPapua'
    },
    {
      name: 'Kalimantan',
      image: Kalimantan,
      description: 'Experience the mesmerizing sunrise at Mount Bromo.',
      path: 'CKalimantan'
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroEvent />

      <nav className="mx-14 mb-4">
          <ol className="flex items-center text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-gray-700">Destinations</Link>
            </li>
          </ol>
        </nav>

      <div>
       <h1 className="text-6xl mt-14 mx-14 font-bold mb-8 text-justify">
       The beauty of Indonesia's charm that makes it a must-explore
      </h1>s
        <p className="mx-14 border-b mb-14 pb-4">With a cluster of islands stretching from Sabang to Merauke, Indonesia offers a diverse range of natural, cultural, and culinary attractions that are truly enticing. The warm hospitality of the local people makes travelers feel comfortable and at home, and the introduction of authentic traditional customs further enhances the beauty of the experience. In addition, the enchanting wealth of rare flora and fauna adds another exciting element to the list of best experiences that can be enjoyed while exploring Indonesia. All of these beauties can only be found #DiIndonesiaAja.</p>

        

        <div className="grid mx-14 grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((destination, index) => (
            <Link key={index} to={`/${destination.path}`}>
              <div className="bg-white rounded-lg shadow-md">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-40 object-cover rounded-t-lg transition-all duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl font-semibold">View Details</p>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
                  <p className="text-gray-600 border-b pb-2">{destination.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
