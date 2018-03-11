import { withStyles } from 'material-ui';
import { lightGreen, amber, deepOrange, blueGrey } from 'material-ui/colors';

export const withIndexStyle = withStyles({
  root: {
    witdh: `calc(100% - 3px)`,
  },
  idle: { borderLeft: `3px solid ${blueGrey[500]}` },
  free: { borderLeft: `3px solid ${lightGreen[500]}` },
  waiting: { borderLeft: `3px solid ${amber[500]}` },
  calling: { borderLeft: `3px solid ${deepOrange[500]}` },
  idleAvatar: { backgroundColor: blueGrey[500] },
  freeAvatar: { backgroundColor: lightGreen[500] },
  waitingAvatar: { backgroundColor: amber[500] },
  callingAvatar: { backgroundColor: deepOrange[500] },
});
