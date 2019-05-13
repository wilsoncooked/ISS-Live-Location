import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const styles = theme => ({
  root: {
  },
  expansion: {
    position: 'fixed',
    bottom: '0px',
    zIndex: '1000 !important',
    width: '98vw',
    padding: '0 1vw',
  },
  expansionvisable: {
    background: 'linear-gradient(135deg, #28183e 30%, #640c4d 90%)',
    opacity: '0.9',
    paddingLeft: '20px',
    boxShadow: '0px -1px 50px rgba(163, 10, 252, 0.25)'
    // border: '2px solid yellow',
  },
  expansionbutton: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    color: '#efe099'
  },
  expansionhidden: {
    border: '2px solid yellow',
  },
  specsDetails: {
    width: '95%',
    textAlign: 'left',
    color: '#efe099',
    fontSize: '0.8em',
    // borderSpacing: '10px',
    marginBottom: '25px',
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
  },
  specsItem: {
    backgroundColor: 'rgba(48, 24, 104, 0.1)', 
    boxShadow: '0px 0px 40px rgba(139, 23, 81, 0.2)',
    borderRadius: '5px',
    padding: '10px',
    minWidth: '100px',
    maxWidth: '200px'
  }
});

class SpecsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    render () {
      const { classes } = this.props;

      return (
      <div className={classes.expansion}>
      <ExpansionPanel className={classes.expansionvisable}>
        <ExpansionPanelSummary>
          <div  className={classes.expansionbutton}>
            <div>
              >
            </div>
          </div>
        </ExpansionPanelSummary>
          <div className={classes.specsDetails}>
            <div>
              <p className={classes.specsItem}>Height: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>Longitude: </p>
            </div>
            <div>
              <p  className={classes.specsItem}>Latitude: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>Evelation 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>Speed: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>Rotate: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>Local Time: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>UTC Time: 123456</p>
            </div>
            <div>
              <p className={classes.specsItem}>POB: 123456</p>
            </div>
          </div>
      </ExpansionPanel>
    </div>
      )
    }
}

SpecsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecsPanel);