import { withStyles } from 'material-ui';
import { red } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: theme.spacing.unit*100,
  },
  sectionName: {
    fontSize: 24,
    color: theme.palette.text.primary,
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  section: {
    padding: 0,
  },
  divider: {
    margin: theme.spacing.unit,
  },
}));

export const withItemStyle = withStyles(theme => ({
  root: {
    display: 'block',
  },
  title: {
    marginBottom: theme.spacing.unit,
  },
  description: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit,
  },
  price: {
    color: red[500],
  },
}));
