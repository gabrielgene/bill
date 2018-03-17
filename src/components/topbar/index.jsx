import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { Icon } from 'material-ui';
import { withRouter } from 'react-router-dom';

import FlexSpacer from '~/src/components/flex-spacer';

const TopBar = ({ title, action, history, back, navBar }) => (
  <AppBar>
    <Toolbar>
      <If condition={back}>
        <IconButton
          color="inherit"
          aria-label="ArrowBack"
          onClick={() => history.goBack()}
        >
          <Icon>arrow_back</Icon>
        </IconButton>
      </If>
      <Typography variant="title" color="inherit">{title}</Typography>
      <FlexSpacer />
      {action}
    </Toolbar>
    {navBar}
  </AppBar>
);

export default withRouter(TopBar);
