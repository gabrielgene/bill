import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
  },
  category: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  restaurants: {
    marginTop: theme.spacing.unit * 3,
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
  card: {
    width: theme.spacing.unit * 36,
    height: theme.spacing.unit * 28,
    marginRight: theme.spacing.unit,
    cursor: 'pointer',
  },
  title: {
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
  },
  media: {
    width: '100%',
    height: theme.spacing.unit * 15,
  },
  infoWrapper: {
    padding: theme.spacing.unit,
  },
  info: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: 18,
    marginRight: theme.spacing.unit,
  },
}));
