import { withStyles } from 'material-ui';

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
  tabTypography: {
    padding: theme.spacing.unit * 3,
  },
}), { withTheme: true });
