import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
    breakpoints: {
      // Define custom breakpoint values.
      // These will apply to Material-UI components that use responsive
      // breakpoints, such as `Grid` and `Hidden`. You can also use the
      // theme breakpoint functions `up`, `down`, and `between` to create
      // media queries for these breakpoints
      values: {
        xs: 0,
        sm: 450,
        md: 600,
        lg: 900,
        xl: 1200
      }
    }
  });  

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();