import React, { Component } from 'react'
import './App.css'
<<<<<<< HEAD
import LandingPage from './Components/LandingPage'
=======
import IssApi from './Components/IssApi.js'
import NightMap from './Components/NightMap.js'
import Themes from './Themes'
import { MuiThemeProvider } from '@material-ui/core/styles';
>>>>>>> 8e89a6219945741741a0060203a591d1c5b5d6e1

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      <LandingPage />
      </div>
=======
      <MuiThemeProvider theme={Themes}>
        <div className="App">
          <IssApi />  
          <NightMap />
        </div>
      </MuiThemeProvider>
>>>>>>> 8e89a6219945741741a0060203a591d1c5b5d6e1
    );
  }
}

export default App
