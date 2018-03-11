import { withStyles } from 'material-ui';
import { lightGreen, amber, deepOrange, blueGrey } from 'material-ui/colors';

export const withIndexStyle = withStyles({
  root: {
    witdh: `calc(100% - 3px)`,
  },
  idleBorder: { borderLeft: `3px solid ${blueGrey[500]}` },
  freeBorder: { borderLeft: `3px solid ${lightGreen[500]}` },
  waitingBorder: { borderLeft: `3px solid ${amber[500]}` },
  callingBorder: { borderLeft: `3px solid ${deepOrange[500]}` },
  idle: { backgroundColor: blueGrey[500] },
  free: { backgroundColor: lightGreen[500] },
  waiting: { backgroundColor: amber[500] },
  calling: { backgroundColor: deepOrange[500] },
});
