import React, { Component } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import { MuiThemeProvider } from '@material-ui/core/styles';


class App extends Component {
  render() {
    return (
      <div>
       <MuiThemeProvider>
        <div className="App">
        <LandingPage />
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App
