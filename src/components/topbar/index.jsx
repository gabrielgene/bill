import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { withIndexStyle } from './styles';

const TopBar = ({ classes }) => (
  <AppBar>
    <Toolbar>
      <Typography className={classes.logo} variant="title" color="primary">Bill</Typography>
    </Toolbar>
  </AppBar>
);

export default withIndexStyle(TopBar);
