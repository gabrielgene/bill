import React from 'react';

import classNames from 'classnames';
import TopBar from '~/src/components/topbar';
import BottomBar from '~/src/components/bottom-bar';
import { If } from 'babel-plugin-jsx-control-statements';

import { withIndexStyle } from './styles';

const DefaultLayout = ({ classes, topBarProps, children, bottomBar }) => (
  <div className={classes.root}>
    <TopBar {...topBarProps} />
    <main className={topBarProps.nav ? classNames(classes.main, classes.tab) : classes.main}>
      {children}
    </main>
    <If condition={bottomBar}>
      <BottomBar />
    </If>
  </div >
);

export default withIndexStyle(DefaultLayout);
