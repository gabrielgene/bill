import React, { Component } from 'react';
import TableList from '../table-list';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';


const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function slideRenderer(params) {
  const { index, key } = params;

  switch (mod(index, 3)) {
    case 0:
      return (
        <div key={key}>
          <TableList />
        </div>
      );

    case 1:
      return (
        <div key={key}>
          <TableList filteredBy="CALLING" />
        </div>
      );

    case 2:
      return (
        <div key={key}>
          <TableList filteredBy="WAITING" />
        </div>
      );

    default:
      return null;
  }
}


class SwipeNavigation extends Component {

  render() {
    return (
      <SwipeableViews resistance>
        <div>
          <TableList />
        </div>
        <div>
          <TableList filteredBy="CALLING" />
        </div>
        <div>
          <TableList filteredBy="WAITING" />
        </div>
        <div>
          <TableList filteredBy="OPEN" />
        </div>
        <div>
          <TableList filteredBy="CLOSED" />
        </div>
      </SwipeableViews>
    )
  }
}

function DemoSimple() {
  return (
    <VirtualizeSwipeableViews slideRenderer={slideRenderer} />
  );
}

export default DemoSimple;
