import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/ArrowBack';
import { If } from 'babel-plugin-jsx-control-statements';
import { withIndexStyle } from './styles';

const Topbar = ({ classes, title, back }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <If condition={back}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </If>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Topbar);
