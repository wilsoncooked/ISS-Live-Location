import React, { Component } from 'react'
import './App.css'
import NightMap from './Components/NightMap.js'
import SpecsPanel from './Components/SpecsPanel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SpecsPanel />
      <NightMap />
      </div>
    );
  }
}

export default App
