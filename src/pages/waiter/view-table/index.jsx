import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import TopBar from '~/src/components/topbar';

import { withIndexStyle } from './style';


const ViewTable = ({ currentTab, handleTabChange, classes, match }) => {
  // so far the buttons are really similar but I think that can/will change
  const fabs = [
    { link: `/link/para/menu` },
    { link: 'link/para/pagamentos' },
  ];

  return (
    <div>
      <TopBar title={match.params.tableName} />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Pagamentos" />
            <Tab label="Pedidos" />
          </Tabs>
        </AppBar>
        <If condition={currentTab === 0}>
          <Typography component="div" className={classes.tabTypography}>
            Pagamentos
          </Typography>
        </If>
        <If condition={currentTab === 1}>
          <Typography component="div" className={classes.tabTypography}>
            Pedidos
          </Typography>
        </If>
        <For each="fab" of={fabs} index="idx">
          <Zoom
            key={idx}
            in={currentTab === idx}
            className={classNames(currentTab === idx && classes.fabActive, classes.fab)}
            unmountOnExit
          >
            <Button
              component={Link}
              to={fab.link}
              variant="fab"
            >
              <Icon>add</Icon>
            </Button>
          </Zoom>
        </For>
      </div>
    </div>
  );
};

export default compose(
  withStateHandlers(
    { currentTab: 0 },
    {
      handleTabChange: () => (_, currentTab)  => ({
        currentTab,
      }),
    }
  ),
  withIndexStyle,
)(ViewTable);
