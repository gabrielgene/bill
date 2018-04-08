import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import TopBarSearch from './search';
import { withIndexStyle } from './styles';

const TopBar = ({ classes }) => (
  <AppBar>
    <Toolbar>
      <Typography className={classes.logo} variant="title" color="inherit">
        <Link className={classes.link} to="/">
          Bill
        </Link>
      </Typography>
      <div className={classes.search}>
        <TopBarSearch />
      </div>
    </Toolbar>
  </AppBar>
);

export default withIndexStyle(TopBar);
