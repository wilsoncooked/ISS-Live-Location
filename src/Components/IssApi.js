import React from 'react';
import NightMap from './NightMap.js';
import SpecsPanel from './SpecsPanel';
import PeopleInSpace from './PeopleInSpace';

class IssApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iss_position: {},
      isLoaded: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.fetchSpaceStation = this.fetchSpaceStation.bind(this);
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

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  fetchSpaceStation = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          iss_position: data.iss_position,
          isLoaded: true
        }))
      .catch(() => console.log('error'))
  }



  render() {
    return (
      <div>
        <NightMap sateliteLocation={this.state.iss_position} />
        <SpecsPanel sateliteLocation={this.state.iss_position} 
          number={this.props.number}
          />
        <PeopleInSpace />
      </div>
    )
  }
}

export default IssApi;