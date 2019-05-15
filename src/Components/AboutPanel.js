import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import ISS from '../Photos/ISS.jpg';
import '../Styles/About.css';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: '1001 !important',
    background: 'linear-gradient(135deg, #640c4d 30%, #28183E 90%)',
    padding: '0',
    overflowY: 'auto',
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
  },
  title: {
    color: '#f0c740',
    padding: '20px',
    fontSize: '2.7em',
    fontWeight: '200',
    textShadow: '0px 0px 20px rgba(229, 128, 207, 0.7)',
    letterSpacing: '5px',
  },
  cssLabel: {
    color: 'rgba(236, 214, 85, 0.5)',
    fontWeight: '100',
    textSpacing: '2.5em',
    fontSize: '1.2em',
    letterSpacing: '0.2em',
    '&$cssFocused': {
      color: '#f0c740',
    },
  },
});

function AboutPanel(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div className="parent-header-container">
          <div className="child-header-container" >
            <h3 className={classes.title}>International Space Station</h3>
          </div>
        </div>
        <div className="parent-container">
          <div className="child-container">
            <img className="photo" src={ISS} alt="ISS" />
          </div>
          <div className="child-container">
            <p className="text-styles">The International Space Station (ISS) is an unparalleled international scientific and technological cooperative venture that will usher in a new era of human space exploration and research and provide benefits to people on Earth.</p>
            <p>By <a className="text-styles" target="_blank" rel="noopener noreferrer" href="https://www.nasa.gov/">NASA</a></p>
          </div>
        </div>
        <div className="footer-container">
          <div className="text-styles">
            <span>Copyright &copy; 2019 </span>
            <a className="text-styles" target="_blank" rel="noopener noreferrer" href="https://github.com/Wils0nC00k">Sarah Wilsoncook</a>
            <span> and</span>
            <a className="text-styles" target="_blank" rel="noopener noreferrer" href="https://github.com/nelidiakonidze">Neli Diakonidze</a>
          </div>
        </div>
        <NavLink className={classes.cross} exact to="/">X</NavLink>
      </Paper>
    </div>
  );
}

AboutPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPanel);