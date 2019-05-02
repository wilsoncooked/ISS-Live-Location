import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AppPages/About.js';
import Contact from './AppPages/Contact.js';
import IssApi from './Components/IssApi.js';
import Home from './AppPages/Home.js'
import NavigationBar from './Components/NavigationBar.js';
import NightMap from './Components/NightMap.js';
import Prediction from './AppPages/Prediction.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
<<<<<<< HEAD
          <Switch>
            <Route exact path="/" component={Home} />
=======
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={MainMap} />
>>>>>>> 775733857155a364844db4f66fa4da0d7f12eeb5
            <Route path="/prediction" component={Prediction} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <IssApi />
<<<<<<< HEAD
          <NavigationBar />
=======
>>>>>>> 775733857155a364844db4f66fa4da0d7f12eeb5
          <NightMap />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
