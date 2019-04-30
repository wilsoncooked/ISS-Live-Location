import React from 'react';

class IssApi extends React.Component {
    constructor(props) {
        super(props);
        this.state  =  {
            iss_position: [],
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
            this.setState ({
                iss_position: data.iss_position,
                isLoaded: true
            }))
        }
        
    render () {
        console.log(this.state.iss_position)
        return (
            <div className="spaceSation">
                
            </div>
        )
    }
}

export default IssApi;