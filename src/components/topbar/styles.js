import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}));
