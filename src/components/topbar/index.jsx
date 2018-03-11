import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withState } from 'recompose';

import MenuIcon from 'material-ui-icons/ArrowBack';
import FilterListIcon from 'material-ui-icons/FilterList';

import FlexSpacer from '~/src/components/flex-spacer';

const TopBar = ({ title, back, action }) => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <If condition={back}>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </If>

        <Typography variant="title" color="inherit">
          {title}
        </Typography>

        <FlexSpacer />

        {action}
      </Toolbar>
    </AppBar>
  </div>
);

export default TopBar;
