import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// page
import Home from './page/home';
import Destinations from './page/Destinations';
import Travel from './page/Travel';
import View from './page/View';
import Team from './page/Team';

// contentDestination
import CPapua from './contentDestination/CPapua';
import CJawa from './contentDestination/CJawa';
import CSulawesi from './contentDestination/CSulawesi';
import CSumatra from './contentDestination/CSumatra';
import CKalimantan from './contentDestination/CKalimantan';
import CBali from './contentDestination/CBali';

// contentIsiDestination
import LabuanBajo from './ContentIsiDestination/Bali/LabuanBajo';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/team" element={<Team/>} />
          
          {/* contentDestination */}
          <Route path="/cbali" element={<CBali/>} />
          <Route path="/cpapua" element={<CPapua/>}/>
          <Route path="/cjawa" element={<CJawa/>}/>
          <Route path="/csulawesi" element={<CSulawesi/>}/>
          <Route path="/csumatra" element={<CSumatra/>}/>
          <Route path="/ckalimantan" element={<CKalimantan/>}/>

          {/* contentIsiDestination */}
          <Route path="/labuanbajo" element={<LabuanBajo/>}/>

        </Routes>
      </Router>
  );
}

export default App;
