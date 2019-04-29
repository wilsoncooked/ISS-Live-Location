import React, { Component } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar.js'
import NightMap from './Components/NightMap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />
      <NightMap />
      </div>
    );
  }
}

export default App
