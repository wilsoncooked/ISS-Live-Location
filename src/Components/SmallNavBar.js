import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

class NavDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <List className="smallNavList">
            <NavLink className="navLinksm" to="/">MAP</NavLink>
            <NavLink className="navLinksm" to="/about/">ABOUT</NavLink>
            <NavLink className="navLinksm" to="/contact/">CONTACT</NavLink>
        </List>
      </div>
    );

    return (
      <div>
        <div
            className="hamburger" 
            onClick={this.toggleDrawer('right', true)}>
            <div className='hamburgerLine'></div>
            <div className='hamburgerLine'></div>
            <div className='hamburgerLine'></div>
            </div>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            className='wholePageNav'
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
           {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (NavDrawer);
