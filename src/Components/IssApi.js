import React from 'react';
import NightMap from './NightMap.js';
import SpecsPanel from './SpecsPanel';
import UserLocation from './UserLocation';

class IssApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iss_position: {},
      // Using fake data.
      user_position: { latitude: '52.5', longitude: '13.4' },
      numberOfPeople: '',
      people: {},
      isLoaded: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(props) {
    this.fetchSpaceStation()
    console.log(this.props)
    console.log(`handleUpdate ${this.fetchSpaceStation()}`)
  }

  componentDidMount() {
    this.fetchSpaceStation();
    this.interval = setInterval(() => this.fetchSpaceStation(), 1000);
  }

  fetchSpaceStation = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          iss_position: data.iss_position,
          isLoaded: true
        }))
      .catch(() => console.log('error'))
      .then(fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          numberOfPeople: data.number,
          people: data.people,
          isLoaded: true
        }))
      .catch(() => console.log('error')))
      console.log(this.state.numberOfPeople)
}

  render() {
    return (
      <div>
        <NightMap 
              sateliteLocation={this.state.iss_position}
              userLocation={this.state.user_position}/>
        <SpecsPanel 
              sateliteLocation={this.state.iss_position} 
              numberOfPeople={this.state.numberOfPeople}
              people={this.state.people}
          />
        <UserLocation Geolocation={this.props.isGeolocationEnabled} />
      </div>
    )
  }
}

export default IssApi;