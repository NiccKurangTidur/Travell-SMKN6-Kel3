import React from 'react';
import "../index.css";
import Carousel from '../components/Carousel';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Selects from '../components/Select';
import TitleSelect from '../components/TitleSelect';


const Home = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <TitleSelect />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
