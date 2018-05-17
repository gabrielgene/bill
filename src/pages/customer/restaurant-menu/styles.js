import { withStyles } from 'material-ui';

import orange from 'material-ui/colors/orange';
import brown from 'material-ui/colors/brown';
import green from 'material-ui/colors/green';
import grey from 'material-ui/colors/grey';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  appbar: {
    backgroundColor: orange[400],
    color: brown[500],
    display: 'flex',
  },

  toolbar: {
    justifyContent: 'center',
  },

  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
    width: theme.spacing.unit * 17,
  },
  toolbarTitleImage: {
    height: theme.spacing.unit * 6,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  listSectionSubheader: {
    backgroundColor: grey[100],
  },
  listSectionUl: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export const withMenuItemStyles = withStyles(theme => ({
  img: {
    height: theme.spacing.unit * 8,
    border: '1px solid #cccccc',
  },
  dash: {
    textDecoration: 'line-through',
  },

  value: {
    color: green[500],
    paddingRight: theme.spacing.unit,
  },
}));
