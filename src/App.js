import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './page/Destination';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
// import Login from './HalamanLogin/login';
// import Register from './HalamanLogin/register';


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destinations/>
      <Search/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
