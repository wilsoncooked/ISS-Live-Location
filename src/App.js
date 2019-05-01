import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import IssApi from './Components/IssApi.js';
import LandingPage from './Components/LandingPage'
import MainMap from './Components/MainMap.js';
import NavigationBar from './Components/NavigationBar.js';
import NightMap from './Components/NightMap.js';
import Prediction from './Components/Prediction.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/map" component={MainMap} />
            <Route path="/prediction" component={Prediction} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <IssApi />
          <NightMap />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
