import React from 'react';
import NightMap from './NightMap.js';
import SpecsPanel from './SpecsPanel'
import UserLocation from './UserLocation.js';

class IssApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iss_position: {},
      isLoaded: false
    };
  }
  componentDidMount() {
    this.fetchSpaceStation();
    this.interval = setInterval(() => this.fetchSpaceStation(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchSpaceStation = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          iss_position: data.iss_position,
          isLoaded: true
        }))
  }

  render() {
    return (
      <div>
        <NightMap sateliteLocation={this.state.iss_position} />
        <SpecsPanel sateliteLocation={this.state.iss_position} />
        <UserLocation Geolocation={this.props.isGeolocationEnabled} />
      </div>
    )
  }
}

export default IssApi;