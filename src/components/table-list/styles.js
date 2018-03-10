import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    overflow: 'auto',
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
