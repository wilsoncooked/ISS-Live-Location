import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDrawer from './SmallNavBar.js'

class NavigationBar extends React.Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
        <div>
          <div className="navbarcenter">
            <div 
              className="navbar"
              value={this.state.value}
              onChange={this.handleChange}
              >
                <NavLink className="navLink" exact to="/">MAP</NavLink>
                <NavLink className="navLink" to="/prediction/">PREDICTION</NavLink>
                <NavLink className="navLink" to="/about/">ABOUT</NavLink>
                <NavLink className="navLink" to="/contact/">CONTACT</NavLink>
            </div>
          </div>
          <NavDrawer /> 
        </div>
    );
  }
}

export default NavigationBar;