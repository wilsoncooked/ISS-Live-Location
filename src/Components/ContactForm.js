import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: '1001 !important',
    background: 'linear-gradient(135deg, #28183E 30%, #640c4d 90%)',
    padding: '0',
  },
  contactFormWrapper: {
    // width: '600px'
  },
  fieldSet: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
    width: '100vw'
  },
  TextField: {
    width: '80vw',
    background: 'rgba(161, 67, 141, 0.15)',
  },
  TextFieldComment: {
    width: '80vw',
    background: 'rgba(161, 67, 141, 0.15)',
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
    //   padding: '3px 0px 0px 2px',
      fontSize: '1.2em',
      letterSpacing: '0.2em',
    '&$cssFocused': {
      color: '#f0c740',
    },
  },
  cssFocused: {
    color: '#f0c740',
    
  },
  cssUnderline: {
    color: '#f0c740',
    '&:after': {
      borderBottomColor: '#f0c740',
    },
  },
  cssOutlinedInput: {
      color: '#f0c740',
    '&$cssFocused $notchedOutline': {
      borderColor: '#f0c740 !important',
    },
  },
  cssOutlinedInputComment: {
      color: '#f0c740',
      height: '20vh',
      textAlign: 'top',
    '&$cssFocused $notchedOutline': {
      borderColor: '#f0c740 !important',
    },
  },
  notchedOutline: {
    border: '1px solid #f0c740 !important',
    boxShadow: '2px 2px 10px rgba(229, 128, 207, 0.3)',
    borderColor: '#f0c740',
    borderRadius: '10px',
  },
  sendButton: {
    border: '1px solid rgba(229, 128, 207, 1)',
    padding: '13px',
    width: '25vw',
    margin: '10px 0px 10% 0px',
    borderRadius: '50px',
    background: 'rgba(248, 233, 96, 0.8)',
    boxShadow: '2px 2px 10px rgba(229, 128, 207, 0.3)',
    fontSize: '0.7em',
  },
  sendButtonDiv: {
    alignSelf: 'flex-end',
    paddingRight: '10%',    
    color: 'black',
  },
  input: {
    color: 'purple',
    fontSize: '1.5em',
    letterSpacing: '0.2em',
    background: 'transparent',
    border: 'rgba(229, 128, 207, 0.0)'
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
});

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          contactName: '',
          contactEmail: '',
          contactComment: ''
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        // console.log(constructor)
      }
      onChange(e) {
          this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
       }

       submitForm(e) {
        e.preventDefault();
        const url = '#';
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };
        
        fetch(url, config)
        .then(res => res.json())
          .then(res => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Message sent ${res}!`);
            }
          }).catch(e => {
            console.error(e);
            alert('Thank you!');
          });
        }

        
render () {
    const { classes } = this.props;
    return (
        <div className="contactFormWrapper">
            <div >
                <NavLink className={classes.cross} exact to="/">X</NavLink>
            </div>
          <form onSubmit={this.submitForm}>
              <fieldset className={classes.root}>
                <div className={classes.fieldSet}>
                <div>
                    <h3 className={classes.title}>Say Hello</h3>
                </div>
                <div>
                    <TextField
                        type="text"
                        className={classes.TextField}
                        InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        },
                        }}
                        InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                        },
                        }}
                        label="Name"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    </div>
                    <div>
                        <TextField
                        className={classes.TextField}
                        InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        },
                        }}
                        InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                        },
                        }}
                        label="Email"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                    </div>
                    <div>
                        <TextField
                        className={classes.TextFieldComment}
                        InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        },
                        }}
                        InputProps={{
                        classes: {
                            root: classes.cssOutlinedInputComment,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                        },
                        }}
                        label="Comment"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        onChange={this.onChange}
                        value={this.state.comment}
                    />
                    </div>
                    <div className={classes.sendButtonDiv}>
                        <button className={classes.sendButton}>
                            <input className={classes.input} type="submit" value="Send" />
                        </button>
                    </div>
                    </div>
             </fieldset>
          </form>
          </div>
        )
    }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);