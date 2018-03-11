import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import Badge from 'material-ui/Badge';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import ViewListIcon from 'material-ui-icons/ViewList';
import PriorityHighIcon from 'material-ui-icons/PriorityHigh';

import { withIndexClasses } from './styles';

const routes = {
  home: '/',
  notification: '/notificacoes',
  pendingOrders: '/pedidos-pendentes',
};


const SimpleBottomNavigation = ({ history, classes }) => (
  <BottomNavigation
    value={history.location.pathname}
    className={classes.root}
    showLabels
  >
    <BottomNavigationAction
      label="Mesas"
      value={routes.home}
      component={Link}
      to={routes.home}
      icon={<HomeIcon />}
    />
    <BottomNavigationAction
      label="Pedidos"
      value={routes.pendingOrders}
      component={Link}
      icon={<ViewListIcon />}
      to={routes.pendingOrders}
    />
    <BottomNavigationAction
      label="Notificações"
      value={routes.notification}
      component={Link}
      icon={<Badge color="secondary" badgeContent={7}><PriorityHighIcon /></Badge>}
      to={routes.notification}
    />
  </BottomNavigation>
);

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withIndexClasses,
)(SimpleBottomNavigation);
