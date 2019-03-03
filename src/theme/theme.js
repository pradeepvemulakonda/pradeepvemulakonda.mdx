import { createMuiTheme } from '@material-ui/core/styles';
import TEAL from '@material-ui/core/colors/teal';
import PINK from '@material-ui/core/colors/pink';

export const Theme = {
  pbg: '#1B5E20',
  pfg: '#FFFFFF',
  sbg: '#AF2366',
  sfg: '#FFFFFF',
  pb: '#fafbfa'
};

export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: TEAL[50],
      main: TEAL[700],
      dark: TEAL[900],
      contrastText: TEAL.contrastText
    },
    secondary: {
      light: PINK[50],
      main: PINK[500],
      dark: PINK[900],
      contrastText: PINK.contrastText
    }
  }
});
