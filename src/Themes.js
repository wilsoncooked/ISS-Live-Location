import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';


const Themes  =  createMuiTheme({
  palette: {
    primary: amber,
    secondary: pink,
  },
});

export default Themes;
