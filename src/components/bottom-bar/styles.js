import { withStyles } from 'material-ui';

export const withIndexClasses = withStyles(theme => ({
  root: {
    width: '100%',
    flex: `0 0 ${theme.spacing.unit * 7}px`,
  },
}));
