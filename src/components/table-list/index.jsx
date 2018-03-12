import React from 'react';
import List from 'material-ui/List';

import Table from '~/src/components/table';
import { fakeTables } from '~/src/fakeData';

import { withIndexStyle } from './styles';

// REMIND - Remove filter, fetch the data normalized

const TableList = ({ classes, filteredBy }) => (
  <List className={classes.root}>
    {
      (filteredBy ? fakeTables.filter(({ status }) => status === filteredBy) : fakeTables)
        .map(props => (<Table key={props.name} {...props} />))
    }
  </List>
);

export default withIndexStyle(TableList);
