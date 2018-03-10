import { withStyles } from 'material-ui';
import { green, yellow, red } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
