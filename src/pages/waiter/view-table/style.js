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
<<<<<<< HEAD
  tabTypography: {
    padding: theme.spacing.unit * 3,
  },
  fabActive: {
    transitionDelay: theme.transitions.duration.leavingScreen
=======
  transitionDuration: {
    exit: theme.transitions.duration.leavingScreen,
>>>>>>> e33050dbba400e66473cab5f55b67e0b31486f47
  },
}));
