import React from 'react';

import TopBar from '~/src/components/topbar';
import BottomBar from '~/src/components/bottom-bar';

const DefaultLayout = ({ topbarProps, children }) => (
  <div>
    <TopBar {...topbarProps} />
    <main>{children}</main>
    <BottomBar />
  </div>
);

export default DefaultLayout;
