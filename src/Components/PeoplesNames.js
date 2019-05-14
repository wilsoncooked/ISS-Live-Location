import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    popover: { 
        // marign: '0px',
    },
    root: {
        // marign: '-10px',
        // padding: '0',
    },
    button: {
        color: 'orange',
        fontSize: '0.9em',
        textTransform: 'lowercase',
        textTransform: 'capitalize',
        paddingTop: '2px',
    },
});

class PeoplesNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div classname={classes.popover}>
        <div
            className={classes.button}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          People in Space:
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>        

            </MenuItem>
          {/* <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem> */}
        </Menu>

      </div>
    );
  }
}

PeoplesNames.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(PeoplesNames);


