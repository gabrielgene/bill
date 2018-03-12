import { withStyles } from 'material-ui';
import { green, yellow, red, blue, orange } from 'material-ui/colors';

export const withIndexStyle = withStyles((theme) => ({
  button: {
    height: '20vh',
    minHeight: theme.spacing.unit * 12,
  },
  orange: { backgroundColor: orange.A200 },
  red: { backgroundColor: red.A200 },
  yellow: { backgroundColor: yellow.A200 },
  green: { backgroundColor: green.A200 },
  blue: { backgroundColor: blue.A200 },
}));
