import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import TopBar from '~/src/components/topbar';

import { withIndexStyle } from './style';


const TabContainer = ({ children }) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

const ViewTable = ({ currentTab, handleTabChange, classes, match }) => {
  // so far the buttons are really similar but I think that can/will change
  const fabs = [
    {
      link: `/link/para/menu`,
      className: classes.fab,
    },
    {
      link: 'link/para/pagamentos',
      className: classes.fab,
    },
  ];

  return (
    <div>
      <TopBar title={match.params.tableName} />
      <div className={classes.root}>
        <AppBar position="static" color="default" >
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
          <TabContainer>Pagamentos</TabContainer>
        </If>
        <If condition={currentTab === 1}>
          <TabContainer>Pedidos</TabContainer>
        </If>
        <For each="fab" of={fabs} index="idx">
          <Zoom
            key={fab.color}
            in={currentTab === idx}
            style={{
              transitionDelay: currentTab === idx ? classes.transitionDuration.exit : 0,
            }}
            unmountOnExit
          >
            <Button
              component={Link}
              to={fab.link}
              variant="fab"
              className={classes.fab}
            >
              <Icon>
                add
              </Icon>
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
      handleTabChange: () => (e, value)  => ({
        currentTab: value,
      }),
    }
  ),
  withIndexStyle,
)(ViewTable);
