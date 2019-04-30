import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from  './Components/About.js';
import Contact from  './Components/Contact.js';
import IssApi from './Components/IssApi.js';
import Home from './Components/Home.js';
import MainMap from  './Components/MainMap.js';
import NavigationBar from './Components/NavigationBar.js';
import NightMap from './Components/NightMap.js';
import Prediction from  './Components/Prediction.js';
import Themes from './Themes';
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (

            <div className="App">
              <NightMap />
            </div>

    );
  }
}

export default App
