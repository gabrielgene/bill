import { withStyles } from 'material-ui';
import { green, yellow, red, blue, orange } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
  },
  button: {
    height: '20vh',
  },
  0: {
    backgroundColor: orange.A200,
  },
  1: {
    backgroundColor: red.A200,
  },
  2: {
    backgroundColor: yellow.A200,
  },
  3: {
    backgroundColor: green.A200,
  },
  4: {
    backgroundColor: blue.A200,
  },
}));
