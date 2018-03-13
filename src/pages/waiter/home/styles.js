import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterNavWrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  filterNav: {
    width: '100%',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    padding: theme.spacing.unit,
  },
  filterNavItem: {
    marginRight: theme.spacing.unit,
    '&:last-child': {
      marginRight: 0,
    },
  },
  list: {
    flexGrow: 1,
  },
}));
