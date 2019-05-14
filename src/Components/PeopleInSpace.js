import React from 'react';

class PeopleInSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: '1',
      people: [],
      isLoaded: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.fetchSpaceStation = this.fetchSpaceStation.bind(this);
  }

  handleUpdate() {
    this.fetchPeopleInSpace()
    console.log(this.state.number)
    // console.log(this.fetchPeopleInSpace())
  }

  componentDidMount() {
    this.fetchPeopleInSpace();
    this.interval = setInterval(() => this.fetchPeopleInSpace(), 10000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  fetchPeopleInSpace = () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          number: data.number,
          people: data.people,
          isLoaded: true
        }))
      .catch(() => console.log('error'))
      console.log(this.state.number)
  }



  render() {

    return (
      <div>
      </div>
    )
  }
}

export default PeopleInSpace;