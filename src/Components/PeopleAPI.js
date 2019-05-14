import React from 'react';

class PeopleAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({show: !this.state.show})
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <button 
                className="peopleButton"
                onClick={() => this.toggleMenu()}
                >
                Who's In Space?</button>
                <div className={this.state.show? 'people' : 'notpeople'}>
                    {this.props.people ? this.props.people.map((item) => <div className="peopleBox"><p className="peopleList">{item.name}</p></div>)
                    : <div className="notloaded"></div> }
                </div>
            </div>

        )
    }
 }

 export default PeopleAPI;