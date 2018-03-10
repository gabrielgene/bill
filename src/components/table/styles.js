import { withStyles } from 'material-ui';
import { green, yellow, red } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: `calc(50% - ${theme.spacing.unit * 6}px)`,
    maxWidth: theme.spacing.unit * 25,
    height: theme.spacing.unit * 25,
    padding: theme.spacing.unit * 2,
    margin: '0 0 8px 8px',
  },
  closed: { backgroundColor: theme.palette.grey[100] },
  open: { backgroundColor: green[500] },
  waiting: { backgroundColor: yellow[500] },
  calling: { backgroundColor: red[500] },
}));
