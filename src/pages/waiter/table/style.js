import { withStyles } from 'material-ui';
import { lightGreen, amber } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    color: theme.palette.common.white,
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 2,
  },
  tabTypography: { padding: theme.spacing.unit * 3 },
  pending: { color: amber[500] },
  delivery: { color: lightGreen[500] },
  orders: {
    marginBottom: theme.spacing.unit * 10,
    backgroundColor: theme.palette.common.white,
  },
  item: { borderLeft: '3px solid' },
  deliveryAvatar: { backgroundColor: lightGreen[500] },
  pendingAvatar: { backgroundColor: amber[500] },
}), { withTheme: true });
