import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AppPages/About.js';
import Contact from './AppPages/Contact.js';
import IssApi from './Components/IssApi.js';
import Home from './AppPages/Home.js'
// import NavigationBar from './Components/NavigationBar.js';
import Prediction from './AppPages/Prediction.js';
// import LandingPage from './Components/LandingPage.js'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <LandingPage /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/prediction" component={Prediction} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
            {/* <NavigationBar /> */}
            <SpecsPanel />
            <IssApi />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
