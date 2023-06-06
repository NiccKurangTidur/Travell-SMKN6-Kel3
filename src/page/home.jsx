import React from 'react';
import "../index.css";
import Carousel from '../components/Carousel';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Search from '../components/Search';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Destinations/>
        <Search/>
        <Carousel/>
        <Footer/>
    </>
  )
}

export default Home;