import React from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Contact from './Contact';
import NoMatch from './NoMatch';

import {
  Route,
  Switch
} from 'react-router-dom'

const ContentSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
    <Route path="/contact" component={Contact}/>
    <Route component={NoMatch}/>
  </Switch>
)

export default ContentSwitch;
