import React, { Component } from 'react';
import TableList from '../table-list';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import Button from 'material-ui/Button';
import { withIndexStyle } from './styles';

const VirtualizedSwipeableViews = virtualize(SwipeableViews);

const tableFilters = {
  0: 'ALL',
  1: 'CALLING',
  2: 'WAITING',
};

const SwipeNavigation = ({ classes }) => (
  <div>
    <div className={classes.filterWrapper}>
      <div className={classes.filter}>
        <Button className={classes.button} size="small" variant="raised" color="primary">
          ALL
      </Button>
        <Button className={classes.button} size="small" variant="raised" color="primary">
          CALLING
      </Button>
        <Button className={classes.button} size="small" variant="raised" color="primary">
          WAITING
      </Button>
        <Button className={classes.button} size="small" variant="raised" color="primary">
          OPEN
      </Button>
        <Button className={classes.button} size="small" variant="raised" color="primary">
          CLOSED
      </Button>
      </div>
    </div>
    <VirtualizedSwipeableViews
      slideRenderer={({ index, key }) => (
        <div key={key}>
          <TableList filteredBy={tableFilters[index]} />
        </div>
      )}
    />

  </div>
);

export default withIndexStyle(SwipeNavigation);
