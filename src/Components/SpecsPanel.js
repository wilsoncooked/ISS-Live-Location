import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
    boxShadow: '0px -1px 20px rgba(163, 10, 252, 0.2)'
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
  expansiontable: {
    height: '30vh',
    width: '95%',
    textAlign: 'left',
    color: '#efe099',
    fontSize: '0.8em',
    borderSpacing: '10px',
    marginBottom: '25px',
  },
  tablebox: {
    backgroundColor: 'rgba(48, 24, 104, 0.1)', 
    boxShadow: '0px 0px 40px rgba(139, 23, 81, 0.2)',
    borderRadius: '5px',
    paddingLeft: '10px',
  }
});

function SpecsPanel (props) {
  const { classes } = props;
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
          <table className={classes.expansiontable}>
            <tr>
              <td  className={classes.tablebox}>Height: 123456</td>
              <td  className={classes.tablebox}>Longitude: 123456</td>
              <td  className={classes.tablebox}>Latitude: 123456</td>
            </tr>
            <tr>
              <td  className={classes.tablebox}>Evelation 123456</td>
              <td  className={classes.tablebox}>Speed: 123456</td>
              <td  className={classes.tablebox}>Rotate: 123456</td>
            </tr>
            <tr>
              <td  className={classes.tablebox}>Local Time: 123456</td>
              <td  className={classes.tablebox}>UTC Time: 123456</td>
              <td  className={classes.tablebox}>POB: 123456</td>
            </tr>
          </table>
      </ExpansionPanel>
    </div>
  );
}

SpecsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecsPanel);