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
  peding: { color: amber[500] },
  delivery: { color: lightGreen[500] },
  orders: {
    padding: 0,
    backgroundColor: theme.palette.common.white,
  },
}), { withTheme: true });
