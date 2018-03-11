import { withStyles } from 'material-ui';
import { red } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    backgroundColor: red.A400,
  },
  tabTypography: {
    padding: theme.spacing.unit * 3,
  },
  fabActive: {
    transitionDelay: theme.transitions.duration.leavingScreen,
  },
}));
