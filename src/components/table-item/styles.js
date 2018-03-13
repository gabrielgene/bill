import { withStyles } from 'material-ui';
import { lightGreen, amber, deepOrange, blueGrey } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: { borderLeft: '3px solid' },
  idle: { color: blueGrey[500] },
  free: { color: lightGreen[500] },
  waiting: { color: amber[500] },
  calling: { color: deepOrange[500] },
  idleAvatar: { backgroundColor: blueGrey[500] },
  freeAvatar: { backgroundColor: lightGreen[500] },
  waitingAvatar: { backgroundColor: amber[500] },
  callingAvatar: { backgroundColor: deepOrange[500] },
}));
