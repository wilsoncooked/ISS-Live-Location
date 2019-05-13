import React from 'react';
import SpecsPanel from './SpecsPanel'

class Altitude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      altitude: {},
      isLoaded: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.fetchSpaceStation = this.fetchSpaceStation.bind(this);
  }

  handleUpdate(props) {
    this.fetchSpaceAltitude()
    console.log(`handleUpdate ${this.fetchSpaceAltitude()}`)
  }

  componentDidMount() {
    this.fetchSpaceAltitude();
    this.interval = setInterval(() => this.fetchSpaceAltitude(), 2000);
  }

  fetchSpaceAltitude = () => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data =>
        this.setState({
          altitude: data.altitide,
          isLoaded: true
        }))
      .catch(() => console.log('error'))

  }



  render() {
    return (
      <div>
        {/* <SpecsPanel 
            altitude={this.state.altitude}
        /> */}
      </div>
    )
  }
}

export default Altitude;