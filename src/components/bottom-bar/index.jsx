import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';

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

const { home, notification, pendingOrders } = routes;

const SimpleBottomNavigation = ({ history, classes }) => (
  <BottomNavigation
    value={history.location.pathname}
    className={classes.root}
    showLabels
  >
    <BottomNavigationAction
      label="Mesas"
      value={home}
      component={Link}
      to={home}
      icon={<HomeIcon />}
    />
    <BottomNavigationAction
      label="Pedidos"
      value={pendingOrders}
      component={Link}
      icon={<ViewListIcon />}
      to={pendingOrders}
    />
    <BottomNavigationAction
      label="Notificações"
      value={notification}
      component={Link}
      icon={<PriorityHighIcon />}
      to={notification}
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
