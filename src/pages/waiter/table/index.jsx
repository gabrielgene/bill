import React, { Component } from 'react';
import classNames from 'classnames';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import autoBind from 'auto-bind';
import DefaultLayout from '~/src/layouts/default';
import { getDataByName, fakeTables } from '~/src/fakeData';

import { withIndexStyle } from './style';
import Orders from './orders';

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    autoBind(this);
  }


  handleTabChange(_, currentTab) {
    this.setState({ currentTab });
  }

  handleSwipeChange(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    const { currentTab } = this.state;
    const { classes, match, theme } = this.props;
    const tableCode = match.params.name;
    const tableData = getDataByName(tableCode, fakeTables);
    const { name } = tableData;

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        link: `/mesas/${tableCode}/menu`,
        className: classes.fab,
        icon: 'add',
        color: 'primary',
      },
      {
        link: `/link/para/menu`,
        className: classes.fab,
        icon: 'payment',
        color: 'primary',
      },
    ];

    const topBarNav = (
      <Tabs
        value={currentTab}
        onChange={this.handleTabChange}
        fullWidth
      >
        <Tab label="Pedidos" />
        <Tab label="R$ 40,00" />
      </Tabs>
    );

    return (
      <DefaultLayout hideBottomBar topBarProps={{ title: name, back: true, nav: topBarNav }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={currentTab}
          onChangeIndex={this.handleSwipeChange}
        >
          <Orders orders={tableData.orders} />
          <Typography component="div" dir={theme.direction} className={classes.tabTypography}>
            Pagamentos
          </Typography>
        </SwipeableViews>
        <div className={classes.root}>
          <For each="fab" of={fabs} index="idx">
            <Zoom
              key={idx}
              in={currentTab === idx}
              className={classNames(currentTab === idx && classes.fabActive, classes.fab)}
              timeout={transitionDuration}
              style={{
                transitionDelay: currentTab === idx ? transitionDuration.exit : 0,
              }}
              unmountOnExit
            >
              <Button
                className={fab.className}
                component={Link}
                to={fab.link}
                variant="fab"
                color={fab.color}
              >
                <Icon>{fab.icon}</Icon>
              </Button>
            </Zoom>
          </For>
        </div>
      </DefaultLayout>
    );
  }
}

export default withIndexStyle(TablePage);
