import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    overflow: 'auto',
    flexGrow: 1,
  },
});
