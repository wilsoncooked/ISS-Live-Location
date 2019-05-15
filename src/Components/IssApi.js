import React from 'react';
import NightMap from './NightMap.js';
import SpecsPanel from './SpecsPanel';
import PeopleAPI from './PeopleAPI.js';

class IssApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iss_position: {},
      numberOfPeople: '',
      people: null,
      isLoaded: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(props) {
    this.fetchSpaceStation()
  }

  componentDidMount() {
    this.fetchSpaceStation();
    this.interval = setInterval(() => this.fetchSpaceStation(), 1000);
  }

  fetchSpaceStation = () => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data =>
        this.setState({
          iss_position: {
            latitude: data.latitude,
            longitude: data.longitude
          },
          isLoaded: true
        }))
      .catch(() => console.log('Error fetching satellite data.'))
      .then(fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          numberOfPeople: data.number,
          people: data.people,
          isLoaded: true
        }))
      .catch(() => console.log('Error fetching astros data.')))
}


  render() {
    return (
      <div>
        <NightMap 
              sateliteLocation={this.state.iss_position}
              userLocation={this.props.userLocation}/>
        <SpecsPanel 
              sateliteLocation={this.state.iss_position} 
              numberOfPeople={this.state.numberOfPeople}
          />
        <PeopleAPI 
              people={this.state.people}
          />
      </div>
    )
  }
}

export default IssApi;