import React from 'react';
import NavLinks from './NavLinks'
import ContentSwitch from './ContentSwitch'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const MainApp = () => (
  <Router>
    <div className="App">
      <NavLinks />
      <hr/>
      <ContentSwitch />
    </div>
  </Router>
)

export default MainApp;
