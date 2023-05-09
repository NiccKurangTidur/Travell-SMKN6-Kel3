import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destinations/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
