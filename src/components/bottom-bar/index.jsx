import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import ViewListIcon from 'material-ui-icons/ViewList';
import PriorityHighIcon from 'material-ui-icons/PriorityHigh';

import { withIndexClasses } from './styles';

const SimpleBottomNavigation = ({ history, classes }) => (
  <BottomNavigation
    value={history.location.pathname}
    className={classes.root}
    showLabels
  >
    <BottomNavigationAction
      label="Mesas"
      value="/"
      icon={<HomeIcon />}
      onClick={() => history.push('/')}
    />
    <BottomNavigationAction
      label="Pedidos"
      value="/todos-pedidos"
      icon={<ViewListIcon />}
      onClick={() => history.push('/todos-pedidos')}
    />
    <BottomNavigationAction
      label="Notificações"
      value="/notificacoes"
      icon={<PriorityHighIcon />}
      onClick={() => history.push('/notificacoes')}
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
