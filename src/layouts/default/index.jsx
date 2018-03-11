import React from 'react';

import TopBar from '~/src/components/topbar';
import BottomBar from '~/src/components/bottom-bar';

import { withIndexStyle } from './styles';

const DefaultLayout = ({ classes, topBarProps, children, hideBottomBar }) => (
  <div className={classes.root}>
    <TopBar {...topBarProps} />
    <main className={classes.main}>{children}</main>
    <If condition={!hideBottomBar}>
      <BottomBar />
    </If>
  </div>
);

export default withIndexStyle(DefaultLayout);
