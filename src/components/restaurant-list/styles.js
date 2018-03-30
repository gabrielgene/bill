import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  gridList: {
    flexWrap: 'nowrap',
  },
  gridListTile: {
    maxWidth: theme.spacing.unit * 25,
  },

}));
