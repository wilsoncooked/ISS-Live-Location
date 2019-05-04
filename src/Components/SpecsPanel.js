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
    opacity: '0.85',
    paddingLeft: '20px',
    boxShadow: '0px -1px 50px rgba(163, 10, 252, 0.25)'
    // border: '2px solid yellow',
  },
  expansionbutton: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    color: 'Yellow'
  },
  expansionhidden: {
    height: '30vh',
  },
  expansiontable: {
    height: '100%',
    width: '100%',
    textAlign: 'left',
    color: 'Yellow'
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
        <ExpansionPanelDetails className={classes.expansionhidden}>
          <table className={classes.expansiontable}>
            <tr>
              <td>Height: </td>
              <td>Longitude: </td>
              <td>Latitude: </td>
            </tr>
            <tr>
              <td>Evelation </td>
              <td>Speed: </td>
              <td>RA: </td>
            </tr>
            <tr>
              <td>Local Time: </td>
              <td>UTC Time: </td>
              <td>POB: </td>
            </tr>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SpecsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecsPanel);