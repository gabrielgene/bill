import { withStyles } from 'material-ui';
import orange from 'material-ui/colors/orange';
import brown from 'material-ui/colors/brown';
import green from 'material-ui/colors/green';
import grey from 'material-ui/colors/grey';

export const withIndexStyle = withStyles(theme => ({
  app: {
    backgroundColor: orange[400],
    color: brown[500],
    display: 'flex',
  },
  bar: {
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    width: theme.spacing.unit*9,
  },
  titleImage: {
    height: theme.spacing.unit*6,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '88vh',
  },
  subheader: {
    backgroundColor: grey[100],
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  img: {
    height: theme.spacing.unit*8,
  },
  value: {
    color: green[500],
    paddingRight: theme.spacing.unit,
  },
  dash: {
    textDecoration: 'line-through',
  },
}));
