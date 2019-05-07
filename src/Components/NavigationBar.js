import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDrawer from './SmallNavBar.js'

class NavigationBar extends React.Component {
  
  state = {
    value: 0,
    working: false
  };
  handleChange = (event, value) => {
    this.setState({ value });
    console.log(this.state);
  };

  // handleClick = () => {
  //   this.setState({ working: !this.state.working },
  // }
  render() {

    return (
        <div>
          <div className="navbarcenter">
            <div 
              className="navbar"
              value={this.state.value}
              onChange={this.handleChange}
              >
              <ul>
                <li><NavLink className="navLink navLink1" exact to="/">Map</NavLink></li>
                <li><NavLink className="navLink navLink2" to="/prediction/">PREDICTION</NavLink></li>
                <li><NavLink className="navLink navLink3" to="/about/">ABOUT</NavLink></li>
                <li><NavLink className="navLink navLink4" to="/contact/">CONTACT</NavLink></li>
                {/* <hr /> */}
              </ul>
            </div>
          </div>
          <NavDrawer /> 
        </div>
    );
  }
}

export default NavigationBar;