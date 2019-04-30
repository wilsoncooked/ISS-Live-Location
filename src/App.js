import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IssApi from './Components/IssApi.js'
import NightMap from './Components/NightMap.js'
import Themes from './Themes'
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={Themes}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/map" component={MainMap}/>
            <Route path="/prediction" component={Prediction}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <IssApi />  
          <NightMap />
        </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App
