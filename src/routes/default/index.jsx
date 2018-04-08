import React from 'react';
import { Route } from 'react-router-dom';

import TopBar from '~/src/components/topbar';

import { withIndexStyle } from './styles';

const DefaultRoute = ({ classes, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className={classes.root}>
        <TopBar />
        <main className={classes.main}>
          <Component {...matchProps} />
        </main>
      </div>
    )}
  />
);

export default withIndexStyle(DefaultRoute);
