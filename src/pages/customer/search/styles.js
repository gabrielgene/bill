import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  category: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.grey[700],
  },
  iconSearch: {
    marginRight: theme.spacing.unit,
  },
  searchInfo: {
    display: 'flex',
    color: theme.palette.grey[700],
    marginBottom: theme.spacing.unit * 3,
  },
}));
