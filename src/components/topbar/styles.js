import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  logo: {
    marginRight: theme.spacing.unit * 2,
  },

  search: {
    width: '100%',
    margin: '0 auto',
    maxWidth: theme.spacing.unit * 80,
  },
}));

export const withSearchStyle = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: '3px',
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit / 2,
    },
  },
}));
