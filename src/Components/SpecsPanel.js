import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import PeopleInSpace from './PeopleInSpace.js'

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
    textAlign: 'center',
    minWidth: '100px',
    maxWidth: '200px'
  },
  spanData: {
    fontSize: '1.3em',
    textShadow: '1px 1px 10px rgba(176, 196, 222, 0.5)'
  },
  title: {
    margin: '0px',
    fontSize: '0.9em',
    color: 'orange'
  }
});

class SpecsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
      isWorking: false
    };
  }

  componentDidMount() {
    this.setState({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    })
    this.setState({isWorking: true})
  }
  
  componentDidUpdate() {
    if (this.state.isWorking === true) {
      this.interval = setInterval(() => 
      this.setState({       
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(), 
      }), 1000);
      this.setState({isWorking: false})
    }
  }
  
  componentWillUnmount() {
    console.log('DESTROYED!!!')
    clearInterval(this.interval)  
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
            <div className={classes.specsItem}>
              <p  className={classes.title}>Avg Height:</p>
              <span className={classes.spanData}>408.5 km</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Longitude:</p>
              <span className={classes.spanData}>{this.props.sateliteLocation.longitude}</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Latitude:</p>
              <span className={classes.spanData}>{this.props.sateliteLocation.latitude}</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Speed:</p>
              <span className={classes.spanData}>7.66 km/s</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Orbit time:</p>
              <span className={classes.spanData}>92.68</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Orbits p/d:</p>
              <span className={classes.spanData}>15.54</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Local Time:</p>
              <span className={classes.spanData}>{this.state.hour}:{this.state.minute}:{this.state.second}</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>People in Space:</p>
              <span className={classes.spanData}>{this.props.peopleInSpace.numberOfPeople}</span>
            </div>
            <div className={classes.specsItem}>
              <p  className={classes.title}>Years in Orbit:</p>
              <span className={classes.spanData}>20y 5m</span>
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