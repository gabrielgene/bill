import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[100],
  },

  card: {
    width: '100%',
    maxWidth: theme.spacing.unit * 128,
    height: theme.spacing.unit * 35,
  },

  cardMedia: {
    height: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    root: {
      padding: 0,
    },

    card: {
      height: theme.spacing.unit * 20,
    },
  },
}));
