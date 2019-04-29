import React, { Component } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar.js'
import NightMap from './Components/NightMap.js'
import Themes from './Themes'
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Themes}> 
        <div className="App">
          <NavigationBar />
          <NightMap />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
