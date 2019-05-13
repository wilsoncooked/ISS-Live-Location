import React from 'react';
import '../Styles/LandingPage.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  fullPage: {
    width: '100vw',
    height: '100vh',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    bottom: true
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;


    return (
      <div>
        <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            <div className={classes.fullPage}>
            <div className="landingContainer">
                <div className="planet"></div>
                <div className="gravity">
                    <div className="satellite"></div>
                </div>
                {/* <div className="buttonContainer"> */}
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <button
                      className="actionbutton"
                      onClick={this.toggleDrawer('bottom', true)}
                  >
                      EXPLORE
                  </button>
                {/* </div> */}
                </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);