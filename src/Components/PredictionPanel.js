import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: '1005 !important',
      background: 'linear-gradient(135deg, rgba(52, 5, 252, 1) 30%, #28183E 90%)',
      padding: '0',
  },
  cross: {
    width: '30px',
    height: '30px',
    position: 'fixed',
    right: '25px',
    top: '20px',
    zIndex: '1002 !important',
    color: '#f0c740',
    fontSize: '2.5em',
    textAlign: 'right',
    textDecoration: 'none',
    textShadow: '0px 0px 20px rgba(229, 128, 207, 0.7)',
 }
});

function PredictionPanel(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
         <div >
            <NavLink className={classes.cross} exact to="/">X</NavLink>
        </div>  
      </Paper>
    </div>
  );
}

PredictionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PredictionPanel);