import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
      <paper>
            <Tabs 
              classes={{ root: classes.root}}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              style={{color: '#ffda07'}}/>
              <Tab label="Item Two" 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              style={{color: '#ffda07'}}/>
              <Tab label="Item Three" 
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              style={{color: '#ffda07'}}/>
            </Tabs>
        </paper>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);