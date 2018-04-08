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
  sectionLabel: {
    fontSize: 24,
    color: theme.palette.text.primary,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  product: {
    display: 'block',
  },
  productTitle: {
    marginBottom: theme.spacing.unit,
  },
  productDescription: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit,
  },
  productPrice: {
    color: red[500],
  },
  divider: {
    margin: theme.spacing.unit,
  }
}));
