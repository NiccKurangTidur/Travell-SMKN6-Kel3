import React from 'react';
import Hero2 from '../../components/Hero2';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Indonesia from '../../assets/indonesia.png';

const LabuanBajo = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 className="text-6xl mt-14 mx-14 font-bold mb-8">Pesona Pulau Dewata dan Nusa Tenggara</h1>
        <img className='mx-14' src={Indonesia} alt="Indonesia" style={{ margin: 'auto' }} />
        <p className="mx-14 border-b mb-14 pb-4">Peta Indonesia</p>
        <div className="grid mx-14 grid-cols-1 md:grid-cols-3 gap-4"></div>
    </div>

      <Footer />
    </div>
  );
};

export default LabuanBajo;
