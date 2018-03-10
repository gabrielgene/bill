import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import Button from 'material-ui/Button';
import autoBind from 'auto-bind';
import TableList from '../table-list';
import { withIndexStyle } from './styles';

const VirtualizedSwipeableViews = virtualize(SwipeableViews);

const tableIndex = {
  ALL: 0,
  CALLING: 1,
  WAITING: 2,
  OPEN: 3,
  CLOSED: 4,
};

function slideRenderer(params) {
  const { index, key } = params;

  switch (mod(index, 5)) {
    case 0:
      return (
        <div key={key}>
          <TableList filteredBy='ALL' />
        </div>
      );

    case 1:
      return (
        <div key={key}>
          <TableList filteredBy='CALLING' />
        </div>
      );

    case 2:
      return (
        <div key={key}>
          <TableList filteredBy='WAITING' />
        </div>
      );

    case 3:
      return (
        <div key={key}>
          <TableList filteredBy='OPEN' />
        </div>
      );

    case 4:
      return (
        <div key={key}>
          <TableList filteredBy='CLOSED' />
        </div>
      );

    default:
      return null;
  }
}


class SwipeNavigation extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      index: 0,
      filter: 'ALL',
    };
  }

  handleChangeIndex(index) {
    this.setState({ index });
  }

  filterAll() {
    return this.handleClick('ALL');
  }

  filterCalling() {
    return this.handleClick('CALLING');
  }

  filterWaiting() {
    return this.handleClick('WAITING');
  }

  filterOpen() {
    return this.handleClick('OPEN');
  }

  filterClosed() {
    return this.handleClick('CLOSED');
  }

  handleClick(value) {
    this.setState({ index: tableIndex[value], filter: value });
  }

  render() {
    const { classes } = this.props;
    const { index, filter } = this.state;
    return (
      <div>
        <div className={classes.filterWrapper}>
          <div className={classes.filter}>
            <Button
              className={classes.button}
              size="small"
              variant="raised"
              color={filter === 'ALL' ? "secondary" : "primary"}
              onClick={this.filterAll}
            >
              ALL
            </Button>
            <Button
              className={classes.button}
              size="small"
              variant="raised"
              color={filter === 'CALLING' ? "secondary" : "primary"}
              onClick={this.filterCalling}
            >
              CALLING
            </Button>
            <Button
              className={classes.button}
              size="small"
              variant="raised"
              color={filter === 'WAITING' ? "secondary" : "primary"}
              onClick={this.filterWaiting}
            >
              WAITING
            </Button>
            <Button
              className={classes.button}
              size="small"
              variant="raised"
              color={filter === 'OPEN' ? "secondary" : "primary"}
              onClick={this.filterOpen}
            >
              OPEN
            </Button>
            <Button
              className={classes.button}
              size="small"
              variant="raised"
              color={filter === 'CLOSED' ? "secondary" : "primary"}
              onClick={this.filterClosed}
            >
              CLOSED
            </Button>
          </div>
        </div>
        <VirtualizedSwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          slideRenderer={slideRenderer}
        />
      </div>
    );
  }
}

export default withIndexStyle(SwipeNavigation);
