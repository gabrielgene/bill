import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    overflow: 'auto',
    height: `calc(100vh - ${theme.spacing.unit * 20}px)`, // TODO use correct height vars
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
