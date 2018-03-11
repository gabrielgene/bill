import React from 'react';
import List from 'material-ui/List';

import Table from '~/src/components/table';

import { withIndexStyle } from './styles';

const fakeTables = [
  { name: 'Mesa 01', status: 'IDLE' },
  { name: 'Mesa 02', status: 'FREE' },
  { name: 'Mesa 03', status: 'WAITING' },
  { name: 'Mesa 04', status: 'CALLING' },
  { name: 'Mesa 05', status: 'FREE' },
  { name: 'Mesa 06', status: 'IDLE' },
  { name: 'Mesa 07', status: 'CALLING' },
  { name: 'Mesa 08', status: 'FREE' },
  { name: 'Mesa 09', status: 'IDLE' },
  { name: 'Mesa 10', status: 'WAITING' },
  { name: 'Mesa 12', status: 'CALLING' },
  { name: 'Mesa 13', status: 'FREE' },
  { name: 'Mesa 14', status: 'CALLING' },
  { name: 'Mesa 15', status: 'IDLE' },
  { name: 'Mesa 16', status: 'CALLING' },
];

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
