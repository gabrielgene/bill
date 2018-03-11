import React from 'react';

import TopBar from '~/src/components/topbar';
import BottomBar from '~/src/components/bottom-bar';

import { withIndexStyle } from './styles';

const DefaultLayout = ({ classes, topbarProps, children }) => (
  <div className={classes.root}>
    <TopBar {...topbarProps} />
    <main className={classes.main}>{children}</main>
    <BottomBar />
  </div>
);

export default withIndexStyle(DefaultLayout);
