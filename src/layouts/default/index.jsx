import React from 'react';

import classNames from 'classnames';
import TopBar from '~/src/components/topbar';
import BottomBar from '~/src/components/bottom-bar';
import { If } from 'babel-plugin-jsx-control-statements';

import { withIndexStyle } from './styles';

const DefaultLayout = ({ classes, topBarProps, children, hideBottomBar }) => (
  <div className={classes.root}>
    <TopBar {...topBarProps} />
    <main className={classNames(classes.main, { [classes.tab]: topBarProps.navBar })}>
      {children}
    </main>
    <If condition={!hideBottomBar}>
      <BottomBar />
    </If>
  </div>
);

export default withIndexStyle(DefaultLayout);
