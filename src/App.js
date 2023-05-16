import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
      <SignIn />
      <hr className="my-8" />
      </div>
      </div>
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
