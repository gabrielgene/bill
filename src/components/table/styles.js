import { withStyles } from 'material-ui';
import { lightGreen, amber, deepOrange, blueGrey } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    width: `calc(100% - 3px)`,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    display: 'flex',
    height: theme.spacing.unit * 10,
    alignItems: 'center',
  },
  status: {
    width: 3,
    height: 64,
  },
  listItem: {
    width: '100%',
  },
  closed: { borderLeft: `3px solid ${blueGrey[500]}` },
  open: { borderLeft: `3px solid ${lightGreen[500]}` },
  waiting: { borderLeft: `3px solid ${amber[500]}` },
  calling: { borderLeft: `3px solid ${deepOrange[500]}` },
  closedColor: { color: blueGrey[500] },
  openColor: { color: lightGreen[500] },
  waitingColor: { color: amber[500] },
  callingColor: { color: deepOrange[500] },
}));
