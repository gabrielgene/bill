import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[100],
  },
  card: {
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
    maxWidth: theme.spacing.unit * 128,
    height: theme.spacing.unit * 35,
  },
  cardMedia: {
    height: '100%',
  },
}));
