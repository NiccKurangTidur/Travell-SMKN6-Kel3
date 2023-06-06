import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Destinations from './Destinations';
import Bali from './Bali';
import Borobudur from './Borobudur';
import Bromo from './Bromo';
import LabuanBajo from './LabuanBajo';
import Prambanan from './Prambanan';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Destinations} />
      <Route path="/bali" component={Bali} />
      <Route path="/borobudur" component={Borobudur} />
      <Route path="/bromo" component={Bromo} />
      <Route path="/labuanbajo" component={LabuanBajo} />
      <Route path="/prambanan" component={Prambanan} />
    </Router>
  );
};

export default App;
