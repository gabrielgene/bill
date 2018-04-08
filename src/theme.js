import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import grey from 'material-ui/colors/grey';

export const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: grey[50],
        color: red[500],
      },
    },
  },
});

