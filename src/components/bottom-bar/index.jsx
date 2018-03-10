import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import ViewListIcon from 'material-ui-icons/ViewList';
import PriorityHighIcon from 'material-ui-icons/PriorityHigh';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    const { pathname } = this.props.history.location;
    if (pathname === '/') {
      this.setState({ value: 0 });
    } else if (pathname === '/todos-pedidos') {
      this.setState({ value: 1 });
    } else {
      this.setState({ value: 2 });
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Mesas"
          icon={<HomeIcon />}
          onClick={() => this.props.history.push('/')}
        />
        <BottomNavigationAction
          label="Pedidos"
          icon={<ViewListIcon />}
          onClick={() => this.props.history.push('/todos-pedidos')}
        />
        <BottomNavigationAction
          label="Notificações"
          icon={<PriorityHighIcon />}
          onClick={() => this.props.history.push('/notificacoes')}
        />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleBottomNavigation));
