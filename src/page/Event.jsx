import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroEvent from '../components/HeroEvent';

const Event = () => {

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
              <Link to="/event" className="hover:text-gray-700">Event</Link>
            </li>
          </ol>
        </nav>
      <Footer />
    </div>
  );
};

export default Event;
