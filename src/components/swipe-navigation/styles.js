import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  filterWrapper: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  filter: {
    height: '100%',
    width: '100%',
    overflowX: 'scroll',
    paddingBottom: 10,
    whiteSpace: 'nowrap',
  },
  button: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
  }
}));
