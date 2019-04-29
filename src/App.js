import React, { Component } from 'react'
import './App.css'
import NightMap from './Components/NightMap.js'
import Themes from './Themes'
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Themes}>
        <div className="App">
          <NightMap />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
