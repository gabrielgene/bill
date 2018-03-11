import { withStyles } from 'material-ui';
import { lightGreen, amber, deepOrange, blueGrey } from 'material-ui/colors';

export const withIndexStyle = withStyles({
  idle: { backgroundColor: blueGrey[500] },
  free: { backgroundColor: lightGreen[500] },
  waiting: { backgroundColor: amber[500] },
  calling: { backgroundColor: deepOrange[500] },
});
