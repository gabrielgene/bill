import React from 'react';
import TableList from '../table-list';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

const VirtualizedSwipeableViews = virtualize(SwipeableViews);

const tableFilters = {
  1: 'CALLING',
  2: 'WAITING',
};

const SwipeNavigation = () => (
  <VirtualizedSwipeableViews
    slideRenderer={({ index, key }) => (
      <div key={key}>
        <TableList filteredBy={tableFilters[index]} />
      </div>
    )}
  />
);

export default SwipeNavigation;
