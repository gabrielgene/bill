import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit*2,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}));
