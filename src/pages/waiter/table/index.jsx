import React, { Component } from 'react';
import classNames from 'classnames';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import autoBind from 'react-autobind';
import DefaultLayout from '~/src/layouts/default';
import { getDataByName, fakeTables } from '~/src/utils/fakeData';

import Orders from './orders';
import Payment from './payment';
import { withIndexStyle } from './styles';

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      value: 0,
      total: 0,
    };
    autoBind(this);
  }

  componentWillMount() {
    const tableCode = this.props.match.params.name;
    const tableData = getDataByName(tableCode, fakeTables);
    let total = this.state.total;
    const buildTotal = (order) => total = total + order.price;
    tableData.orders.filter(o => o.status === 'DELIVERED').forEach(buildTotal);
    this.setState({ total });
  }


  handleTabChange(_, currentTab) {
    this.setState({ currentTab });
  }

  handleSwipeChange(currentTab) {
    this.setState({ currentTab });
  }

  addPayment(value) {
    this.setState({ value: this.state.value + parseFloat(value) });
  }

  render() {
    const { currentTab, value, total } = this.state;
    const { classes, match, theme } = this.props;
    const tableCode = match.params.name;
    const tableData = getDataByName(tableCode, fakeTables);
    const { name } = tableData;

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const topBarNav = (
      <Tabs
        value={currentTab}
        onChange={this.handleTabChange}
        fullWidth
      >
        <Tab label="Pedidos" />
        <Tab label={`R$ ${total} / R$ ${value}`} />
      </Tabs>
    );

    return (
      <DefaultLayout hideBottomBar topBarProps={{ title: name, back: true, navBar: topBarNav }}>
        <SwipeableViews
          index={currentTab}
          onChangeIndex={this.handleSwipeChange}
        >
          <Orders orders={tableData.orders} />
          <Payment addPayment={this.addPayment} disabled={value >= total ? false : true} />
        </SwipeableViews>
        <div className={classes.root}>
          <Zoom
            in={currentTab === 0}
            className={classNames(classes.fab, { [classes.fabActive]: currentTab === 0 })}
            timeout={transitionDuration}
            style={{
              transitionDelay: currentTab === 0 ? transitionDuration.exit : 0,
            }}
            unmountOnExit
          >
            <Button
              className={classes.fab}
              component={Link}
              to={`/mesas/${tableCode}/menu`}
              variant="fab"
              color="primary"
            >
              <Icon>add</Icon>
            </Button>
          </Zoom>
        </div>
      </DefaultLayout>
    );
  }
}

export default withIndexStyle(TablePage);
