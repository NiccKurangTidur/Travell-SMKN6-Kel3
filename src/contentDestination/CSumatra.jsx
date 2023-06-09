import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero2 from '../components/Hero2';
import Navbar from '../components/Navbar';
import CarouselBali from '../components/CarouselDestination/CarouselBali';
import Footer from '../components/Footer';
import Indonesia from '../assets/indonesia.png';

//image
import LabuanBajo from '../assets/labuanBajo2.jpg';
import LabuanBajo2 from '../assets/labuanbajo.jpg';
import NusaDua from '../assets/nusaDua .jpg';
import TanahLot from '../assets/tanahLot.jpg';
import Uluwatu from '../assets/uluwatu.jpeg';
import Denpasar from '../assets/bali.jpg';


const CSumatra = () => {
  const allImages = [
    { name: 'Labuan Bajo', url: LabuanBajo, path: '/labuanbajo' },
    { name: 'Nusa Dua', url: NusaDua, path: '/nusadua' },
    { name: 'Tanah Lot', url: TanahLot, path: '/tanahlot' },
    { name: 'Uluwatu', url: Uluwatu, path: '/uluwatu' },
    { name: 'Denpasar', url: Denpasar, path: '/denpasar' },
    { name: 'Labuan Bajo', url: LabuanBajo2, path: '/labuanbajo' },
    { name: 'Nusa Dua', url: NusaDua, path: '/nusadua' },
    { name: 'Tanah Lot', url: TanahLot, path: '/tanahlot' },
    { name: 'Denpasar', url: Denpasar, path: '/denpasar' },
    { name: 'Uluwatu', url: Uluwatu, path: '/uluwatu' },
  ];

  const [topImages, setTopImages] = useState(allImages.slice(0, 5));
  const [bottomImages, setBottomImages] = useState([]);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleNextButtonClick = () => {
    const currentLength = topImages.length + bottomImages.length;
    const nextImages = allImages.slice(currentLength, currentLength + 5);

    if (currentLength + 5 >= allImages.length) {
      setShowNextButton(false);
    }

    if (topImages.length < 5) {
      setTopImages((prevImages) => [...prevImages, ...nextImages]);
    } else {
      setBottomImages((prevImages) => [...prevImages, ...nextImages]);
    }
  };

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
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
            <Link to="/destinations" className="hover:text-gray-700">Destinations</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/cbali" className="hover:text-gray-700">Sumatra</Link>
          </li>
        </ol>
      </nav>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="text-6xl mt-14 font-bold mb-8">The Charm of the Island of the Gods and Nusa Tenggara</h1>
          <img className='mx-14' src={Indonesia} alt="Indonesia" style={{ margin: 'auto' }} />
          <p className="mx-14 border-b mb-14 pb-4">A row of beautiful and charming aduhai beaches can only be found along the island of Bali and Nusa Tenggara. Find interesting information below!</p>
          <div className="grid mx-14 grid-cols-1 md:grid-cols-3 gap-4"></div>

          <h2 className='text-left text-3xl mx-14 font-bold'>Explore Bali through the area/city</h2>
          <div className="flex flex-wrap justify-center">
            {topImages.map((image, index) => (
              <Link to={image.path} key={index}>
                <div className="w-40 h-56 m-4 mx-5 relative">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover rounded-md transition-all duration-300 transform hover:scale-105"
                  />
                  <p className="absolute inset-x-0 bottom-0 bg-opacity-75 text-white py-2 text-center bg-transparent">{image.name}</p>
                </div>
              </Link>
            ))}
          </div>

          {bottomImages.length > 0 && (
            <div className="flex flex-wrap justify-center mt-10">
              {bottomImages.map((image, index) => (
                <Link to={image.path} key={index}>
                  <div className="w-40 h-56 m-4 mx-5 relative">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-cover rounded-md transition-all duration-300 transform hover:scale-105"
                    />
                    <p className="absolute inset-x-0 bottom-0 bg-opacity-75 text-white py-2 text-center bg-transparent">{image.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {showNextButton && (
            <button
              className="bg-blue-500 w-min justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto"
              onClick={handleNextButtonClick}
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
      <h2 className='text-left text-3xl mx-14 -mb-14 mt-14 font-bold'>Adventure Story</h2>

      <CarouselBali />
      <Footer />
    </div>
  );
};

export default CSumatra;
