import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { light } from '@material-ui/core/styles/createPalette';

const styles = theme => ({
  root: {
    width: '100vw',
    height: '50vh',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansion: {
    backgroundColor: '#1e204d',
    margin: '0px',
    color: "primary"
  },
  content: {
    backgroundColor: '#1e204d',
    width: '93vw'
  }
});

function SpecsExpansion (props) {
  const { classes } = props;
  return (
    <div className='expansion-panel'>
      <ExpansionPanel >
        <ExpansionPanelSummary className={classes.expansion} expandIcon={<ExpandMoreIcon />}>
            <Typography>La lA</Typography>
          </ExpansionPanelSummary>
        <ExpansionPanelDetails className={`${classes.content} colorPrimary`}>
          <Typography>la la</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SpecsExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecsExpansion);