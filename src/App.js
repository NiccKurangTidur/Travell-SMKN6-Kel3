import React from 'react';
import Home from './page/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './page/Destinations';
import Travel from './page/Travel';
import View from './page/View';
import Team from './page/Team';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </Router>
  );
}

export default App;
