import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import FlexSpacer from '~/src/components/flex-spacer';

const TopBar = ({ title, action }) => (
  <AppBar>
    <Toolbar>
      <Typography variant="title" color="inherit">{title}</Typography>
      <FlexSpacer />
      {action}
    </Toolbar>
  </AppBar>
);

export default TopBar;
