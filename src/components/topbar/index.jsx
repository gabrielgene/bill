import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import MenuIcon from 'material-ui-icons/ArrowBack';
import FilterListIcon from 'material-ui-icons/FilterList';

import { If } from 'babel-plugin-jsx-control-statements';
import autoBind from 'auto-bind';

import { withIndexStyle } from './styles';

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    autoBind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  filterAll() {
    this.props.filter('ALL');
    this.handleClose();
  }

  filterCalling() {
    this.props.filter('CALLING');
    this.handleClose();
  }

  filterWaiting() {
    this.props.filter('WAITING');
    this.handleClose();
  }

  filterOpen() {
    this.props.filter('OPEN');
    this.handleClose();
  }

  filterClosed() {
    this.props.filter('CLOSED');
    this.handleClose();
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, title, filtered } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <If condition={false}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </If>

            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>

            <If condition={filtered}>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <FilterListIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.filterAll}>Todas</MenuItem>
                  <MenuItem onClick={this.filterCalling}>Chamando</MenuItem>
                  <MenuItem onClick={this.filterWaiting}>Aguardando</MenuItem>
                  <MenuItem onClick={this.filterOpen}>Abertas</MenuItem>
                  <MenuItem onClick={this.filterClosed}>Fechadas</MenuItem>
                </Menu>
              </div>
            </If>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(MenuAppBar);
