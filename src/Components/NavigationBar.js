import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
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
      <Paper  
      BackdropProps={{
        classes: {
         root: classes.root
        }
       }
      }>
        <Tabs
                BackdropProps={{
                  classes: {
                   root: classes.root
                  }
                 }
                }
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One"
          style={{color: '#ffda07'}}/>
          <Tab label="Item Two" 
          style={{color: '#ffda07'}}/>
          <Tab label="Item Three" 
          style={{color: '#ffda07'}}/>
        </Tabs>
      </Paper>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);