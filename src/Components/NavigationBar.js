import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SmallNavBar from './SmallNavBar'

const styles = {
  root: {
    flexGrow: 1,
  }
};

class NavigationBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
        <div className="navbar">
          <div>
            <Tabs 
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab 
                label={<NavLink className="navLink" to="/">MAP</NavLink>} 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                style={{color: '#ffda07'}}
                />
              <Tab 
                label={<NavLink className="navLink" to="/prediction/">PREDICTION</NavLink>} 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                style={{color: '#ffda07'}}
                />
              <Tab 
                label={<NavLink className="navLink" to="/about/">ABOUT</NavLink>} 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                style={{color: '#ffda07'}}
                />
              <Tab 
                label={<NavLink className="navLink" to="/contact/">CONTACT</NavLink>} 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                style={{color: '#ffda07'}}
                />
            </Tabs>
          </div>
          <div>
            <SmallNavBar /> 
          </div>
        </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);